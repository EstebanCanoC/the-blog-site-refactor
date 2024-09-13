// Navbar scroll effect
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Form submission event
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Show alert message
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.style.display = "block";

  // Reset form fields
  document.getElementById("contactForm").reset();

  // Hide alert after 3 seconds
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 3000);
});
