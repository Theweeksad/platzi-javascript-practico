//código del cuadrado
console.group("cuadrado")

//const ladoCuadrado = 5;
//console.log("lados del cuadrado mide" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//perimetroCuadrado()

//console.log("el perimetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("el area del cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();

//código del triangulo

console.group("Triangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("lados del triangulo miden:" 
//+ ladoTriangulo1
//+ "cm, "
//+ ladoTriangulo2
//+ "cm, "
//+ baseTriangulo
//+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("la altura el triangulo es de:" + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("el perimetro del triangulo es:" + perimetroTriangulo + "cm");

function areaTrianuglo (base, altura ) {
    return (base * altura) / 2;
}
console.log("el area del triangulo es:" + areaTrianuglo + "cm2");

console.groupEnd();

//código del circulo

console.group("circulo");

//Radio
//const radioCirculo = 4;
//console.log("el radio del circulo es:" + radioCirculo + "cm");

//diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es:" + PI );

//circunferencia 

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Aquí intaractuamos con HTMl

//CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculaAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area =  areaCuadrado(value);
    alert(area);
}

//TRIANGULO

function calculaPerimetroTriangulo() {
    const InputTrianguloLado1 = document.getElementById('InputTrianguloLado1');
    const InputTrianguloLado2 = document.getElementById('InputTrianguloLado2');
    const InputTrianguloBase = document.getElementById('InputTrianguloBase');
    const valueLado1 = Number(InputTrianguloLado1.value);
    const valueLado2 = Number(InputTrianguloLado2.value);
    const valueBase = Number(InputTrianguloBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert('El perimetro es: ' + perimetro + 'cm');
}

function calculaAreaTriangulo() {
    const InputTrianguloBase = document.getElementById('InputTrianguloBase');
    const InputTrianguloAltura = document.getElementById('InputTrianguloAltura');
     const valueBase = InputTrianguloBase.value;
    const valueAltura = InputTrianguloAltura.value;
    const area = areaTrianuglo(valueBase, valueAltura);

    alert('El área es: ' + area + 'cm^2');
}

//circulo

// Circulos
function calcularPerimetroCirculo() {
    const Input = document.getElementById('InputCirculo');
    const value = Input.value;
    const perimetro = perimetroCirculo(value);

    alert('El perimetro es: ' + perimetro + 'cm');
}

function calculaAreaCirculo() {
    const Input = document.getElementById('InputCirculo');
    const value = Input.value;
    const area = areaCirculo(value);

    alert('El área es: ' + area + 'cm^2');
}