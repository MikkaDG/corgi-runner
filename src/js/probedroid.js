import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Mando} from "./mando.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './game.js';

export class Probedroid extends Enemy {
    constructor() {
        super({})
        this.scale = new Vector(0.25, 0.25)
        // this.on("collisionstart", (event) => this.hitSomething(event))
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Probedroid.toSprite())
        this.vel = new Vector(-300, 0)
        this.body.useGravity = false
        this.body.collisionType = CollisionType.Active
    }
}