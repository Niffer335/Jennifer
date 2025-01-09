// Example of a simple form validation or any other JS feature
document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        event.preventDefault();
    } else {
        alert('Thank you for contacting me!');
    }
});
a