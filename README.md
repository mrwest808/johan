# Miscellaneous Utility Functions


## object

### .proto(prototype (object) [, factory (function)])

Create an instantiatable object linked to the supplied `prototype` object. Can
be used with or without a `factory` function.

**Example**

```javascript
const { assign, proto } = require('johan').object;


const Walking = {
  move() {
    return 'Walking...';
  }
};

const Speaking = {
  speak() {
    return `Hello my name is ${this.name}`;
  }
};


const PersonProto = assign({}, Speaking, Walking);


/**
 * Without `factory` function
 */
const PersonNoFactory = proto(PersonProto);

/**
 * With `factory` function
 */
const PersonWithFactory = proto(PersonProto, name => {
  if (typeof name !== 'string') {
    throw new Error('Expecting `name` to be a string');
  }

  return { name };
});


const john = PersonNoFactory({ name: 'John' });
// or -> ... = PersonWithFactory('John');

const jane = PersonNoFactory({ name: 'Jane' });
// or -> ... = PersonWithFactory('Jane');


john.speak(); // -> Hello, my name is John!
jane.speak(); // -> Hello, my name is Jane!

jane.move(); // -> Walking...

jane.move;                         // -> function move()
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
