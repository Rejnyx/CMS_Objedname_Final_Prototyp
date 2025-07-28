# Brainstorming a návrhy na vylepšení (v2)

Tento dokument shrnuje nápady a návrhy na vylepšení aplikace Objednáme, které vyplynuly z UX analýzy.

---

## Stav implementace

-   **✅ 3C. Plnohodnotná správa variant v editoru:** Hotovo. Editor nyní umožňuje plnou správu variant.
-   **✅ 4A. (Částečně) Notifikační systém:** `window.confirm` nahradilo `alert`, což je krok správným směrem.
-   **✅ 4B. (Částečně) Potvrzovací dialogy:** Implementováno pro zavření editoru s neuloženými změnami.
-   **✅ UX Revize `ItemEditor`:** Kompletně přepracován do záložkového systému s lepší strukturou a UX.
-   **✅ UX Revize `ItemCard`:** Redesignováno pro lepší přehlednost, přidán placeholder pro obrázek.
-   **✅ Stabilizace layoutu:** Celá aplikace má nyní stabilní layout, který při změnách obsahu "neposkakuje".

---

### 1. Vylepšení přehlednosti a vizuální komunikace (Visual Clarity)

*   **Cíl:** Zlepšit vizuální orientaci a snížit kognitivní zátěž uživatele.
*   **Návrhy:**
    *   **1A. Vizuální odlišení nedostupných položek:** Přidat k nedostupným položkám výrazný vizuální štítek (tag) s textem "Nedostupné" nebo "Vyprodáno".
    *   **1B. Barevné odlišení kategorií:** Každému typu kategorie (`main_course`, `drink`, atd.) přiřadit specifickou barvu (např. jemný barevný proužek na levé straně), aby se vizuálně oddělily sekce menu.
    *   **1C. Vylepšení typografie:** Sjednotit a hierarchizovat nadpisy v celé aplikaci pro lepší čitelnost. Využít více vah a velikostí písma definovaných v `theme.ts`.

---

### 2. Zrychlení a zefektivnění práce (Workflow Efficiency)

*   **Cíl:** Minimalizovat počet kliknutí pro běžné operace a zrychlit práci manažerky Báry.
*   **Návrhy:**
    *   **2A. "Rychlé akce" při najetí myší:** Implementovat kontextové ikony pro rychlé akce (např. rychlé přepnutí dostupnosti, duplikování položky, přidání podkategorie), které se objeví při najetí myší na položku nebo kategorii.
    *   **2B. Kontextové menu (pravé tlačítko):** Přidat podporu pro kontextové menu (po kliknutí pravým tlačítkem) na kategoriích a položkách s možnostmi jako "Upravit", "Duplikovat", "Smazat", "Přesunout".
    *   **2C. Hromadné úpravy:** Umožnit výběr více položek a aplikovat na ně hromadné akce (např. "Nastavit jako dostupné/nedostupné", "Přiřadit alergen", "Změnit cenu o %").

---

### 3. Pokročilá interaktivita a personalizace (Advanced Interactivity)

*   **Cíl:** Přidat moderní interaktivní prvky a dát uživatelům větší kontrolu nad zobrazením dat.
*   **Návrhy:**
    *   **3A. Obnovení a vylepšení Drag-and-Drop:** Implementovat robustní D&D pro změnu pořadí kategorií, podkategorií a položek, včetně přesouvání položek mezi kategoriemi.
    *   **3B. Filtrování a řazení v seznamu položek:** Přidat na vrchol `ItemList` ovládací prvky pro filtrování (podle alergenů, dostupnosti) a řazení (podle ceny, názvu). Klíčová funkce pro číšníka Tomáše.
    *   **3C. Plnohodnotná správa variant v editoru:** Rozšířit `ItemEditor` o UI pro dynamické přidávání, odebírání a úpravu variant položek (např. "150g", "300g").

---

### 4. Zpětná vazba a prevence chyb (Feedback & Error Prevention)

*   **Cíl:** Zlepšit komunikaci aplikace s uživatelem a předcházet chybám.
*   **Návrhy:**
    *   **4A. Notifikační systém (Toasty):** Nahradit systémové `alert()` zprávy za moderní "toast" notifikace pro potvrzení úspěšných akcí (uložení, smazání) a zobrazení chybových hlášek.
    *   **4B. Vylepšené potvrzovací dialogy:** Před destruktivními akcemi (mazání kategorie s obsahem) zobrazit přehledný modální dialog, který jasně vysvětlí důsledky a vyžádá si explicitní potvrzení.
    *   **4C. Vylepšené prázdné stavy (Empty States):** V místech, kde není žádný obsah (např. prázdná kategorie), zobrazit graficky přívětivější "empty state" s ikonou a výzvou k akci (např. tlačítko "Přidat první položku").
