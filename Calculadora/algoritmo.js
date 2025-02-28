function calcular(operacion) {
    var x, y, resultado, mensaje;
    
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        mensaje = "Es necesario agregar dos números";
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = x + y;
                break;
                case 'multiplicar':
                resultado = x * y;
                break;
            case 'restar':
                resultado = x - y;
                break;
            case 'dividir':
                if (y === 0) {
                    mensaje = "No se puede dividir por cero";
                } else {
                    resultado = x / y;
                }
                break;
            default:
                mensaje = "Operación no válida";
        }
        
        if (mensaje === undefined) {
            mensaje = "Resultado: " + resultado;
        }
    }
    
    document.getElementById("resultado").innerHTML = mensaje;
}