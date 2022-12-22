/**
 * steps 
 * 1, create engine 
 *  2,create world 
 * create bodies 
 * add bodies to the world 
 * get engine running 
 * either draw shape /sprite/image in place of body 
 */
var e,w,b,g ,g1,g2,g3,lb,cbi
function setup (){
  createCanvas (600,600)
  e=Matter.Engine.create()

  w=e.world
 // g=Matter.Bodies.rectangle (300,590,600,20,{isStatic:true})
 // Matter.World.add(w,g)
  b=Matter.Bodies.circle(300,50,20,{restitution:1})
  Matter.World.add(w,b)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  g=new ground(300,590,600,20)
  g1=new ground(590,300,20,600)
  g2=new ground(10,300,20,600)
  g3=new ground(300,10,600,20)
  lb=createImg("l.png")
  lb.position(50,50)
  lb.size(50,50)
  lb.mouseClicked(lf)
rb=createImg("r.png")
  rb.position(100,50)
  rb.size(50,50)
  rb.mouseClicked(rf)
  ub=createImg("u.png")
  ub.position(150,50)
  ub.size(50,50)
  ub.mouseClicked(uf)
  db=createImg("d.png")
  db.position(200,50)
  db.size(50,50)
  db.mouseClicked(uf)

}
function draw (){
  background("pink")
  g1.makeGround () 
  g2.makeGround()
  g3.makeGround ()
  Matter.Engine.update(e) 
  fill("brown")
  //rect(g.position.x,g.position.y,600,20)
  ellipse (b.position.x,b.position.y,20)
  g.makeGround()    


}
function lf() {Matter.Body.applyForce(b,b.position,{x:-0.05,y:0

})
  
}
function rf() {Matter.Body.applyForce(b,b.position,{x:0.05,y:0

})
  
}
function uf() {Matter.Body.applyForce(b,b.position,{x:0,y:0.05

})
  
}
function df() {Matter.Body.applyForce(b,b.position,{x:0,y:-0.05

})
  
}