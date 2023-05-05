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
  await page.goto("https://www.koona.xyz/auth/signIn");
  await page.pause();
  await page.locator("#email").click();
  await page.locator("#email").fill("kminchelle");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("0lelplR");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL("https://www.koona.xyz");
});

test("E2E customer journey", async ({ page }) => {
  await page.goto("https://www.koona.xyz");

  await page
    .getByRole("button", {
      name: "Add to cart , Non-Alcoholic Concentrated Perfume Oil",
    })
    .click();
  await page
    .getByRole("button", { name: "Add to cart , Eau De Perfume Spray" })
    .click();
  await page.getByPlaceholder("Search for Phone, Car, Shirt...").click();
  await page.getByPlaceholder("Search for Phone, Car, Shirt...").fill("Car");
  await page.getByPlaceholder("Search for Phone, Car, Shirt...").press("Enter");
  await page
    .getByRole("button", { name: "Add to cart , Elbow Macaroni - 400 gm" })
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^3items in cart, view bag$/ })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.locator("#email").click();
  await page.locator("#email").fill("kminchelle");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("0lelplR");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^3items in cart, view bag$/ })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForTimeout(4000);
  const element = await page.$(".font-extrabold");
  const textContent = await element?.textContent();
  await expect(textContent).toContain("Order history");
  //await expect(page.locator("h1")).toContainText("Order history");
});
