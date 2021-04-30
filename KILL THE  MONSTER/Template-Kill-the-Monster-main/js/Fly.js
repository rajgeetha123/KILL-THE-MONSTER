class Fly{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.5            
        }
        this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
   show(){
        image(this.sling1,200,20);
        
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
                strokeWeight(0);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}