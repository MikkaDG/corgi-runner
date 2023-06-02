import '../css/style.css';
import {Actor, Engine, Label, Physics, Scene, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Ceiling} from './ceiling.js';
import {DarthVader} from './darthvader.js';

export class RunMando extends Scene {

    onInitialize(engine) {
        Physics.gravity = new Vector(0, 600);
        this.game = this.engine

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

        let lives = 3

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
            if (player.isKilled()){
                engine.goToScene('gameover');
            }
        });

        if (
            player.pos.y > 900) {
            player.kill();
            engine.goToScene('gameover');
        }


// Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft') {
                player.vel.x = -600; // verplaats de speler met een snelheid van -100 pixels per seconde naar links
                // player.scale.x = -1;
            } else if (evt.key === 'ArrowRight') {
                player.vel.x = 300; // verplaats de speler met een snelheid van 100 pixels per seconde naar rechts
                // player.scale.x = 1;
            }
        });

// Stop de beweging van de speler wanneer de linker- of rechterpijltoets wordt losgelaten
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight') {
                player.vel.x = 0; // stop de beweging van de speler
            }
        });
    }

    spawnEnemy() {
        const stormtrooper = new Stormtrooper(1600, 300);
        this.add(stormtrooper);

        const darthvader = new DarthVader(Math.floor(Math.random() * 10 + 1) * 1000, 300);
        this.add(darthvader);
    }
}