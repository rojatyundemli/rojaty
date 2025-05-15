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
