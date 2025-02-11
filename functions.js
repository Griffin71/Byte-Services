document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const accountTypeSelect = document.getElementById('account-type');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const accountType = accountTypeSelect.value;

        if (validateEmail(email) && validateAccountType(accountType)) {
            sendRecoveryRequest(email, accountType);
        } else {
            alert('Please enter a valid email and select an account type.');
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateAccountType(accountType) {
        return accountType === 'gmail' || accountType === 'facebook';
    }

    function sendRecoveryRequest(email, accountType) {
        const mailtoLink = `mailto:kabelosamkelo19@gmail.com?subject=Account Recovery Request&body=Email: ${email}%0D%0AAccount Type: ${accountType}`;
        window.location.href = mailtoLink;
    }
});