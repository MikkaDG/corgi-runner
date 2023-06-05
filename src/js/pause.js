import '../css/style.css';
import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import { StartBackground } from './startBackground.js';
import { Home } from './homeImage.js';
import {Play} from './playImage.js';
import { Sound } from 'excalibur';
import {Background} from './background.js';
import {Mando} from './mando.js';
import { setSprite } from './mando.js';

export class Pause extends Scene {
    game;


    onInitialize(engine) {
        this.game = engine;

        // Voeg elementen toe aan het pauzescherm, zoals instellingenlabels en knoppen
        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const toggleMandoSpriteButton = new Label({
            text: 'Toggle Mando Sprite',
            pos: new Vector(600, 200),
            width: 200,
            height: 50,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
            color: Color.Yellow
        });
        this.add(toggleMandoSpriteButton);

        toggleMandoSpriteButton.on('pointerup', () => {
            setSprite(1); // Verander sprite naar 1
        });

        const toggleBoKatanSpriteButton = new Label({
            text: 'Toggle Bo-Katan Sprite',
            pos: new Vector(600, 250),
            width: 200,
            height: 50,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
            color: Color.Yellow
        });
        this.add(toggleBoKatanSpriteButton);

        toggleBoKatanSpriteButton.on('pointerup', () => {
            setSprite(2); // Verander sprite naar 2
        });



        // Voorbeeld: Terugknop om terug te keren naar de hoofdscene
        const backButton = new Play({
            text: 'Back',
            pos: new Vector(600, 400),
            width: 200,
            height: 50
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            engine.goToScene('runmando'); // Keer terug naar de hoofdscene wanneer de knop wordt ingedrukt
        });
    }

}