// Method Date.now()

// Devuelve el número de milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970.

let fechaEnString = new Date( "Mar 12 2000")
let fechaENMilisegundos = Date.now(fechaEnString);

console.log(`Metodo Date.now() ${fechaENMilisegundos}`)


// Method Date.parse()

// Transforma una cadena con la representación de una fecha y hora, y 
// devuelve el número de milisegundos desde las 00:00:00 del 1 de enero de 1970, hora local.


let fechaEnString2 = new Date(Date.parse( "Mar 12 2000"));

console.log(`\n\nMetodo Date.parse() : ${fechaEnString2}`);


// Method Date.UTC()

// Acepta los mismos parámetros que la forma más larga del constructor y devuelve el 
// número de milisegundos en un Dateobjeto desde el 1 de enero de 1970, 00:00:00, hora universal.

let fechaEnString3 = new Date(Date.UTC( "Mar 12 2000"));

console.log(`\n\nMetodo Date.UTC() : ${fechaEnString3}`);


// Method Date.getDate()

// devuelve el día del mes para la fecha especificada de acuerdo con la hora local.

let fechaEnString4 = new Date(`March 12, 2000 12:12:12`);

let day = fechaEnString4.getDate();

console.log(`\n\nMetodo Date.getDate() : ${fechaEnString4}`);

// Method Date.getDay()


// devuelve el día de la semana de la fecha especificado en
// función de la fecha local; siendo 0 (Domingo) el primer día.

let fechaEnString5 = new Date(`July 14, 1998 12:12:12`);

let weekDay = fechaEnString5.getDay();

console.log(`\n\nMetodo Date.getDay() : ${weekDay}`);


// Method Date.getFullYear() 

// devuelve el año de la fecha indicada acorde a la hora local.

const year = new Date('July 20, 99 12:20:18:12');

console.log(`\n\nMetodo .getFullYear: ${year.getFullYear()}`);

// Method .getMilliseconds()

// Devuelve la cantidad de milisegundos en el objeto con fecha especificada 
// de acuerdo a la hora local.


console.log(`\n\nMetodo.getMilliseconds: ${year.getMilliseconds()}`);


// Method Date.getMinutes()

// devuelve los minutos de la fecha especificada en función de la hora local.


const yearTwo = new Date('March 22, 93 09:40:18');

console.log(`\n\nMetodo.getMinutes: ${yearTwo.getMinutes()}`);

// REVISAR


// Method .getSeconds()

// devuelve los segundos en la fecha especificada de acuerdo a la hora local.

let yearThree = new Date('August 12, 2001 00:26:30')

console.log(`\n\nMetodo.getSeconds: ${yearThree.getSeconds()}`)


// Method Date.getTime()

// devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.

let yearFour = new Date('January 13, 1998 15:23:54')

console.log(`\n\nMetodo.getTime: ${yearFour.getTime()}`)









