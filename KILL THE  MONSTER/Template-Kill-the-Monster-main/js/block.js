class Block{
    constructor(x,y,width,height)
 {
     var options={
         'restitution':0.8,
         'friction':1.0,
         'density':20,
     }
     this.width=width;
     this.height=height;
     this.block=Bodies.rectangle(x,y,this.width,this.height,options);
     World.add(world,this.block);
  }

  display()
  {
      var pos=this.block.position;
      var angle=this.block.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0,0,this.width,this.height);
      pop();
  }
    
}