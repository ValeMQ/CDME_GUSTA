function aumentarLike(){
    let newLike = document.querySelector ("#perfil-1")
    let contador = newLike.innerHTML
    console.log(contador)
    contador ++
    console.log(contador)
    newLike.innerHTML = contador
}
let arrayLikes = [0, 0, 0]

function aumentarLike (element){
    if(element=document.querySelector("#btn-perfil-1")){
        let newLike = document.getElementById ("perfil-1")
        let contador = newLike.innerHTML
        contador ++
        newLike.innerHTML = contador

    } else if(element=document.querySelector("#btn-perfil-2")){
        let newLike = document.getElementById("perfil-2")
        let contador = newLike.innerHTML
        contador ++
        newLike.innerHTML = contador

    }else{
        let newLike = document.getElementById("#btn-perfil-3")
        let contador = newLike.innerHTML
        contador ++
        newLike.innerHTML = contador
    }
}