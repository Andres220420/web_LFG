// Slider/Testimony functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonies = document.querySelectorAll('.testimony_body');
    const nextBtn = document.getElementById('next');
    const beforeBtn = document.getElementById('before');
    let currentTestimony = 0;

    // Show initial testimony
    if (testimonies.length > 0) {
        showTestimony(currentTestimony);
    }

    // Next button functionality
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentTestimony = (currentTestimony + 1) % testimonies.length;
            showTestimony(currentTestimony);
        });
    }

    // Previous button functionality
    if (beforeBtn) {
        beforeBtn.addEventListener('click', function() {
            currentTestimony = (currentTestimony - 1 + testimonies.length) % testimonies.length;
            showTestimony(currentTestimony);
        });
    }

    function showTestimony(index) {
        testimonies.forEach((testimony, i) => {
            if (i === index) {
                testimony.classList.add('testimony_body--show');
            } else {
                testimony.classList.remove('testimony_body--show');
            }
        });
    }
});