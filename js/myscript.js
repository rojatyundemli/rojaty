
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



document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Generate random reservation number (8 digits)
    const reservationNumber = Math.floor(10000000 + Math.random() * 90000000);
    
    // Get form data
    const formData = {
        reservationNumber: reservationNumber,
        checkIn: document.getElementById('checkIn').value,
        checkOut: document.getElementById('checkOut').value,
        adults: document.getElementById('adults').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: new Date().toLocaleDateString('tr-TR')
    };
    
    // Store in localStorage
    localStorage.setItem('reservationData', JSON.stringify(formData));
    
    // Redirect to success page
    window.location.href = 'rezervasyon-basarili.html';
});      

document.addEventListener('DOMContentLoaded', function() {
    // Get reservation data from localStorage
    const reservationData = JSON.parse(localStorage.getItem('reservationData'));
    
    if (reservationData) {
        // Format dates
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        };

        // Update reservation details
        document.getElementById('reservationNumber').textContent = reservationData.reservationNumber;
        document.getElementById('guestName').textContent = reservationData.name;
        document.getElementById('guestEmail').textContent = reservationData.email;
        document.getElementById('guestPhone').textContent = reservationData.phone;
        document.getElementById('guestCount').textContent = `${reservationData.adults} Kişi`;
        document.getElementById('checkInDate').textContent = formatDate(reservationData.checkIn);
        document.getElementById('checkOutDate').textContent = formatDate(reservationData.checkOut);
        document.getElementById('reservationDate').textContent = reservationData.date;
    } else {
        // If no reservation data, redirect to reservation page
        window.location.href = 'rezervasyon.html';
    }
}); 
