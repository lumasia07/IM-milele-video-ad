const video = document.getElementById('adVideo');
const ctaPopup = document.getElementById('ctaPopup');

// Initialize GSAP timeline
const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.out" }
});

// Set up the animation sequence
tl.set(ctaPopup, { display: 'block' })
  .to(ctaPopup, { 
      opacity: 1, 
      duration: 0.5
  })
  .to('.cta-popup p', { 
      opacity: 1, 
      y: 0, 
      duration: 0.5 
  }, "-=0.3")
  .to('.cta-popup button', { 
      opacity: 1, 
      scale: 1, 
      duration: 0.5 
  }, "-=0.3");

// Show CTA when the video ends
video.addEventListener('ended', () => {
    tl.play();
});

// Optional: Ensure CTA only appears after the first loop
video.addEventListener('timeupdate', () => {
    if (video.loop && video.currentTime >= video.duration - 0.5) {
        video.loop = false; // Disable looping
        video.pause(); // Pause video
        tl.play();
    }
});

// Add hover animation for the video container
gsap.to('.video-container', {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    duration: 0.3,
    paused: true,
    ease: "power2.out"
}).reverse();

const videoContainer = document.querySelector('.video-container');
videoContainer.addEventListener('mouseenter', () => gsap.to('.video-container', { 
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    duration: 0.3,
    ease: "power2.out"
}));
videoContainer.addEventListener('mouseleave', () => gsap.to('.video-container', { 
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    duration: 0.3,
    ease: "power2.out"
}));