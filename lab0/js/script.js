// Verify script is working
console.log('Script loaded successfully!');
/* Why: Immediate feedback in console */

// Select HTML element
const heading = document.querySelector('h1');
const but = document.querySelector('button');
const paragraphs = document.querySelectorAll("p");
const textContent = Array.from(paragraphs).map(p => p.textContent.trim()).join("\n");

/* Why: Gets reference to h1 tag */

// Add interactive behavior
heading.style.cursor = 'pointer';
/* Why: Shows element is clickable */

// Event listener
but.addEventListener('click', function(){
    paragraphs.forEach(p => {
        p.style.color = getRandomColor();
    });
});
heading.addEventListener('click', function() {
    this.style.color = getRandomColor();
    paragraphs.forEach(p => {
        p.style.color = getRandomColor();
    });
});
/* Why: Makes heading change color when clicked */

// Check D3.js
console.log('D3 Version:', d3?.version || 'D3 not loaded');
/* Why: Confirms D3 library is available */

// Helper function
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* Why: Creates random color for interaction */