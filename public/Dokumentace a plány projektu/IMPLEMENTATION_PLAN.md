# Plán implementace: Komponenta pro správu menu v aplikaci Objednáme

Tento dokument popisuje detailní postup vývoje React komponenty pro správu menu v aplikaci Objednáme krok za krokem.

## Fáze 1: Příprava a základní struktura

1.  **Založení projektu a závislostí:**
-   Spustit příkaz `npm create vite@latest objedname-app -- --template react` pro vytvoření nového React projektu.
    -   Nainstalovat základní závislosti: `npm install`.
    -   Nainstalovat `styled-components`: `npm install styled-components`.

2.  **Vytvoření adresářové struktury:**
    -   Vytvořit složku `/src/components/CategoryManagement`.
    -   Vytvořit základní soubory komponent:
        -   `CategoryManagement.jsx` (hlavní kontejner)
        -   `Breadcrumb.jsx` (drobečková navigace)
        -   `CategoryList.jsx` (levý panel s vyhledávacím filtrem)
        -   `ItemList.jsx` (pravý panel s hromadnými akcemi)
        -   `ItemEditor.jsx` (editační panel)

3.  **Příprava Design Systému a Dat:**
    -   Vytvořit soubor `/src/theme.ts` a naimportovat do něj hodnoty z `dashboard_design_system.json`.
    -   Vytvořit soubor `/src/GlobalStyle.ts` a `styled.d.ts` pro globální styly a typové definice.
    -   Vytvořit soubor `/src/types.ts` s definicemi pro `Category`, `Item` atd.
    -   Vytvořit soubor `/src/data/mockData.ts` a otypovat ho pomocí importovaných typů.
    -   Naplnit ho daty, která odpovídají naší informační architektuře (kategorie, položky, varianty, ingredience).

## Fáze 2: Statické UI

4.  **Sestavení hlavního layoutu:**
    -   V `CategoryManagement.jsx` naimportovat a zobrazit `Breadcrumb`, `CategoryList` a `ItemList`.
    -   Rozdělit layout na dva panely (levý a pravý) a umístit `Breadcrumb` nad `ItemList`.

5.  **Zobrazení seznamu kategorií:**
    -   V `CategoryList.jsx` načíst mockovací data.
    -   Vykreslit seznam kategorií. Zatím bez interaktivity.

6.  **Zobrazení seznamu položek:**
    -   V `ItemList.jsx` načíst mockovací data.
    -   Vykreslit seznam položek pro jednu vybranou kategorii.

7.  **Zobrazení editačního panelu:**
    -   V `ItemEditor.jsx` vytvořit statický formulář se všemi potřebnými poli (název, cena, varianty atd.).
    -   Zatím bude skrytý.

## Fáze 3: Interaktivita a správa stavu

8.  **Správa stavu v `CategoryManagement.jsx`:**
    -   Použít `useState` pro uložení celého datového stromu.
    -   Použít `useState` pro sledování, která kategorie je aktuálně vybraná (`selectedCategory`).
    -   Použít `useState` pro sledování, zda je editační panel viditelný a pro jakou položku (`editingItem`).
    -   Použít `useState` pro sledování cesty pro breadcrumb (`breadcrumbPath`).
    -   Použít `useState` pro vyhledávací dotaz (`searchQuery`).
    -   Použít `useState` pro seznam vybraných položek pro hromadné akce (`selectedItems`).

9.  **Propojení `CategoryList` a `ItemList`:**
    -   Předat funkci do `CategoryList`, která při kliknutí na kategorii změní `selectedCategory`.
    -   `ItemList` bude nyní zobrazovat položky pouze pro `selectedCategory`.

10. **Otevření a zavření editačního panelu:**
    -   Do `ItemList.jsx` přidat tlačítko "Přidat položku", které zavolá funkci z `CategoryManagement` a nastaví `editingItem` na nový prázdný objekt.
    -   U každé položky přidat tlačítko "Editovat", které nastaví `editingItem` na danou položku.
    -   `ItemEditor` se zobrazí, pouze pokud `editingItem` není `null`.

11. **Implementace CRUD operací:**
    -   Vytvořit funkce pro přidání, úpravu a mazání položek a kategorií.
    -   Tyto funkce budou modifikovat stav uložený v `CategoryManagement.jsx`.
    -   Předat tyto funkce jako props do příslušných komponent (`CategoryList`, `ItemList`, `ItemEditor`).

## Fáze 4: Pokročilé funkce a dokončení

12. **Implementace vyhledávacího filtru:**
    -   Propojit vyhledávací pole s `searchQuery` stavem.
    -   Filtrovat zobrazené kategorie a položky na základě `searchQuery` před jejich vykreslením.

13. **Implementace hromadných akcí:**
    -   Přidat logiku pro výběr/zrušení výběru položek a aktualizaci stavu `selectedItems`.
    -   Implementovat funkce pro hromadné smazání/aktivaci/deaktivaci, které modifikují hlavní datový stav.

14. **Implementace Drag-and-Drop:**
    -   Nainstalovat knihovnu `@dnd-kit/core` a její doplňky (původně plánovaná `react-beautiful-dnd` nebyla kompatibilní s React 19).
    -   Obalit komponenty `DndContext` a `SortableContext`.
    -   Implementovat logiku pro změnu pořadí v `handleDragEnd`.

15. **Stylování a finální úpravy:**
    -   Dostylovat všechny komponenty pomocí `styled-components` a hodnot z `theme.js` podle specifikací v design systému.
    -   Přidat vizuální zpětnou vazbu (loading stavy, notifikace o uložení).
    -   Zajistit responzivitu pro menší obrazovky.

14. **Testování:**
    -   Manuálně projít všechny user flows a ověřit, že fungují podle očekávání.
