console.log("Script is loading");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    // remaining code...
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript loaded");

    const dots = document.querySelectorAll('.dot');
    const tooltip = document.getElementById('tooltip');
    console.log('Dots found:', dots.length); // Check how many dots are being found

    dots.forEach(dot => {
        dot.addEventListener('mouseenter', function(e) {
            console.log('Hovered over:', dot.getAttribute('data-tooltip')); // This should log on hover
            const rect = dot.getBoundingClientRect();
            tooltip.textContent = dot.getAttribute('data-tooltip');
            tooltip.style.display = 'block';
            tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
            tooltip.style.top = `${rect.top + window.scrollY + rect.height + 10}px`; // This ensures the tooltip is just below the dot
        });

        dot.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});
