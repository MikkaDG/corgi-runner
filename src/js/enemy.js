import {Actor, CollisionType, Engine, Input, Shape, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Mando} from './mando.js';

export class Enemy extends Actor {
    constructor() {
        super({
            width: 100,
            height: Resources.Stormtrooper.height,
            pos: new Vector(1600, 300),
        });
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        this.vel = new Vector(-300, 0);
    }
}