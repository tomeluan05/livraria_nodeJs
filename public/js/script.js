const titulo = document.querySelector('.titulo');
console.log(titulo)

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    console.log(textoArray)
    textoArray.forEach((letra, index)=>{
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * index);
    })
}

typeWrite(titulo);