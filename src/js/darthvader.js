import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Mando} from "./mando.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './game.js';

export class DarthVader extends Enemy {
    constructor(posX, posY) {
        super({
        })
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.35, 0.35)
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.DarthVader.toSprite())
    }

    hitSomething() {
        this.vel = new Vector(-300, 0);
    }
}