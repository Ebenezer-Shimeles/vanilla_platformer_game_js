class Sprite{

}
class Entity{
    
    sprites = new Map()
    isVisible = false;
    id = ''
    speed = new Vector()
    left = 0
    top = 0
    image = ''

    width = 0
    height = 0
    elemt = null;
    
 
    toString(){
        return `GameObject ${this.id}`
    }

    constructor(id, width='100vw', height='100vh'){
        if(typeof id != "string"){
            throw new Error("id must be a string!")
        }
        this.isCollided = false;
        this.world = document.getElementById('world')
      //  console.log(this.world)
        this.id = id;
        this.elemt = document.createElement('div')
        // this.elemt.style.position = 'fixed'
        // this.elemt.style.left = this.left;
        // this.elemt.style.top = this.top;
        // this.elemt.style.width = width;
        // this.elemt.style.height = height;
        this.height = height;
        this.width = width;
        // this.elemt.style.border = '10px solid red';
        // this.elemt.style.zIndex = '1';
        this.addStyles({
            position: 'fixed',
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            // border: '10px solid red',
            zIndex: '10'

        });
        
        registerEntity(this)
        this.elemt.innerHTML = this.defaultShow()

    }
    init(){
        //called when Object is created by the controller
    }
    addStyles(newStyles){
        for(const key in newStyles){
            this.elemt.style[key] = newStyles[key]
        }
        
    }
    playSprite(){

    }
    setSprite(src, name,number, frameWidth, frameHeight){
  
    }
    removeSprite(name){

    }
    update(){
        // this.elemt.style.left = this.left;
        // this.elemt.style.top = this.top;
        this.left += this.speed.x;
        this.top += this.speed.y;
        //console.log(this.left, document.documentElement.clientWidth )
        if(this.left >document.documentElement.clientWidth * 0.97){
            
            this.left = document.documentElement.clientWidth * 0.97 - 2
            this.isCollided = true;
            
        }
        if(this.top > document.documentElement.clientHeight * 0.80){
            this.top = document.documentElement.clientHeight * 0.80
            this.speed.add(0, -1)
            this.isCollided = true;
        }
        if(this.top < 20){
            this.top = 20
            this.isCollided = true;
            this.speed.add(0, 3)
        }
        if(this.left < 0){
            this.left = 0
            this.isCollided = true;
        }

     //   console.log(this.speed)
        this.addStyles({left: this.left, top: this.top})
        //called every frame
    }
    instantiate(x =-1, y = -1){
        //add this thing to the dom
        if(x!=-1){
            this.left = x;
        }
        if(y!=-1){
            this.top = y;
        }
        this.addStyles({left: this.left, top: this.top})
        this.addStyles({display: 'inline'})
        this.world.appendChild(this.elemt);
        if(this.image){
            //console.log('Rendering image')
            const canvas = document.getElementById(`${this.id}_canvas`);
           // console.log('Image Canvas#@ ', canvas)
             const context = canvas.getContext('2d');
            // console.log({context})
            const img = new Image()
            img.width = this.width;
            img.height = this.height
            
            img.src = this.image;
            //console.log('loading image ', this.image)
            img.onload = ()=>{
               // console.log('Image loaded', img, ' in context: ', context)
                context.drawImage(img,  0, 0, this.width, this.height, 0,0, this.width, this.height);
                //context.drawImage(img, 10, 20)
                //context.fillStyle = "green";
                //context.fillRect(10, 10, 150, 100);
                //this.world.append(img)
              
            }
       }
     

       

    }
    defaultShow(){
        
        return `<canvas id='${this.id}_canvas' height='${this.height}' width='${this.width}'
                   style='z-index:10;'
        ></canvas><p></p>`;
    }



    show(){
        this.addStyles({display: 'inline'})
    }
    hide(){
        this.addStyles({display: 'none'})
    }
    invisible(){
        this.addStyles({ visibility: 'hidden'})

    }
    visible(){
        this.addStyles({ visibility: 'visible'})
    }
}