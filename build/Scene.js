import Start from './Start.js';
export default class Scene {
    game;
    start;
    ctx;
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.start = new Start(this.game, ctx);
    }
    processInput = () => {
    };
    update = (elapsed) => {
        if (this.start.update) {
            return new Start(this.game, this.ctx);
        }
        return null;
    };
    render = () => {
    };
    writeTextToCanvas = (text, xCoordinate, yCoordinate, fontSize, color, alignment = 'center') => {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    };
}
//# sourceMappingURL=Scene.js.map