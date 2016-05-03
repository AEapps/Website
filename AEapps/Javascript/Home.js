//the array with the path to the images
var image = null;
var canvas = null;
var currentImage = 0;
var contextForCanvas = null;
var ImageList = ["Images/MotherBoard.png", "Images/River.jpg", "Images/desert.jpg"];

function PageLoad() {
    //Takes Care Of Page Links
    PageLinkColors();

    //Image Library Stuff
    canvas = document.getElementById("SlideShowCanvas");
    contextForCanvas = canvas.getContext("2d");
    image = document.createElement("img");
    ImageSliding();
}

function ImageSliding() {
    image.setAttribute("src", ImageList[currentImage]);
    if (currentImage == ImageList.length - 1) {
        currentImage = 0;
    }

    else {
        currentImage++;
    }

    contextForCanvas.globalAlpha = 0.1;
    setTimeout(ShowImage, 250);
}

function ShowImage() {
    contextForCanvas.save();
    contextForCanvas.drawImage(image, 0, 0, canvas.width, canvas.height);
    contextForCanvas.globalAlpha += 0.1;

    if (contextForCanvas.globalAlpha > 0.9) {
        setTimeout(ImageSliding, 3500)
    }

    else {
        setTimeout(ShowImage, 100);
    }
}