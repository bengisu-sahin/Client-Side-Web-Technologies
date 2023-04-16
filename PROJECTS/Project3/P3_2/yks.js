let dersler = [
    { dersAdi: "tytTurkce", toplamSoruSayisi: 40, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "tytSosyal", toplamSoruSayisi: 20, dogru: 0, yanlis: 0, net: 0 },
    { dersAdi: "tytMat", toplamSoruSayisi: 40, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "tytFen", toplamSoruSayisi: 20, dogru: 0, yanlis: 0, net: 0 },
    { dersAdi: "aytTurkce", toplamSoruSayisi: 24, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytTarih", toplamSoruSayisi: 10, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytCografya", toplamSoruSayisi: 10, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytTarih2", toplamSoruSayisi: 11, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytCografya2", toplamSoruSayisi: 11, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytFelsefe", toplamSoruSayisi: 12, dogru: 0, yanlis: 0, net: 0 },
    { dersAdi: "aytDin", toplamSoruSayisi: 6, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytMat", toplamSoruSayisi: 40, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytFizik", toplamSoruSayisi: 14, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytKimya", toplamSoruSayisi: 13, dogru: 0, yanlis: 0, net: 0 }, { dersAdi: "aytBiyoloji", toplamSoruSayisi: 13, dogru: 0, yanlis: 0, net: 0 },

];

function showNet(ders) {
    let net = ders.dogru - (0.25 * ders.yanlis);
    return net;
}

function makeAlert(dogru, yanlis, toplamSoru) {
    if (dogru + yanlis > toplamSoru) {
        window.alert("Toplamda " + toplamSoru.toString() + " soru girebilirsin.");
        return true;
    }
    return false;
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', function () {
        let className = input.className;
        let ders = dersler.find(obj => obj.dersAdi === className);
        if (input.id == "diplamaNotu") {
            const diplomaNotu = document.getElementById("diplamaNotu").value;
            if (diplomaNotu > 100 || diplomaNotu < 0) window.alert("Diploma notu 0-100 aralığında olmalıdır.")
            else {
                const obpPuan = document.getElementById("obp-puan");
                obpPuan.value = Number(diplomaNotu) * 5;
            }

        }
        if (ders) {
            ders.dogru = Number(document.getElementById(ders.dersAdi + 'Dogru').value);
            ders.yanlis = Number(document.getElementById(ders.dersAdi + 'Yanlis').value);
            if (makeAlert(ders.dogru, ders.yanlis, ders.toplamSoruSayisi) == true) {
                document.getElementById(ders.dersAdi + 'Dogru').value = "-";
                document.getElementById(ders.dersAdi + 'Yanlis').value = "-";
                document.getElementById(ders.dersAdi + 'Net').value = "-";
            }
            else {
                document.getElementById(ders.dersAdi + 'Net').value = showNet(ders);
                ders.net = showNet(ders);
            }
        }
    });
});
var hesaplaButton = document.getElementById("hesapla");
hesaplaButton.onclick = function () {
    var obp = document.getElementById("obp-puan").value;
    var tytHam = (dersler[0].net + dersler[1].net + dersler[2].net + dersler[3].net) * 5;
    var sayHam = ((dersler[11].net + dersler[12].net + dersler[14].net + dersler[13].net) * 6.25) * 0.6 + tytHam * 0.4;
    var sozHam = ((dersler[4].net + dersler[5].net + dersler[6].net + dersler[7].net + dersler[8].net + dersler[9].net + dersler[10].net) * 6.25) * 0.6 + tytHam * 0.4;
    var eaHam = (sozHam + 12.5 * (dersler[11].net)) * 0.5;

    if (document.getElementById("check-yerlesme") == false) {
        var sayYerlestirme = sayHam + obp * 0.6;
        var sozYerlestirme = sozHam + obp * 0.6;
        var eaYerlestirme = eaHam + obp * 0.6;
        var tytYerlestirme = tytHam + obp * 0.6;

    }
    else { //gecen sene bir bölüme yerlestiyse
        var sayYerlestirme = sayHam + obp * 0.3;
        var sozYerlestirme = sozHam + obp * 0.3;
        var eaYerlestirme = eaHam + obp * 0.3;
        var tytYerlestirme = tytHam + obp * 0.3;
    }
    document.getElementById("tytHam").innerHTML = tytHam;
    document.getElementById("tytYerlestirme").innerHTML = tytYerlestirme;
    document.getElementById("sayHam").innerHTML = sayHam;
    document.getElementById("sayYerlestirme").innerHTML = sayYerlestirme;
    document.getElementById("eaHam").innerHTML = eaHam;
    document.getElementById("eaYerlestirme").innerHTML = eaYerlestirme;
    document.getElementById("sozHam").innerHTML = sozHam;
    document.getElementById("sozYerlestirme").innerHTML = sozYerlestirme;


};
var temizleButton = document.getElementById("temizle");
var sonucTable = document.getElementsByClassName("sonuc");
temizleButton.onclick = function () {
    console.log(sonucTable.length)
    inputs.forEach(input => { input.value = ""; })
    dersler.forEach(ders => { ders.net = 0; })
    for (var i = 0; i < sonucTable.length; i++) { sonucTable[i].innerHTML = "-"; }
}