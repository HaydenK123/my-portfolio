<script src="/script.js" defer></script>

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const cursor = document.querySelector(".cursor");
    const text = "A passionate Web Developer & Designer dedicated to building modern, user-friendly experiences.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && index < text.length) {
            textElement.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, 50); 
        } else if (isDeleting && index >= 0) {
            textElement.innerHTML = text.substring(0, index);
            index--;
            setTimeout(typeEffect, 30);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();

    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);
});
