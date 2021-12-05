import Game from './Game.js';

export default class GameItems {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * Constructs a new instance of Game
   *
   * @param imageSrc the image source
   * @param maxX the max value of x
   * @param maxY the max value of y
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = Game.randomNumber(0, maxX);
    this.yPos = Game.randomNumber(0, maxY);
  }

  public getImageHeight = (): number => this.img.height;

  public getImageWidth = (): number => this.img.height;

  public getXPos = (): number => this.xPos;

  public getYPos = (): number => this.yPos;

  /**
   * Draws the image on the canvas
   *
   * @param ctx the canvas where you want to draw
   */
  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  };
}
