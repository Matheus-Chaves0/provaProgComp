let palavra = prompt(`Digite uma palavra qualquer: `)

// remove espaços extras e transforma em minúsculas
let limpa = palavra.trim().toLowerCase()

// inverte a palavra
let invert = limpa.split("").reverse().join("")

// compara se a palavra é palíndromo
if(invert === limpa){
    console.log('É palíndromo')
}
else{
    console.log('Não é palíndromo')
}
