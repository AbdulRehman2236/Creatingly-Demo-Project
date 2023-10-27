import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev.platform.creatingly.com/webstudio");
  await page.locator("app-helper span").first().click();
  await page.locator("span").filter({ hasText: "Artboard" }).first().click();
  await page.getByLabel("One wide section artboard template to begin the design").click();

  await page.getByText("Chart").click();
  const chart = page
    .locator("#flavour-scroll div")
    .filter({ hasText: "ActionableAction Sheet" })
    .locator("#flavourimage")
    .first();

  await chart.isVisible();

  await chart.click();
  await page.getByText("Stretch vertically").click();
  await page.getByText("Stretch horizontally").click();
  await page.getByText("Stretch vertically").click();

  await page.close();
});

/**
 * .locator("#flavour-scroll div")
    .filter({ hasText: "ActionableAction Sheet" })
 */
