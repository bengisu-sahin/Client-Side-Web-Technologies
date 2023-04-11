let dersler = [
    {
        dersAdi: "tytTurkce",
        toplamSoruSayisi: 40,
        dogru: 0,
        yanlis: 0,
        net: 0,
    },

    {
        dersAdi: "tytSosyal",
        toplamSoruSayisi: 20,
        dogru: 0,
        yanlis: 0,
        net:0,
    }
];
function showNet(ders) {
    let net=ders.dogru-(0.25*ders.yanlis);
    return net;
}
/**
 *change olayı, kullanıcının input alanından odaklanması kaybolduğunda tetiklenir. 
 Eğer herhangi bir girdi yapıldığında hemen tetiklenmesini istediğimiz için input event ini kullandım
*/
inputs.forEach(input => {
    input.addEventListener('input', function () {
        let className = input.className;
        let ders = dersler.find(obj => obj.dersAdi === className);
        console.log(ders.dersAdi);
        if (ders) {
             ders.dogru=document.getElementById(ders.dersAdi + 'Dogru').value;
             console.log(ders.dogru);
             ders.yanlis=document.getElementById(ders.dersAdi + 'Yanlis').value; 
             console.log(ders.yanlis);
            document.getElementById(ders.dersAdi + 'Net').value = showNet(ders);
            console.log(document.getElementById(ders.dersAdi + 'Net').value);
        }
    });
});