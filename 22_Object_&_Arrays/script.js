//Deel 1

let person = {
    name: 'Ana',
    age: 38,
    evaluations: [7, 10, 9],
};

console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person['age']);
console.log(person.evaluations);

//Deel 2

let myColors = ['groen', 'blauw', 'rood'];

console.log(myColors);
console.log(myColors.length);
console.log(myColors[0]);
//note to self: you start counting from 0, not from 1
// 0 is groen; 1 is baluw; 2 is rood
console.log(myColors.length - 1); //dit werkt niet zo maar zoals onderstaan:
console.log(myColors[myColors.length - 1]);

myColors.push('geel');
console.log(myColors);

myColors.push(5);
console.log(myColors);

myColors.push({ greeting: "Hi, ik ben een object" });
console.log(myColors[myColors.length - 1]);

//Deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

console.log("Dit is de naam van kattenras nummer 3:", catBreeds[2].name);

console.log("Energy levels van kattenras nummer 1:", catBreeds[0].energy_level);

console.log("Het eerste temperament van kattenras nummer 2 is:", catBreeds[1].temperament[0]);

console.log("Het laatste temperament van kattenras nummer 3 is:", catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);
// note to self: kijk op datum 14 mei in slack voor uitleg van hierboven

console.log("Het favorite voedsel van kattenras nummer 3 is:", catBreeds[2].food.favourite_food);

