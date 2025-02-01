document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
});