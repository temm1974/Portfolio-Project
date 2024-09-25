document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.querySelector('.typewriter-text');
    const words = ["Software Developer", "Senior Business Analyst", "Project Manager", "Governance Manager", "Musician"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let typedText = currentWord.slice(0, charIndex);
        typewriterText.textContent = typedText;

        if (!isDeleting) {
            if (charIndex < currentWord.length) {
                charIndex++;
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 1000);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            }
        }
    }

    type();
});

function hamburg() {
    document.querySelector('.dropdown').style.display = 'flex';
}

function cancel() {
    document.querySelector('.dropdown').style.display = 'none';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


