// Write a function extractAndRename(obj) that extracts properties name and age from an object, renames them to fullName and yearsOld, and returns a new object with these properties.
function extractAndRename(obj) {
  const { name: fullName, age: yearsOld } = obj
  return { fullName, yearsOld }
}

console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' })) // { fullName: 'John', yearsOld: 25 }
console.log(extractAndRename({ name: 'Jane', age: 30 })) // { fullName: 'Jane', yearsOld: 30 }

//const { extractAndRename } = require('./path/to/your/file');

// test('extracts and renames properties', () => {
//     expect(extractAndRename({ name: 'John', age: 25, city: 'New York' })).toEqual({ fullName: 'John', yearsOld: 25 });
// });

// test('extracts and renames properties with minimal input', () => {
//     expect(extractAndRename({ name: 'Jane', age: 30 })).toEqual({ fullName: 'Jane', yearsOld: 30 });
// });

// test('handles missing properties gracefully', () => {
//     expect(extractAndRename({ name: 'John' })).toEqual({ fullName: 'John', yearsOld: undefined });
// });
