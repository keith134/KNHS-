document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.innerText = "Thank you for registering! We can't wait to see you at the camp!";
});
