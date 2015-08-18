const {create} = require('../../').object;

import expect from 'expect';

describe('object.create', () => {
  it('should export a function', () => {
    expect(create).toBeA('function');
  });

  describe('called without constructor', () => {
    it('should correctly return enumerable properties', () => {
      const SamplePrototype = {c: 3};
      const properties = {a: 1, b: 2};

      const Sample = create(SamplePrototype);
      const obj = Sample(properties);

      expect(SamplePrototype.isPrototypeOf(obj)).toBe(true);

      expect(obj.c).toExist();
      expect(obj.propertyIsEnumerable('c')).toBe(false);
      expect(obj.c).toBe(3);

      expect(obj.a).toExist();
      expect(obj.propertyIsEnumerable('a')).toBe(true);
      expect(obj.a).toBe(1);
    });
  });

  describe('called with constructor', () => {
    it('should correctly return constructed enumerable properties', () => {
      const SamplePrototype = {
        greet: function() {
          return `Hello ${this.name}!`;
        }
      };
      const constructor = function(firstname, lastname) {
        this.name = `${firstname} ${lastname}`;
      };

      const Sample = create(SamplePrototype, constructor);
      const obj = Sample('Johan', 'West');

      expect(SamplePrototype.isPrototypeOf(obj)).toBe(true);

      expect(obj.name).toExist();
      expect(obj.propertyIsEnumerable('name')).toBe(true);
      expect(obj.name).toEqual('Johan West');

      expect(obj.greet).toExist();
      expect(obj.propertyIsEnumerable('greet')).toBe(false);
      expect(obj.greet()).toEqual('Hello Johan West!');
    });
  });
});
