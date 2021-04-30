class Hero{
    constructor(x,y,width,height)
    {
      var options={
        density:1,
        frictionAir:1
      }
        
        this.width=width;
        this.height=height;
        this.hero=Bodies.rectangle(x,y,this.width,this.height,options);
        this.heroImage=loadImage("images/Superhero-01.png");
        this.hero.scale=0.5;
        World.add(world,this.hero);
    }


    display()
    {
      // rectMode(CENTER);
    // rect(this.hero.position.x,this.hero.position.y,this.width,this.height);

   imageMode(CENTER);
   image(this.heroImage,this.hero.position.x,this.hero.position.y,this.width,this.height);
    }
}