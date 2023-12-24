function auth() {
  const username = "Mikel";
  const password = "12345678";
  // tangkap input
  let userInput = document.getElementById("username").value;
  let passInput = document.getElementById("password").value;
  if (username == userInput && password == passInput) {
    alert("Login Berhasil");
    document.location = "home.html";
  } else {
    alert("Username atau Password salah!");
  }
}
