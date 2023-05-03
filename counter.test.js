/**
 * @jest-environment jsdom
 */

import { counter } from "./counter.js";

describe("Given a counter function", () => {
  describe("When it receives -1", () => {
    test("Then it should return 0", () => {
      const displayNumber = document.querySelector(".number");
      const decrement = -1;

      const expectedResult = true;

      const expectedValue = document.querySelector(".decrement-button").onclick;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});
