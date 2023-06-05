import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Mando} from "./mando.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './game.js';

export class Stormtrooper extends Enemy {
    constructor(posX, posY) {
        super({
        })
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.30, 0.30)
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Stormtrooper.toSprite())
    }


}