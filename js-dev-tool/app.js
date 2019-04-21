const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello i'm %s string", "56");
// Styled
console.log(
  "%c I'm some great text",
  "font-size:30px; background:red; text-shadow: 10px 10px 0 blue"
);
// warning!
console.warn("OH NOOO!!!");
// Error :|
console.error("Shit!!!!");
// Info
console.info("Hey there");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong dude");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
console.group(`${dogs.name}`);
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("ak");
console.count("ak");
console.count("ak");
console.count("ak");
console.count("ak");
console.count("ak");
console.count("ak");
// timing

console.time("fetching data");
fetch("https://api.github.com/users/tvibhu12")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });
