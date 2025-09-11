import { Bank } from "./bankSystem";
import { describe, test, expect } from "vitest";

describe("Bank System", () => {
  test("should create bank with initial balances", () => {
    const bank = new Bank([10, 20, 30]);
    expect(bank).toBeDefined();
  });

  test
});

