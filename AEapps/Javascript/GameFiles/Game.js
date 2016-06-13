function LoadCanvas(CanvasName) {
    var Canvas = document.getElementById(CanvasName);
    Canvas.width = document.defaultView.innerWidth * 2;
    Canvas.height = document.defaultView.innerHeight * 2;
    Canvas.style.width = document.defaultView.innerHeight;
    Canvas.style.height = document.defaultView.innerHeight;
    return Canvas;
}

var VectorZero = {
    X: 0, Y: 0
};

var DefaultSize = {
    Width: 100,
    Height: 100
};

class Sprite {
    constructor(CanvasName, ImageSRC) {
        var CTX = LoadCanvas(CanvasName).getContext('2d');
        this.Location = VectorZero;
        this.Size = DefaultSize;

        var img = new Image();
        img.onload = function () {
            CTX.drawImage(img, 0, 0, 100, 100);
        }
        img.src = ImageSRC;

        this.TextureSRC = ImageSRC;
    }

    Draw(CanvasName, ImageSRC) {
        var CTX = LoadCanvas(CanvasName).getContext('2d');

        var img = new Image();
        var Bounds = this.Size;
        var Position = this.Location;
        img.onload = function () {
            CTX.drawImage(img, Position.X, Position.Y, Bounds.Width, Bounds.Height);
        }
        img.src = ImageSRC;
    }
}