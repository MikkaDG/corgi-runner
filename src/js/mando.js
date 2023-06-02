import {Actor, CollisionType, Engine, Scene, Input, Vector} from 'excalibur';
import {Resources} from './resources.js';
import {Enemy} from './enemy.js';
import {Ground} from './ground.js';
import {Ground2} from './ground2.js';
import {DarthVader} from './darthvader.js';
import {Stormtrooper} from './stormtrooper.js';
import {RunMando} from './runmando.js';

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
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.vel.y === 0) {
            this.jump();
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall();
        }

        if (
            this.pos.x < -100 ||
            this.pos.x > 1600 ||
            this.pos.y < -100
        ) {
            this.vel = new Vector(0, 0);
            this.pos = new Vector(750, 450);
        }
        if (
            this.pos.y > 900) {
            this.kill();
            engine.goToScene('gameover');
        }

    }

    jump() {
        console.log('jump');
        this.vel = this.vel.add(new Vector(0, -600));

    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 100));
    }
}