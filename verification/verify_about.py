from playwright.sync_api import sync_playwright

def verify_about_mobile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 800})
        page = context.new_page()

        try:
            page.goto("http://localhost:3000/#o-mnie")
            # Wait for content to load
            page.wait_for_selector("h2")
            page.wait_for_timeout(2000)

            # Take screenshot of the About section
            # We might need to scroll specifically to it if the anchor didn't work perfectly with animations
            element = page.locator("#o-mnie")
            element.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)

            page.screenshot(path="verification/about_mobile.png")
            print("Screenshot saved to verification/about_mobile.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_about_mobile()
