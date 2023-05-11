
let isPaused = false;

document.getElementById('world').style.border = '2px dashed blue';
const objects = [] //This are all the game objects in our game
let intervalTime = 10; //update called every 1 sec
function registerEntity(e){
   objects.push(e)
}
function updateAll(){
    //console.log('updating...')
    if(isPaused){
        return;
    }
   for(const object of objects){
       object.update()
   }
}
let int = setInterval(updateAll, intervalTime);
function setUpdateInterval(time){
    clearInterval(int)
    int = setInterval(updateAll, time)
    intervalTime = time;
    
}
function pauseWorld(){
   isPaused = true;
}
function playWorld(){
    isPaused = false;
}
function setWorldBackground(bkg){
    const world = document.getElementById('world');
    world.style.background = bkg;
}