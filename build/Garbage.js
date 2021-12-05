import GameItems from './GameItems.js';
export default class Garbage extends GameItems {
    score;
    constructor(maxX, maxY) {
        super('./assets/img/icecream.png', maxX - 32, maxY - 32);
    }
    getScore = () => this.score;
}
//# sourceMappingURL=Garbage.js.map