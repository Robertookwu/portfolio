const {search} = require("./search.js");

test('searches and matches number to an array of numbers', () => {
    expect(search(1,[1,1,1,2,2,3,3])).toEqual([1, 1, 1]);
});