function inicio() {
    // let padaria = [
        // {
            // produto: 'pão',
            // preco: 0.5,
            // quant: 3
        // },
        // {
            // produto: 'rosca',
            // preco: 3.5,
            // quant: 2
        // },
        // {
            // produto: 'brinquinho',
            // preco: 1.0,
            // quant: 50
        // }
    // ]
 };

console.log(padaria);
// para buscar um dado em especifio tem que
//indicar a posição dele, e o titulo
console.log(padaria[2].produto)

// for(let c = 0; c < padaria.length; c++){
    // console.log(`Produto: ${c+1}, custa ${padaria[c].preco}`)
// }

let padaria = []

for(i = 0; i < 3; i++){
    let produto = prompt(`informe o nome do produto ${i+1}`)
    let preco = Number(prompt(`informe o preço do produto ${i+1}`))
    let quant = Number(prompt(`informe a quantidade do produto ${i+1}`))
}

let estoque = {
    produto: produto,
    preco: preco,
    quant: quant
};
padaria.push(estoque);
console.log(padaria)