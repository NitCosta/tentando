function calcular() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let resultado = (peso / (altura * altura)).toFixed(2);

    document.getElementById('resultado').textContent = resultado;
}

