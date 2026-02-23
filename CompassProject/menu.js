const menuHTML = `
    <header class="top-navbar">
        <a href="index.html" class="nav-brand">COMPASS.</a>
        <nav class="nav-links">
            <a href="siirler.html">ŞİİRLER</a>
            <a href="didemvari.html">DİDEMVARİ ŞEYLER</a>
            <a href="kim-bu-yagmur.html">KİM BU YAĞMUR</a>
            <a href="ses-ver.html" style="color: var(--kafa-red);">SES VER</a>
        </nav>
    </header>
`;

// Bu kod, menüyü her sayfanın en üstüne otomatik olarak enjekte eder.
document.body.insertAdjacentHTML('afterbegin', menuHTML);