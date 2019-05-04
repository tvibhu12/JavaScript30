const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']; //data
const list=document.getElementById('bands');  //DOM getting list element
//remove 'a' 'the' 'an' from sentence for sorting only
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}
//sort the data
const sortBands=bands.sort((a,b)=> strip(a)>strip(b)? 1 :-1);
//display in the list 
list.innerHTML=sortBands.map(item=>`<li>${item}</li>`).join('');