const alunos = [
    {
        nome: "Caio",
        nota: 10,
        turma: 2015,
    },
    {
        nome: "Joao",
        nota: 4,
        turma: 2013,
    },
    {
        nome: "Liverton",
        nota: 7,
        turma: 2012,
    },
];


function alunosAprovados(arr, media) {
    let aprovados = []; //array fora do for porque quero manter os alunos anteriores

    for (i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));