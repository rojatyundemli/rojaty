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
