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




  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    const windowHeight = window.innerHeight;
  
    // Keep the parallax speed factor positive for clarity
    const parallaxSpeedFactor = 0.1; // Adjust this value as needed for the desired effect
    
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
  
