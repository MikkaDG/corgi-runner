import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {StartBackground} from './startBackground.js';
import {Home} from './homeImage.js';
import {Play} from './playImage.js';
import {Sound} from 'excalibur';
import {Background} from './background.js';
import {Mando} from './mando.js';
import {setSprite} from './mando.js';
import {HanSoloSelect} from './hanSelect.js';
import {BoKatanSelect} from './boSelect.js';
import {MandoSelect} from './mandoSelect.js';
import {BobaFettSelect} from './bobaSelect';

export class Pause extends Scene {
    game;


    onInitialize(engine) {
        this.game = engine;

        // Voeg elementen toe aan het pauzescherm, zoals instellingenlabels en knoppen
        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const headerLabel = new Label({
            text: 'Paused',
            pos: new Vector(670, 100),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(headerLabel);

        const pickSpriteLabel = new Label({
            text: 'Change your character',
            pos: new Vector(600, 200),
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(pickSpriteLabel);

        const toggleMandoSpriteButton = new MandoSelect({
            pos: new Vector(300, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleMandoSpriteButton);

        toggleMandoSpriteButton.on('pointerup', () => {
            setSprite(1); // Verander sprite naar 1
        });

        const toggleBoKatanSpriteButton = new BoKatanSelect({
            pos: new Vector(600, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleBoKatanSpriteButton);

        toggleBoKatanSpriteButton.on('pointerup', () => {
            setSprite(2); // Verander sprite naar 2
        });

        const toggleHanSoloSpriteButton = new HanSoloSelect({
            pos: new Vector(900, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleHanSoloSpriteButton);

        toggleHanSoloSpriteButton.on('pointerup', () => {
                setSprite(3); // Verander sprite naar 3
            }
        );

        const toggleBobbaFettSpriteButton = new BobaFettSelect({
            pos: new Vector(1200, 320),
            width: 200,
            height: 50,
        });
        this.add(toggleBobbaFettSpriteButton);

        toggleBobbaFettSpriteButton.on('pointerup', () => {
            setSprite(4); // Verander sprite naar 4
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