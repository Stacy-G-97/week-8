// Toggle Mobile Menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email.includes("@") && message) {
    document.getElementById("formMessage").innerText = "Message sent successfully!";
    document.getElementById("formMessage").style.color = "green";
  } else {
    document.getElementById("formMessage").innerText = "Please fill in all fields correctly.";
    document.getElementById("formMessage").style.color = "red";
  }
});
