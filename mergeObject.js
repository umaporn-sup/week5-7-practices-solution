// Write a function mergeObject(obj1, obj2) and return merges two objects.
function mergeObject(obj1, obj2) {
  const merged = { ...obj1, ...obj2 }
  return merged
}

console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' })) //{ name: 'John', age: 25, city: 'New York' }
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) //{ name: 'Jane', age: 30, country: 'USA' }

// const { mergeObject } = require('./path/to/your/file')

// test('merges objects', () => {
//   expect(
//     mergeObject({ name: 'John', age: 25 }, { city: 'New York' })
//   ).toEqual({ name: 'John', age: 25, city: 'New York' })
// })

// test('merges objects from different sources', () => {
//   expect(
//     mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })
//   ).toEqual({ name: 'Jane', age: 30, country: 'USA' })
// })

// test('handles missing properties gracefully', () => {
//   expect( mergeObject({}, { age: 30, country: 'USA' })).toEqual({
//     name: undefined,
//     age: 30
//   })
// })
