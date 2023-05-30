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
import {RunMando} from './game.js';

export class Game extends Engine {

    constructor() {
        super({
            width: 1500,
            height: 820
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.addScene('runmando', new RunMando());

        this.goToScene('runmando');


    }
}

new Game();