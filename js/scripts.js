//Video paused when playing new video
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video'); // Updated to select video elements

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

//BINI MEMBERS
document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("profileImage");
    if (image) {
        image.addEventListener("click", function () {
            
            if (!document.fullscreenElement) {
                if (this.requestFullscreen) {
                    this.requestFullscreen();
                } else if (this.webkitRequestFullscreen) { 
                    this.webkitRequestFullscreen();
                } else if (this.msRequestFullscreen) { 
                    this.msRequestFullscreen();
                }
            } else {
                
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { 
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { 
                    document.msExitFullscreen();
                }
            }
        });
    } else {
        console.log("Profile image not found.");
    }
});

//Video restart when playing new video
document.addEventListener('DOMContentLoaded', function() {
    let previousVideo = null;  
    let previousPoster = null; 

    
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', function() {
            
            if (previousVideo && previousVideo !== this) {
                previousVideo.pause();  
                previousVideo.currentTime = 0;  

                
                if (previousPoster) {
                    previousVideo.setAttribute('poster', previousPoster);
                }
            }

            previousPoster = this.getAttribute('poster');
            this.removeAttribute('poster');

            previousVideo = this;
        });

        video.addEventListener('pause', function() {
            this.setAttribute('poster', previousPoster);
        });

        video.addEventListener('ended', function() {
            this.setAttribute('poster', previousPoster);
        });
    });
});











