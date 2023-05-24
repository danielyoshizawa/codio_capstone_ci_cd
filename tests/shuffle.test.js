// import { test, expect, describe } from '@jest/globals';
const {test} = require('@jest/globals')
const {expect} = require('@jest/globals')
const {describe} = require('@jest/globals')

const shuffle = require('../src/js/main.js')

describe("shuffle", () => {
    it("should shuffle an array", () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffledArr = shuffle([...arr]);
      expect(shuffledArr).not.toEqual(arr);
      expect(shuffledArr.sort()).toEqual(arr.sort());
    });
});