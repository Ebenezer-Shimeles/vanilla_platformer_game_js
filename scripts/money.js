class MoneySpawner extends Entity{
    constructor(colChecker){
       super('MoneySpawner')
       this.colChecker = colChecker
       
    }

    rm(bmb){
       
       //this.colChecker.colliders.splice(this.colChecker.colliders.lastIndexOf(bmb))
    }

    start(){
       console.log('started adding money')
        this.int = setInterval(()=>{
            if(isPaused){
                return;
            }
          const b = new Money(Math.random(), (bm)=> {this.rm(bm)})
           b.image = `assets/money.jpg`
          b.instantiate(Math.random() * 1000, 0)
          this.colChecker.add(b)
          gravity.addObj(b)
         
         
        }, 6000)
        
    }
}


class Money extends ColliderEntity{
    constructor(id, onRemove){
        super(`money_${id}`, 40, 25)
        this.onRemove = onRemove
      //  this.addStyles({border: '1px solid red'})
        
    }
    update(){
        if(this.top > document.documentElement.clientHeight * 0.70){
            setTimeout(() => this.hide(), 2000);
        }
        super.update()
    }
    onCollide(other){
        super.onCollide(other)
        if(other instanceof Platform){
           setTimeout(() => this.hide(), 2000)
         //  this.onRemove(this)
        }

    }

    
    
}