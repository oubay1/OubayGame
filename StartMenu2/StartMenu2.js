/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StartMenu2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./StartMenu2/costumes/1.svg", {
        x: 244.00244615384617,
        y: 179.41372153846154
      }),
      new Costume("2", "./StartMenu2/costumes/2.svg", {
        x: 249.39779,
        y: 183.5
      }),
      new Costume("Background", "./StartMenu2/costumes/Background.svg", {
        x: 246.79558,
        y: 185
      }),
      new Costume("PlayButton", "./StartMenu2/costumes/PlayButton.svg", {
        x: -79,
        y: 77.79424
      }),
      new Costume("OptionsButton", "./StartMenu2/costumes/OptionsButton.svg", {
        x: -26,
        y: 14.601590000000016
      }),
      new Costume("QuitButton", "./StartMenu2/costumes/QuitButton.svg", {
        x: -78,
        y: -48.20576
      }),
      new Costume("ControlsMenu", "./StartMenu2/costumes/ControlsMenu.svg", {
        x: 246.79558,
        y: 185
      }),
      new Costume("BackButton", "./StartMenu2/costumes/BackButton.svg", {
        x: 231,
        y: 173.83805
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "GreenFlag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];

    this.vars.clonenum = 6;
    this.vars.deleteallclones = 0;
  }

  *whenGreenFlagClicked() {
    this.broadcast("GreenFlag");
  }

  *whenIReceiveGreenflag() {
    this.stage.vars.controlsmenuopen = 0;
    this.vars.deleteallclones = 0;
    this.visible = false;
    yield* this.buildStart(6, 0);
  }

  *buildStart(num, start) {
    this.vars.clonenum = start;
    for (let i = 0; i < this.toNumber(num); i++) {
      this.vars.clonenum++;
      this.createClone();
    }
  }

  *whenIReceiveStart() {
    this.vars.deleteallclones = 1;
    yield* this.wait(0.1);
    this.vars.deleteallclones = 0;
  }

  *startAsClone() {
    while (true) {
      if (this.toNumber(this.vars.deleteallclones) === 1) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone2() {
    this.moveAhead();
    this.visible = true;
    if (this.toNumber(this.vars.clonenum) === 1) {
      this.costume = "Background";
    }
    if (this.toNumber(this.vars.clonenum) === 2) {
      this.costume = "Cookie";
      while (true) {
        if (this.touching("mouse")) {
          this.effects.brightness = 20;
          this.size = this.size + (110 - this.size) / 3;
          this.x = this.x + (20 - this.x) / 3;
        } else {
          this.effects.brightness = 0;
          this.x = this.x + (0 - this.x) / 3;
          if (!(this.size === 100)) {
            this.size = this.size + (100 - this.size) / 3;
          }
        }
        yield;
      }
    }
    if (this.toNumber(this.vars.clonenum) === 3) {
      this.costume = "PlayButton";
      while (true) {
        this.y = 0 + 10 * Math.cos(this.degToRad((this.timer - 3) * 150));
        if (this.touching("mouse")) {
          this.effects.brightness = 20;
          this.size = this.size + (110 - this.size) / 3;
          this.x = this.x + (-20 - this.x) / 3;
        } else {
          this.effects.brightness = 0;
          this.x = this.x + (0 - this.x) / 3;
          if (!(this.size === 100)) {
            this.size = this.size + (100 - this.size) / 3;
          }
        }
        if (this.touching("mouse") && this.mouse.down) {
          while (!!this.mouse.down) {
            yield;
          }
          this.broadcast("Start");
        }
        yield;
      }
    }
    if (this.toNumber(this.vars.clonenum) === 4) {
      this.costume = "OptionsButton";
      while (true) {
        this.y = 0 + 10 * Math.cos(this.degToRad((this.timer - 3) * 150));
        if (this.touching("mouse")) {
          this.effects.brightness = 20;
          this.size = this.size + (110 - this.size) / 3;
          this.x = this.x + (-20 - this.x) / 3;
        } else {
          this.effects.brightness = 0;
          this.x = this.x + (0 - this.x) / 3;
          if (!(this.size === 100)) {
            this.size = this.size + (100 - this.size) / 3;
          }
        }
        if (this.touching("mouse") && this.mouse.down) {
          while (!!this.mouse.down) {
            yield;
          }
          this.goto(0, 0);
          this.size = 100;
          this.costume = "ControlsMenu";
          this.effects.clear();
          this.moveAhead();
          this.stage.vars.controlsmenuopen = 1;
          while (!(this.toNumber(this.stage.vars.controlsmenuopen) === 0)) {
            yield;
          }
          this.costume = "OptionsButton";
        }
        yield;
      }
    }
    if (this.toNumber(this.vars.clonenum) === 5) {
      this.costume = "QuitButton";
      while (true) {
        this.y = 0 + 10 * Math.cos(this.degToRad((this.timer - 3) * 150));
        if (this.touching("mouse")) {
          this.effects.brightness = 20;
          this.size = this.size + (110 - this.size) / 3;
          this.x = this.x + (-20 - this.x) / 3;
        } else {
          this.effects.brightness = 0;
          this.x = this.x + (0 - this.x) / 3;
          if (!(this.size === 100)) {
            this.size = this.size + (100 - this.size) / 3;
          }
        }
        if (this.touching("mouse") && this.mouse.down) {
          while (!!this.mouse.down) {
            yield;
          }
          /* TODO: Implement stop all */ null;
        }
        yield;
      }
    }
    if (this.toNumber(this.vars.clonenum) === 6) {
      this.costume = "BackButton";
      while (true) {
        if (this.toNumber(this.stage.vars.controlsmenuopen) === 1) {
          this.moveAhead();
          this.visible = true;
          if (this.touching("mouse")) {
            this.size = this.size + (102 - this.size) / 3;
            this.effects.brightness = 20;
          } else {
            this.size = this.size + (100 - this.size) / 3;
            this.effects.brightness = 0;
          }
          if (this.touching("mouse") && this.mouse.down) {
            while (!!this.mouse.down) {
              yield;
            }
            this.stage.vars.controlsmenuopen = 0;
          }
        } else {
          this.visible = false;
        }
        yield;
      }
    }
  }
}
