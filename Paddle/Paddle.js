/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./Paddle/costumes/paddle.svg", { x: 44, y: 7 })
    ];

    this.sounds = [new Sound("boing", "./Paddle/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.x = this.mouse.x;
      yield;
    }
  }
}
