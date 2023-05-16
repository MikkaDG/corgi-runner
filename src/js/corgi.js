import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Corgi extends Actor {
    constructor(posX, posY) {
        super({width: Resources.Corgi.width, height: Resources.Corgi.height})
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(30, 0)
        this.graphics.use(Resources.Corgi.toSprite())
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Corgi.toSprite())
    }
}