# Ex.07 Design of Interactive Image Gallery
## Date:19/12/2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gal.html
<html>
<head>
    <meta charset="UTF-8">
    <title>aesthetic</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h2>aesthetic</h2>
<h3>Jayachandran A (25015034)</h3>
<hr>
<br>
<br>

<div class="gallery">
    <img src="https://i.pinimg.com/736x/a5/78/03/a57803e6f37f73382bf89b007a4b5954.jpg" data-title="Desert View" onclick="openImage(this)">
    <img src="https://i.pinimg.com/736x/83/33/be/8333beeaed9ab42f0fc590e26f2b6986.jpg" data-title="Ocean View" onclick="openImage(this)">
    <img src="https://i.pinimg.com/736x/68/2b/60/682b604d466185e1a2368aadd85c09cc.jpg" data-title="Night Sky" onclick="openImage(this)">
    <img src="https://i.pinimg.com/originals/cb/90/9d/cb909db943872a2963aa92914b9fc754.jpg" data-title="Mountain View" onclick="openImage(this)">
    <img src="https://i.pinimg.com/736x/f8/fb/c3/f8fbc3e6e525191c93e3e95d5ce79d97.jpg" data-title="Waterfalls" onclick="openImage(this)">
</div>
<br>
<br>
<hr>

<div class="modal" id="imageModal" onclick="closeImage()">
    <div class="modal-content" onclick="event.stopPropagation()">
        <span class="close" onclick="closeImage()">&times;</span>

        
        <img id="modalImg" src="">

        <p id="caption"></p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
```
```
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
```
```
styles.css

body {
    font-family: "Segoe UI", sans-serif;
    margin: 0;
    padding: 40px;
    color: white;

    background: linear-gradient(
        -45deg,
        #1d2671,
        #c33764,
        #00c6ff,
        #f7971e
    );
    background-size: 400% 400%;
    animation: gradientBG 12s ease infinite;
}


h2 {
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 2px;
}
h3{
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 2px;
}


.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: auto;
}

.gallery img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.4s, box-shadow 0.4s;
}

.gallery img:hover {
    transform: scale(1.08);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}


.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(6px);
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.4s;
}

.modal-content {
    background: #111;
    padding: 20px;
    border-radius: 16px;
    text-align: center;
    animation: zoomIn 0.4s;
}

.modal img {
    max-width: 80vw;
    max-height: 70vh;
    border-radius: 12px;
}

#caption {
    margin-top: 12px;
    font-size: 18px;
    color: #ddd;
}

.close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 32px;
    cursor: pointer;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes zoomIn {
    from { transform: scale(0.7); }
    to { transform: scale(1); }
}
@keyframes gradientBG {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

## OUTPUT:

![alt text](<Screenshot 2025-12-24 085451.png>) 
![alt text](<Screenshot 2025-12-24 085434.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
