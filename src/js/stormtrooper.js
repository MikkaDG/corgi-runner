import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Mando} from "./mando.js";
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Game} from './run-game.js';

export class Stormtrooper extends Enemy {
    constructor() {
        super({})
        this.scale = new Vector(0.25, 0.25)
        // this.on("collisionstart", (event) => this.hitSomething(event))
    }

    onInitialize(engine) {
        super.onInitialize(engine)
        this.graphics.use(Resources.Stormtrooper.toSprite())
        this.vel = new Vector(-300, 1000)
        this.body.useGravity = true
        this.body.collisionType = CollisionType.Active
    }
}