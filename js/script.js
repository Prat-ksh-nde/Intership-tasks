// -------- Reusable Function --------
function showMessage(element, message, color) {
    element.textContent = message;
    element.style.color = color;
}

// -------- DOM Elements --------
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const statusMessage = document.createElement("p");
form.appendChild(statusMessage);

// -------- Feature 1: Form Validation --------
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    if (nameInput.value.trim() === "") {
        showMessage(statusMessage, "❌ Name is required", "red");
        return;
    }

    if (!emailInput.value.includes("@")) {
        showMessage(statusMessage, "❌ Enter a valid email", "red");
        return;
    }

    if (messageInput.value.trim().length < 5) {
        showMessage(statusMessage, "❌ Message must be at least 5 characters", "red");
        return;
    }

    showMessage(statusMessage, "✅ Form submitted successfully!", "green");
    form.reset();
});

// -------- Feature 2: Button Hover Text Change --------
const button = document.querySelector("button");

button.addEventListener("mouseover", function () {
    button.textContent = "Ready to Send!";
});

button.addEventListener("mouseout", function () {
    button.textContent = "Send Message";
});

// -------- Feature 3: Dynamic Year in Footer --------
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.textContent = `© ${year} Pratik Shinde. All rights reserved.`;

// -------- Feature 4: Highlight Section on Click --------
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("click", function () {
        section.style.backgroundColor = "#eef2ff";
        setTimeout(() => {
            section.style.backgroundColor = "white";
        }, 500);
    });
});
