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
//get value from search box
const serachInput=document.querySelector('.search');
//store suggetion DOM
const suggestion=document.querySelector('.suggestion');
//getting value from search Box
serachInput.addEventListener("change",function(){
   console.log(this.value)
});
serachInput.addEventListener("keyup",function(){
    console.log(this.value)
 })