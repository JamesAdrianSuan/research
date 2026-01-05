// script.js

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

// Collapsible Officials Section
const toggleBtn = document.getElementById("toggleOfficials");
const officialsList = document.getElementById("officialsList");

if (toggleBtn && officialsList) {
  toggleBtn.addEventListener("click", () => {
    officialsList.classList.toggle("hidden");
    if (officialsList.classList.contains("hidden")) {
      toggleBtn.textContent = "Show Officials";
    } else {
      toggleBtn.textContent = "Hide Officials";
    }
  });
}

// User Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && email && password) {
      // Save user data in localStorage (temporary)
      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      document.getElementById("registerMessage").textContent =
        "Registration successful! You can now log in.";
      document.getElementById("registerMessage").style.color = "green";

      registerForm.reset();
    } else {
      document.getElementById("registerMessage").textContent =
        "Please fill in all fields.";
      document.getElementById("registerMessage").style.color = "red";
    }
  });
}

// User Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      document.getElementById("loginMessage").textContent =
        "Login successful! Welcome, " + savedUser.username + ".";
      document.getElementById("loginMessage").style.color = "green";

      // Example: redirect to settings page after login
      setTimeout(() => {
        window.location.href = "settings.html";
      }, 1500);
    } else {
      document.getElementById("loginMessage").textContent =
        "Invalid email or password.";
      document.getElementById("loginMessage").style.color = "red";
    }
  });
}

