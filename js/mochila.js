function Mochila(capacidadePeso){
  this.capacidadePeso = parseInt(capacidadePeso);
  this.itens = [];
  this.pesoOcupado = 0;
  this.porcentagemOcupada = 0;
  this.guardarItem = function(item){
    this.itens.push(item);
    this.pesoOcupado += item.peso;
    this.porcentagemOcupada = (this.pesoOcupado/this.capacidadePeso)*100;
  }
}
