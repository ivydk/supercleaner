import Game from './Game.js';
export default class GameItems {
    img;
    xPos;
    yPos;
    constructor(imageSrc, maxX, maxY) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = Game.randomNumber(0, maxX);
        this.yPos = Game.randomNumber(0, maxY);
    }
    getImageHeight = () => this.img.height;
    getImageWidth = () => this.img.height;
    getXPos = () => this.xPos;
    getYPos = () => this.yPos;
    draw = (ctx) => {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    };
}
//# sourceMappingURL=GameItems.js.map