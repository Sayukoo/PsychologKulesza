# Strona Kacpra Kuleszy — jak to działa

Psycholog, konsultacje online. Trzy osobne strony, wspólny język wizualny.

## Pliki

| Plik | Rola |
| --- | --- |
| `Kacper Kulesza - strona.dc.html` | Strona główna: hero, dla kogo, o mnie, jak pracujemy, cennik, zajawka testów, FAQ, rezerwacja Calendly, stopka z polityką prywatności i paskiem cookies |
| `Kontakt.dc.html` | Telefon, e-mail, formularz `mailto` |
| `Testy psychologiczne.dc.html` | Cztery kwestionariusze — hub, przebieg testu, wynik |
| `uploads/pasted-1787924565646-0.png` | Portret w hero (PNG z przezroczystością) |

Nawigacja i stopka na każdej stronie linkują do dwóch pozostałych. Kotwice na stronie głównej: `#o-mnie`, `#cennik`, `#testy`, `#faq`, `#kontakt`.

## Dane kontaktowe

Telefon **572 450 606**, e-mail **kackul17@gmail.com**, Calendly **calendly.com/kacperkulesza/15min**. Te trzy wartości powtarzają się w kilku miejscach — zmieniając jedną, zmień wszystkie wystąpienia we wszystkich trzech plikach.

## Oferta

- Bezpłatne 15 minut — rozmowa wstępna, niezobowiązująca.
- Sesja analityczna **150 zł** za pełną godzinę online (edytowalne w Tweaks jako `sessionPrice`).
- Faktura na życzenie (działalność gospodarcza).

## Jak pisać teksty

Rzeczowo i bez ozdobników. Kacper pracuje w duchu terapii jednosesyjnej i technik CBT, opiera się na badaniach. Konsultacja to **nie terapia** — ta różnica musi być widoczna wszędzie tam, gdzie ktoś mógłby się pomylić. Siedem lat doświadczenia dotyczy pracy z ludźmi (korepetycje, zajęcia z programowania, pomoc przy magisterkach), nie konsultacji psychologicznych.

Nie wymyślać opinii klientów ani liczb. Jeśli czegoś brakuje, zapytać.

## Kolory i typografia

```
#1C86EE  niebieski   podstawowy: nagłówki akcentów, ikony, linki, obramowania
#FFC542  żółty       tylko w gradiencie
#FF7A29  pomarańcz   akcent: koniec gradientu, ostrzeżenia, „nie dla Ciebie", kryzys
#16181C  tekst
#6B7280  tekst drugorzędny
#FFFFFF  tło
```

Gradient przycisków: `linear-gradient(97deg, #1C86EE 0%, #3E9BF2 24%, #FFC542 62%, #FF7A29 100%)` z wewnętrzną górną krawędzią światła, cieniem w pomarańczu i animacją połysku `ccShine`. Ten sam wzór dla dużego CTA w hero (pigułka) i małego w navbarze (róg 12px).

Font: **Manrope**, wagi 400–800. Nagłówki 800 z ujemnym `letterSpacing`.

Tła sekcji: rozmyte plamy `radial-gradient` + `filter: blur(120px)`, nigdy pełne wypełnienia. Karty: `rgba(255,255,255,.7)` z `backdropFilter: blur(6px)` i obramowaniem `rgba(28,134,238,.34)`.

## Layout

Navbar: przyklejony, róg 18px, szkło. Poniżej 980px linki znikają, zostaje logo i przycisk.

Wersja mobilna działa na atrybutach `data-m="..."` i regułach `@media (max-width: 980px)` w `<helmet>`. Dodając nowy element wielokolumnowy, nadaj mu `data-m` i dopisz regułę — inaczej nie złoży się na telefonie.

Portret w hero: PNG z przezroczystością, stoi na rozmytym cieniu („stół"), za nim poświata w kolorach marki i dwa pierścienie. Bez ramek i bez masek na samym zdjęciu.

## Testy psychologiczne

Cztery kwestionariusze, treść pytań i progi interpretacji z PDF-ów: **WHO-5**, **GAD-7**, **PHQ-9**, **LSAS**.

Zasady:
- Jedno pytanie na ekran, jedno kliknięcie = odpowiedź i przejście dalej.
- LSAS ma dwie skale na pytanie (lęk, unikanie) — przechodzi dopiero po zaznaczeniu obu.
- Punktacja: WHO-5 mnożone ×4 (skala 0–100), pozostałe surowe.
- Wynik od razu na ekranie z interpretacją i propozycją działania, poniżej CTA na bezpłatne 15 minut.
- PHQ-9: zaznaczenie pytania 9 (myśli samobójcze) albo wynik ≥20 pokazuje numery kryzysowe 116 123, 800 70 2222, 112.
- Nic nie jest wysyłane ani zapisywane.
- Każdy test ma własną kotwicę do linkowania z TikToka: `Testy psychologiczne.dc.html#who5`, `#gad7`, `#phq9`, `#lsas`.

Tytuły testów są pisane pod social media, nie pod gabinet („To zwykłe zmęczenie czy coś więcej?"). Nazwa oficjalna zostaje jako podpis.

## Pułapki

- **Cudzysłowy w tekstach w kodzie.** Polskie „…" muszą mieć obie strony typograficzne. Prosty `"` w środku stringa wywala całą stronę.
- **Publikacja pakuje jeden plik.** Linki do sąsiednich stron nie zadziałają w opublikowanym artefakcie. Przy publikacji wybieramy jedną stronę i akceptujemy, że nawigacja do pozostałych nie działa, albo scalamy — ale scalanie zostało odrzucone, więc domyślnie zostają trzy pliki.
- **Calendly** ładuje się ze skryptu z CDN. W lokalnym podglądzie i na normalnym hostingu działa; w piaskownicy publikacji może się nie doładować.
- **Nie generuję zdjęć.** Portrety i grafiki dostarcza użytkownik.
