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

    if(inputAltura == "" || inputPeso == ""){
        alert("Digite os dois valor!!")
    }else{
        const imc = inputPeso/(inputAltura*inputAltura)

        const imcUsar = imc.toFixed(2)

        const resultado = document.querySelector("h2")
        resultado.innerText = `IMC = ${imcUsar}`

        
    }
})