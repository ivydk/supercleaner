import GameItems from './GameItems.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItems {
    xVelocity;
    yVelocity;
    keyBoard;
    constructor(maxX, maxY) {
        super('./assets/img/character_robot_walk0.png', maxX - 32, maxY - 32);
        this.keyBoard = new KeyListener();
        this.xVelocity = 3;
        this.yVelocity = 3;
    }
    isCleaning = () => this.keyBoard.isKeyDown(KeyListener.KEY_SPACE);
    collidesWith(other) {
        return this.getXPos() < other.getXPos() + other.getImageWidth()
            && this.getXPos() + this.getImageWidth() > other.getXPos()
            && this.getYPos() < other.getYPos() + other.getImageHeight()
            && this.getYPos() + this.getImageHeight() > other.getYPos();
    }
    move = (canvas) => {
        if (this.keyBoard.isKeyDown(KeyListener.KEY_RIGHT)) {
            this.xPos += this.xVelocity;
        }
        if (this.keyBoard.isKeyDown(KeyListener.KEY_LEFT)
            && this.xPos > 0) {
            this.xPos -= this.xVelocity;
        }
        if (this.keyBoard.isKeyDown(KeyListener.KEY_UP)
            && this.yPos > 0) {
            this.yPos -= this.yVelocity;
        }
        if (this.keyBoard.isKeyDown(KeyListener.KEY_DOWN)
            && this.yPos + this.img.height < canvas.height) {
            this.yPos += this.yVelocity;
        }
    };
}
//# sourceMappingURL=Player.js.map