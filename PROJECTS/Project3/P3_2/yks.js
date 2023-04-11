let dersler = [
    {
        dersAdi: "tytTurkce",
        toplamSoruSayisi: 40,
        dogru: 0,
        yanlis: 0
    },
    {
        dersAdi: "tytSosyal",
        toplamSoruSayisi: 20,
        dogru: 0,
        yanlis: 0
    }
];

var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
    let name = inputs[i].className;

    if (dersler.find(obj => obj.dersAdi === name)) {
        console.log(name);
        let ders=dersler.find(obj => obj.dersAdi === name);
        let id=
        // console.log("classname");
        // console.log(name);
        // let bob_object = dersler.find(obj => obj.dersAdi === name);
        // console.log("nesne");
        // console.log(bob_object.toplamSoruSayisi); // { name: "Bob", age: 35, city: "Chicago" }
    }


}