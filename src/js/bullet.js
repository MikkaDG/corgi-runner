import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Stormtrooper} from './stormtrooper.js';
import {Enemy} from './enemy.js';

export class Bullet extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Bullet.width,
            height: Resources.Bullet.height
        })
        this.pos = new Vector(posX + 100, posY);
        this.scale = new Vector(0.5, 0.5)
        this.vel = new Vector(1000, 0);
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Bullet.toSprite())
    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            this.kill();
            event.other.kill();
        }
    }
}