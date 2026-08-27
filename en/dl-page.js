function getStrTimeStamp(isoDate) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let pm_am = ['A.M.', 'P.M.']
    let d = new Date(isoDate);
    return `${months[d.getMonth()]} ${d.getDate()}${d.getDate()%10==1 ? "st" : d.getDate()%10==2 ? "nd" : d.getDate()%10==3 ? "rd" : "th"}, ${d.getFullYear()} at ${d.getHours()%12}:${d.getMinutes() < 10 ? "0" : ""}${d.getMinutes()} ${pm_am[d.getHours()<12? 0: 1]}`;
}

function getFile() {
    fetch("https://gist.githubusercontent.com/keatsoo/82b307863b2d798b585f5dfe8f714674/raw")
        .then((res) => {
            return res.json();
        }).then((data) => {
            document.getElementById("percentage-counter").innerHTML = `${data.percentage < 10 ? "0" : ""}${data.percentage}%`;
            document.getElementById("percentage-date").innerHTML = `Last updated on : ${getStrTimeStamp(data.isoDate)}`;

            //console.log(data.extra_data.type)
            if(!(data.extra_data.type) || !(data.extra_data.en.title) || !(data.extra_data.en.text)) {
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

                if (data.extra_data.en.image_base64) {
                    document.getElementById("error-img").setAttribute("src", `data:image/png;base64,${data.extra_data.en.image_base64}`);
                }

                document.getElementById("error-title").innerHTML = data.extra_data.en.title;
                document.getElementById("error-content").innerHTML = data.extra_data.en.text;
            }
        });
}

getFile()
