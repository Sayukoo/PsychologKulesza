from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the About section
            page.goto("http://localhost:3000/#o-mnie")

            # Wait for content to load and animations
            page.wait_for_timeout(3000)

            # Verify text presence
            print("Checking text content...")
            content = page.content()
            if "analityk statystyczny" in content:
                print("Found 'analityk statystyczny'")
            else:
                print("MISSING 'analityk statystyczny'")

            if "korepetytor" in content:
                print("Found 'korepetytor'")
            else:
                print("MISSING 'korepetytor'")

            # Verify LinkedIn link
            print("Checking LinkedIn link...")
            linkedin_link = page.get_by_role("link", name="Zobacz mój profil na LinkedIn")
            if linkedin_link.is_visible():
                print("LinkedIn link is visible")
                href = linkedin_link.get_attribute("href")
                print(f"Link href: {href}")
            else:
                print("LinkedIn link NOT visible")

            # Take screenshot of the About section
            # We scroll to it to ensure it's in view
            element = page.locator("#o-mnie")
            element.scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/about_section.png")
            print("Screenshot saved to /home/jules/verification/about_section.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
