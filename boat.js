class Boat{
    constructor(x,y,wi,h,o,ba){
        this.w=wi
        this.h=h
        this.o=o
        this.speed=0
        this.animation=ba
        this.flag=false
        this.body=Matter.Bodies.rectangle(x,y,wi,h
            ,{restitution:0.8,friction:1,density:1
        }
        )
        Matter.World.add(w,this.body)
        this.img=loadImage("Assets/boat.png")



        
    }
    animate(){
        this.speed+=0.05
    }
    display(){
        var i=floor(this.speed%this.animation.length)

        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.animation[i],0,this.o,this.w,this.h)
        pop()
    }
    remove(i){
        this.animation=bba
        this.speed=0.05
        this.w=300
        this.h=300
        this.flag=true
        setTimeout(()=>{
            Matter.World.remove(w,boats[i].body)
            delete boats[i]
        },10000)
    }
}
