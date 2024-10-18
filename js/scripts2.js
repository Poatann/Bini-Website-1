//Hamburger
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", function() {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active"); 
    });
  });

  //Full Screen fan arts
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-card img');
    
    const semiFullscreenContainer = document.createElement('div');
    semiFullscreenContainer.className = 'semi-fullscreen'; 
    semiFullscreenContainer.style.display = 'none'; 
    semiFullscreenContainer.style.width = '100%';
    semiFullscreenContainer.style.height = '100%';
    semiFullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.body.appendChild(semiFullscreenContainer);

    images.forEach(img => {
        img.addEventListener('click', function() {
            semiFullscreenContainer.innerHTML = `<img src="${img.src}" alt="Fullscreen Image">`;
            semiFullscreenContainer.style.display = 'flex'; 
        });
    });

    semiFullscreenContainer.addEventListener('click', () => {
        semiFullscreenContainer.style.display = 'none'; 
    });
});


//Video paused when playing new video
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video'); 

  videos.forEach((video) => {
      video.addEventListener('play', () => {
          videos.forEach((otherVideo) => {
              if (otherVideo !== video) {
                  otherVideo.pause();
              }
          });
      });
  });
});







