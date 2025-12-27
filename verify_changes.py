from playwright.sync_api import sync_playwright

def verify_landing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")

            # 1. Verify Hero
            print("Verifying Hero...")
            # Verify Magister Psychologii badge
            page.get_by_text("Magister Psychologii").first.wait_for()

            # Verify Hero Heading
            page.get_by_role("heading", name="Porządkowanie myślenia. Analiza decyzji. Spokój.").wait_for()

            # Verify Hero Buttons specifically (inside the hero section)
            # We assume the first link with this text is in the hero
            hero_cta = page.get_by_role("link", name="Umów konsultację").first
            if not hero_cta.is_visible():
                 raise Exception("Hero CTA 'Umów konsultację' not visible")

            hero_secondary = page.get_by_role("link", name="Zobacz jak pracuję").first
            if not hero_secondary.is_visible():
                 raise Exception("Hero Secondary CTA 'Zobacz jak pracuję' not visible")

            # 2. Verify About
            print("Verifying About...")
            page.get_by_text("Nazywam się Kacper Kulesza").scroll_into_view_if_needed()
            page.get_by_text("Kim jestem?").wait_for()

            # 3. Verify Audience
            print("Verifying Audience...")
            page.get_by_text("Dla kogo są konsultacje?").scroll_into_view_if_needed()
            page.get_by_text("Czujesz przeciążenie nadmiarem bodźców i spraw").wait_for()

            # 4. Verify Process
            print("Verifying Process...")
            page.get_by_text("Jak wygląda współpraca?").scroll_into_view_if_needed()
            page.get_by_text("To nie jest psychoterapia").wait_for()
            page.get_by_text("Nagrywanie spotkań").wait_for()

            # 5. Verify Why Worth It
            print("Verifying Why Worth It...")
            page.get_by_text("Dlaczego warto?").scroll_into_view_if_needed()
            page.get_by_text("Bez pustych obietnic").wait_for()

            # 6. Verify Booking
            print("Verifying Booking...")
            # Use specific check for the booking section heading
            page.get_by_role("heading", name="Umów konsultację").scroll_into_view_if_needed()

            page.screenshot(path="/home/jules/verification/landing_page_verified_v2.png", full_page=True)
            print("Verification successful. Screenshot saved.")

        except Exception as e:
            print(f"Verification failed: {e}")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_landing_page()
