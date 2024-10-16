function handlePaymentFormSubmission(event) {
   
    

    const paymentForm = document.getElementById('paymentForm');
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }   
    alert('Payment processed successfully!');
}
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', handlePaymentFormSubmission);
});