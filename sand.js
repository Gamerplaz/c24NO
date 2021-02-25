class sand {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,50,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
 
      rectMode(CENTER);
      strokeWeight(4);
      stroke("Green");
      fill(255);
      ellipse(50,50,30,30)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  