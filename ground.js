class ground{
    constructor(x,y,wi,h){
        console.log(3)
        this.body=Matter.Bodies.rectangle(x,y,wi,h,{isStatic:true})
        console.log(5)
         Matter.World.add(w,this.body)
       // Matter.World.add(w,this.body)
        console.log(7)
        this.w=wi
        this.h=h
        console.log(9)

    }
    makeGround(){
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}