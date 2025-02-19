<script src="/script.js" defer></script>

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const sentence = "A passionate Web Developer & Designer dedicated to building modern, user-friendly experiences.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            textElement.textContent = sentence.substring(0, index++);
        } else {
            textElement.textContent = sentence.substring(0, index--);
        }

        let typingSpeed = isDeleting ? 50 : 100; //typing speedd

        if (index === sentence.length) {
            typingSpeed = 2000; 
            isDeleting = true;
        } else if (index === 0) {
            typingSpeed = 1000;
            isDeleting = false;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});
