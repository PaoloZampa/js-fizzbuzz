/*
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*  STRUMENTI
- let const
- for
- cycle
- division reminder
- console.log   */

//seleziono il contianer
const divElement = document.getElementById('container');
console.log(divElement);

/*
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
for (let i = 1; i <= 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square", "d-flex", "align-items-center", "justify-content-center", "m-3");
    // per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) {
        square.classList.add("bg_fizzbuzz");
        square.innerHTML = ("FizzBuzz");
    }

    //per i multipli di 3 stampi “Fizz” al posto del numero
    else if (i % 3 === 0) {
        square.classList.add("bg_fizz")
        square.innerHTML = ("Fizz")
    }

    //per i multipli di 5 stampi “Fizz” al posto del numero
    else if (i % 5 === 0) {
        square.classList.add("bg_buzz")
        square.innerHTML = ("buzz")
    }

    //stampare numeri su caselle vuote
    else {
        square.classList.add("bg_number");
        square.innerHTML = i;
    }


    divElement.append(square);
    console.log(i);
}
