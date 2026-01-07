from playwright.sync_api import sync_playwright

def verify_target_audience():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            page.goto("http://localhost:3000")

            # Wait for the "To nie są konsultacje dla każdego" text to appear
            target_text = page.get_by_text("To nie są konsultacje dla każdego")
            target_text.scroll_into_view_if_needed()

            # Wait explicitly for staggered animations
            page.wait_for_timeout(3000)

            # Take a screenshot
            page.screenshot(path="verification/target_audience_beautified.png", full_page=False)

            print("Screenshot taken successfully")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_target_audience()
