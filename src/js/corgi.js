import {Actor, CollisionType, Engine, Input, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Corgi extends Actor {
    constructor(posX, posY) {
        super({width: Resources.Corgi.width, height: Resources.Corgi.height})
        this.pos = new Vector(posX, posY)
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
        this.graphics.use(Resources.Corgi.toSprite())
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump()
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall()
        }

    }

    jump(){
        console.log("jump")
        this.vel = this.vel.add(new Vector(0,-600))
    }

    fall(){
        this.vel = this.vel.add(new Vector(0,100))
    }

}