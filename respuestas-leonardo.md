# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

  - Es un espacio en memoria donde podemos guardar información (tipos y estructuras de datos).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

- Cuando una variable no tiene un valor explicitamente asignado se llama declaración de variable. let nombre;

- Cuando una variable tiene un valor explicitamente asignado se llama inicializar la variable. let nombre = 'Leonardo'

- Existen 3 posibles formas de declarar una variable con var, let ,const.
- var es la forma más antigua de hacerlo y acepta la posibilidad de cambiar el valor de las variables
- let es una forma de declarar variables que pueden cambiar de valor
- const es una forma de delcarar variables que ya no pueden cambiar de valor

- ¿Cuál es la diferencia entre sumar números y concatenar strings? - ¿Cuál operador me permite sumar o concatenar?
- La diferencia esta en el tipado de las variables, si las dos son tipo numeros se realizará una suma. Si uno de ellas o las dos son tipos strings concatena las variables.
- 1 + 1 = 2, 1 + "23" = "123"

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre : string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: int number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: float number
- Deudas: float number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre =  'Leonardo'
let apellido = 'Llanes'
let userName = 'llanesleonardo'
let edad = 34
let correoElectronico = 'llanesleonardo@gmail.com'
let isMayorEdad = true
let dineroAhorrado = 1000
let deudas = 500
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = `${nombre} ${apellido}`;
let dineroReal = dineroAhorrado-deudas;
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

  - La forma de encapsular un bloque de código que su ejecución sea reusable en un sistema

- ¿Cuándo me sirve usar una función en mi código?

  - Cuando necesito reusar un código más de una sola vez
  - Tambien nos sirve para mejorar la legibilidad de nuestro código

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  - Los parametros son la declaración al momento de crear una función, el argumento es el valor real que se envia al momento de llamar la función.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function saludo(name,lastname,nickname){
const completeName = nombreCompleto(name,lastname);
 console.log(`Mi nombre es ${completeName} pero prefiero que me digas ${nickname}`);
}

function nombreCompleto (nombre, apellido) {
   return `${nombre} ${apellido}`;
}
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

  - La forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  - IF ,IF ELSE ,ELSE IF
    - Estos primeros tres casos puedes validar o condicionar diferente lógica no solamente debe ser en base a una variable
  - SWITCH
    - En este caso la validación esta en base a una variable y se usan casos para validación
  - ? : ternario
    - Es un sinonimo de IF y funciona al momento de inicializar expresiones normalmente.

- ¿Puedo combinar funciones y condicionales?
  - Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
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
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```
const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
      console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion === "" ExpertPlus){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
console.log("Ninguna de las opciones");
}

```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

  - Un ciclo es una forma especial de ejecutar un bloque de código de forma repetitiva hasta que se cumpla una condición

- ¿Qué tipos de ciclos existen en JavaScript?

  - for
  - foreach
  - while
  - do while

- ¿Qué es un ciclo infinito y por qué es un problema?

  - Generar un stackoverflow en el navegador.

- ¿Puedo mezclar ciclos y condicionales?

  - Si. Es posible que dentro de un ciclo puedan existir condicionales. De esta manera la respuesta de la ejecución puede ser diferente.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```
let i = 0;
while( i < 5 ){
  console.log("El valor de i es: " + i);
i++;
}

i = 10;
while( i >= 2 ){
  console.log("El valor de i es: " + i);
i--;
}

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
prompt();

let respuesta;

while (respuesta === "4") {
  let pregunta = prompt("¿Cuanto es 2 + 2?");
  respuesta = pregunta;
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
- ¿Qué es un objeto?
- ¿Cuándo es mejor usar objetos o arrays?
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
