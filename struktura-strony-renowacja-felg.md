# Struktura strony – Renowacja felg (Next.js + Sanity)

## 🎯 Cel

Strona ma być maksymalnie prosta i czytelna dla użytkownika – tzw. "łopatologiczna". Klient po wejściu na stronę ma od razu:

- wiedzieć, czym zajmuje się firma,
- zobaczyć usługi,
- móc się szybko skontaktować.

---

## ✅ Rekomendowany układ **strony głównej (landing page)**

### 1. Hero

- Hasło główne + CTA (np. „Umów wycenę”, „Zobacz nasze realizacje”)

### 2. Sekcja „Czym się zajmujemy” (skrót usług)

- 3–6 ikon/skrótów:
  - „Prostowanie felg”
  - „Polerowanie”
  - „Malowanie proszkowe”
- Każdy linkuje do `/uslugi`, ale zawiera też krótki opis (max 1 zdanie)

### 3. O firmie

- Krótkie bio + kamienie milowe (2008, 2010, 2015 itd.)

### 4. Galeria realizacji (skrót)

- Kilka zdjęć „przed i po”
- Link „Zobacz wszystkie realizacje” → `/realizacje`

### 5. FAQ (sekcja)

- 3–4 najczęściej zadawane pytania
- Link do pełnej strony FAQ (`/faq`) jeśli potrzeba więcej

### 6. Opinie klientów

### 7. Kontakt

- Formularz kontaktowy, numer telefonu, mail, mapka
- Sticky CTA: „Zadzwoń teraz” (na mobile)

---

## 🔸 Podstrony – kiedy warto?

| Podstrona     | Uzasadnienie                                                          |
| ------------- | --------------------------------------------------------------------- |
| `/uslugi`     | Gdy jest dużo usług – SEO + szczegółowe opisy                         |
| `/faq`        | Tylko jeśli naprawdę dużo pytań. Inaczej wystarczy sekcja na landingu |
| `/realizacje` | Osobna galeria – pokazuje jakość usług                                |
| `/kontakt`    | Jeśli formularz nie mieści się wygodnie na stronie głównej            |

---

## 🧭 Podsumowanie

| Element              | Gdzie najlepiej umieścić?               |
| -------------------- | --------------------------------------- |
| Najważniejsze usługi | Landing – skróty + linki                |
| Pełna lista usług    | `/uslugi`                               |
| FAQ                  | Sekcja na landingu + ewentualnie `/faq` |
| Kontakt              | Sekcja na landingu + stopka             |
| Realizacje           | Skrót na landingu + osobna podstrona    |

---

## 📌 Stack

- **Next.js**
- **Sanity.io (CMS)** – wszystkie sekcje edytowalne: usługi, realizacje, FAQ, kolory, blog

---

Jeśli potrzebujesz struktury Sanity, typów danych lub tekstów dla sekcji – daj znać 🙂

🔧 Propozycja struktury strony (Next.js + Sanity)

1. Strona główna (landing page)
   Sekcja hero z hasłem i CTA (np. „Renowacja felg jak z fabryki – Zabrze i okolice”)

Krótki opis firmy z datami (2008, 2010, 2015 itd.)

Przegląd usług z ikonkami i linkami do szczegółów

Opinie klientów

CTA do wyceny / kontaktu

2. Podstrony usług (np. /uslugi)
   Można rozbić na mniejsze:

Prostowanie felg

Polerowanie (z podziałem na tradycyjne i wibracyjne)

Toczenie CNC

Malowanie proszkowe

Skręcanie/rozkręcanie

Spawanie

Demontaż/montaż opon

Usuwanie lakieru chemicznie

➡️ Wszystko edytowalne w Sanity jako dokumenty typu service

3. Realizacje
   Galeria z filtrami po rodzaju usługi (np. „przed i po”, „felgi polerowane”, „malowanie proszkowe”)

Możliwość dodawania zdjęć i opisu realizacji przez Sanity

4. Podstrony lokalne (np. /felgi-zabrze, /felgi-gliwice, /felgi-ruda-slaska)
   Dedykowany tekst SEO zoptymalizowany pod frazy lokalne

Możliwość klonowania struktury w Sanity z różnymi danymi (adresy, dojazd, lokalne zdjęcia)

5. FAQ (np. /faq)
   Edytowalne pytania i odpowiedzi w Sanity

Anchor linki do konkretnych pytań

JSON-LD FAQ markup (dla SEO)

6. Blog (np. /blog)
   Porady: „Jak dbać o felgi?”, „Co zrobić po uderzeniu w krawężnik?”, „Czy warto prostować felgi?”

Kategorie: porady, ciekawostki, case study

Edytowalne w Sanity jako post

7. Podstrona “Kolory”
   Galeria próbek + opisy

Możliwość dodania w Sanity (np. colorPalette z nazwą, opisem, obrazem)

8. Kontakt
   Formularz kontaktowy

Dane firmy, mapa

Można dodać przycisk do WhatsApp / Google Maps
