class dustbin {
    constructor(x,y){
      
        this.x = x;
        this.y = y;
        this.w = 200
        this.h = 100
        this.t = 20
        this.angle = 0
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.w,this.t, {
            isStatic: true
        })
        this.leftBody = Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h, {
            isStatic: true
        })
        this.rightBody = Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.t,this.h, {
            isStatic: true
        })
        Matter.Body.setAngle(this.leftBody,this.angle)
        Matter.Body.setAngle(this.rightBody,-1*this.angle)
        World.add(world,this.bottomBody)
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)
    }
    display(){
        var pb = this.bottomBody.position
        var pl = this.leftBody.position
        var pr = this.rightBody.position
        push();
        translate(pr.x,pr.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3)
        fill(0,0,255)
        rotate(this.angle)
        rect(0,0,this.t,this.h)
        pop();
        push();
        translate(pl.x,pl.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3)
        fill(0,0,255)
        rotate(this.angle)
        rect(0,0,this.t,this.h)
        pop();
        push();
        translate(pb.x,pb.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3)
        fill(0,0,255)
        rotate(this.angle)
        rect(0,0,this.w,this.t)
        pop();
    }
}