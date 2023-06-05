import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class BoKatanSelect extends Actor {
    constructor() {
        super({
            width: Resources.BoKatan.width,
            height: Resources.BoKatan.height
        });
        this.pos = new Vector(600, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.BoKatan.toSprite());
    }
}
