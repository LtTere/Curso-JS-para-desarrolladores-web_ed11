
const myApi= 'https://randomuser.me/api/'

async function llamadaApi(){
    let random = await fetch(myApi)
    random = await random.json()
   console.log(random) 
    
}

llamadaApi()

