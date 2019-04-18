const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
console.log("hi");
let cities =[]; //empty Array for storing cities.
//fetching JSON data from API and store into cities.
fetch(endpoint).then(Blob=>Blob.json()).then(data=>cities=data);
//function to findout serached city in Array.
function find(wordToFind,cities)
{
    return cities.filter(place=>{
        //here we figure out searched city or state is present in cities's Array.
        const regEx=new RegExp(wordToFind,'gi');
        return place.city.match(regEx) || place.state.match(regEx);
    });
}
//function to diplay matched city or state 
function display() {
    const mathchArray=find(this.value,cities);
    const html=mathchArray.map(place=>{
        //highlight search word in suggestion
        const regEx=new RegExp(this.value,'gi');
        const cityName=place.city.replace(regEx,`<span class="hl">${this.value}</span>`);
        // add matched city or state in suggestion section.
        return `
        <li>
        <span class='name'>${cityName},${place.state}</span>
        <span class='population'>${place.population}</span>
        </li>`;


    }).join('');
    suggestion.innerHTML=html;
 };
//get value from search box
const serachInput=document.querySelector('.search');
//store suggetion DOM
const suggestion=document.querySelector('.suggestions');
//getting value from search Box
serachInput.addEventListener("change",display);
serachInput.addEventListener("keyup",display);