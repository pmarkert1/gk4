document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById('expand-button-wrapper');
    const footer = document.getElementById('footer');
    const upArrow = document.getElementById('up-arrow');

    footer.style.bottom = '-379px';  // Ensure initial state is set

    function footerSlide() {
        if (footer.style.bottom === '-379px') {
            footer.style.bottom = '0';
            upArrow.style.transform = 'rotate(180deg)';
        } else {
            footer.style.bottom = '-379px';
            upArrow.style.transform = 'rotate(0deg)';
        }
    }

    contactButton.addEventListener('click', footerSlide);
});