
function tasKagitMakas(secim) {
    const secenekler = ["Taş", "Kağıt", "Makas"];
    const bilgisayar = secenekler[Math.floor(Math.random() * 3)];
    let sonuc = "";

    if (secim === bilgisayar) {
        sonuc = "Berabere!";
    } else if (
        (secim === "Taş" && bilgisayar === "Makas") ||
        (secim === "Kağıt" && bilgisayar === "Taş") ||
        (secim === "Makas" && bilgisayar === "Kağıt")
    ) {
        sonuc = "Kazandın!";
    } else {
        sonuc = "Kaybettin!";
    }

    document.getElementById("sonuc").innerHTML = "Bilgisayar: " + bilgisayar + "<br>" + sonuc;
}
