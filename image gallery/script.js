const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = "block";
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Optional: close lightbox on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
