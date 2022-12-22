// class Canonball{
//     constructor(x,y){
//         this.r=30
//         this.body=Matter.Bodies.circle(x,y,this.r,{isStatic:true})
//         Matter.World.add(w,this.body)

//     }
//     display(){
//         ellipse(this.body.position.x,this.body.position.y,60,60)
//         image(cbi,this.body.position.x,this.body.position.y,this.r,this.r)
//         console.log("cbd")
//     }
//     shoot(){
//     
//         console.log(15,this.body)
//     }
// }
class Canonball{
    constructor(x,y){
        this.r=30
        this.body=Matter.Bodies.circle(x,y,this.r,{isStatic:true})
        Matter.World.add(w,this.body)
        this.flag=false

    }
    display(){
        image(cbi,this.body.position.x,this.body.position.y,this.r,this.r)
        console.log("cbd")
    }
    shoot(){
       // Matter.Body.setStatic(this.body,false)
       // Matter.Body.setVelocity(this.body,{x:30,y:-30})
       // console.log(15,this.body)
       var a=cannon.angle+-25
             a*=(3.14/180)  
             var v=p5.Vector.fromAngle(a)
             v.mult(0.5)
       
               Matter.Body.setStatic(this.body,false)
               Matter.Body.setVelocity(this.body,{x:v.x*(180/3.14),y:v.y*(180/3.14)})


    }
    remove(i){
        Matter.Body.setVelocity(this.body,{x:0,y:0})
        this.flag=true
        setTimeout(()=>{
            Matter.World.remove(w,balls[i].body)
            delete balls[i]
        },3000)
    }
}