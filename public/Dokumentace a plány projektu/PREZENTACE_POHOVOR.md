# Scénář prezentace: Komponenta pro správu menu

**Cíl:** Ukázat nejen VÝSLEDEK, ale především ZPŮSOB PŘEMÝŠLENÍ a PROCES, kterým jsme k němu dospěli. Přesně to, co hledají.

---

### 1. Úvod a pochopení zadání (cca 1 minuta)

*   **Co říct:** "Dobrý den, děkuji za příležitost. Zadání pro mě bylo skvělým testem, protože se v něm píše: 'Chceme hlavně vidět, jak přemýšlíš.' Přesně tak jsem k tomu přistoupil. Mým cílem nebylo jen 'nakódit' komponentu, ale ukázat celý proces – od empatie k uživateli až po finální, vyladěný produkt."
*   **Klíčová myšlenka:** Okamžitě se napojit na jejich hlavní požadavek z inzerátu.

---

### 2. Můj proces: Vždy na prvním místě uživatel (cca 2 minuty)

*   **Co říct:** "Než jsem napsal jediný řádek kódu, položil jsem si otázku: 'Pro koho to vlastně dělám?' Vytvořil jsem si dvě jednoduché, ale klíčové persony:"
    *   **Bára (manažerka):** Potřebuje efektivitu, přehlednost a rychlost při správě komplexního menu.
    *   **Tomáš (číšník):** Potřebuje bleskovou orientaci v menu, hlavně na tabletu, a okamžitý přístup k informacím jako jsou alergeny.
*   **Co ukázat:** Můžeš krátce zmínit soubory `persona_bara_novotna.md` a `persona_tomas_cisnik.md`.
*   **Klíčová myšlenka:** Demonstrovat empatii a user-centric přístup, který zmiňují v inzerátu ("naslouchat lidem", "funkční bez empatie je špatně").

---

### 3. Od myšlenky k řešení: Architektura a design (cca 3 minuty)

*   **Co říct:** "S jasnou představou o uživatelích jsem navrhl řešení. Cílem byla robustní, ale zároveň flexibilní komponenta."
*   **Ukázat na kódu (nebo zmínit):**
    *   **Datová struktura (`types.ts`):** "Základem je silně typovaná a škálovatelná datová struktura. Od začátku jsem počítal s vnořenými kategoriemi, variantami, lokálními ingrediencemi i globálními přílohami. To nám dalo pevný základ pro další vývoj."
    *   **Design Systém (`theme.ts`):** "Celý vizuální styl je řízen z jednoho místa. To zajišťuje konzistenci a usnadňuje jakékoliv budoucí změny brandingu, což je pro váš produkt klíčové."
    *   **Komponentová architektura:** "Aplikaci jsem rozdělil do logických, znovupoužitelných komponent (`CategoryList`, `ItemList`, `ItemEditor`), což zjednodušuje údržbu a další rozvoj."
*   **Klíčová myšlenka:** Ukázat technickou zdatnost a architektonické myšlení.

---

### 4. Živá ukázka a klíčové funkce (cca 5 minut)

*   **Co říct:** "Pojďme se podívat, jak to celé funguje v praxi."
*   **Co ukázat (interaktivně):**
    1.  **Základní ovládání:** Proklikej pár kategorií a podkategorií. Ukaž, jak funguje `Breadcrumb` pro navigaci.
    2.  **Agregovaný pohled:** Klikni na "Hlavní chody" a ukaž, jak se zobrazí položky ze všech podkategorií. "Tohle je klíčová funkce pro Báru, aby měla okamžitý přehled."
    3.  **Redesign `ItemCard`:** Ukaž novou kartu položky. "Původní design byl funkční, ale neuspořádaný. Na základě zpětné vazby jsem ho předělal – přidal jsem placeholder pro obrázek a zjednodušil akce, aby bylo UI čistší."
    4.  **Redesign `ItemEditor`:** Otevři úpravu nějaké pizzy. "Editor byl největší výzva. Předělal jsem ho do záložkového systému, aby byl přehlednější. Ukaž záložky 'Základní', 'Varianty & Ceny' a 'Přiřazení'."
    5.  **Správa variant:** Ukaž, jak snadno lze přidat novou velikost pizzy. "Tím jsme splnili klíčový požadavek ze zadání a dali Báře mocný nástroj."
    6.  **Drag-and-Drop:** Ukaž, jak jednoduše lze změnit pořadí hlavních kategorií. "Implementovali jsme D&D, ale po zpětné vazbě jsme ho zjednodušili jen pro hlavní kategorie, aby bylo UI čisté a intuitivní."
*   **Klíčová myšlenka:** Prodat výsledek a ukázat, že každá funkce má svůj smysl a řeší problém konkrétního uživatele.

---

### 5. Iterace a reakce na zpětnou vazbu (cca 2 minuty)

*   **Co říct:** "Co je ale nejdůležitější – a co jste sami zdůrazňovali – je ten 'drill a pilování'. Během vývoje jsem několikrát narazil na problém nebo dostal zpětnou vazbu, na kterou jsem reagoval."
*   **Uvést konkrétní příklady:**
    *   "Například layout původně 'poskakoval'. To jsem vyřešil refaktoringem struktury na flexbox, aby byl stabilní."
    *   "Původní D&D bylo matoucí, tak jsme ho zjednodušili."
    *   "Původní editor byl jeden dlouhý formulář, tak jsem ho předělal na záložky."
*   **Klíčová myšlenka:** Ukázat, že jsi flexibilní, umíš přijímat kritiku a iterativně vylepšovat produkt. To je pro ně extrémně cenné.

---

### 6. Závěr a proč jsem ten pravý (cca 1 minuta)

*   **Co říct:** "Tento úkol pro mě nebyl jen o programování. Byla to simulace reálného produktového vývoje. Ukázal jsem, že umím naslouchat, analyzovat, navrhovat, implementovat a iterovat. Chápu, že design je o funkčnosti a empatii, a přesně v tomto duchu jsem pracoval. Věřím, že tento přístup je přesně to, co může vašemu produktu a týmu pomoci."
*   **Klíčová myšlenka:** Sebevědomě shrnout, jak tvůj proces a výsledek odpovídá jejich firemní kultuře a potřebám.

---

**Extra tip:** Měj po ruce složku `Dokumentace a plány projektu`. Kdyby se ptali na detaily, můžeš říct: "Celý můj myšlenkový proces je navíc zdokumentovaný, od person až po plány jednotlivých implementací." To ukáže naprostou profesionalitu.
