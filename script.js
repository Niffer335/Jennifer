// Example of adding functionality: simple form validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Grab values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});
