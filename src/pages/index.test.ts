import { describe, expect, test } from "vitest";
import texts from "../assets/texts";
import { getComponentOutput } from "astro-component-tester";

describe("Given a index page", () => {
  describe("When it is rendered", () => {
    test(`Then it should show a ${texts.appHeading} heading`, async () => {
      const title = texts.appHeading;

      const card = await getComponentOutput("src/pages/index.astro");

      expect(card.html).toContain(title);
    });
  });
});
