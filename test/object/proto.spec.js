import expect from 'expect';

const { proto } = require('../../').object;


describe('object.proto', () => {
  it('should export a function', () => {
    expect(proto).toBeA('function');
  });

  const Prototype = { c: 3 };
  const enumerables = { a: 1, b: 2 };

  describe('called without validate function', () => {
    const Sample = proto(Prototype);
    const obj = Sample(enumerables);

    it('should return expected enumerable properties', () => {
      expect(obj.propertyIsEnumerable('a')).toBe(true);
      expect(obj.propertyIsEnumerable('b')).toBe(true);

      expect(obj.a).toBe(1);
      expect(obj.b).toBe(2);
    });

    it('should return expecting non-enumerable properties', () => {
      expect(obj.propertyIsEnumerable('c')).toBe(false);
      expect(obj.c).toBe(3);
    });
  });

  describe('called with validate function', () => {
    const expected = 'Expecting `a` prop to be 2';
    const validate = obj => {
      if (obj.a !== 2) {
        throw new Error(expected);
      }
    };

    const goodProps = { a: 2 };
    const badProps = { a: 1 };

    const Sample = proto(Prototype, validate);

    describe('called with good parameter(s)', () => {
      let obj;
      const instantiation = () => {
        obj = Sample(goodProps);
      };

      it('should not throw', () => {
        expect(instantiation).toNotThrow();
      });

      it('should return a good instance', () => {
        expect(obj.a).toBe(2);
      });
    });

    describe('called with bad parameter(s)', () => {
      let obj;
      const instantiation = () => {
        obj = Sample(badProps);
      };

      it('should throw', () => {
        expect(instantiation).toThrow(Error);
      });
    });
  });
});
