  document.addEventListener('DOMContentLoaded', function() {
    var video = document.createElement('video');
    video.id = 'backgroundVideo';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsinline = true;

    var source = document.createElement('source');
    source.src = 'videos/VPC.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    document.body.appendChild(video); // Append where it makes sense for your layout

    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
    navbar.style.left = '50%';
    navbar.style.transform = 'translateX(-50%)';
  }, 100); // Adjust timing as needed
  });



  // Background video
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    const windowHeight = window.innerHeight;
  
    // Keep the parallax speed factor positive for clarity
    const parallaxSpeedFactor = 0.3; // Adjust this value as needed for the desired effect
    
    // Invert the direction of movement by subtracting the calculated offset
    const offset = -scrollPos * parallaxSpeedFactor; // Change here
  
    const backgroundVideo = document.getElementById('backgroundVideo');
    // Apply the offset with the correct direction for the parallax effect
    backgroundVideo.style.transform = `translateY(${offset}px)`;
  }
  
  document.addEventListener("scroll", function() {
    lastKnownScrollPosition = window.pageYOffset;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });
  

// footer
let lastScroll = 0;
let bottomReached = false;
let footerVisible = false; // Track whether the footer is currently visible

document.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.innerHeight + window.pageYOffset;
  const footer = document.querySelector('.footer');

  // Check if the user has reached the bottom of the page
  if (!bottomReached && scrollHeight - scrollPosition <= 50) {
    bottomReached = true;
  } else if (bottomReached && !footerVisible && lastScroll < scrollPosition) {
    // Show the footer only if it's not already visible and we're scrolling down after reaching the bottom
    footer.style.bottom = '0';
    footerVisible = true; // Mark the footer as visible
  } else if (footerVisible && lastScroll > scrollPosition) {
    // Hide the footer if it's visible and the user scrolls up
    footer.style.bottom = '-100%'; // Adjust this value based on your footer's size
    footerVisible = false; // Mark the footer as not visible
    bottomReached = false; // Reset bottom reached to handle future bottom of the page reaches
  }

  // Update lastScroll position for the next scroll event
  lastScroll = scrollPosition;
});
