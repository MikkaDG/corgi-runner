import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Corgi} from "./corgi.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1400, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const corgi = new Corgi(150, 600)
        this.add(corgi)
    }
}

new Game()