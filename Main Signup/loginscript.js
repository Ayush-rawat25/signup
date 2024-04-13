var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ayush2004"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert("Signup successful!");
    // Here you would typically send data to the server
};
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    alert("Login successful!");
    // Typically you would validate credentials with the server here
};
const emailValue = document.getElementById('email').value;
const passValue = document.getElementById('password').value;
const numberValue = document.getElementById('number').value;

const emailValue1 = document.getElementById('email1').value;
const passValue1 = document.getElementById('password1').value;
