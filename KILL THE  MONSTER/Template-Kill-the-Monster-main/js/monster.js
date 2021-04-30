class Monster{
    constructor(x,y,width,height)
    {
        var options={
            density:1,
            frictionAir:1
          }
        this.radius=radius
        this.monster=Bodies.circle(x,y,(this.radius)/2,options);
        this.monsterImage=loadImage("images/Monster-01.png");
        World.add(world,this.monster);

    }

    display()
    {
        ellipseMode(CENTER);
        ellipse(this.monster.position.x,this.monster.position.y,this.radius);

        imageMode(CENTER);
        image(this.monsterImage,this.monster.position.x,this.monster.position.y,this.radius)
    }
}