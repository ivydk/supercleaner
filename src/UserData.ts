export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  /**
   * Construct a new instant of this class
   */
  public constructor() {
    // starting values
    this.name = 'player one'; // make a random name method
    this.score = 0;
    this.level = 1; // it's possible that you start at 0
  }

  /**
   * This is a get function that returns the name
   *
   * @returns the name
   */
  public getName = (): string => this.name;

  /**
   *
   * @param name the new name to set
   */
  public setName = (name: string): void => {
    this.name = name;
  };

  /**
   *
   * @returns the score
   */
  public getScore = (): number => this.score;

  /**
   * you can add a number of points to the score
   *
   * @param points number of points to add
   */
  public addScore = (points: number): void => {
    this.score += points;
  };

  /**
   *
   * @returns the level
   */
  public getLevel = (): number => this.level;

  /**
   * increases the level by one
   */
  public increaseLevel = (): void => {
    this.level += 1;
  };
}
