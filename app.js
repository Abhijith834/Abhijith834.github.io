document.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset;
    var backgroundVideo = document.getElementById('backgroundVideo');
    // Adjust this value for slower movement
    backgroundVideo.style.transform = 'translateY(' + scrollPosition * 0.70 + 'px)';
  });
s  