<script src="/script.js" defer></script>

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const sentence = "A passionate Web Developer & Designer dedicated to building modern, user-friendly experiences.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && index <= sentence.length) {
            textElement.textContent = sentence.substring(0, index++);
        } else if (isDeleting && index >= 0) {
            textElement.textContent = sentence.substring(0, index--);
        }

        let speed = isDeleting ? 50 : 100;

        if (index === sentence.length) {
            setTimeout(() => (isDeleting = true), 2000);
        } else if (index === 0 && isDeleting) {
            isDeleting = false;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

