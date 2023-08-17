// submit button approval
document.getElementById("submitButton").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    if (email === "example@alarafabank.com" && password === "0245@##") {
      window.location.href = "backend.html";
    } else {
      alert("Invalid User!!");
    }
  });