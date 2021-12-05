import Game from './Game.js';
import Start from './Start.js';

/**
 * A superclass for objects that must be able to be animated by a `GameLoop`.
 *
 * Implementing classes must override the three methods `processInput()`,
 * `update(elapsed)` and `render()`.
 *
 * @see GameLoop
 * @author BugSlayer
 */
export default class Scene {
  protected readonly game: Game;

  private start: Start;

  protected ctx: CanvasRenderingContext2D;

  /**
   * construct a new instance of Scene
   *
   * @param game Game object
   * @param ctx canvas to draw on
   */
  public constructor(game: Game, ctx: CanvasRenderingContext2D) {
    this.game = game;
    this.ctx = ctx;
    this.start = new Start(this.game, ctx);
  }

  /**
   *  Handles any user input that has happened since the last call
   */
  public processInput = (): void => {

  };

  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   * elapsed: number -> was a parameter
   *
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update = (): Scene => {
  };

  /**
   * Draw the game so the player can see what happened
   */
  public render = (): void => {

  };

  /**
   * Writes text to canvas
   *
   * @param text string you want to write on the canvas
   * @param xCoordinate x coordinate
   * @param yCoordinate y coordinate
   * @param fontSize size of the font
   * @param color color of the font
   * @param alignment text alignment, 'center' is always given
   */
  protected writeTextToCanvas = (text: string, xCoordinate: number, yCoordinate: number, fontSize: number, color: string, alignment: CanvasTextAlign = 'center'): void => {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  };
}
