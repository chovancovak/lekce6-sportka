// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


let osudi = [];

for (let i = 1; i < 49; i++) {
    osudi.push(i);
}

let tazenaCisla = [];
let historieHer = [];
let vyherniCisla = document.querySelector("#vyherni-cisla");

function losOsudi() {
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length)
        let vyherniCislo = osudi[vyherniIndex];
    
        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);

        setTimeout(function(){
            
            historieHer.push(vyherniCislo);
    
            vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
        }, i * 2000);

        console.log(i);
        
        
        
    }
}



/*
function losTazenaCisla () {
    for (let i = 0; i < tazenaCisla.length; i++) {
        
        setTimeout(function(){
            console.log (tazenaCisla);
        }, 2000);
        
        vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
        

    }
}
*/

let button = document.querySelector("#tlacitko");

tlacitko.addEventListener('click', losujZnovu);

function losujZnovu() {
    console.log (historieHer);
    tazenaCisla = [];
    vyherniCisla.innerHTML = "";
    losOsudi();
    
   
}

