import '../css/style.css';
import {Actor, Engine, Events, Input, Label, Physics, Scene, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Ceiling} from './ceiling.js';
import {DarthVader} from './darthvader.js';
import {Bullet} from './bullet.js';

export class RunMando extends Scene {

    onInitialize(engine) {
        Physics.gravity = new Vector(0, 600);
        this.game = this.engine;

        const background = new Background();
        this.add(background);

        const ground = new Ground();
        this.add(ground);

        const ground2 = new Ground2();
        this.add(ground2);

        const ceiling = new Ceiling();
        this.add(ceiling);

        const player = new Mando(250, 600);
        this.add(player);

        let lives = 3;

        player.on('collisionstart', function (event) {
            if (event.other instanceof Stormtrooper) {
                player.pos = new Vector(250, 600);
                lives--;
            }
            if (event.other instanceof DarthVader) {
                player.kill();
                lives = 0;
            }
            if (lives <= 0) {
                player.kill();
            }
            if (player.isKilled()) {
                engine.goToScene('gameover');
            }
        });

        if (
            player.pos.y > 900) {
            player.kill();
            engine.goToScene('gameover');
        }

        // this.game.input.gamepads.on('connect', function (event) {
        //     console.log('Gamepad connected');
        // });
        //
        // this.game.input.gamepads.on('disconnect', function (event) {
        //     console.log('Gamepad disconnected');
        // });
        //
        // this.game.input.gamepads.on('button.press', function (event) {
        //     if (this.game.button === ex.Input.Buttons.DpadLeft) {
        //         player.vel.x = -600;
        //     } else if (this.game.button === ex.Input.Buttons.DpadRight) {
        //         player.vel.x = 300;
        //     } else if (this.game.button === ex.Input.Buttons.Face1) {
        //         player.vel.y = -600;
        //     }
        // });


// Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'a') {
                player.vel.x = -600; // verplaats de speler met een snelheid van -600 pixels per seconde naar links
            } else if (evt.key === 'ArrowRight' || evt.key === 'd') {
                player.vel.x = 300; // verplaats de speler met een snelheid van 300 pixels per seconde naar rechts
            }
        });

// Stop de beweging van de speler wanneer de linker- of rechterpijltoets wordt losgelaten
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'a' || evt.key === 'd') {
                player.vel.x = 0; // stop de beweging van de speler
            }
        });
    }

    onPostUpdate(engine, delta) {
        const player = this.actors.find(actor => actor instanceof Mando);
        if (engine.input.keyboard.wasPressed(Input.Keys.KeyX)) {
            console.log('shoot');
            this.spawnBullet(player.pos.x, player.pos.y);
        }
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    spawnEnemy() {
        const stormtrooper = new Stormtrooper(this.generateRandomNumber(1500, 2000), 500);
        this.add(stormtrooper);

        const darthvader = new DarthVader(Math.floor(Math.random() * 5 + 1) * 2000, 500);
        this.add(darthvader);
    }

    spawnBullet(posX, posY) {
        // Maakt een nieuwe Bullet aan en voegt deze toe aan de scene
        const bullet = new Bullet(posX, posY);
        this.add(bullet);
    }

}