class Paper {
    constructor(){
        var options = {
            
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body= Bodies.circle(240,500,20,options);
    this.width=33;
    this.image=loadImage("paper.png")
     World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}