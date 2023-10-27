import { test } from "@playwright/test";

test("Drop artboard, chart and resize the chart element in the container", async ({ page }) => {
  await test.step("Navigate to creatingly website", async () => {
    await page.goto("https://dev.platform.creatingly.com/webstudio");
    await page.locator("app-helper span").first().click();
  });

  await test.step("Open the artboard", async () => {
    await page.locator("span").filter({ hasText: "Artboard" }).first().click();
    await page.getByLabel("One wide section artboard template to begin the design").click();
  });

  await test.step("select the chart", async () => {
    await page.getByText("Chart").click();
    const chart = page
      .locator("#flavour-scroll div")
      .filter({ hasText: "ActionableAction Sheet" })
      .locator("#flavourimage")
      .first();

    await chart.isVisible();

    await chart.click();
  });

  await test.step("Align the chart to the center", async () => {
    await page.getByText("Stretch vertically").click();
    await page.getByText("Stretch horizontally").click();
    await page.getByText("Stretch vertically").click();
  });

  await page.close();
});
