import GameItems from './GameItems.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItems {
  private xVelocity: number;

  private yVelocity: number;

  private keyBoard: KeyListener;

  /**
   * Construct a new instance of this class
   *
   * @param maxX the max x value
   * @param maxY the max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/character_robot_walk0.png', maxX - 32, maxY - 32);

    this.keyBoard = new KeyListener();

    this.xVelocity = 3;

    this.yVelocity = 3;
  }

  /**
   *
   * @returns true if the player is cleaning
   */
  public isCleaning = (): boolean => this.keyBoard.isKeyDown(KeyListener.KEY_SPACE);

  /**
   *
   * @param other the other object
   * @returns `true` if the player is on a G
   */
  public collidesWith(other: GameItems): boolean {
    return this.getXPos() < other.getXPos() + other.getImageWidth()
      && this.getXPos() + this.getImageWidth() > other.getXPos()
      && this.getYPos() < other.getYPos() + other.getImageHeight()
      && this.getYPos() + this.getImageHeight() > other.getYPos();
  }

  public move = (canvas: HTMLCanvasElement): void => {
    // moving right
    if (this.keyBoard.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.xPos += this.xVelocity;
    }

    // Moving left
    if (
      this.keyBoard.isKeyDown(KeyListener.KEY_LEFT)
      && this.xPos > 0
    ) {
      this.xPos -= this.xVelocity;
    }

    // Moving up
    if (
      this.keyBoard.isKeyDown(KeyListener.KEY_UP)
      && this.yPos > 0
    ) {
      this.yPos -= this.yVelocity;
    }

    // Moving down
    if (
      this.keyBoard.isKeyDown(KeyListener.KEY_DOWN)
      && this.yPos + this.img.height < canvas.height
    ) {
      this.yPos += this.yVelocity;
    }
  };
}
