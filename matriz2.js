let mat = []   // matriz de vendas (4 vendedores x 7 dias)
let vet = []   // nomes dos vendedores
let totDia = 0 // total de vendas por dia
let maior = 0
let posMaiorLinha = 0
let posMaiorColuna = 0
let tot = 0    // total geral

// preenchimento da matriz
for(let i = 0; i < 4; i++){
    mat[i] = []
    vet[i] = prompt(`Informe o nome do ${i+1}° vendedor: `)
    for(let j = 0; j < 7; j++){
        mat[i][j] = parseInt(Math.random() * 100) // valores aleatórios de vendas
    }
}

// total vendido por vendedor
for(let i = 0; i < 4; i++){
    let totVen = 0
    for(let j = 0; j < 7; j++){
        totVen += mat[i][j]
    }
    console.log(`${vet[i]} vendeu no total R$${totVen}`)
}

// total vendido por dia (somando cada linha)
for(let i = 0; i < 4; i++){
    let totDia = 0
    for(let j = 0; j < 7; j++){
        totDia += mat[i][j]

        // verifica maior venda individual
        if(mat[i][j] > maior){
            maior = mat[i][j]
            posMaiorLinha = i
            posMaiorColuna = j
        }
    }
    console.log(`Total vendido pelo vendedor ${vet[i]}: R$${totDia}`)
}

// mostra maior venda individual
console.log(`Maior valor individual de venda: ${maior}, posição: vendedor ${vet[posMaiorLinha]}, dia ${posMaiorColuna+1}`)

// soma geral das vendas
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 7; j++){
        tot += mat[i][j]
    }
}

// calcula média geral
console.log(`A média geral de vendas é: ${tot / (mat.length * mat[0].length)}`)
