let projetos = [] // array para guardar os projetos

// loop para cadastrar 7 projetos
for(let i = 0; i < 7 ; i++){
    let nomeProj = prompt(`Informe o nome do ${i+1}° projeto: `).toUpperCase()
    let empresa = prompt(`Informe o nome da empresa que desenvolveu o ${i+1}° projeto: `).toUpperCase()
    let durMes = Number(prompt(`Informe a duração do ${i+1}° projeto em meses: `))
    let orcamento = Number(prompt(`Informe o orçamento do ${i+1}° projeto: `))

    // cria objeto projeto
    let obj = {
        nomeProj : nomeProj,
        empresa : empresa,
        durMes : durMes,
        orcamento : orcamento
    }
    projetos.push(obj) // adiciona no array
}

// inicialização
let maior = projetos[0]
let soma = 0
let cont = 0
let somaGastos = 0

// percorre os projetos
for(let i = 0; i < projetos.length; i++){
    let obj = projetos[i]

    // projetos com mais de 12 meses e orçamento > 1 milhão
    if( obj.durMes > 12 && obj.orcamento > 1000000 ){
        console.log(` - ${obj.nomeProj} tem orçamento > R$1.000.000 e duração > 12 meses`)
    }

    // verifica maior orçamento
    if(obj.orcamento > maior.orcamento){
        maior = obj
    }

    // soma duração
    soma += obj.durMes

    // conta quantos projetos da INOVATECH
    if(obj.nomeProj === "INOVATECH") {
        cont++
    }

    // soma gastos de projetos curtos (< 6 meses)
    if(obj.durMes < 6){
        somaGastos += obj.orcamento
    }
}

// exibe resultados
console.log(`\nO projeto com maior orçamento é ${maior.nomeProj} (R$ ${maior.orcamento})`)
console.log(`\nA média de duração dos projetos é ${soma / projetos.length} meses`)
console.log(`\nA empresa INOVATECH desenvolveu ${cont} projetos`)
console.log(`\nOs gastos dos projetos com duração < 6 meses somam R$${somaGastos}`)
