const menuIcon = document.getElementById("menu-icon");
const menuBar = document.getElementById("navbar");

// Toggle menu bar visibility when the menu icon is clicked
menuIcon.addEventListener("click", function() {
  if (menuBar.style.display === "block") {
    menuBar.style.display = "none";
  } else {
    menuBar.style.display = "block";
  }
});

 
    const textLines = [
      "Web Devoloper",
      "Pogramaer",
      "Hacker",
      "Photographer"
    ];

    const textContainer = document.getElementById("text-container");
    let currentIndex = 0;
    let currentLine = "";
    let isTyping = true;

    function typeText() {
      currentLine = textLines[currentIndex];
      textContainer.textContent = currentLine.substring(0, textContainer.textContent.length + 1);

      if (textContainer.textContent === currentLine) {
        isTyping = false;
        setTimeout(eraseText, 1500);
      } else {
        setTimeout(typeText, 80);
      }
    }

    function eraseText() {
      textContainer.textContent = currentLine.substring(0, textContainer.textContent.length - 1);

      if (textContainer.textContent === "") {
        isTyping = true;
        currentIndex = (currentIndex + 1) % textLines.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(eraseText, 50);
      }
    }

    // Start the typing animation
    setTimeout(typeText, 500);
  

ScrollReveal({
  reset: true,
  distance: '80px',
  decoration: 2000,
  delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });

ScrollReveal().reveal(', .home-img, .services-container, .portfolio-box, .contract form,..about-content p, .navbar a', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img, ', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });