import GameItems from './GameItems.js';
export default class Egg extends GameItems {
    score;
    constructor(maxX, maxY) {
        super('./assets/img/egg.png', maxX - 32, maxY - 32);
    }
    getScore = () => this.score;
}
//# sourceMappingURL=Egg.js.map