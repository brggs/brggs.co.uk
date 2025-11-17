import { test, expect } from '@playwright/test';

test.describe('Basic page rendering', () => {
  test('homepage renders with key content', async ({ page }) => {
    await page.goto('/');

    // Check page loaded successfully
    await expect(page).toHaveTitle(/Home/);

    // Verify key content is present
    await expect(page.getByText(/Andy Briggs/i)).toBeVisible();
    await expect(page.getByText(/software engineer/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Surevine/i })).toBeVisible();

    // Check social links are present
    await expect(page.locator('a[href*="github.com"]')).toBeVisible();
    await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible();
  });

  test('blog listing page renders', async ({ page }) => {
    await page.goto('/blog');

    // Check page loaded successfully
    await expect(page).toHaveTitle(/Blog/);

    // Verify at least one blog post is listed
    const articles = page.locator('article, .blog-post, a[href*="/blog/"]').first();
    await expect(articles).toBeVisible();
  });

  test('individual blog post renders', async ({ page }) => {
    // Test with a known blog post
    await page.goto('/blog/starting-a-coder-dojo');

    // Check page loaded (title might vary, so just check it exists)
    await expect(page.locator('h1, h2')).toBeVisible();

    // Verify prose content is present (typical Astro/Tailwind blog styling)
    const content = page.locator('article, .prose, main');
    await expect(content).toBeVisible();
  });

  test('navigation works across pages', async ({ page }) => {
    await page.goto('/');

    // Find and click blog link
    const blogLink = page.getByRole('link', { name: /blog/i });
    await blogLink.click();

    // Should navigate to blog page
    await expect(page).toHaveURL(/\/blog/);
    await expect(page).toHaveTitle(/Blog/);
  });
});
