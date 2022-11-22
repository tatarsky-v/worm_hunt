// Wait page loading
document.addEventListener("DOMContentLoaded", start);

function start() {
  // Create view
  let app = new PIXI.Application({ width: 640, height: 360 });
  document.body.appendChild(app.view);

  // Add sprite
  let sprite = PIXI.Sprite.from('ball.png');
  app.stage.addChild(sprite);
}
