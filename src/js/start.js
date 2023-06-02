import '../css/style.css';
import {Actor, Color, Engine, Label, Physics, Scene, TextAlign, Vector, Input} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Ceiling} from './ceiling.js';
import {DarthVader} from './darthvader.js';
import {StartBackground} from './startBackground.js';
import {Play} from './playImage.js';

export class Start extends Scene {
    onInitialize(engine) {

        const startbackground = new StartBackground();
        this.add(startbackground);

        const startText = new Label({
            text: 'Click on the button below to fight the Empire!',
            pos: new Vector(650, 250),
            textAlign: TextAlign.Center,
            fontSize: 40,
            color: Color.White
        });
        this.add(startText);

        const startButton = new Play({
            x: 750,
            y: 410,
            width: 200,
            height: 50,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(startButton);

        startButton.on('pointerup', () => {
            engine.goToScene('runmando'); // Stuur de gebruiker naar de speelscene
        });

    }
}
