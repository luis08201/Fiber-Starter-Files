const showPasswordBtn = document.getElementById("showPassword");

showPasswordBtn.addEventListener("click", () => {
  const inputPassword = document.querySelector(".password");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    showPasswordBtn.classList.remove("fa-eye");
    showPasswordBtn.classList.add("fa-eye-slash");
  } else {
    inputPassword.type = "password";
    showPasswordBtn.classList.add("fa-eye");
    showPasswordBtn.classList.remove("fa-eye-slash");
  }
});

