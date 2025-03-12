/* countdown.js */
document.addEventListener("DOMContentLoaded", function() {
    const countdown = document.getElementById('countdown');
    const targetDate = new Date(new Date().getTime() + 2 * 60 * 1000).getTime(); // 2 minutes from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            ${minutes} minutes ${seconds} seconds
        `;

        if (distance < 0) {
            clearInterval(interval);
            countdown.innerHTML = "It's your special day!";
            // Redirect to the main site after 3 seconds
            setTimeout(function() {
                window.location.href = 'petro.html';
            }, 3000);
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the countdown immediately
});
