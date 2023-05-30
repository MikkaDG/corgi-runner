import {Actor, CollisionType, Engine, Input, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Enemy} from './enemy.js';

export class Mando extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Mando.width,
            height: Resources.Mando.height
        });
        this.pos = new Vector(posX, posY);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
        this.graphics.use(Resources.Mando.toSprite());
        this.scale = new Vector(0.8, 0.8);
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        console.log(event);
        if (event.other instanceof Enemy) {
            this.kill();
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump();
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall();
        }

    }

    jump() {
        console.log('jump');
        this.vel = this.vel.add(new Vector(0, -600));
    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 200));
    }


}