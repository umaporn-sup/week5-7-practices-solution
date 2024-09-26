// Write a function mergeAndDestructure(obj1, obj2) that merges two objects using the spread operator, and then destructures the merged object to extract specific properties. Return an object with the extracted properties.
function mergeAndDestructure(obj1, obj2) {
  const merged = { ...obj1, ...obj2 }
  const { name, age } = merged
  return { name, age }
}

console.log(
  mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })
) // { name: 'John', age: 25 }
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })) // { name: 'Jane', age: 30 }

// const { mergeAndDestructure } = require('./path/to/your/file')

// test('merges and destructures objects with name and age', () => {
//   expect(
//     mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })
//   ).toEqual({ name: 'John', age: 25 })
// })

// test('merges and destructures objects with name and age from different sources', () => {
//   expect(
//     mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })
//   ).toEqual({ name: 'Jane', age: 30 })
// })

// test('handles missing properties gracefully', () => {
//   expect(mergeAndDestructure({}, { age: 30, country: 'USA' })).toEqual({
//     name: undefined,
//     age: 30
//   })
// })
