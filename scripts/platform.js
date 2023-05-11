class Platform extends ColliderEntity{
    constructor(num, width=20, height=20){
        super(`plat${num}`, width, height)
        super.addStyles({background: 'black'})
        this.speed = new Vector(0, 0)
    }
     onCollide(other){
        super.onCollide(other)
        other.speed.y = -0.09;
        this.speed = new Vector(0, 0);
        
    

     }
}