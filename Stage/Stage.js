/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Stage/costumes/1.svg", { x: 240, y: 180 }),
      new Costume("Castle 1", "./Stage/costumes/Castle 1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.controlsmenuopen = 0;
    this.vars.score = 29;

    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 245,
      y: 175
    });
  }
}
