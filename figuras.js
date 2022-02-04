//codigo del cuadrado 
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2 ,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura ) / 2;
} 

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;    
}


function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//codigo del Triangulo isosceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        alert("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

//Interaccion con html


//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimeto es de: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area es de: " + area + "cm2");
}

//triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputT1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputT2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const perimetoT = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetoT +"cm");
}

function calcularAreaTriangulo(){
    const input1= document.getElementById("InputBase");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputAltura");
    const value2 = Number(input2.value);

    const areaT = areaTriangulo(value1, value2);
    alert("El area del triangulo es: " + areaT + "cm2");
}

//triangulo isosceles
function calcularAlturaTrianguloIso(){
    const input1 = document.getElementById("InputT1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputT2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);

    const alturaTIso = alturaTrianguloIsosceles(value1, value2, value3);
    alert("La altura del triangulo isosceles es: " + alturaTIso +"cm");
}

//circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetoC = perimetroCirculo(value);
    alert("El perimetro del Circulo es: " + perimetoC + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const areaC = areaCirculo(value);
    alert("El area del Circulo es: " + areaC + "cm2");
}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const diametroC = diametroCirculo(value);
    alert("El diametro del Circulo es: " + diametroC + "cm");
}