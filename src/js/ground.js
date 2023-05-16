import {Actor, CollisionType, Engine, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Ground extends Actor {
    constructor() {
        super({
            width: Resources.Ground.width,
            height: Resources.Ground.height,
            pos: new Vector(590, 760)
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground.toSprite())
        this.body.collisionType = CollisionType.Fixed
    }
}