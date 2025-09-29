import { toNumber } from "../toNumber";

describe("toNumber", () => {
  it("returns number if input is already a number", () => {
    expect(toNumber(42, 0)).toBe(42);
  });

  it("parses string numbers", () => {
    expect(toNumber("123", 0)).toBe(123);
    expect(toNumber("3.14", 0)).toBe(3.14);
  });

  it("returns fallback for invalid strings", () => {
    expect(toNumber("abc", 99)).toBe(99);
    expect(toNumber("123abc", -1)).toBe(-1);
  });

  it("handles null, undefined, and empty string", () => {
    expect(toNumber(null, 7)).toBe(7);
    expect(toNumber(undefined, 8)).toBe(8);
    expect(toNumber("", 9)).toBe(9);
  });

  it("takes first element of array", () => {
    expect(toNumber(["42"], 0)).toBe(42);
    expect(toNumber([123], 0)).toBe(123);
    expect(toNumber(["abc"], 5)).toBe(5);
  });

  it("returns fallback for non-supported types", () => {
    expect(toNumber(true, 1)).toBe(1);
    expect(toNumber({}, 2)).toBe(2);
    expect(toNumber(Symbol("x"), 3)).toBe(3);
    expect(toNumber(() => 42, 4)).toBe(4);
  });

  it("returns fallback for NaN and Infinity", () => {
    expect(toNumber("NaN", 10)).toBe(10);
    expect(toNumber("Infinity", 11)).toBe(11);
  });
});
