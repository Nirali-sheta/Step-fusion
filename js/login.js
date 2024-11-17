

function handleButtonClick(event) {
    event.preventDefault(); 

    // Get values of email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log values to the console
    console.log("Email:", email);
    console.log("Password:", password);

    // Display an alert with the values
    alert(`Email: ${email}\nPassword: ${password}`);

    window.location.href='/html/home.html';
}