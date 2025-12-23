from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")

            # Print title
            print(f"Page Title: {page.title()}")

            # Take screenshot of homepage
            page.screenshot(path="/home/jules/verification/homepage.png")

            # Check for icon link in head
            icon_link = page.locator("link[rel='icon']")
            if icon_link.count() > 0:
                print(f"Icon Link Href: {icon_link.first.get_attribute('href')}")
                # Also try to fetch the icon to ensure it exists
                icon_url = f"http://localhost:3000{icon_link.first.get_attribute('href')}"
                print(f"Icon URL: {icon_url}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
