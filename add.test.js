const {sum} = require('./add')

describe("sum function", () => {
    test('Adding test', () => {
        expect(sum(1, 1)).toBe(2);
      }) 
})
