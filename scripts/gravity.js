class Gravity extends Entity{
    gravObjs = [];
    constructor(val=10){
        super('gravity')
        console.assert(typeof val == 'number')
        this.val = val;
    }
    static GRAVITY = 0.07;

    addObj(obj){
       this.gravObjs.push(obj)
    }
    update(){
        super.update()
        for(const obj of this.gravObjs){
            obj.speed.y += Gravity.GRAVITY;
        }
    }

}