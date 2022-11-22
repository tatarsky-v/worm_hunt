// Wait page loading
document.addEventListener("DOMContentLoaded", start);

function start() {
  let width = 640; 
  let height = 480;
  // Create view
  let app = new PIXI.Application({ width: width, height: height, backgroundColor: 0x2980b9 });
  document.body.appendChild(app.view);

  // Add sprite
  let ball1 = PIXI.Sprite.from('./sprites/ball.png');
  let ball2 = PIXI.Sprite.from('./sprites/ball.png');
  let ball3 = PIXI.Sprite.from('./sprites/ball.png');

  app.stage.addChild(ball1);
  app.stage.addChild(ball2);
  app.stage.addChild(ball3);

  // Add a variable to count up the seconds our demo has been running
  let elapsed = 0.0;
  // Tell our application's ticker to run a new callback every frame, passing
  // in the amount of time that has passed since the last tick
  app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    elapsed += delta;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    ball1.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    ball1.y = 100.0 + Math.sin(elapsed/50.0) * 100.0;

    ball2.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    
    ball3.y = 100.0 + Math.sin(elapsed/50.0) * 100.0;
  });
 
}
