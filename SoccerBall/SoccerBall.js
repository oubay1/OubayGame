/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SoccerBall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("soccer ball", "./SoccerBall/costumes/soccer ball.svg", {
        x: 23,
        y: 22
      })
    ];

    this.sounds = [
      new Sound(
        "basketball bounce",
        "./SoccerBall/sounds/basketball bounce.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.direction = 45;
    while (true) {
      this.move(15);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Paddle"].andClones())) {
        this.stage.vars.score++;
        this.direction += this.random(140, 220);
        yield* this.wait(0.5);
      }
      yield;
    }
  }
}
