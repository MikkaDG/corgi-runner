import '../css/style.css';
import {Actor, Engine, Label, Physics, Scene, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Enemy} from './enemy.js';
import {Ceiling} from './ceiling.js';

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

        const scoreLabel = new Label('Score: 0');
        scoreLabel.pos = new Vector(50, 50);
        scoreLabel.fontSize = 30;
        scoreLabel.color = 'white';
        this.add(scoreLabel);

        // function spawnStormtrooper() {
        //     const stormtrooper = new Stormtrooper();
        //     this.add(stormtrooper);
        // }


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

    spawnStormtrooper() {
        const stormtrooper = new Stormtrooper();
        this.add(stormtrooper);
    }
}