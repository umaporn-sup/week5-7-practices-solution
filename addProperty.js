// Write a function addProperty(obj, key, value) that adds a new property to an object and returns the updated object.
function addProperty(obj, key, value) {
  obj[key] = value
  return obj
}

console.log(addProperty({ name: 'John' }, 'age', 25)) // { name: 'John', age: 25 }
console.log(addProperty({}, 'city', 'New York')) // { city: 'New York' }

// const { addProperty } = require('./path/to/your/file')

// test('adds age property to object', () => {
//   expect(addProperty({ name: 'John' }, 'age', 25)).toEqual({
//     name: 'John',
//     age: 25
//   })
// })

// test('adds city property to empty object', () => {
//   expect(addProperty({}, 'city', 'New York')).toEqual({ city: 'New York' })
// })

// test('overwrites existing property', () => {
//   expect(addProperty({ name: 'Jane', age: 20 }, 'age', 30)).toEqual({
//     name: 'Jane',
//     age: 30
//   })
// })
