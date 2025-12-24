from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        # Wait for the server to be ready (might need retries, but simple wait here)
        try:
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # 1. Verify Newsletter Section
            newsletter_section = page.locator("section").filter(has_text="Rozwijaj się świadomie")
            newsletter_section.scroll_into_view_if_needed()
            page.wait_for_timeout(2000) # Wait for animation
            newsletter_section.screenshot(path="verification/newsletter.png")
            print("Newsletter screenshot taken.")

            # 2. Verify Contact Form
            contact_section = page.locator("#kontakt")
            contact_section.scroll_into_view_if_needed()
            page.wait_for_timeout(2000)
            contact_section.screenshot(path="verification/contact.png")
            print("Contact form screenshot taken.")

            # 3. Verify Theme Toggle and Navbar
            # Reload to top
            page.goto("http://localhost:3000")
            navbar = page.locator("nav")
            navbar.screenshot(path="verification/navbar.png")
            print("Navbar screenshot taken.")

            # Click toggle (assuming it's the button with SVG inside)
            # We need to find the toggle button. It has aria-label="Przełącz motyw"
            toggle_btn = page.locator('button[aria-label="Przełącz motyw"]')
            if toggle_btn.is_visible():
                toggle_btn.click()
                page.wait_for_timeout(1000) # Wait for theme change
                page.screenshot(path="verification/dark_mode.png")
                print("Dark mode screenshot taken.")
            else:
                print("Theme toggle not found.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
