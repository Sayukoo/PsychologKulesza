from playwright.sync_api import sync_playwright

def verify_navbar_mobile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 800})
        page = context.new_page()

        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("button[aria-label='Toggle menu']")

            # Click the menu button
            page.click("button[aria-label='Toggle menu']")

            # Wait for animation
            page.wait_for_timeout(1000)

            page.screenshot(path="verification/navbar_mobile.png")
            print("Screenshot saved to verification/navbar_mobile.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_navbar_mobile()
