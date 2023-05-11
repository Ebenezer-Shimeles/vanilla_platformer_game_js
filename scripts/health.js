class HealthSpawner extends Entity{
    constructor(colChecker){
       super('HealthSwpaner')
       this.colChecker = colChecker
       
    }

    rm(bmb){
       
       //this.colChecker.colliders.splice(this.colChecker.colliders.lastIndexOf(bmb))
    }

    start(){
       console.log('started adding healths')
        this.int = setInterval(()=>{
          if(isPaused){
           return;
          }
          const b = new Health(Math.random(), (bm)=> {this.rm(bm)})
           b.image = `assets/health.jpg`
          b.instantiate(Math.random() * 1000, 0)
          this.colChecker.add(b)
          gravity.addObj(b)
         
         
        }, 7000)
        
    }
   
}

class Health extends ColliderEntity{
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

   }
   update(){
    if(this.top > document.documentElement.clientHeight * 0.70){
    
        setTimeout(() => this.hide(), 2000);
    }
    // console.log('updateing health', this.top)
    super.update()
    }
//    update(){
//        this.left += this.speed.x;
//        this.top += this.speed.y;
//        //console.log(this.left, doc

//     //    if(this.top > document.documentElement.clientHeight * 0.80){
//     //        this.hide();
//     //    }
    

//     //   console.log(this.speed)
//        this.addStyles({left: this.left, top: this.top})
//    }
   
   
}