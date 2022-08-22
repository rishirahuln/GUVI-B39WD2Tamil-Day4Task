// Use the rest countries API URL -> https://restcountries.eu/rest/v2/all and display all the country flags in the console

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayResult() {
    const countries = xhr.response;
    for (let i in countries) {
        console.log(countries[i].flags.png);
    }    
}