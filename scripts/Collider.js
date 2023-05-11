class ColliderEntity extends Entity{
     onCollide(other){
        //console.log('I collided')
     }
     getRange(){
        return {
           hor: {from: this.left, to: this.left+this.width},
           ver: {from: this.top, to:this.top + this.height}

        }

     }
}