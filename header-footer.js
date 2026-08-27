let footer = `
<div id="footer-div">
    <p id="footer-socials">
        <a href="https://discord.gg/hUV8kxXz3w"><img class="social-img"
                src="../img/immutable/discord-logo-white.png" alt="Discord"></a>
        <a href="https://twitter.com/ArabicOmori"><img class="social-img"
                src="../img/immutable/twitter_logo.svg"
                style="filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(98deg) brightness(104%) contrast(101%);"
                alt="Twitter"></a>
    </p>
    <p class="disclaimer-text">كل العلامات التجارية وأسماء الأشخاص، والمواضع، والأشياء موجودين في هذا الموقع
        لمالكه الشرعي (OMOCAT, LLC). هذه الترجمة غير رسمية، وغير ربحية، لأننا لسنا منتسبين مع (OMOCAT, LLC).
        إذا أراد صاحب الملكية الفكرية لمالكة OMORI (أوموري) أن يتواصل معنا، ها هو العنوان البريد الإلكتروني
        الخاص بالفريق: <a href="mailto:omori.arabic@gmail.com">omori.arabic@gmail.com</a></p>
    <p class="disclaimer-text">All trademarks, character's names, places, or objects belong to their
        rightful owner (OMOCAT, LLC). This translation is completely non-official and non-profit as we are
        not associated in any way to OMOCAT, LLC. If the owner of the intellectual property of the brand
        OMORI wants to contact us, here is the team's e-mail address: <a
            href="mailto:omori.arabic@gmail.com">omori.arabic@gmail.com</a></p>
    <p class="disclaimer-text">Website made by kitsou with help from MAZ.</p>
</div>
`

document.getElementById("footer-container").innerHTML = footer

let header_ar = `
<div id="navbar-div">
    <ol id="navbar-ol">
        <li class="navbar-li"><a href="index" class="navbar-link">الرئيسية</a></li>
        <li class="navbar-li"><a href="team" class="navbar-link">المترجمين</a></li>
        <li class="navbar-li"><a href="download" class="navbar-link">التحميل</a></li>
        <li class="navbar-li"><a href="faq" class="navbar-link">الأسئلة الشائعة</a></li>
        <li class="navbar-li"><a href="legal" class="navbar-link">القانوني</a></li>
    </ol>
</div>
`
let header_en = `
<div id="navbar-div">
    <ol id="navbar-ol">
        <li class="navbar-li"><a href="index" class="navbar-link">THE MAIN PAGE</a></li>
        <li class="navbar-li"><a href="team" class="navbar-link">THE TEAM</a></li>
        <li class="navbar-li"><a href="download" class="navbar-link">DOWNLOAD</a></li>
        <li class="navbar-li"><a href="faq" class="navbar-link">FAQ</a></li>
        <li class="navbar-li"><a href="legal" class="navbar-link">LEGAL</a></li>
    </ol>
</div>
`
if (is_page_english) {
    document.getElementById("navbar-container").innerHTML = header_en
} else {
    document.getElementById("navbar-container").innerHTML = header_ar
}