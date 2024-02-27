const backgroundVideo = document.getElementById('backgroundVideo');

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const speed = 0.5; // Adjust this value to control the speed of parallax effect

  backgroundVideo.style.top = scrollPosition * speed + 'px';
});
