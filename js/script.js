// Load Navbar Component
fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// Create Account
function createAccount() {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    alert("Welcome " + name + "! Your account has been created.");
}

function Password() {
    const password = document.getElementById("Password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password.toLowerCase().includes("password")) {
        alert("Password cannot contain the word 'password'.");
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return;
    }
    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
    }
    if (password.length > 20) {
        alert("Password cannot be longer than 20 characters.");
        return;
    }
    if (/\s/.test(password)) {
        alert("Password cannot contain spaces.");
        return;
    }
}
alert("Password is strong! Your account is secure.");


// Donation
function donate() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("payment").value;

    if (name === "" || amount === "") {
        alert("Enter name and amount.");
        return;
    }

    if (method === "mpesa") {
        alert("M-Pesa prompt sent for KES " + amount + "Please complete the payment on your phone.");
    } else {
        alert("Processing card payment of KES " + amount);
    }

    alert("Thank you " + name + " ❤️ Your giving touches hearts!");
}

// 50 second reminder
setInterval(() => {
    alert("Reminder: It is in giving that humanity is cemented in our hearts ❤️");
}, 50000); // Smooth fade in
window.addEventListener("load", () => {
    document.body.style.opacity = 1;
});

// 50 second giving reminder
setInterval(() => {
    alert("Continue touching hearts through your giving ❤️");
}, 50000);