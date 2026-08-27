function getStrTimeStamp(isoDate) {
    let months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونية', 'يولية', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    let pm_am = ['صباحًا', 'مساءً'];
    let d = new Date(isoDate);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} الساعة ${d.getHours()%12}:${d.getMinutes() < 10 ? "0" : ""}${d.getMinutes()} ${pm_am[d.getHours()<12? 0: 1]}`;
}

function getFile() {
    fetch("https://gist.githubusercontent.com/keatsoo/82b307863b2d798b585f5dfe8f714674/raw")
        .then((res) => {
            return res.json();
        }).then((data) => {
            document.getElementById("percentage-counter").innerHTML = `${data.percentage < 10 ? "0" : ""}${data.percentage}٪`;
            document.getElementById("percentage-date").innerHTML = `آخر تحديث في : ${getStrTimeStamp(data.isoDate)}`;

            //console.log(data.extra_data.type)
            if(!(data.extra_data.type) || !(data.extra_data.ar.title) || !(data.extra_data.ar.text)) {
                document.getElementById("error-container").style.display = "none";
            } else {
                switch (data.extra_data.type) {
                    case "error":
                        document.querySelector(":root").style.setProperty("--error-bg-color", "#e10c00");
                        break;

                    case "info":
                        document.querySelector(":root").style.setProperty("--error-bg-color", "#0022CC");
                        break;

                    case "good_news":
                    document.querySelector(":root").style.setProperty("--error-bg-color", "#00CC22");
                    break;
                
                    default:
                        document.getElementById("error-container").style.display = "none";
                        break;
                }

                if (data.extra_data.ar.image_base64) {
                    document.getElementById("error-img").setAttribute("src", `data:image/png;base64,${data.extra_data.ar.image_base64}`);
                }

                document.getElementById("error-title").innerHTML = data.extra_data.ar.title;
                document.getElementById("error-content").innerHTML = data.extra_data.ar.text;
            }
        });
}

getFile()
