class Ground{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
        }
        this.width=width;
        this.height=height;
        this.ground=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.ground);
        
    }

    display()
    {
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}