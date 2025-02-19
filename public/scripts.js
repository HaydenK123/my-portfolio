<script src="/script.js" defer></script>

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const words = ["a Web Developer", "a Designer", "a Problem Solver", "a Creator"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function typeEffect() {
        currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, letterIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, letterIndex++);
        }

        let typingSpeed = isDeleting ? 100 : 150;

        if (!isDeleting && letterIndex === currentWord.length) {
            typingSpeed = 1000; // pausing before deleting
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});
