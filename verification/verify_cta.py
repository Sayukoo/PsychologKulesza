from playwright.sync_api import sync_playwright

def verify_sticky_cta():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 800})
        page = context.new_page()

        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("body")

            # Initially hidden?
            # CTA logic: window.scrollY > 300

            # Scroll down
            page.evaluate("window.scrollTo(0, 500)")
            page.wait_for_timeout(1000)

            page.screenshot(path="verification/sticky_cta.png")
            print("Screenshot saved to verification/sticky_cta.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_sticky_cta()
