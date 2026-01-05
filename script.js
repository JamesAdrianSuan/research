// Dark Mode Toggle (slider)
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  // Apply saved theme on load
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      darkToggle.checked = true;
    }
  });

  // Toggle dark mode on slider change
  darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) darkToggle.textContent = "Disable";
  }
});

// Text Size Adjustment
const increaseText = document.getElementById("increaseText");
const resetText = document.getElementById("resetText");

if (increaseText) {
  increaseText.addEventListener("click", () => {
    document.body.style.fontSize = "larger";
    localStorage.setItem("textSize", "larger");
  });
}

if (resetText) {
  resetText.addEventListener("click", () => {
    document.body.style.fontSize = "initial";
    localStorage.setItem("textSize", "initial");
  });
}

// Apply saved text size on load
window.addEventListener("DOMContentLoaded", () => {
  const savedSize = localStorage.getItem("textSize");
  if (savedSize) {
    document.body.style.fontSize = savedSize;
  }
});


// Active Navigation Highlight
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.removeAttribute("aria-current"));
    item.setAttribute("aria-current", "page");
  });
});


// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("registerMessage").textContent =
      "Registration successful! You can now log in.";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      document.getElementById("loginMessage").textContent =
        "Login successful! Welcome, " + savedUser.username;
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => window.location.href = "index.html", 1500);
    } else {
      document.getElementById("loginMessage").textContent = "Invalid email or password.";
    }
  });
}

// Logout (now in Dashboard)
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
}

// Welcome Banner on Map
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("loggedIn");
  const welcomeBanner = document.getElementById("welcomeBanner");
  if (user && loggedIn && welcomeBanner) {
    welcomeBanner.textContent = "Welcome, " + user.username + "!";
    welcomeBanner.style.display = "block";
  }
});

// Tutorial Overlay Logic
window.addEventListener("DOMContentLoaded", () => {
  const tutorialOverlay = document.getElementById("tutorialOverlay");
  const closeTutorial = document.getElementById("closeTutorial");

  if (!localStorage.getItem("tutorialSeen")) {
    tutorialOverlay.style.display = "flex";
  }

  if (closeTutorial) {
    closeTutorial.addEventListener("click", () => {
      tutorialOverlay.style.display = "none";
      localStorage.setItem("tutorialSeen", "true");
    });
  }

  // Welcome Banner
  const user = JSON.parse(localStorage.getItem("user"));
  const welcomeBanner = document.getElementById("welcomeBanner");
  if (user && welcomeBanner) {
    welcomeBanner.textContent = "Welcome, " + user.username + "!";
    welcomeBanner.style.display = "block";
  }
});

function showDept(deptId) {
  const sections = document.querySelectorAll(".dept-section");
  sections.forEach(section => section.style.display = "none");
  const active = document.getElementById(deptId);
  if (active) active.style.display = "block";
}


