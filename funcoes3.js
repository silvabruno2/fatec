function ex3() {
    var idade;
    var i;
    var aux1 = 0
    var aux2 = 0
    var aux3 = 0
    var aux4 = 0
    var aux5 = 0
    var soma1, soma2

    for (i = 1; i <= 8; i++) {
        idade = Number(prompt("Informe a idade"));
        if (idade <= 15) {
            aux1++;
        }
        else if (idade > 15 && idade <= 30) {
            aux2++;
        }
        else if (idade > 30 && idade <= 45) {
            aux3++;
        }
        else if (idade > 45 && idade <= 60) {
            aux4++;
        }
        else
            aux5++;
    }

    soma1 = (aux1 / 8) * 100
    soma2 = (aux5 / 8) * 100

    resultado = "Pessoas com ate 15 anos: " + aux1
    resultado = resultado + "\n Pessoas de 16 ate 30 anos: " + aux2
    resultado = resultado + "\n Pessoas de 31 ate 45 anos: " + aux3
    resultado = resultado + "\n Pessoas de 46 ate 60 anos: " + aux4
    resultado = resultado + "\n Pessoas acima de 60 anos: " + aux5
    resultado = resultado + "\n Porcentagem de pessoas de ate 15 anos: " + soma1 + "%"
    resultado = resultado + "\n Porcentagem de pessoas acima de 60 anos: " + soma2 + "%"

    alert(resultado)
}

function ex4() {
    var i = 0;
    var saida = ""
    var num = Number(prompt("Digite um número"));
    while (i <= 10) {
        saida = saida + `\n ${num} x ${i} = ${num * i}`
        i++;
    }
    alert(saida);
}

function ex2() {
    var preco = 5.0
    var qtde = 120
    var lucro
    var saida = "<table border='1'> <tr> <th>Preço</th> <th>Quantidade</th> <th>Lucro</th> </tr>"
    while (preco >= 1.0) {

        saida = saida + "<tr>"
        lucro = (preco * qtde) - 200
        saida = saida + `<td> R$ ${preco.toFixed(1)}</td> <td> ${qtde} </td> <td> R$ ${lucro.toFixed(1)} </td>`
        saida = saida + "</tr>"
        preco = preco - 0.5
        qtde = qtde + 26
    }
    saida = saida + "</table>"
    document.getElementById("saida").innerHTML = saida + "<br><b>A despesa é sempre de R$ 200,00</b>"
}

function ex1() {
    for (var j = 1; j <= 5; j++) {
        var A = Number(prompt("Digite A"))
        var B = Number(prompt("Digite B"))
        var C = Number(prompt("Digite C"))
        var D = Number(prompt("Digite D"))
        var aux
        for (var i = 1; i <= 3; i++) {
            if (A > B) {
                aux = A; A = B; B = aux
            }
            if (B > C) {
                aux = B; B = C; C = aux
            }
            if (C > D) {
                aux = C; C = D; D = aux
            }
        }
        alert(`Crescente: ${A} - ${B} - ${C} - ${D}`)
        alert(`Decrescente: ${D} - ${C} - ${B} - ${A}`)

    }
}

function ex5() {
    var i, j;
    for (i = 1; i <= 10; i++) {
        console.log(`Tabuada do ${i}`)
        for (j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
    alert(saida);
}

function ex6() {
    var totalVista = 0
    var totalPrazo = 0
    var i = 1
    while (i <= 5) {
        var valor = Number(prompt("Valor da Compra em reais"))
        var tipo = prompt("Tipo(V/P) da Compra").toUpperCase()
        if(tipo == "V") {
            totalVista = totalVista + valor
        }
        else if (tipo == "P") {
            totalPrazo = totalPrazo + valor
        }
        i++
    }
    alert(`Total a vista: ${totalVista} \n Total a Prazo: ${totalPrazo} \n Total Geral: ${totalVista + totalPrazo} \n Primeira parcela do valor a prazo: ${(totalPrazo / 3).toFixed(2)}`)
}

function ex7() {
    var aux1 = 0
    var aux2 = 0
    var aux3 = 0
    var alt = 0
    var opcao
    do {
        var idade = Number(prompt("Digite a idade:"))
        var altura = Number(prompt("Digite a altura"))
        var peso =  Number(prompt("Digite o peso"))
        var contador
        if (idade > 50){
            aux1 ++
        }
        else if (idade >= 10 && idade <= 20){
            aux2 = aux2 + altura
            alt ++
        }
        else if (peso < 40){
            aux3 = aux3++
        }
        var opcao = prompt("Deseja continuar ? (S/N)").toUpperCase();
    }
    while (opcao != "N")
    alert(`Quantidade de pessoas com idade maior que 50 anos: ${aux1} \n A média das alturas de pessoas de 10 a 20 anos: ${(aux2/alt).toFixed(2)} \n Porcentagem de pessoas com menos de 40 kg: ${aux3/contador*100}`)
} 

function ex8() {
    var aux1 = 0
    var aux2 = 0
    var aux3 = 0
    var alt = 0
    var opcao
    var pes = 0
    var aux4 = 0
    var contador
    do {
        var idade = Number(prompt("Digite a idade:"))
        var altura = Number(prompt("Digite a altura em cm:"))
        var peso =  Number(prompt("Digite o peso"))
        var olho = prompt("Digite A para olho azul, C para castanho, P para preto e V para verde").toUpperCase()
        var cabelo = prompt("Digite P para preto, C para castanho, L para loiro e R para ruivo").toUpperCase()
        contador++
        if (idade > 50 && peso < 60){
            aux1 ++
        }
        else if (altura <= 150){
            aux2++
            idade = idade++        
        }
        else if (olho = "A"){
            aux3 = aux3++
        }
        else if (cabelo = "R")
            if (olho != "A"){
            aux4 ++
        }
        var opcao = prompt("Deseja continuar ? (S/N)").toUpperCase();
    }
    while (opcao != "N")
    alert(`Quantidade de pessoas com idade maior que 50 anos e menos de 60Kg: ${aux1} \n A média de pessoas com menos de 1,50m : ${(idade/aux2).toFixed(2)} 
    \n Porcentagem de pessoas com olho azul: ${aux3/contador*100} \n Quantidade de pessoas de olhos azuis que não são ruivas: ${aux4}`)
}