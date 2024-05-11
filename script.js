document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "janine" && password === "Mon.95.Jan") {
        window.location.href = "html/Home.html"; 
    } else {}
    });


    document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "user") {
        window.location.href = "html/Home.html"; 
    } else {}
    });