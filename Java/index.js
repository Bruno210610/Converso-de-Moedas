const convertbutton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-Select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const moeda = document.querySelector(".moeda-converso")
    const moedatwo = document.querySelector(".moeda-converso-two")

    const dolarToday = 5.2
    const euroToday = 6.2

if(currencySelect.value == "dolar"){
    moedatwo.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect.value == "euro"){
   moedatwo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
   }).format(inputCurrencyValue / euroToday)

}
   moeda.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
 
function changeCurrency (){
 const currencyname = document.getElementById("currency-name")
 const currencyImage = document.querySelector(".currency-img")

 if (currencySelect.value == "dolar") {
    currencyname.innerHTML = "Dolar Americano"
    currencyImage.src = "/img/Dolar.png"
    
 }

 if (currencySelect.value == "euro") {
    currencyname.innerHTML = "Euro"
    currencyImage.src = "/img/EURO.png"
 }

 convertValues()

}

currencySelect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertValues);