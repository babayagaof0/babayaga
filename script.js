function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const texts = ["SARKICI, ARTIST, SANATCI, TOKAT BOY"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (!textElements) return; 

    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 100);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

let images = ["main.png", "main2.png"];
let imgIndex = 0;

function changeImage() {
    let imgElement = document.getElementById("changingImage");
    if (!imgElement) return; 

    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgIndex = (imgIndex + 1) % images.length;
        imgElement.src = images[imgIndex];
        imgElement.style.opacity = 1;
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    setInterval(changeImage, 5000); 
    typeWriter(); 
});
