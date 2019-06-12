let maxN;
let maxC;
let tabela = [];

let peso;
let valor;

let itens = new Array;

let mochilaFinal = new Array;

let soma;
let s;

let itemIndex = 1;

let valorTotal

let mochila;

function setup(maxCInput, maxNInput) {
  maxN = maxNInput;
  maxC = maxCInput;
  mochila = new Mochila(maxCInput);
  tabela = new Array(maxN + 1);
  for (let i = 0; i < tabela.length; i++) {
    tabela[i] = new Array(maxC + 1);
  }
  peso = new Array(maxN + 1);
  valor = new Array(maxN + 1);
  for (let i = 0; i <= maxN; i++) {
    tabela[i][0] = 0;
  }
  itens.push(new Item('Posição de Descarte', 0, 0));
}

function adicionarItem(nomeItem, pesoItem, valorItem) {
  itens.push(new Item(nomeItem, pesoItem, valorItem));
  peso[itemIndex] = pesoItem;
  valor[itemIndex] = valorItem;
  itemIndex++;
}

function escolherItens() {
  for (let b = 1; b <= maxC; b++) {
    tabela[0][b] = 0;

    for (let i = 1; i <= maxN; i++) {
      s = tabela[i - 1][b];

      if (peso[i] <= b) {
        soma = tabela[i - 1][b - peso[i]] + valor[i];
        if (s < soma) {
          s = soma;
        }
      }
      tabela[i][b] = s;
    }
  }

  valorTotal = tabela[maxN][maxC];

  let i = maxN;
  let b = maxC;
  let aux = tabela[i][b];

  while (aux) {
    if (tabela[i][b] != tabela[i - 1][b]) {
      mochilaFinal.push(i);
      b -= peso[i];
    }
    i--;
    aux = tabela[i][b];
  }

  for (let i = 0; i < mochilaFinal.length; i++) {
    console.log(itens[mochilaFinal[i]]);
    mochila.guardarItem(itens[mochilaFinal[i]]);
  }
}
