import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {StartBackground} from './startBackground.js';
import {Home} from './homeImage.js';

export class GameOver extends Scene {
    storedScores = JSON.parse(localStorage.getItem('scores'));
    lastScore = (this.storedScores)[this.storedScores.length - 1];

    onInitialize(engine) {

        // const topThreeScores = storedScores.slice(0, 3);

        const gameOverbackground = new StartBackground();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'You died! Click on the button below to go back to the start screen!',
            pos: new Vector(240, 250),
            textAlign: TextAlign.Center,
            color: Color.Yellow,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        const lastScoreLabel = new Label({
            text: 'Last Score: ' + this.lastScore,
            pos: new Vector(650, 350),
            color: Color.White,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        // const leaderboardLabel = new Label({
        //     text: 'Leaderboard:',
        //     pos: new Vector(650, 400),
        //     color: Color.White,
        //     font: new Font({
        //         family: 'impact',
        //         size: 30,
        //         unit: FontUnit.Px
        //     }),
        //     textAlign: TextAlign.Center
        // });
        // this.add(leaderboardLabel);

        // for (let i = 0; i < topThreeScores.length; i++) {
        //     const score = topThreeScores[i];
        //     const scoreLabel = new Label({
        //         text: (i + 1) + '. ' + score,
        //         pos: new Vector(650, 450 + i * 50),
        //         color: Color.White,
        //         font: new Font({
        //             family: 'impact',
        //             size: 30,
        //             unit: FontUnit.Px
        //         }),
        //         textAlign: TextAlign.Center
        //     });
        //     this.add(scoreLabel);
        // }

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
