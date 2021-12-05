import Egg from './Egg.js';
import Garbage from './Garbage.js';
import Player from './Player.js';
import UserData from './UserData.js';
export default class Game {
    canvas;
    ctx;
    user;
    garbageItems;
    eggs;
    player;
    countUntilNextItem;
    gameLoop;
    constructor(canvas) {
        this.user = new UserData();
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.garbageItems = [];
        this.eggs = [];
        for (let i = 0; i < Game.randomNumber(3, 10); i++) {
            this.garbageItems.push(new Garbage(this.canvas.width, this.canvas.height));
            this.eggs.push(new Egg(this.canvas.width, this.canvas.height));
        }
        this.player = new Player(canvas.width, canvas.height);
        this.countUntilNextItem = 300;
        this.loop();
    }
    loop = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.move(this.canvas);
        this.draw();
        if (this.player.isCleaning()) {
            this.cleanUpGarbage();
            this.cleanUpEggs();
        }
        this.writeTextToCanvas(`score: ${this.user.getScore()}`, 36, 120, 50);
        if (this.countUntilNextItem === 0) {
            const choice = Game.randomNumber(0, 10);
            if (choice < 5) {
                this.garbageItems.push(new Garbage(this.canvas.width, this.canvas.height));
            }
            if (choice > 7) {
                this.eggs.push(new Egg(this.canvas.width, this.canvas.height));
            }
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= 1;
        requestAnimationFrame(this.loop);
    };
    draw() {
        this.garbageItems.forEach((element) => {
            element.draw(this.ctx);
        });
        this.eggs.forEach((element) => {
            element.draw(this.ctx);
        });
        this.player.draw(this.ctx);
    }
    cleanUpGarbage() {
        this.garbageItems = this.garbageItems.filter((element) => {
            if (this.player.collidesWith(element)) {
                this.user.addScore(1);
                return false;
            }
            return true;
        });
    }
    cleanUpEggs() {
        this.eggs = this.eggs.filter((element) => {
            if (this.player.collidesWith(element)) {
                this.user.addScore(-3);
                return false;
            }
            return true;
        });
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map