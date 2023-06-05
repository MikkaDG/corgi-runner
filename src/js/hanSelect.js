import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class HanSoloSelect extends Actor {
    constructor() {
        super({
            width: Resources.HanSolo.width,
            height: Resources.HanSolo.height
        });
        this.pos = new Vector(900, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.HanSolo.toSprite());
    }
}
