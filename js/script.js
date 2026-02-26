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
        alert("M-Pesa prompt sent for KES " + amount);
    } else {
        alert("Processing card payment of KES " + amount);
    }

    alert("Thank you " + name + " ❤️ Your giving touches hearts!");
}

// 50 second reminder
setInterval(() => {
    alert("Reminder: Continue touching hearts through your giving ❤️");
}, 50000); // Smooth fade in
window.addEventListener("load", () => {
    document.body.style.opacity = 1;
});

// 50 second giving reminder
setInterval(() => {
    alert("Continue touching hearts through your giving ❤️");
}, 50000);