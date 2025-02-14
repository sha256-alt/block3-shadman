document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("loggedInUser");
    if (username) {
        document.getElementById("usernameDisplay").textContent = `Welcome, ${username}`;
    }
});
