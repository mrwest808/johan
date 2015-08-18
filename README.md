# Miscellaneous Utility Functions

## object

### .create(prototype <object> [, constructor <function>])


Returns a function that creates a new object linked to the specified `prototype`
object, optionally initialized with a `constructor` function.

Depending on whether a `constructor` parameter was passed to the wrapping
function, the returned function can be called to ..

- .. instantiate an object with the specified prototype and call the constructor function.
- .. instantiate an object with the specified prototype and copy the `properties` as own enumerable properties.

In both scenarios, the new object instance is returned.

**Example**

```javascript
const {create} = require('johan').object;

/**
 * Class-like object.
 */
const PersonPrototype = {greet: () => `Hello my name is ${this.name}!`};
const Person = create(PersonPrototype, (name) => { this.name = name });

const john = Person('John');
const jane = Person('Jane');

john.greet(); // -> Hello, my name is John!
jane.greet(); // -> Hello, my name is Jane!

PersonPrototype.isPrototypeOf(john); // -> true

jane.greet;                         // -> function greet()
jane.propertyIsEnumerable('greet'); // -> false
jane.propertyIsEnumerable('name');  // -> true

/**
 * Object with assigned properties.
 */
const ABLPrototype = {zone: 'North America'};
const AmericanBasketballLeague = create(ABLPrototype);

const nba = AmericanBasketballLeague({
  name: 'National Basketball Association',
  teams: 30,
  type: 'pro'
});
const ncaa = AmericanBasketballLeague({
  name: 'NCAA Men\'s Division 1 Basketball Championship',
  teams: 68,
  type: 'college'
});

ABLPrototype.isPrototypeOf(nba); // -> true

ncaa.zone;                         // -> "North America"
ncaa.propertyIsEnumerable('zone'); // -> false
ncaa.propertyIsEnumerable('type'); // -> true
```

## array

### .split(arr <array> [, n <number>])

Split an array into sub arrays of `n` elements, where `n` is a positive number
greater than 1.

**Example**

```javascript
const {split} = require('johan').array;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

split(arr, 3); // -> [[1, 2, 3], [4, 5, 6], [7, 8]]
```
