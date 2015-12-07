# Miscellaneous Utility Functions


## object

### .proto(prototype (object) [, validate (function)])

Returns a function that creates a new object linked to the specified `prototype`
object, optionally validated on instantiation with a `validate` function.

**Example**

```javascript
const { assign, proto } = require('johan').object;


const Walking = {
  move() {
    return 'Walking...';
  }
};

const Speaking = {
  greet() {
    return `Hello my name is ${this.name}`;
  }
};

const Person = proto(assign({}, Speaking, Walking));

const john = Person({ name: 'John' });
const jane = Person({ name: 'Jane' });

john.greet(); // -> Hello, my name is John!
jane.greet(); // -> Hello, my name is Jane!

jane.move(); // -> Walking...

jane.move;                         // -> function greet()
jane.propertyIsEnumerable('move'); // -> false
jane.propertyIsEnumerable('name'); // -> true
```

## array

### .split(arr (array), n (number))

Split an array into sub arrays of `n` elements, where `n` is a positive number
greater than 1.

**Example**

```javascript
const {split} = require('johan').array;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

split(arr, 3); // -> [[1, 2, 3], [4, 5, 6], [7, 8]]
```
