export default class UserData {
    name;
    score;
    level;
    constructor() {
        this.name = 'player one';
        this.score = 0;
        this.level = 1;
    }
    getName = () => this.name;
    setName = (name) => {
        this.name = name;
    };
    getScore = () => this.score;
    addScore = (points) => {
        this.score += points;
    };
    getLevel = () => this.level;
    increaseLevel = () => {
        this.level += 1;
    };
}
//# sourceMappingURL=UserData.js.map