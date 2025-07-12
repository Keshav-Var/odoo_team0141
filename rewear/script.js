// Handle Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };
    localStorage.setItem("rewearUser", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
    });
}


// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("rewearUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("loggedIn", "true");

      // ✅ Check if admin
      if (email === "admin@gmail.com") {
        window.location.href = "admin.html"; // go to admin page
      } else {
        window.location.href = "home.html"; // normal user home
      }

    } else {
      alert("Invalid email or password.");
    }
  });
}