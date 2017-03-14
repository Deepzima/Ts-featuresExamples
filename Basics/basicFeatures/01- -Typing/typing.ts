/**
 * Created by Aspha9 on 14/03/2017.
 */

/** Typescript ci permette di dare una forte typing quando definioamo le nostre variabili o classi,
 *  questo ci permette una prevenzione degli errori che normalmente il JS non ci permette di fare.
 *
 *  Infatti il compilatore del TypeScript ci blasta se cerchiamo di assegnare un valore sbagliato ad
 *  un tipo definito precedentemente, vediamo qualche esempio.
 * */

//Supponiamo quindi di dichiarare una variabile per una stringa.

let myString: string;

myString = 'This is a string';


/** Se si prova a decommentare l'assegnazione qua sotto il compilatore ci segnala il tentativo e quindi
   e quindi va in errore.
  */

//myString = 4;


// TypeScript, inoltre è in grado di dedurre il tipo:

let anotherString = 'This is a string without :string'; // => il Tipo 'string' viene rilevato all'interno dell'assegnamento.

// Anche questa modalità, se si cerca di andare contro il tipo di assegnamento il compilatore resituisce un errore.
// anotherString = 4;

/** Il TS, rileva il tipo di valore solamente se questo viene assegnato nella dichiarazione,
   molto semplicemente TS non conosce il tipo da assegnare quindi non otteniamo nessun tipo di errore
*/

let yetAnotherString;

yetAnotherString = 'This is a string';

yetAnotherString = 5;

// Qui abbiamo una lista di altri tipi:

let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // Gli array sono dei tipi generici => Ma in questo caso ad esempio può contenere solo stringhe.

/** Chiaramente TS per non perdere una proprietà fondamentale del JS, ci da la possibilità di aspettarci qualsiasi tipo di dato!
(nel caso non siamo troppo sicuri di quello che magari un'altro software ci sta passando) => Tuttavia per convenzione, si consiglia di usarlo raramente!
*/
let anything: any;

// Abbiamo anche il tipo void (=> non restituisce nulla) e enums (valori numerici)
