import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class Start extends Scene {
    shouldStart;
    keyListener;
    constructor(game, ctx) {
        super(game, ctx);
        this.ctx = ctx;
    }
    processInput = () => {
        if (this.keyListener.isKeyDown(KeyListener.KEY_S)) {
            this.shouldStart = true;
        }
    };
    update = (elapsed) => {
        if (this.shouldStart) {
            return new Scene(this.game, this.ctx);
        }
        return null;
    };
    render = () => {
    };
}
//# sourceMappingURL=Start.js.map