import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("1/3 - 2/6 = 0", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0);
});

Deno.test("1/3 * 2/6 = 1/9 roughly 0.11", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.11);
});

Deno.test("1/3 / 2/6 = 1", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 1);
});

Deno.test("toString returns numerator/denominator", () => {
  // Arrange
  const fraction = new Fraction(3, 4);

  //Act
  const str = fraction.toString();

  // Assert
  assertEquals(str, "3/4");
});

Deno.test("parse creates a Fraction from a string", () => {
  //Arrange
  const fractionStr = "5/6"
  //Act
  const fraction = Fraction.parse(fractionStr);

  //Assert
  assertEquals(fraction.toString(), "5/6");
});

Deno.test("parse trims spaces correctly", () => {
  //Arrange
  const fractionStr = "7 / 8"

  //Act
  const fraction = Fraction.parse(fractionStr);

  //Assert
  assertEquals(fraction.toString(), "7/8");
});

Deno.test("parse throws error for invalid syntax", () => {
  //Arrange
  const parseNumber = "5";

  //Act & Assert
  assertThrows(() => { Fraction.parse(parseNumber); }, `illegal syntax: "[numerator]/[denominator]" required`);
});

Deno.test("parse throws error for non-numeric values", () => {
  //Arrange
  const parseNumber = "a/b";

  //Act & Assert
  assertThrows(() => { Fraction.parse(parseNumber); }, `non-numeric numerator/denominator`);
});

Deno.test("negative fraction", () => {
  const fraction = new Fraction(-1, 2);

  assertEquals(fraction.toString(), "-1/2");
});

Deno.test("2/3 * 3/2 = 1", () => {
  const f1 = new Fraction(2, 3);
  const f2 = new Fraction(3, 2);

  f1.multiply(f2);

  assertAlmostEquals(f1.toFloat(0.01), 1);
});

Deno.test("constructor throws error for denominator 0", () => {
  assertThrows(() => { new Fraction(3, 0); }, "denominator cannot be 0");
});

Deno.test("parse throws error for denominator 0", () => {
  assertThrows(() => { Fraction.parse("3/0"); }, "denominator cannot be 0");
});