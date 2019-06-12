let inputItemNomeHTML = "<input type='text' placeholder='Nome do Item' class='inputItemNome uk-animation-scale-down'>";
let inputItemPesoHTML = "<input type='text' placeholder='Peso do Item' class='inputItemPeso uk-animation-scale-down'>";
let inputItemValorHTML = "<input type='text' placeholder='Valor do Item' class='inputItemValor uk-animation-scale-down'>";
let inputItemConcatHTML = inputItemNomeHTML + inputItemPesoHTML + inputItemValorHTML + '<br>';

window.onload = function() {
  $("#setup-ok").on("click", function() {
    setup(parseInt(inputPesoMaximo.value), parseInt(inputTotalItens.value));
    for (let i = 0; i < inputTotalItens.value; i++) {
      $(".itensDesc").append(inputItemConcatHTML);
    }
    document.getElementById("setup-ok").disabled = true;
    document.getElementById("itens-ok").disabled = false;
  })

  $("#itens-ok").on("click", function() {
    for (let i = 0; i < inputTotalItens.value; i++) {
      let nomeAux = document.getElementsByClassName("inputItemNome")[i].value;
      let pesoAux = parseInt(document.getElementsByClassName("inputItemPeso")[i].value);
      let valorAux = parseInt(document.getElementsByClassName("inputItemValor")[i].value);
      adicionarItem(nomeAux, pesoAux, valorAux);
    }
    document.getElementById("itens-ok").disabled = true;
    //document.getElementById("itens-resultado").disabled = false;
    escolherItens();
    /*})

    $("#itens-resultado").on("click", function(){*/
    $(".tabelaResultado").append("<tr class='uk-animation-slide-top'><th>Nome</th><th>Peso</th><th>Valor</th></tr>");
    for (let i = 0; i < mochila.itens.length; i++) {

      let nomeAux = mochila.itens[i].nome;
      let pesoAux = mochila.itens[i].peso;
      let valorAux = mochila.itens[i].valor;

      let tableAuxHTML = "<tr class='uk-animation-slide-bottom-small'><td class='inputItemNome'>" + nomeAux + "</td>" + "<td class='inputItemPeso'>" + pesoAux + "</td>" + "<td class='inputItemValor'>" + valorAux + "</td></tr>";
      $(".tabelaResultado").append(tableAuxHTML);
    }

    porcentagemAux = mochila.porcentagemOcupada;
    porcentagemHTML = "<p class='texto-porcentagem-ocupada uk-animation-slide-left'>Porcentagem Ocupada: <strong>" + porcentagemAux + "%</strong></p>" + "<br>";
    $(".resultado").append(porcentagemHTML);

    let valorTotalAux = 0;
    for (let i = 0; i < mochila.itens.length; i++) {
      valorTotalAux += mochila.itens[i].valor;
    }
    valorTotalHTML = "<p class='texto-total-carregado uk-animation-slide-right'>Valor total sendo carregado: <strong>" + valorTotalAux + "</strong></p><br>";
    $(".resultado").append(valorTotalHTML);

    //document.getElementById("itens-resultado").disabled = true;
  })

  $('#setup-ok').hover(
    function() {
      $(this).addClass('uk-animation-scale-down')
    },
    function() {
      $(this).removeClass('uk-animation-scale-down')
    }
  )

  $('#itens-ok').hover(
    function() {
      $(this).addClass('uk-animation-scale-down')
    },
    function() {
      $(this).removeClass('uk-animation-scale-down')
    }
  )

  $('#refazer').hover(
    function() {
      $(this).addClass('uk-animation-shake')
    },
    function() {
      $(this).removeClass('uk-animation-shake')
    }
  )

}
