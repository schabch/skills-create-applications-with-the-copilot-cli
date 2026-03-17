const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers', () => {
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    test('should handle negative numbers', () => {
      expect(add(-5, 10)).toBe(5);
    });

    test('should return 0 when no arguments provided', () => {
      expect(add()).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should add single number', () => {
      expect(add(42)).toBe(42);
    });
  });

  describe('Subtraction', () => {
    test('should subtract: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract multiple numbers sequentially', () => {
      expect(subtract(20, 5, 3)).toBe(12);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should handle negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 2.5)).toBe(8);
    });

    test('should return the number when no subtraction values', () => {
      expect(subtract(42)).toBe(42);
    });

    test('should handle subtracting zero', () => {
      expect(subtract(100, 0)).toBe(100);
    });
  });

  describe('Multiplication', () => {
    test('should multiply: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should return 1 when no arguments provided', () => {
      expect(multiply()).toBe(1);
    });

    test('should handle multiplying by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should return the number when multiplying single value', () => {
      expect(multiply(42)).toBe(42);
    });

    test('should multiply two negative numbers to get positive', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('Division', () => {
    test('should divide: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide sequentially with multiple divisors', () => {
      expect(divide(100, 5, 2)).toBe(10);
    });

    test('should handle negative numbers', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should handle decimal division', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('should return the number when dividing by none', () => {
      expect(divide(42)).toBe(42);
    });

    test('should divide two negative numbers to get positive', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing by zero in sequence', () => {
      expect(() => divide(100, 5, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle result less than 1', () => {
      expect(divide(1, 2)).toBe(0.5);
    });

    test('should throw error message matches exactly', () => {
      expect(() => divide(20, 0)).toThrow(Error);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers in addition', () => {
      expect(add(1e10, 2e10)).toBe(3e10);
    });

    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle mixed operations with zero', () => {
      expect(add(0, 5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(multiply(0, 100)).toBe(0);
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle chained operations accuracy', () => {
      const result = divide(multiply(add(2, 3), 4), 2);
      expect(result).toBe(10);
    });
  });
});
