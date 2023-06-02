import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Ceiling} from './ceiling.js';
import {DarthVader} from './darthvader.js';
import {StartBackground} from './startBackground.js';
import {Home} from './homeImage.js';

export class Gameover extends Scene {
    onInitialize(engine) {

        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'You died! Click on the Stormtrooper to go back to the start screen!',
            pos: new Vector(600, 250),
            textAlign: TextAlign.Center,
            fontSize: 40,
            color: Color.White
        });
        this.add(gameOverText);

        const backButton = new Home({
            x: 750,
            y: 410,
            width: 200,
            height: 50,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            engine.goToScene('start'); // Stuur de gebruiker naar de startscene
        });


    }
}
