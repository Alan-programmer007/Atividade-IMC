/*
const bntVerificar = document.querySelector("#button-verificar")
bntVerificar.addEventListener('click', ()=>{

    const inputValue = document.querySelector("input").value

    if(inputValue == ""){
        alert("Digite um valor!")
    }else{
        
    const numero = Number(inputValue)

    console.log(numero)

    const resultado = document.querySelector("h2")

    if (numero % 2 == 0)
        resultado.innerText = `O numero ${numero} é par`
    else
        resultado.innerText = `O numero ${numero} é ímpar`

        document.querySelector("input").value = ""

        handleClick()
    }
})

const bntVoltar = document.querySelector("#button-voltar")
bntVoltar.addEventListener('click', ()=>{
        handleClick()
})

function handleClick(){
    const saida = document.querySelector("#resultado")

    saida.classList.toggle("hiden")

    const main = document.querySelector("#main")

    main.classList.toggle("hiden")
}
*/

const calcular = document.querySelector("#calcular")

calcular.addEventListener('click', ()=>{

    const inputAltura = Number(document.querySelector("#altura").value)
    const inputPeso = Number(document.querySelector("#peso").value)

    if(inputAltura == "" || inputPeso == "")
        return alert("Digite os dois valor!!")

        const imc = inputPeso/(inputAltura*inputAltura)
        const imcUsar = imc.toFixed(2)

        novoIMC(imcUsar)
    
        document.querySelector("#altura").value = ""
        document.querySelector("#peso").value = ""
    
})

function novoIMC(imcUsar){
    mostra.classList.remove("hiden")

    const result = document.createElement("p");
    const saida = document.createTextNode("IMC = " + imcUsar);
    result.appendChild(saida);
    document.getElementById("mostra").appendChild(result)
}