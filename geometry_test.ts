import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("distance between (0,0) and (3,4) is 5", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);

  const actual = p1.distanceTo(p2);

  assertAlmostEquals(actual, 5);
});

Deno.test("area of circle radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.area()
  
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of circle radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const diameter = circle.diameter();

  assertAlmostEquals(diameter, 10);
});

Deno.test("rectangle circumference is correct", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  const circumference = rect.circumference();

  assertAlmostEquals(circumference, 20);
});

Deno.test("rectangle area is correct", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  const area = rect.area();

  assertAlmostEquals(area, 12);
});

Deno.test("rectangle diagonal is correct (3-4-5 triangle)", () => {
  const rect = new Rectangle(
    new Point2D(0, 0),
    new Point2D(3, 4),
  );

  const diagonal = rect.diagonal();

  assertAlmostEquals(diagonal, 5);
});

Deno.test("area of circle radius 5", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const area = circle.area();

  assertAlmostEquals(area, 78.54, 0.01);
});

Deno.test("diameter of circle radius 5", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const diameter = circle.diameter();

  assertAlmostEquals(diameter, 10);
});