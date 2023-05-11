let score = 0
let health = 100;


function pause(msg = 'Paused'){
    pauseWorld()
    document.getElementById('pause_reason').textContent = msg
    document.getElementById('pause_menu').style.display = 'flex'


}
function cont(){
    if(health > 0){
        document.getElementById('pause_menu').style.display = 'none'
        playWorld()

    }
}
function credits(){
    alert('Made by Seud Neuredin, Ebenezer Shimele, Biruk Kasahun and Amanuel Liben')
}
function add(){
    score += 10;
    document.getElementById('score').textContent = 'Score: '+score;
}
const gravity = new Gravity();

window.addEventListener("DOMContentLoaded", (event) => {
    
    const mainAudio = new Audio('assets/GAME.mp3')
    setTimeout(() =>mainAudio.play(), 2000)
class Player extends ColliderEntity{
    constructor(){
        super("player", 40, 60)
        //this.addStyles({border: '1px solid blue'})
    }
    update(){
        if(this.top < 10){
            alert('Mewres')
        }
        super.update()
  
     
    }
    onCollide(other){
        console.log('')
   
        super.onCollide(other)
        if(other instanceof Health){
            
         
            other.hide()
            if(health >= 100){
                return;
            }
            health += 10;
            document.getElementById('health').textContent = 'Health: ' + health;
        }
    
        if(other instanceof Bomb || other instanceof Ghost){
            console.log('game ended', other.id, );
            (new Audio('assets/BOMB.mp3')).play()
            health -= 10;
           
            if(health<=0){
                 console.log('Lost game')
                pause('Game Lost :(')
            }
            document.getElementById('health').textContent = 'Health: ' + health;
            other.hide()
        }
        else if(other instanceof Money){
            console.log('I got money')
            other.hide()
            const audio = new Audio('assets/cha.mp3')
            audio.play()
            add()
        }
   
    }
}


console.log('dom content loaded!')
const test = new Player('Ebenezer', 50, 80)
test.left = 20
test.top = 20
test.image = 'assets/man.jpg'
test.instantiate();



const platformOne = new Platform(1, 400, 10)
platformOne.instantiate(1100, 200)
const platformTwo = new Platform(2, 400, 10)
platformTwo.instantiate(10, 370)

const platformThree = new Platform(3, 400, 10)
 platformThree.instantiate(1110, 1200)



gravity.addObj(platformThree)


const colChecker = new CLChecker()
colChecker.add(test)
colChecker.add(platformThree)
colChecker.add(platformOne)
colChecker.add(platformTwo)


const bombSp = new BombSpawner(colChecker)
bombSp.start()
const moSp = new MoneySpawner(colChecker);
moSp.start()

const gsp = new GhostSpawner(colChecker)
gsp.start()

const hlSp = new HealthSpawner(colChecker)
hlSp.start()
bindKeyWithFunction('w', ()=>{
    if(test.isCollided){
        test.speed.add(0, -3);
        (new Audio('assets/jump.mp3')).play()
    }

})
function fireRight(x, y){
    (new Audio('assets/bullet.mp3')).play()
    const b = new Bullet(Math.random())
    b.speed.add(4, 0)
    b.instantiate(x, y)
    colChecker.add(b)
    
}
function fireLeft(x, y){
    (new Audio('assets/bullet.mp3')).play()
    const b = new Bullet(Math.random())
    b.speed.add(-4, 0)
    b.instantiate(x, y)
    colChecker.add(b)
}
bindKeyWithFunction('z', () =>fireLeft(test.left, test.top))
bindKeyWithFunction('x', () =>fireRight(test.left, test.top))
bindKeyWithFunction('s', ()=>{
    test.top += 20;

})
bindKeyWithFunction('a', ()=>{
    test.left -= 20;

})
bindKeyWithFunction('d', ()=>{
    test.left += 20;

})
gravity.addObj(test)
// setWorldBackground('red')
});

