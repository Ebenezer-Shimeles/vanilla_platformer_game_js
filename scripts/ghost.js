class GhostSpawner extends Entity{
    constructor(colChecker){
       super('GhostSwpaner')
       this.colChecker = colChecker
       
    }

    rm(bmb){
       
       //this.colChecker.colliders.splice(this.colChecker.colliders.lastIndexOf(bmb))
    }

    start(){
       console.log('started adding ghosts')
        this.int = setInterval(()=>{
          if(isPaused){
           return;
          }
          const b = new Ghost(Math.random(), (bm)=> {this.rm(bm)})
           b.image = `assets/ghost.jpg`
          b.instantiate(0, Math.random() * 800)
          b.speed.add(1, 0)
          this.colChecker.add(b)
         // gravity.addObj(b)
         
         
        }, 6500)
        
    }
}

class Ghost extends ColliderEntity{
   constructor(id, onRemove){
       super(`health_${id}`, 40, 35)
       this.onRemove = onRemove
      // this.addStyles({border: '1px solid red'})
       
   }
   onCollide(other){
       super.onCollide(other)
       if(other instanceof Platform){
           setTimeout(()=>{this.hide()}, 1000)
        //  this.onRemove(this)
       }
       if(other instanceof Bullet){
        this.hide()
       }

   }
   update(){
       this.left += this.speed.x;
       this.top += this.speed.y;
       //console.log(this.left, doc

    //    if(this.top > document.documentElement.clientHeight * 0.80){
    //        this.hide();
    //    }
    

    //   console.log(this.speed)
       this.addStyles({left: this.left, top: this.top})
   }
   
   
}