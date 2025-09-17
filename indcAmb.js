let reg = []    // nomes das regiões
let dias = []   // dias monitorados

// cadastro das 5 regiões
for(let i=0;i<5;i++){
    reg.push(prompt(`Informe o nome da região ${i+1}`))
}

// cadastro dos 5 dias
for(let i=0;i<5;i++){
    dias.push(Number(prompt(`Informe o dia ${i+1}`)))
}

// matriz 5x5 de índices de poluição (valores aleatórios de 0 a 500)
let poluicao = []
for(let i=0;i<5;i++){
    poluicao[i] = []
    for(let j=0;j<5;j++){
        poluicao[i][j] = parseInt(Math.random() * 501)  
    }
}

// soma da diagonal principal
let somaDP = 0
for(let i=0;i<5;i++){
    console.log(`diagonal principal ${poluicao[i][i]}`)
    somaDP += poluicao[i][i]
}
console.log(`A média da diagonal principal é: ${somaDP/poluicao.length}`)

// soma da diagonal secundária
let somaDS = 0
for(let i=0;i<poluicao.length;i++){
    console.log(`diagonal secundária ${poluicao[i][(poluicao.length-1)-i]}`)
    somaDS += poluicao[i][(poluicao.length-1)-i]
}
console.log(`A média da diagonal secundária é ${somaDS/poluicao.length}`)

// encontra maior índice e posição
let iMaior = 0; let jMaior = 0; let maior = poluicao[0][0]
for(let i=0;i<poluicao.length;i++){
    for(let j=0;j<poluicao.length;j++){
        if(poluicao[i][j] > maior){
            maior = poluicao[i][j]
            iMaior = i; jMaior = j;
        }
    }
}
console.log(`O nível ${maior} ocorreu na região ${reg[iMaior]} no dia ${dias[jMaior]}`)

// conta quantos valores estão acima de 300 (nível crítico)
let NivelCrit = 0
for(let i=0;i<poluicao.length;i++){
    for(let j=0;j<poluicao.length;j++){
        if (poluicao[i][j] > 300){
            NivelCrit++
        }
    }
}
console.log(`Quantidade de locais em níveis críticos ${NivelCrit}`)

// calcula médias por região (linhas)
let medias = []
for(let i=0;i<poluicao.length;i++){
    let somaLinhas = 0
    for(let j=0;j<poluicao.length;j++){
        somaLinhas += poluicao[i][j]
    }
    medias[i] = somaLinhas / poluicao.length
}

// encontra a menor média
let menor = medias[0]
let posMenor = 0
for(let i=0; i<medias.length; i++){
    if(medias[i] < menor){
        menor = medias[i]
        posMenor = i
    }
}
console.log(`A região com menor média é ${reg[posMenor]} com média ${menor}`)
