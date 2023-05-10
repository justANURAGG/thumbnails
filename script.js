document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const popup = document.getElementById("popup");
    const popupImage = document.querySelector(".popup-image");
    const closeBtn = document.querySelector(".close");
  
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function() {
        const imageUrl = this.querySelector("img").src;
        popupImage.src = imageUrl;
        popup.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    popup.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
