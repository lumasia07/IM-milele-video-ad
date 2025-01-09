const video = document.getElementById('adVideo');
const ctaPopup = document.getElementById('ctaPopup');

// Show CTA when the video ends
video.addEventListener('ended', () => {
    ctaPopup.style.display = 'block';
});

// Optional: Ensure CTA only appears after the first loop
video.addEventListener('timeupdate', () => {
    if (video.loop && video.currentTime >= video.duration - 0.5) {
        video.loop = false; // Disable looping
        video.pause(); // Pause video to show CTA
    }
});
