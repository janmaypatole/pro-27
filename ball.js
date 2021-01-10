class Ball{
    constructor(x,y,width,height){
    var_option={
        isStatic:true
    }
        
        this.Body = bodies.rectangle(x,y,width,height);
        this.width = width
        this.height= height
        World.add(world,this.body)
        
    
}

display(){
var pos = this.body.position
var angle = this.body.angle
cable.x= ball.x


push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeweight(2)
fill(255)
stroke(black)
rect(0,0,this.x,y,this.width,this.height)
Pop()
}

}

