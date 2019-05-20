 // start with strings, numbers and booleans
let age=18;
let age2=age;
console.log(age,age2);
age =30;
console.log(age,age2);
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
let team2=players;
    // You might think we can just do something like this:

    // however what happens when we update that array?
team2[3]='lux';
    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
team2=players.slice();
    // one way

    // or create a new array and concat the old one in
team2=[].concat(players);
    // or use the new ES6 Spread
team2=[...players];
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
let cap=person;
    // how do we take a copy instead?
let cap2=Object.assign({},person,{number:99,age:12});
    // We will hopefully soon see the object ...spread
let cap3={...person};  // but it's work with object

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes={
    name:'wes',
    age:18,
    social:{
        tiwiter:'@wes',
        facebook:'wes.deve'
    }
}


const dev=Object.assign({},wes);  //it's work only 1 level deep 
const dev2=JSON.parse(JSON.stringify(person));
