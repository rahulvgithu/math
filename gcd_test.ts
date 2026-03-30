import { assertEquals } from "@std/assert";
import { gcdBruteForce } from "./gcd.ts";

Deno.test("ggT von 10 und 10", () => {
  const result = gcdBruteForce(10, 10);
  assertEquals(result, 10);
});

Deno.test("ggT von 6 und 9", () => {
  const result = gcdBruteForce(6, 9);
  assertEquals(result, 3);
});