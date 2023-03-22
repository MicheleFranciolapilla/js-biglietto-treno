// Chiedere a utente 2 dati:
// 1) km da percorrere
// 2) età o fascia d'età

// In base ad una tariffa di 0.21 € per km, calcolare il costo del viaggio ed inoltre, nel caso, applicare scontistica:
// a) 20% di sconto per minorenni
// b) 40% di sconto per over 65.

// Output del prezzo con due cifre decimali

const       basic_fare      = 0.21;
const       junior_price    = 0.8; //sconto 20%
const       adult_price     = 1;   //sconto 0%
const       senior_price    = 0.6; //sconto 40%
let         percent_price   = 1;
let         final_price     = 0;

function calc_price()
{
    const   km   = document.getElementById('distance').value;
    const   j_18 = document.getElementById('junior').checked;
    const   mid  = document.getElementById('adult').checked;
    const   s_65 = document.getElementById('senior').checked;
    console.log(km);
    console.log(j_18, mid, s_65);

    if (j_18)
    {percent_price = junior_price;}
        else if (s_65)
        {percent_price = senior_price;}

    console.log(percent_price);
}