document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        window.location.href = 'payment.html';
    });
});