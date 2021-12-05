import GameItems from './GameItems.js';

export default class Egg extends GameItems {
  private score: number;

  /**
   * Construct a new instant of this class
   *
   * @param maxX the max x value
   * @param maxY the max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/egg.png', maxX - 32, maxY - 32);
  }

  /**
   * Gets the score
   *
   * @returns the score
   */
  public getScore = (): number => this.score;
}
