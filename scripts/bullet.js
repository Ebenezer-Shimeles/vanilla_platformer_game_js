class Bullet extends ColliderEntity{
    constructor(id){
        super(`bullet_${id}`, 40, 35)
        this.image = 'assets/bullet.png';
        this.width = 62;
        this.height = 42;
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