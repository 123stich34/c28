var  bg,tower,ti,e,w,cb,c,cannon,cbi,cbl,angle,balls,g,boats,
ba,bd,bss,bba,bbd,bdss,bgs,pl,ws,ce

function preload(){
bg=loadImage ("./Assets/background.gif")
ti=loadImage("./Assets/tower.png")
cb=loadImage("./Assets/cannon_base.png")
c=loadImage("./Assets/CANON.png")
cbi=loadImage("./Assets/cannonball.png")


bd=loadJSON("Assets/boat/boat.json")
bss=loadImage("Assets/boat/boat.png")
bbd=loadJSON("Assets/boat/broken_boat.json")
bdss=loadImage("Assets/boat/broken_boat.png")
bgs=loadSound("Assets/background_music.mp3")
pl=loadSound("Assets/pirate_laugh.mp3")
ce=loadSound("Assets/cannon_explosion.mp3")
ws=loadSound("Assets/cannon_water.mp3")






console.log("preload")

}



function setup(){
    createCanvas (1200,600)
    e=Matter.Engine.create()                            
    w=e.world
    tower=Matter.Bodies.rectangle(160,310,120,400,{isStatic:true})
    Matter.World.add(w,tower)
    imageMode(CENTER)
    cannon=new Cannon(195,50,140,110,15)
    g=Matter.Bodies.rectangle(width/2,height-10,width,20,{isStatic:true})
    Matter.World.add(w,g)
    console.log("setup")
    angleMode(DEGREES)
    angle=15
    balls=[]
   
    boats=[]
    ba=[]
    var f=bd.frames
    for(var i=0;i<bd.frames.length;i++){
        var p=f[i].position
        var img=bss.get(p.x,p.y,p.w,p.h)
        ba.push(img)
    }
    bba=[]
    var f=bbd.frames
    for(var i=0;i<bbd.frames.length;i++){
        var p=f[i].position
        var img=bdss.get(p.x,p.y,p.w,p.h)
        bba.push(img)
    }
    console.log(58,bba.length)
    



    

}
function draw(){
    background(0)
    Matter.Engine.update(e)
image(bg,width/2,height/2,width,height)
showboats()
if(!bgs.isPlaying()){
   // bgs.play()
    bgs.setVolume(0.1)
}


cannon.display() 
for(var i=0;i<balls.length;i++){
    showcbl(balls[i],i)
    boathit(i)
}

image(ti,tower.position.x,tower.position.y,120,400)       






text(mouseX+","+mouseY,mouseX,mouseY)

}
 function keyPressed(){
    if(keyCode==DOWN_ARROW){
 //       console.log(51)
 //       cbl.shoot()
 cbl=new Canonball(cannon.x,cannon.y)
 balls.push(cbl)
    }
 }
 function showcbl(c,i){
    if(c){
        c.display()
        if(c.body.position.x>=width||c.body.position.y>=height-50){
            if(!c.flag){
                ws.play()
                c.remove(i)

            }
            

           

            
        }
    }

 }
function keyReleased(){
    if(keyCode==DOWN_ARROW){
        balls[balls.length-1].shoot()
        ce.play()
    }
}
function showboats(){
    if(boats.length>0){
        if(boats[boats.length-1].body.position.x<width-200){
            var p=[-20,-40,-30,-10]
            boat=new Boat(width+150,height-150,150,170,random (p),ba)
            boats.push(boat)  
        }
        for(var i=0;i<boats.length;i++){
            if(boats[i]){
boats[i].display()
Matter.Body.setVelocity(boats[i].body,{x:-1,y:0})
            }
            var collision=Matter.SAT.collides(tower,boats[i].body)
            if(collision.collided&&!boats[i].flag){
                pl.play()
                    gameOver()
                

            }
        }

    }
    else{
        boat=new Boat(width+150,height-150,150,170,0,ba)
        boats.push(boat)
    }
}
function boathit(id){
    for(var i=0;i<boats.length;i++){
        console.log(balls[id],boats[i])
        if(balls[id]!=undefined&&boats[i]!=undefined){
            var coll=Matter.SAT.collides(balls[id].body,boats[i].body)
            
            if(coll.collided){
                boats[i].remove(i)
                balls[id].remove(id)
            }
        }
    }}
    function gameOver(){
        swal(
            {title:"Game Over",
            text:"thankyou for playing ",
            imageUrl:"https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
            imageSize:"150x150",
            confirmButtonText:"try again"
        },
        function(a){
            if(a){
                location.reload()
            }
        }

        )
    }
