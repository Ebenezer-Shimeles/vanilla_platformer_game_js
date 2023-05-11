class CLChecker extends Entity{
    //simply check every frame if there are collisions
    colliders = []
    constructor(){
        super('col-checker')
    }
    add(col){
        console.assert(col instanceof ColliderEntity) //Constraint belut
        this.colliders.push(col)
        // this.colliders.sort((a, b)=>{
        //     if(!a || !b){
        //         return a || b;
        //     }
        //     const rangeOne = a.getRange();
        //     const rangeTwo = b.getRange();

        //     console.log({rangeOne, rangeTwo})
        // }) 
        //TODO make this o(n)
    }
    update(){
        //console.log('Checking collisions')
        const len = this.colliders.length;
        const ons = new Set()
        for(let i =0;i<len;i++){
            for(let j=i+1;j<len;j++){
                const a = this.colliders[i];
                const b = this.colliders[j];
                // console.log(a.id, b.id)
                
                const rangeOne = a.getRange();
                const rangeTwo = b.getRange();
               

                if(
                    (
                        (rangeOne.ver.from >= rangeTwo.ver.from && rangeOne.ver.from <= rangeTwo.ver.to) 
                        ||
                        (rangeTwo.ver.from >= rangeOne.ver.from && rangeTwo.ver.from <= rangeOne.ver.to) 
                    )
                    &&
                    (
                        (rangeOne.hor.from >= rangeTwo.hor.from && rangeOne.hor.from <= rangeTwo.hor.to) 
                        ||
                        (rangeTwo.hor.from >= rangeOne.hor.from && rangeTwo.hor.from <= rangeOne.hor.to) 
                    )
                ){
                   
                    a.isCollided = true;
                    b.isCollided = true;
                    if(a.elemt.style.display == 'none' ||  b.elemt.style.display == 'none'){
                        continue
                    }
                    a.onCollide(b);
                    b.onCollide(a);
                  //  console.log(a, b, 'have collided')
                    // ons.add(a)
                    // ons.add(b)
                }else{
                    a.isCollided = true;
                    b.isCollided = false;
                }
            
                
            }
        }
        for(const on of ons){
            console.log(on)
            on.isCollided = true;
        }
    }

}
