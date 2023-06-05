import {Actor, CollisionType, Engine, Input, Shape, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Mando} from './mando.js';

export class Enemy extends Actor {
    constructor(posX, posY) {
        super({
            width: 100,
            height: 600,
            vel: new Vector(-500, 1000)
        });
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true;
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        this.vel = new Vector(-500, 1000)
        if (event.other instanceof Mando) {
            this.kill()
        }
    }
}