import expect from 'expect';

const { proto } = require('../../').object;


describe('object.proto', () => {
  it('should export a function', () => {
    expect(proto).toBeA('function');
  });

  const Prototype = { c: 3 };
  const enumerables = { a: 1, b: 2 };

  describe('called without factory function', () => {
    const Sample = proto(Prototype);
    const obj = Sample(enumerables);

    it('should return expected enumerable properties', () => {
      expect(obj.propertyIsEnumerable('a')).toBe(true);
      expect(obj.propertyIsEnumerable('b')).toBe(true);

      expect(obj.a).toBe(1);
      expect(obj.b).toBe(2);
    });

    it('should return expected non-enumerable properties', () => {
      expect(obj.propertyIsEnumerable('c')).toBe(false);
      expect(obj.c).toBe(3);
    });
  });

  describe('called with factory function', () => {
    describe('simple example', () => {
      const Sample = proto(Prototype, (a, b) => ({ a, b }));
      const obj = Sample(1, 2);

      it('should return expected enumerable properties', () => {
        expect(obj.propertyIsEnumerable('a')).toBe(true);
        expect(obj.propertyIsEnumerable('b')).toBe(true);

        expect(obj.a).toBe(1);
        expect(obj.b).toBe(2);
      });

      it('should return expected non-enumerable properties', () => {
        expect(obj.propertyIsEnumerable('c')).toBe(false);
        expect(obj.c).toBe(3);
      });
    });

    describe('with validation in factory function', () => {
      const expectedError = 'Expecting `a` to be less than 10';
      const Sample = proto(Prototype, (a, b) => {
        if (a > 10) {
          throw new Error(expectedError);
        }

        return { a, b };
      });

      describe('good parameters', () => {
        it('should not throw', () => {
          expect(() => Sample(5, 6)).toNotThrow();
        });
      });

      describe('bad parameters', () => {
        it('should throw', () => {
          expect(() => Sample(11, 12)).toThrow(Error, expectedError);
        });
      });
    });
  });
});
