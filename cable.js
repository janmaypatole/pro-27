
    class Cable{
        constructor(x,y,width,height){
        var options={
            isStatic:true
        }
            
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height= height;
            World.add(World,this.body);
            
        
    }


display(){
var pos = this.body.position
var angle = this.body.angle
cable.x= mouseX


Push();
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeweight(2)
stroke(black)
fill(255)
rect(0,0,this.width,this.height)
pop();
}

}