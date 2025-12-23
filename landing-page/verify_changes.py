from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        try:
            page.goto("http://localhost:3000")
            print("Navigated to homepage")

            # Wait for content to load
            page.wait_for_selector('h1')

            # Verify Navbar visibility
            navbar = page.locator('nav')
            if navbar.is_visible():
                print("Navbar is visible")
            else:
                print("Navbar is NOT visible")

            # Verify Privacy Policy link existence in Cookie Banner or Footer
            # Assuming Cookie Banner appears
            cookie_banner = page.locator('text=Ta strona używa plików cookies')
            try:
                cookie_banner.wait_for(state="visible", timeout=5000)
                print("Cookie banner visible")
                page.screenshot(path="/home/jules/verification/cookie_banner.png")
            except:
                print("Cookie banner not found or timed out")

            # Verify Navigation Links
            page.click('text=Pytania')
            # wait for scroll
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/scrolled_to_faq.png")

            # Verify Privacy Policy Page
            page.goto("http://localhost:3000/polityka-prywatnosci")
            page.wait_for_selector('h1:has-text("Polityka Prywatności")')
            page.screenshot(path="/home/jules/verification/privacy_policy.png")
            print("Privacy policy page verified")

        except Exception as e:
            print(f"Error: {e}")

        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
