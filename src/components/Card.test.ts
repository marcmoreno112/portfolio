import { describe, expect, test } from "vitest";
import { getComponentOutput } from "astro-component-tester";

describe("Given a Card component", () => {
  describe("When it is rendered with a 'hello' title", () => {
    test(`Then it should show the title`, async () => {
      const card = await getComponentOutput("src/components/Card.astro", {
        title: "hello",
        body: "",
        href: "",
      });

      expect(card.html).toContain("hello");
    });
  });
});
