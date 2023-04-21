//Funciones declarativas

function miFuncion() {
  return 3;
}

miFuncion();

//Funciones expresivas

var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

///Ejercicio

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);

  saludarEstudiantes("Thaos");
}
//es Hola Thaos

function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}
sumar(1, 2);
//es 3

///hoisting

hey();
function hey() {
  console.log("Hola " + miNombre);
}
var miNombre = "misael";

//VM229079:3 Hola Misael

///If, else, else if ejercicio (condicional ternario?:)

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, sera tu 1ra votacion");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

/////////////////////

condicion ? true : false;

var numero = 1;
var resultado = numero === 1 ? "si soy un uno" : "no, no soy uno";

///Loops for y for...of ejercicios

var estudiantes = ["maria", "sergio", "rosa", "diego"];
function saludarEstudiantes(estudiante) {
  console.log(`hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

//VM180281:3 hola, maria
//VM180281:3 hola, sergio
//VM180281:3 hola, rosa
//VM180281:3 hola, diego

var estudiantes = ["maria", "sergio", "rosa", "diego"];
function saludarEstudiantes(estudiante) {
  console.log(`hola, ${estudiante}`);
}
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

//VM204587:3 hola, maria
//VM204587:3 hola, sergio
//VM204587:3 hola, rosa
//VM204587:3 hola, diego

///loops while
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiantes) {
  console.log(`Hola, ${estudiante}`);
}
while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

//VM12608:3 Hola, Maria
//VM12608:3 Hola, Sergio
//VM12608:3 Hola, Rosa
//VM12608:3 Hola, Daniel

///Objects

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo}${this.año}`);
  },
};
//undefined
miAuto.detalleDelAuto();
//VM98684:6 Auto Corolla2020

///Objeto funcion constructora
function auto(MARCA, MODELO, ANNIO) {
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var autos = [];
for (let i = 0; i < 30; i++) {
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto(marca, modelo, annio));
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

///arrays filter
var articulos = [
  {
    articulo: {
      name: "SAMSUNG",
      cbarras: "12345",
      discount: {
        value: 10,
        type: "percent",
      },
    },
    costo: 3000,
  },
  {
    articulo: {
      name: "LG",
      cbarras: "5435345",
      discount: {
        value: 5000,
        type: "coin",
      },
    },
    costo: 45645,
  },
  {
    articulo: {
      name: "HUAWEI",
      cbarras: "645645",
      discount: null,
    },
    costo: 767676,
  },
  { nombre: "tv", costo: 2500 },
  { nombre: "libro", costo: 320 },
  { nombre: "celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];
undefined;

var articulosFiltrados = articulos.filter(function (item) {
  return (
    item?.articulo?.discount?.type === "coin" &&
    item?.articulo?.discount?.value <= 10
  );
});
undefined;

articulosFiltrados;
//(2) [{…}, {…}]

///array map
var articulos = [
  { nombre: "bici", costo: 3000 },
  { nombre: "tv", costo: 2500 },
  { nombre: "libro", costo: 320 },
  { nombre: "celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];
undefined;
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
undefined;

nombreArticulos;

document.getElementsById("#listado").innerHtml = nombreArticulos;
//(7) ['bici', 'tv', 'libro', 'celular', 'laptop', 'teclado', 'audifonos']

///asincronia en javascript
console.log("taco 1");
console.log("taco 2");
console.log("taco 3");
setTimeout(() => {
  console.log("torta");
}, 500);
console.log("taco 4");
//VM303411:1 taco 1
//VM303411:2 taco 2
//VM303411:3 taco 3
//VM303411:7 taco 4
undefined;
//VM303411:5 torta

///variables
let nombre = "Misael Benjamin";
let apellido = "Rochin Rangel";
let username = "Thaos";
let edad = 19;
let mail = "Thaos@hotmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

undefined;

let dineroReal = dineroAhorrado - deudas;

undefined;

dineroReal;
900;

///funciones
function saludo(name, lastname, username) {
  const completeName = nombreCompleto(name, lastname);

  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      username +
      "."
  );
}

undefined;
function nombreCompleto(name, lastname) {
  return name + " " + lastname;
}
undefined;
saludo("Misael", "Rochin", "Thaos");

//VM75:4 Mi nombre es Misael Rochin, pero prefiero que me digas Thaos.

///condicionales
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertDuo":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}
//VM110745:8 Puedes tomar casi todos los cursos de Platzi durante un mes

///ciclos
for (let i = 1; i <= 5; i++) {
  console.log("El valor de i es: " + i);
}
//VM17259:2 El valor de i es: 0
//VM17259:2 El valor de i es: 1
//VM17259:2 El valor de i es: 2
//VM17259:2 El valor de i es: 3
//VM17259:2 El valor de i es: 4
let i = 10;
undefined
while (i >= 2) {
    console.log("el valor de i es: " + i);
    i--;
}
//el valor de i es: 10
//VM9952:2 el valor de i es: 9
//VM9952:2 el valor de i es: 8
//VM9952:2 el valor de i es: 7
//VM9952:2 el valor de i es: 6
//VM9952:2 el valor de i es: 5
//VM9952:2 el valor de i es: 4
//VM9952:2 el valor de i es: 3
//VM9952:2 el valor de i es: 2
//2

let Respuesta = prompt("cuanto es 2 + 2")
undefined
respuesta
//'12345' seria la respuesta que de el usuario y se guarda en la memoria

let respuesta;
undefined
while (respuesta != "4") {
    let pregunta = prompt("¿cuanto es 2 + 2?")
    respuesta = pregunta;                                            
}
//respuesta es'4' con el comando != se termina de ejecutar al responder de manera correcta el prompt 

function imprimirElrmentoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        }
    }
undefined
    imprimirElrmentoPorElemento(["Juan", "Rigo", "Natalia", "Maria"])

//VM386323:3 juan
//VM386323:3 rigo
//VM386323:3 natalia
//VM386323:3 maria

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};
tiposDeSuscripciones.free
//'Solo puedes tomar los cursos gratis'