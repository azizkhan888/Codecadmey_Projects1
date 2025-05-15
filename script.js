document.addEventListener('DOMContentLoaded', function() {
    // --- Interactive Feature 1: Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump
            const targetId = this.getAttribute('href'); // e.g., #about-me
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate position of target section, considering header height if it's fixed
                // For this example, the header isn't fixed, but this is good practice.
                let headerOffset = 0;
                const header = document.querySelector('header');
                if (header && getComputedStyle(header).position === 'fixed') {
                    headerOffset = header.offsetHeight;
                }
                
                const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // Extra 20px padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Interactive Feature 2: Alert for the "Say Hello!" Button ---
    const interactiveButton = document.getElementById('interactiveButton');
    if (interactiveButton) {
        interactiveButton.addEventListener('click', function() {
            alert('Hello from Ada Lovelace! Thank you for your interest.');
        });
    }

    // --- (Optional) Interactive Feature 3: Fun fact dynamic update (Example) ---
    // This is just an example. The number in the HTML is static.
    // To make it dynamic, you'd calculate it.
    // const funFactElement = document.querySelector('#about-me p:last-child');
    // if (funFactElement && funFactElement.textContent.includes("seconds")) {
    //     // Example: Update every second - this is just for show
    //     // let secondsProgramming = 6609062584;
    //     // setInterval(() => {
    //     //     secondsProgramming++;
    //     //     funFactElement.textContent = `Fun fact! I've been programming for ${secondsProgramming.toLocaleString()} seconds!`;
    //     // }, 1000);
    // }
});
