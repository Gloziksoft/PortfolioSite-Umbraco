$(document).ready(function () {
    // Submenu - handling hover for dropdown
    $('ul.nav li.dropdown').hover(
        function () { $(this).addClass('open'); },
        function () { $(this).removeClass('open'); }
    );

    // Lazy load for images
    $('img.lazy').lazy();

    // Toggle navigation icon
    $('#navbar').on('show.bs.collapse', function () {
        $('#menuIcon').removeClass('fa-bars').addClass('fa-times');
    });

    $('#navbar').on('hide.bs.collapse', function () {
        $('#menuIcon').removeClass('fa-times').addClass('fa-bars');
    });

    $('#navbar-protected').on('show.bs.collapse', function () {
        $('#menuIconProtect').removeClass('fa-bars').addClass('fa-times');
    });

    $('#navbar-protected').on('hide.bs.collapse', function () {
        $('#menuIconProtect').removeClass('fa-times').addClass('fa-bars');
    });

    // Detekcia jazyka z URL (zistí prvý segment URL, napr. "/sk" alebo "/en")
    let language = window.location.pathname.split('/')[1];

    // Texty pre rôzne jazyky
    const texts = language === "en" ? [
        "My name is Peter Glózik and I am a web developer.",
        "I am happy to help you with creating websites and digital solutions."
    ] : [
        "Volám sa Peter Glózik a som webový vývojár.",
        "Rád vám pomôžem s tvorbou webových stránok a digitálnych riešení."
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const erasingSpeed = 20;
    const delayBetweenTexts = 1400;
    const textElement = document.getElementById("dynamic-text");

    function typeEffect() {
        if (!textElement) return;
        if (!isDeleting && charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, erasingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
            }
            setTimeout(typeEffect, delayBetweenTexts);
        }
    }
    setTimeout(typeEffect, 800);
});
