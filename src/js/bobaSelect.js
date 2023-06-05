import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class BobaFettSelect extends Actor {
    constructor() {
        super({
            width: Resources.BobaFett.width,
            height: Resources.BobaFett.height
        });
        this.pos = new Vector(1200, 320);
        this.scale = new Vector(0.5, 0.5);
    }


    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.BobaFett.toSprite());
    }
}
