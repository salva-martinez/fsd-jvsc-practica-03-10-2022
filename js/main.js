
var nombre = "salva";
console.log(nombre);

var falso = false;
console.log(false);

var numero = 40;
console.log(numero);



var numero1 = 50;

var numero2 = 73;

var resultado = numero1 * numero2;
console.log(resultado);



//EDADES//
var edad = 19;
console.log(edad);

if (edad >= 18) {
    console.log("puedes ver la peli")
}

else {
    console.log("no puedes ver la peli")
};
//EDADES//

/*ESTACIONES*/
var mes = "diciembre"
switch (mes) {

    case "enero":
    case "febrero":
    case "marzo":
        console.log("es invierno")
        break;
    case "abril":
    case "mayo":
    case "junio":
        console.log("es primavera")
        break;
    case "julio":
    case "agosto":
    case "septiembre":
        console.log("es verano")
        break;
    case "octubre":
    case "noviembre":
    case "diciembre":
        console.log("es otoño")
        break;
}
/*ESTACIONES*/

/*COMPARACION DE NUMEROS*/
var numero1 = 10;
var numero2 = 20;

if (numero2 > numero1) {
    console.log("numero 2 es mayor")
}

else if (numero2 == numero1) {
    console.log("son iguales")
}
else {
    console.log("numero1 es mayor")
}
/*COMPARACION DE NUMEROS*/

/*STRING*/
var nombre = "Salva"
console.log("Bienvenido@", nombre);
/*STRING*/

/*TERNARIOS*/
let edat = 16;

let resultat = (edat <= 16) ? "No puedes conducir en USA" : "Si puedes conducir en USA";
/*TERNARIOS*/

/*BUCLE WHILE*/
let dinero = 50;

while (dinero >= 0) {

    if (dinero == 0) {
        console.log("Pelat")
    }
    else {

        console.log("estoy comprando y me quedan", dinero, "euros");
    }

    dinero--;
};
/*BUCLE*/

/*TABLA MULTIPLICACION*/
let c = 1;

let tabla = parseInt(prompt("quiero la tabla del..."));

while (c <= 10) {

    console.log(tabla, "X", c, "es", c * tabla);

    c++;

};
/*TABLA MULTIPLICACION*/

/*DO WHILE*/
let num = 37;

do {

    console.log("Salva es un genio");
} while (num > 37);
/*DO WHILE*/

/*FOR*/
for (let i = 1; i <= 20; i++) {

    console.log(i);

};
/*FOR*/

/*FOR MULTI*/
let table = 3;

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/*FOR MULTI*/

/*FUNCIONES(SUMA)*/
function Sumar(num1, num2) {

    let resultado = num1 + num2;
    return resultado;

};
let resultadoDeSumar = Sumar(3, 4);
let resultadoDeSumarDeNuevo = Sumar(6, 7);
console.log(resultadoDeSumar);
/*FUNCIONES(SUMA)*/

/*FUNCION ANONIMA*/
let contenedor = function (num1, num2) { return num1 - num2 }

console.log(contenedor(4, 2));
/*FUCION ANONIMA*/

/*FUNCION DIVIDIR*/
function Dividir(num1,num2) {
    let resultado = num1 / num2;

    return resultado;
};
let resultadoDeDividir = Dividir(6, 2);
console.log(resuladoDeDividir);
/*FUNCION DIVIDIR*/

/*FUNCION EXPONENTE*/
let resultado = function(num1,num2){
    let num1 = parseInt(prompt("dime una base"));
    let num1 = parseInt(prompt("dime un exponente"));

    return console.log(num1 ** num2);
};
/*FUNCION EXPONENTE*/
