const kingdom = {
  name: 'Westeros',
  ruler: 'King Robert Baratheon',
  population: 1000000,
  capital: 'King\'s Landing'
};

delete kingdom.population; // Deleting the population property

kingdom.population = 2000000; // Modifying the population property

kingdom.queen = 'Cersei'; // Adding a new property for the queen

console.log(kingdom);

// Object.freeze(kingdom); // Freezing the kingdom object to prevent further modifications

kingdom.ruler = 'King Joffrey'; // This will not change the ruler property because the object is frozen
kingdom.queen = 'Margaery'; // This will not change the queen property because the object is frozen 
delete kingdom.capital; // This will not delete the capital property because the object is frozen

console.log(kingdom);

Object.seal(kingdom); // Sealing the kingdom object to prevent adding or deleting properties, but allows modification of existing properties

kingdom.ruler = 'King Stannis Baratheon'; // This will change the ruler property because the object is sealed
delete kingdom.queen; // This will not delete the queen property because the object is sealed
kingdom.newProperty = 'This will not be added'; // This will not add a new property because the object is sealed  
kingdom.name ="Ashikur Rahman"

console.log(kingdom);