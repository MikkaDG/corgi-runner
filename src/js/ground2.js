import {Actor, CollisionType, Engine, GraphicsGroup, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Ground2 extends Actor {
    constructor() {
        super({
            width: Resources.Ground.width,
            height: Resources.Ground.height,
            pos: new Vector(2500, 760)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = false
        this.vel = new Vector(-500, 0)
    }

    onPreUpdate(engine, delta) {
        if (this.pos.x < -780) {
            this.pos = new Vector(3200, Math.random() * 300 + 560)
        }
    }
}