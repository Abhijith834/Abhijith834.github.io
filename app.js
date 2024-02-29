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




document.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset;
    var backgroundVideo = document.getElementById('backgroundVideo');
    // Adjust this value for slower movement
    backgroundVideo.style.transform = 'translateY(' + scrollPosition * 0.70 + 'px)';
  });
