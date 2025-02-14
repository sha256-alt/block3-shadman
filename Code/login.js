function loginUser(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    localStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
}