class Vector{

   constructor(x=0, y=0){
      this.x = x;
      this.y = y;
   }
   add(x, y){
    this.x += x
    this.y += y
   }
   toString(){
     return `Vector(${x}, ${y})`;
   }
}