import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SoccerBall from "./SoccerBall/SoccerBall.js";
import StartMenu2 from "./StartMenu2/StartMenu2.js";
import Paddle from "./Paddle/Paddle.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  SoccerBall: new SoccerBall({
    x: -75.67115947164086,
    y: -87.65670759772588,
    direction: -103.38084845394633,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  StartMenu2: new StartMenu2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Paddle: new Paddle({
    x: 112,
    y: -140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
