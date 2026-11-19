function openApp(appId, clickedBtn) {
  document.querySelectorAll(".app-window").forEach((win) => {
    win.classList.remove("active");
  });

  const target = document.getElementById(appId);
  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".app-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("maxton-theme", isDark ? "dark" : "light");
}

const secrets = [
  "Achievement Unlocked: Curious Visitor.",
  "Currently building games in Godot 4 & breaking CSS layouts.",
  "Tip: Try toggling light/dark mode in the top right!"
];

function triggerEasterEgg() {
  const textEl = document.getElementById("secret-text");
  const randomMsg = secrets[Math.floor(Math.random() * secrets.length)];
  textEl.textContent = randomMsg;
}

if (localStorage.getItem("maxton-theme") === "light") {
  document.body.classList.remove("dark-mode");
  document.getElementById("theme-toggle").textContent = "🌙 Dark";
}