// Palindroma--------------------------------------------------------------------

// -assegnare variabile a input
// -Dividere in array le parole
// -Per ogni parola dell'input
// -ciclo inverso per ricreare la parola al contrario
// -SE la parola al contrario è uguale all'input
//     °stampa "la parola è un palindromo"
// -ALTRIMENTI
//     °stampa "la parola NON è un palindromo"

const palindromaInputElement = document.getElementById("palindromo-user-input");
const palindromaBtnCheck = document.getElementById("ckeck-palindromo");
const palindromaOutput = document.getElementById("palindromo-answer");





//Stampa a schermo un messaggio
function printP(message){
    palindromaOutput.innerHTML = message
}

//Confronta le parole e restituisce un valore booleano se l'input è palindromo
/**
 * Restituisce il valore "true" se la parola è uguale al suo inverso
 * @param {any} specificWord
 * @returns {any}
 */
function isPalindroma(specificWord){
    let booleanControl = false;
    if(specificWord === parolaInvertita(specificWord)){
        booleanControl = true;
    }

    return booleanControl
}


//Crea un Array con tutte le parole di input
/**
 * Restituisce un array con tutte le parole della frase se sono presenti spazi.
 * @param {any} inputPhrase
 * @returns {any}
 */
function createArraywords(inputPhrase){
    let arrayWords = [];
    if(inputPhrase.includes(" ")){
       arrayWords = inputPhrase.split(" ");
    }else{
        arrayWords=[inputPhrase]
    }

    return arrayWords
}


// Crea una Parola invertita dall'inputUtente
/**
 * data una parola di input crea una nuova parola invertita
 * @param {any} inputWord
 * @returns {any}
 */
function parolaInvertita(inputWord){

    let invertWord = "";

    for(let i = inputWord.length - 1; i >= 0; i--){
        invertWord += inputWord[i];
        //console.log("valore della i: " + i, inputWord, invertWord)
    }

    
    return invertWord
} 


palindromaBtnCheck.addEventListener('click', function(){

    printP("");

    let inputPhrase = palindromaInputElement.value;
    //Check - console.log(inputPhrase);

    if (!isNaN(inputPhrase) || inputPhrase == "" || inputPhrase.length <= 1){
        printP("Scrivi una frase o una parola")
    } else {

        let arrWords = createArraywords(inputPhrase);
        //Check - console.log(arrWords)

        for(let i = 0; i < arrWords.length; i++){
            //console.log(arrWords[i])
            if(isPalindroma(arrWords[i])){
                
                printP(palindromaOutput.innerHTML + `${arrWords[i]} è palindroma` + "<br>")

            }else{
                printP(palindromaOutput.innerHTML +  `${arrWords[i]} non è palindroma` + "<br>")
            }

        }

    }
})

// Palindroma--------------------------------------------------------------------

// Pari Dispari------------------------------------------------------------------
const inputNumber = document.getElementById("numero");
const inputScelta = document.getElementById("pari-dispari");
const btnPlay = document.getElementById("btn-play");
let dispariOutput = document.getElementById("dispari-output");



//Genera un numero random tra il "min" e il "max"
function generaNumeroRandom(min, max){
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random
}

function somma(number1, number2){
    let somma = 0;
    somma =parseInt(number1) + parseInt(number2);

    return somma
}

btnPlay.addEventListener('click', function(){
    let inputUtenteScelta = inputScelta.value; 
    let inputUtenteNumero = inputNumber.value; 
    let pcNumber = generaNumeroRandom(1, 5);
    let result = somma(inputUtenteNumero, pcNumber);

    dispariOutput.innerText = "";

    if((inputUtenteScelta === "pari" && result %2 == 0) || (inputUtenteScelta === "dispari" && result %2 != 0)){
        dispariOutput.innerHTML = "Hai vinto!<br> il pc ha lanciato " + pcNumber + ", tu hai scelto " + inputUtenteNumero + ", e la somma è: " + result
    }else{

        dispariOutput.innerHTML = "Hai perso!<br> il pc ha lanciato " + pcNumber + ", tu hai scelto " + inputUtenteNumero + ", e la somma è: " + result
    }

    
})


        
    