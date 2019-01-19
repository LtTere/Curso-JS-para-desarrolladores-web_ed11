
const myApi= 'https://randomuser.me/api/'

async function llamadaApi(){
    let random = await fetch(myApi)
    random = await random.json()
    const baseUser = random.results[0]
    represent(baseUser)
    
}

llamadaApi()

function represent(baseUser){
    
    const myCanvas = document.getElementById('pintame')
    console.log(baseUser)

    myCanvas.innerHTML += `${baseUser.name.first} ${baseUser.name.last}`
    myCanvas.innerHTML += `${baseUser.email}`
}

