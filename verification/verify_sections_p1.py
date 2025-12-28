from playwright.sync_api import sync_playwright

def verify_sections_p1():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport
        context = browser.new_context(viewport={"width": 375, "height": 800})
        page = context.new_page()

        try:
            page.goto("http://localhost:3000/#dla-kogo")
            page.wait_for_timeout(2000)
            page.screenshot(path="verification/audience_mobile.png")
            print("Screenshot saved to verification/audience_mobile.png")

            page.goto("http://localhost:3000/#process")
            page.wait_for_timeout(2000)
            page.screenshot(path="verification/process_mobile.png")
            print("Screenshot saved to verification/process_mobile.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_sections_p1()
