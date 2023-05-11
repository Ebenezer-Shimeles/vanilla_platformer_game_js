const keyBindings = new Map()

document.body.addEventListener('keypress', (e)=>{
  
    const {code} = e;
    // console.log('kbd: ', 'keypress event: ', code)
    if(keyBindings.has(code)){
        keyBindings.get(code)(e);
    }
    
})

function bindKeyWithFunction(key, func){
    keyBindings.set(`Key${key.toUpperCase()}`, func)
}