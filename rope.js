class Rope{
    constructor(a,b,ox,oy)
    {

        this.offsetY=oy;
        this.offsetX=ox;
        var options={
            bodyA:a,
            bodyB:b,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pa=this.rope.bodyA.position;
        var pb=this.rope.bodyB.position;
        strokeWeight(2);
        line (pa.x,pa.y,pb.x+this.offsetX,pb.y+this.offsetY);

    }


}