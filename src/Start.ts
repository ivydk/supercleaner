import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class Start extends Scene {
  protected shouldStart: boolean;

  private keyListener: KeyListener;

  /**
   * constructs a new Start object
   *
   * @param game Game object
   * @param ctx the canvas to render on
   */
  public constructor(game: Game, ctx: CanvasRenderingContext2D) {
    super(game, ctx);
    this.game = game;
    this.ctx = ctx;
    this.shouldStart = false;
    this.keyListener = new KeyListener();
  }

  /**
   *
   */
  public processInput = (): void => {
    if (this.keyListener.isKeyDown(KeyListener.KEY_S)) {
      this.shouldStart = true;
    }
  };

  /**
   * determines wether or not a new scene should start
   *
   * @returns a scene
   */
  public update = (): Scene => {
    if (this.shouldStart) {
      // Proceed to the next screen
      return new Scene(this.game, this.ctx);
    }
    return null;
  };

  /**
   *
   */
  public render = (): void => {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    // Show score
    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas('SuperCleaner', 128, centerX, 250, 'center', 'red');
    this.game.writeTextToCanvas(`Ready ${this.game.getUser().getName()}`, 48, centerX,
      450, 'center', 'yellow');
    this.game.writeTextToCanvas("Type 's' to start", 48, centerX,
      550, 'center', 'white');
  };
}
