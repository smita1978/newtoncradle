class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution':1.0,
            friction:0.5,
            density:10
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        //this.image=loadImage("paper.png");
        World.add(world,this.body);
   
         }
         display(){
            var pos = this.body.position;
            ellipseMode(CENTER);
            fill ('pink');
            ellipse(pos.x,pos.y,this.radius+20,this.radius+20);
         }
}