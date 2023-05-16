import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Corgi} from "./corgi.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1520, height: 820 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        Physics.gravity = new Vector(0, 400);
        console.log("start de game!")
        const player = new Corgi(350, 300)
        this.add(player)
    }
}

new Game()