const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//input1.addEventListener('input', miValor)
//input2.addEventListener('input', miValor)

form.addEventListener("submit", sumarInputValues);

/*function miValor() {
    const inp1 = parseInt(input1.value);
    const inp2 = parseInt(input2.value); 

    if ((inp1 <= 0 || isNaN(inp1)) || (inp2 <= 0 || isNaN(inp2))) {
        btn.setAttribute("disabled", true)
        return;
    }
    btn.removeAttribute("disabled")
}*/

function sumarInputValues(event) {
    //console.log(parseFloat(input1.value));
    //console.log(parseFloat(input2.value));
    event.preventDefault();
    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerText = "Resultado: $" + sumaInputs.toFixed(2);
}
