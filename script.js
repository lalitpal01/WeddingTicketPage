document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        alert("Welcome to the Wedding!");
    });
});
document.querySelector("#registration-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents form submission
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name && email) {
        alert(`Thank you for registering, ${name}!`);
    } else {
        alert("Please fill in all required fields.");
    }
});
