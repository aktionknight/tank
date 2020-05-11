class Ball {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'gravity':0,
          
      }
      this.body = Bodies.circle(200,200,30,options);
      
      this.radius = 30;
      this.body.velocityX = 22
this.body.velocityY = -33
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight (4);
      stroke("blue");
      fill("red");
      ellipse(0,0, this.radius);
      pop();
    }
  };