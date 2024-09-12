document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.split-counter-number');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');  // Remove the plus sign before incrementing
            const increment = target / 200;  // Adjust the speed by changing the divisor

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '+';  // Add the plus sign back
                setTimeout(updateCount, 20);  // Speed of the animation
            } else {
                counter.innerText = target + '+';  // Ensure it doesn't go over the target and keep the plus
            }
        };

        updateCount();
    });
});