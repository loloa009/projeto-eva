```javascript
// ==========================
// VARIAVEIS
// ==========================

let produtoSelecionado = "";
let precoProduto = 0;
let sementeSelecionada = "";
let quantidade = 1;
let valorFrete = 0;

// ==========================
// SELECIONAR PRODUTO
// ==========================

function selecionarProduto(nome, preco){

    produtoSelecionado = nome;
    precoProduto = preco;

    document.getElementById("produtoSelecionado").innerHTML = nome;

    // Destaca o card selecionado
    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        card.classList.remove("selecionado");
    });

    event.currentTarget.classList.add("selecionado");

    atualizarResumo();

}

// ==========================
// SELECIONAR SEMENTE
// ==========================

function selecionarSemente(nome){

    sementeSelecionada = nome;

    document.getElementById("sementeSelecionada").innerHTML = nome;

}

// ==========================
// AUMENTAR
// ==========================

function aumentar(){

    quantidade++;

    document.getElementById("quantidade").innerHTML = quantidade;

    document.getElementById("quantidadeResumo").innerHTML = quantidade;

    atualizarResumo();

}

// ==========================
// DIMINUIR
// ==========================

function diminuir(){

    if(quantidade>1){

        quantidade--;

    }

    document.getElementById("quantidade").innerHTML = quantidade;

    document.getElementById("quantidadeResumo").innerHTML = quantidade;

    atualizarResumo();

}

// ==========================
// CALCULAR FRETE
// ==========================

function calcularFrete(){

    let cep = document.getElementById("cep").value;

    if(cep.length < 8){

        alert("Digite um CEP valido.");

        return;

    }

    let primeiroNumero = Number(cep[0]);

    if(primeiroNumero<=3){

        valorFrete = 18;

    }else if(primeiroNumero<=6){

        valorFrete = 25;

    }else{

        valorFrete = 35;

    }

    document.getElementById("valorFrete").innerHTML =
    "Frete: R$ " + valorFrete.toFixed(2);

    atualizarResumo();

}

// ==========================
// ATUALIZA RESUMO
// ==========================

function atualizarResumo(){

    let subtotal = precoProduto * quantidade;

    let total = subtotal + valorFrete;

    document.getElementById("subtotal").innerHTML =
    subtotal.toFixed(2);

    document.getElementById("frete").innerHTML =
    valorFrete.toFixed(2);

    document.getElementById("total").innerHTML =
    total.toFixed(2);

}
```
