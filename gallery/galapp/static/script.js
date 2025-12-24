script.js

function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = img.src;       
    caption.innerText = img.dataset.title || "";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}