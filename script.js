document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('scroll-reveal-text');

    gsap.registerPlugin(ScrollTrigger);

    const revealText = (element) => {
        gsap.from(element, {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 100%',
                end: 'top 10%',
                scrub: true,
            },
        });
    };

    revealText(textElement);
});
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('color-changing-text');
    const textContent = textElement.textContent;
    const letters = textContent.split('');


    // Define the initial and final colors
    const initialColor = 'lightgray';
    const finalColor = 'black';

    // Get the scrollable element (in this case, the document)
    const scrollableElement = document.documentElement;

    // Calculate the color step based on the scroll height and the number of letters
    const colorStep = (window.scrollMaxY || scrollableElement.scrollHeight) / (letters.length * 3); // Reduce the division factor

    let currentColorIndex = 0;

    // Function to update the text color based on the scroll position
    function updateTextColor() {
        const scrollPosition = window.scrollY || scrollableElement.scrollTop;
        const newColorIndex = Math.floor(scrollPosition / colorStep);

        if (newColorIndex !== currentColorIndex) {
            currentColorIndex = newColorIndex;

            textElement.innerHTML = letters
                .map((letter, index) => {
                    const color = index <= currentColorIndex ? finalColor : initialColor;
                    return `<span style="color: ${color};">${letter}</span>`;
                })
                .join('');
        }

        requestAnimationFrame(updateTextColor);
    }

    // Attach the update function to the scroll event
    window.addEventListener('scroll', updateTextColor);

    // Initial update of text color
    updateTextColor();
});
// Optionally, you can use JavaScript to control scroll behavior
// For example, to scroll horizontally when user scrolls vertically
document.querySelector('.horizontal-scroll').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.horizontal-scroll').scrollLeft += event.deltaY;
});
const video = document.getElementById('scroll-resize-video');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 20 && scrollPercentage <= 80) {
        const width = 50 - (scrollPercentage - 20) * 0.3;
        video.style.width = `${width}%`;
    }
});

function updateFontSize() {
    const screenWidth = window.innerWidth;
    let fontSize = "4rem"; // Default font size for large screens

    if (screenWidth < 640) {
        fontSize = "2rem"; // Font size for small screens
    } else if (screenWidth < 1024) {
        fontSize = "3rem"; // Font size for medium screens
    }

    document.getElementById('dynamic-font-size').style.fontSize = fontSize;
}

// Call the function to set the initial font size
updateFontSize();

// Listen for window resize events and update the font size accordingly
window.addEventListener('resize', updateFontSize);


window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    const countingElement = document.querySelector(".counting");

    let count = 0;

    // GSAP animation to count from 0 to 100
    gsap.to(countingElement, {
        duration: 2, // Animation duration in seconds
        innerHTML: 100, // End value
        onUpdate: () => {
            countingElement.textContent = Math.round(countingElement.innerHTML);
        },
        onComplete: () => {
            // Hide the preloader and reveal the main content
            preloader.style.display = "none";
            document.body.style.overflow = "auto"; // Allow scrolling
            // Display your main content
            // Example: document.querySelector(".main-content").style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loadingPercentage = document.getElementById("loadingPercentage");

    // Animate the loading percentage from 0% to 100%
    gsap.to(loadingPercentage, {
        innerHTML: "100%",
        duration: 2, // Adjust the duration as needed
        onUpdate: () => {
            loadingPercentage.textContent = `${Math.round(Number(loadingPercentage.textContent))}%`;
        },
        onComplete: () => {
            // When the animation is complete, remove the preloader
            const preloader = document.querySelector(".preloader");
            preloader.style.display = "none";
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 5, // Adjust the scroll speed as needed
    });
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll();

// Get the video section element
const videoSection = document.getElementById('scroll-resize-video');

// Get the height of the window
const windowHeight = window.innerHeight;

// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (windowHeight || document.documentElement.clientHeight)
    );
}

// Function to handle the scroll event
function handleScroll() {
    if (isInView(videoSection)) {
        videoSection.classList.add('full-width');
    } else {
        videoSection.classList.remove('full-width');
    }
}

// Add event listener for the scroll event
scroll.on('scroll', handleScroll);










