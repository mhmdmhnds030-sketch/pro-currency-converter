
const usd = document.getElementById('usd');
const ils = document.getElementById('ils');
const jod = document.getElementById('jod');
const eur = document.getElementById('eur');
const gbp = document.getElementById('gbp');
const sar = document.getElementById('sar');
const egp = document.getElementById('egp');


function updateAllFromUSD(usdValue) {
    if (!usdValue) {

        ils.value = jod.value = eur.value = gbp.value = sar.value = egp.value = "";
        return;
    }
    ils.value = (usdValue * 3.65).toFixed(2);
    jod.value = (usdValue / 1.41).toFixed(2);
    eur.value = (usdValue * 0.92).toFixed(2);
    gbp.value = (usdValue * 0.79).toFixed(2);
    sar.value = (usdValue * 3.75).toFixed(2);
    egp.value = (usdValue * 48.50).toFixed(2);
}


usd.onkeyup = () => updateAllFromUSD(usd.value);
ils.onkeyup = () => { const usdVal = ils.value / 3.65; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
jod.onkeyup = () => { const usdVal = jod.value * 1.41; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
eur.onkeyup = () => { const usdVal = eur.value / 0.92; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
gbp.onkeyup = () => { const usdVal = gbp.value / 0.79; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
sar.onkeyup = () => { const usdVal = sar.value / 3.75; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
egp.onkeyup = () => { const usdVal = egp.value / 48.50; usd.value = usdVal.toFixed(2); updateAllFromUSD(usdVal); };
const themeToggle = document.getElementById('theme-toggle');

themeToggle.onclick = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerText = "🌙 Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerText = "☀️ Mode";
    }
};
