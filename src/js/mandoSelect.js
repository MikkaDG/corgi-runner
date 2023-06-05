import {Actor, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class MandoSelect extends Actor {
    constructor() {
        super({
            width: Resources.Mando.width,
            height: Resources.Mando.height
        });
        this.pos = new Vector(300, 320);
        this.scale = new Vector(0.5, 0.5);

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(Resources.Mando.toSprite());
    }
}
