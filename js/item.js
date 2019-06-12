function Item(nome, peso, valor) {
  this.nome = nome;
  this.peso = parseInt(peso);
  this.valor = parseInt(valor)
  this.valorPorPeso = (this.valor / this.peso);
  console.log(this);

}
