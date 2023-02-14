// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // Get all the nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    // Loop through each link and add a click event listener
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Prevent the default behavior
        event.preventDefault();
        // Get the id of the section to scroll to
        const sectionId = link.getAttribute("href");
        // Scroll to the section
        document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  