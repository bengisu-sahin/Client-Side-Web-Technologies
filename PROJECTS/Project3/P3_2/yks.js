let dersler = [
    { dersAdi: "tytTurkce", toplamSoruSayisi: 40, dogru: 0, yanlis: 0, et: 0 }, { dersAdi: "tytSosyal", toplamSoruSayisi: 20, dogru: 0, yanlis: 0, net: 0 },
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
        console.log(ders.dersAdi);
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
            }
        }
    });
});