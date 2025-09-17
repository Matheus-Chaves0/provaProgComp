let colaboradores = [] // cria um array vazio para armazenar os funcionários

// repete 6 vezes para cadastrar 6 funcionários
for (let i = 0; i < 6; i++) {
    // solicita nome e converte para minúsculo
    let nome = prompt(`Digite o nome do ${i + 1}° funcionário:`).toLowerCase();
    // solicita cargo e converte para minúsculo
    let cargo = prompt(`Digite o cargo do ${i + 1}° funcionário:`).toLowerCase();
    // solicita salário e converte para número
    let salario = Number(prompt(`Digite o salário do ${i + 1}° funcionário:`));
    // solicita tempo de serviço em anos e converte para número
    let tempoServico = Number(prompt(`Digite o tempo de serviço (em anos) do ${i + 1}° funcionário:`));

    // cria um objeto funcionário com as informações
    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    };

    // adiciona o objeto ao array
    colaboradores.push(funcionario);
}

// inicializa variáveis auxiliares
let maiorSalario = colaboradores[0]; // assume o primeiro como maior
let somaSalarios = 0;
let totalGerentes = 0;

console.log("\nFuncionários com salário acima de R$ 5.000 e mais de 5 anos de serviço:");
for (let i = 0; i < colaboradores.length; i++) {
    let f = colaboradores[i]; // pega o funcionário atual

    // verifica condição de salário alto e tempo de serviço
    if (f.salario > 5000 && f.tempoServico > 5) {
        console.log(`- ${f.nome} | Cargo: ${f.cargo} | Salário: R$ ${f.salario.toFixed(2)} | Tempo: ${f.tempoServico} anos`);
    }

    // verifica se encontrou maior salário
    if (f.salario > maiorSalario.salario) {
        maiorSalario = f;
    }

    // conta quantos são gerentes
    if (f.cargo.toLowerCase() === "gerente") {
        totalGerentes++;
    }

    // acumula para calcular média
    somaSalarios += f.salario;
}

// exibe resultados finais
console.log(`\nFuncionário com o maior salário: ${maiorSalario.nome} (R$ ${maiorSalario.salario.toFixed(2)})`);
console.log(`Total de gerentes: ${totalGerentes}`);
console.log(`Média salarial: R$ ${(somaSalarios / colaboradores.length).toFixed(2)}`);
