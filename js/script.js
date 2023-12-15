document.addEventListener('DOMContentLoaded', function () {
    var buttonCalcular = document.getElementById('calcularBtn');
    var inputA = document.getElementById('idtextA');
    var inputB = document.getElementById('idtextB');
    var inputC = document.getElementById('idtextC');
    var resultadosDiv = document.getElementById('resultados');
    var deltaRes = document.getElementById('deltaRes');
    var bhaskaraRes = document.getElementById('bhaskaraRes');

    buttonCalcular.addEventListener('click', function (event) {
        event.preventDefault();

        var a = parseFloat(inputA.value);
        var b = parseFloat(inputB.value);
        var c = parseFloat(inputC.value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('Por favor, insira valores numéricos válidos.');
            return;
        }

        var delta = b * b - 4 * a * c;

        deltaRes.textContent = 'Δ = ' + delta;

        if (delta < 0) {
            bhaskaraRes.textContent = 'A equação não possui soluções reais.';
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            bhaskaraRes.textContent = 'Bhaskara: x1 = ' + x1 + ', x2 = ' + x2;
        }

        resultadosDiv.classList.remove('hidden');
    });
});

















//var A = parseFloat(prompt("Digite o valor de A: "));
//var B = parseFloat(prompt("Digite o valor de B: "));
//var C = parseFloat(prompt("Digite o valor de C: "));

//var delta = Math.pow(B,2) - 4*A*C;
//var X1 = ( -B + Math.sqrt(delta)) / (2*A);
//var X2 = ( -B - Math.sqrt(delta)) / (2*A);


//alert("Delta = " + delta ); 
//alert("X1 = " + X1 ); 
//alert("X2 = " + X2 ); 








