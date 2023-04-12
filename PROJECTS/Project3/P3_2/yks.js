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
    if( dogru+yanlis > toplamSoru){
        alert("Toplamda `{toplamSoru}` soru girebilirsin.");
    }
    return;
}
/**
 *change olayı, kullanıcının input alanından odaklanması kaybolduğunda tetiklenir. 
 Eğer herhangi bir girdi yapıldığında hemen tetiklenmesini istediğimiz için input event ini kullandım
*/
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        let className = input.className;
        let ders = dersler.find(obj => obj.dersAdi === className);
        console.log(ders.dersAdi);
        if (ders) {
            ders.dogru = document.getElementById(ders.dersAdi + 'Dogru').value;
            ders.yanlis = document.getElementById(ders.dersAdi + 'Yanlis').value;
            makeAlert(ders.dogru, ders.yanlis, ders.toplamSoruSayisi);
            document.getElementById(ders.dersAdi + 'Net').value = showNet(ders);
            
        }
    });
});