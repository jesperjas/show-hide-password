const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = toggle.querySelector("i");

// Toggle Password Visibility
toggle.addEventListener("click", () => {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";

  toggleIcon.classList.toggle("fa-eye");
  toggleIcon.classList.toggle("fa-eye-slash");
});

// Toggle Theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});
