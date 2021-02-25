class rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,100,options);
      //this.radius = 50 ;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("Green");
      fill(255);
      ellipse(55,55,60)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  