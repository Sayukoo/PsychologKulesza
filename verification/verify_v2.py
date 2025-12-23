from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            # Scroll to make sure lazy loaded elements might appear
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(2000) # Wait for widget or animations

            # Take screenshots of key areas
            page.screenshot(path="verification/full_page_v2.png", full_page=True)

            # Verify specific text changes
            content = page.content()
            if "SWPS" in content:
                print("SUCCESS: SWPS found")
            else:
                print("FAILURE: SWPS not found")

            if "Konsultacje psychologiczne" in content:
                print("SUCCESS: Konsultacje psychologiczne found")
            else:
                 print("FAILURE: Konsultacje psychologiczne not found")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
