import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Rock extends Actor {
    constructor() {
        super({
            width: 160,
            height: Resources.Ground.height,
            pos: new Vector(800, 560),
        })
        this.body.useGravity = true
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Rock.toSprite())
        this.body.collisionType = CollisionType.Fixed
    }
}