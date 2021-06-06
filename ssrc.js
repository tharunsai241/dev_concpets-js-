function validate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (password == "" || password == null) {
    window.alert("password  required");
  } else if (email == "" || email == null) {
    alert(" email required");
  } else {
    alert("login succesful");
  }
}
