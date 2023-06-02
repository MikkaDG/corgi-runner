import '../css/style.css';
import {Actor, Engine, Label, Physics, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Mando} from './mando.js';
import {Ground} from './ground.js';
import {Background} from './background.js';
import {Stormtrooper} from './stormtrooper.js';
import {Ground2} from './ground2.js';
import {Enemy} from './enemy.js';
import {Ceiling} from './ceiling.js';
import {RunMando} from './runmando.js';
import {Start} from './start.js';
import {Gameover} from './gameover.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1500,
            height: 820
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.addScene('start', new Start());
        this.addScene('runmando', new RunMando());
        this.addScene('gameover', new Gameover());

        this.goToScene('start');


    }
}

new Game();