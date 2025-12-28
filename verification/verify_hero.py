from playwright.sync_api import sync_playwright

def verify_hero_mobile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 667})
        page = context.new_page()

        try:
            page.goto("http://localhost:3000")
            # Wait for content to load
            page.wait_for_selector("h1")
            # Wait a bit for animations
            page.wait_for_timeout(2000)

            # Take screenshot of the top part
            page.screenshot(path="verification/hero_mobile.png")
            print("Screenshot saved to verification/hero_mobile.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_hero_mobile()
