import '../css/style.css'
import {Actor, Engine, Physics, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Corgi} from "./corgi.js";
import {Ground} from "./ground.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1500, height: 820 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        Physics.gravity = new Vector(0,600)
        console.log("start de game!")
        const player = new Corgi(150, 600)
        this.add(player)

        const ground = new Ground()
        this.add(ground)

// Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        this.input.keyboard.on("down", (evt) => {
            if (evt.key === "ArrowLeft") {
                player.vel.x = -100; // verplaats de speler met een snelheid van -100 pixels per seconde naar links
            } else if (evt.key === "ArrowRight") {
                player.vel.x = 100; // verplaats de speler met een snelheid van 100 pixels per seconde naar rechts
            }
        });

// Stop de beweging van de speler wanneer de linker- of rechterpijltoets wordt losgelaten
        this.input.keyboard.on("up", (evt) => {
            if (evt.key === "ArrowLeft" || evt.key === "ArrowRight") {
                player.vel.x = 0; // stop de beweging van de speler
            }
        });



    }
}

new Game()