import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test("Valid Login", async ({ page }) => {
  await page.goto("https://www.koona.xyz");
  await page.pause();
  await page.locator("#email").click();
  await page.locator("#email").fill("kminchelle");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("0lelplR");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL("https://www.koona.xyz");
});
