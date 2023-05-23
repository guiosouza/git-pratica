const lista: Array<Array<number>> = [[1, 2, 3], [43, 34, 543, 32], [43, 43343425, 543545643, 435]];

const novaLista: Array<number> = lista.flatMap(number => number);

console.log("Juntando as listas em apenas uma...", novaLista)