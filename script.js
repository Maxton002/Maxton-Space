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
  "Achievement Unlocked: How did I get here?",
  "Obsessed with Pokemon and Monster Hunter!",
  "JRPGs enthusiast",
  "Glazing Charge Blade is the reason this heart still beats!!",
  "Bugs? Make it a feature!",
  "Idk what I'm doing, but it works",
  "Idk what else to put here, so here's a secret: I'm taken",
  "International relationship: 1,616 km away, one chat away.",
];

function triggerEasterEgg() {
  const textEl = document.getElementById("secret-text");
  const randomMsg = secrets[Math.floor(Math.random() * secrets.length)];
  textEl.textContent = randomMsg;
}

const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");
const hoverSound = document.getElementById("hover-sound");
const hoverStatus = document.getElementById("hover-status");
hoverSound.volume = 0.3;

function playHoverSound() {
  if (!hoverSound.paused) {
    return;
  }

  hoverSound.currentTime = 0;
  hoverSound.play()
    .then(() => {
      hoverStatus.textContent = "";
      hoverStatus.hidden = true;
    })
    .catch(() => {
      hoverStatus.textContent = "Couldn't play hover sound. Check browser audio settings and that ButtonClick.mp3 is available.";
      hoverStatus.hidden = false;
    });
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.textContent = "♫ Pause music";
      musicToggle.setAttribute("aria-pressed", "true");
      musicStatus.textContent = "";
      musicStatus.hidden = true;
    } catch {
      musicToggle.textContent = "♫ Play music";
      musicToggle.setAttribute("aria-pressed", "false");
      musicStatus.textContent = "Couldn't play music.";
      musicStatus.hidden = false;
    }
  } else {
    music.pause();
    musicToggle.textContent = "♫ Play music";
    musicToggle.setAttribute("aria-pressed", "false");
  }
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("button, a")) {
    playHoverSound();
  }
});

if (localStorage.getItem("maxton-theme") === "light") {
  document.body.classList.remove("dark-mode");
  document.getElementById("theme-toggle").textContent = "🌙 Dark";
}