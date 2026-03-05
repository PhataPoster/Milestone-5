const kingdom = {
    name : "Animalia",
    phylum : "Chordata",
    class : "Mammalia",
    order : "Primates",
    family : "Hominidae",

}

const keys = Object.keys(kingdom);
const values = Object.values(kingdom);
const entries = Object.entries(kingdom);

console.log(keys); // [ 'name', 'phylum', 'class', 'order', 'family' ]
console.log(values); // [ 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Hominidae' ]
console.log(entries); // [ [ 'name', 'Animalia' ], [ 'phylum', 'Chordata' ], [ 'class', 'Mammalia' ], [ 'order', 'Primates' ], [ 'family', 'Hominidae' ] ]
// they are retuning array of keys and values and entries in the object.