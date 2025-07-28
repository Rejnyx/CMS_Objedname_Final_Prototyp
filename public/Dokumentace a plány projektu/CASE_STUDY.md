# Případová studie: Návrh komponenty "Správa kategorií" v aplikaci Objednáme

Tento dokument slouží jako prezentace mého myšlenkového procesu a postupu při řešení zadaného úkolu. Cílem nebylo jen vytvořit funkční komponentu, ale demonstrovat systematický a na uživatele zaměřený přístup, jaký by uplatnil profesionální UX/UI designér a vývojář.

## 1. Zadání a Cíl

**Zadání:** Navrhnout a vytvořit komponentu "Správa kategorií" pro systém Objednáme, která umožňuje spravovat kategorie, podkategorie, položky, jejich varianty a přidávat ingredience.
**Hlavní cíl:** Ukázat, jak přemýšlím o designu a funkčnosti.

## 2. Můj Přístup: "Design Thinking" v Praxi

Zvolil jsem metodický přístup založený na principech "Design Thinking". Místo okamžitého skoku do kódu jsem se nejprve zaměřil na hluboké pochopení problému, kontextu a především potřeb koncového uživatele.

## 3. Krok 1: Pochopení Uživatele (Empatie)

Základem každého dobrého designu je pochopení, pro koho ho tvoříme. Vytvořil jsem detailní personu, která reprezentuje typického uživatele tohoto systému.

- **Persona:** Bára Novotná, 38 let, provozní manažerka restaurace.
- **Klíčové potřeby:** Rychlost, efektivita, intuitivnost pro snadné zaškolení personálu.
- **Hlavní frustrace:** Roztříštěné systémy a pomalé, neohrabané rozhraní.

V průběhu projektu jsme si uvědomili potřebu rozšířit náš pohled a doplnili jsme druhou klíčovou personu:

- **Persona 2:** Tomáš Novák, 21 let, brigádník/číšník.
- **Klíčové potřeby:** Extrémní rychlost, jednoduchost, okamžitý přístup k informacím (dostupnost, alergeny), primárně na mobilním zařízení.
- **Cíl:** Získat pohled z "první linie" a zajistit, že systém je použitelný i pod tlakem v reálném provozu.

*Detailní popisy person jsou v souborech: [persona_bara_novotna.md](./persona_bara_novotna.md) a [persona_tomas_cisnik.md](./persona_tomas_cisnik.md)*

## 4. Krok 2: Definice Problému a Architektura Řešení

Na základě potřeb Báry jsem definoval strukturu a rozsah řešení.

- **Informační architektura:** Navrhl jsem jasné vztahy mezi kategoriemi, položkami, variantami a ingrediencemi.
- **Sitemap:** Vytvořil jsem jednoduchou sitemapu, která ukazuje, jak by komponenta zapadla do širší aplikace Objednáme a zdůrazňuje, že klíčové operace se odehrávají na jedné obrazovce pro maximální efektivitu.

*Detailní sitemapu naleznete zde: [SITEMAP.md](./SITEMAP.md)*

## 5. Krok 3: Návrh Řešení a Prototypování

### Figma Design (Hypotetický krok)

V ideálním a komplexnějším projektu by po definici user flows následovala detailní práce v nástroji Figma, která by zahrnovala následující kroky:

1.  **Design Tokens:** Na základě `dashboard_design_system.json` bych vytvořil základní design tokeny (barvy, typografie, spacing), které by sloužily jako jediný zdroj pravdy pro všechny designové prvky.
2.  **Wireframy:** Vytvořil bych low-fidelity wireframy pro klíčové obrazovky, abychom si ověřili rozložení prvků a informační hierarchii bez rušivých vizuálních detailů.
3.  **Komponenty:** Navrhl bych znovupoužitelné komponenty (tlačítka, inputy, karty) v souladu s design systémem.
4.  **High-Fidelity Design:** Spojením wireframů, komponent a design tokenů bych vytvořil finální, pixel-perfect vizuální návrh.
5.  **Prototypování:** Propojil bych jednotlivé obrazovky do interaktivního prototypu, který by simuloval reálné user flows a umožnil by uživatelské testování ještě před začátkem vývoje.

*(Poznámka: Pro účely tohoto úkolu a s ohledem na existující detailní design systém v JSON formátu jsem se rozhodl přejít rovnou k tvorbě interaktivního prototypu v kódu, což umožnilo rychlejší ověření funkčnosti. V reálném projektu by však tento krok ve Figmě byl klíčový.)*

### Výstupy této fáze

- **User Flows:** Detailně jsem popsal klíčové scénáře, jako je přidání nové položky nebo rychlá změna ceny, abych zajistil, že rozhraní bude intuitivní a bude řešit reálné problémy Báry.
- **Klíčové UX prvky:** Na základě user flows jsem identifikoval a zapracoval klíčové prvky pro vylepšení použitelnosti:
    1.  **Breadcrumb:** Pro snadnou orientaci v zanořených kategoriích.
    2.  **Vyhledávací filtr:** Pro okamžité nalezení jakékoliv položky.
    3.  **Hromadné akce:** Pro efektivní správu více položek najednou.

### Iterativní vylepšení na základě prototypu (z pohledu UX designéra)
Během vývoje interaktivního prototypu se ukázal klíčový UX problém: původní implementace drag-and-drop byla v konfliktu s kliknutím pro výběr kategorie.

- **Problém:** Uživatel musel někdy kliknout dvakrát, protože první klik byl zachycen D&D knihovnou.
- **Řešení:** Oddělil jsem tyto dvě akce. Pro změnu pořadí jsem implementoval dedikovanou ikonu (tzv. "Drag Handle"). Kliknutí na zbytek položky nyní slouží výhradně k jejímu výběru. Tímto jsme odstranili nejednoznačnost a frustraci uživatele.

*Detailní popis user flows naleznete zde: [USERFLOWS.md](./USERFLOWS.md)*

## 6. Krok 4: Vizuální Konzistence a Design Systém

Pro zajištění profesionálního a konzistentního vzhledu jsem plně využil poskytnutý design systém.

- **Implementace:** Vytvořil jsem soubor `theme.ts`, který zpřístupňuje hodnoty z JSONu pro `styled-components`.
- **Globální styly:** Nastavil jsem `GlobalStyle.ts` pro aplikaci základních stylů (včetně importu fontu "Inter") na celou aplikaci.

*Definice design systému: [dashboard_design_system (1).json](./dashboard_design_system%20(1).json)*

## 7. Krok 5: Technická Realizace

Pro samotný vývoj jsem zvolil moderní a osvědčený technologický stack. Během implementace jsem narazil na několik technických výzev, jejichž řešení vedlo ke kvalitnějšímu a robustnějšímu kódu.

- **Technologie:** React, Vite, TypeScript, Styled Components.

### Řešení technických výzev (z pohledu developera)
1.  **Správa závislostí a Drag-and-Drop:** Původně plánovaná knihovna `react-beautiful-dnd` nebyla kompatibilní s React 18+. Jako náhrada byla zvolena moderní knihovna `@dnd-kit`. Po implementaci plně rekurzivního D&D jsme na základě zpětné vazby dospěli k závěru, že pro daný účel je vhodnější a přehlednější omezit tuto funkci pouze na kategorie nejvyšší úrovně. Finální řešení je tedy jednodušší, robustnější a více odpovídá reálným potřebám uživatele.
2.  **Typová bezpečnost:** Pro zvýšení kvality kódu a prevenci chyb jsem definoval striktní TypeScript typy pro všechny datové struktury (`types.ts`) a aplikoval je napříč celou aplikací.
3.  **Znovupoužitelnost komponent:** Místo generických `<button>` elementů jsem vytvořil znovupoužitelnou komponentu `Button.tsx`, která čerpá svůj vzhled z design systému. Tento přístup zajišťuje konzistenci a usnadňuje budoucí změny.

- **Systematický postup:** Vývoj probíhal podle předem definovaného, detailního plánu, který byl průběžně aktualizován, aby reflektoval nová zjištění a rozhodnutí.

### Pokročilá správa položek: Globální vs. Lokální ingredience

Během další iterace jsme identifikovali klíčovou potřebu pro manažerku Báru: větší flexibilitu při správě doplňků k jídlům. Původní model nerozlišoval mezi obecnými přílohami (hranolky) a specifickými ingrediencemi (extra slanina do burgeru).

**Řešení (z pohledu Full-Stack designu):**

1.  **UX/UI Návrh:** V editačním panelu jsme navrhli a implementovali dvě oddělené sekce:
    *   **"Přílohy k jídlu (Globální)":** Seznam checkboxů, který umožňuje Báře jednoduše přiřadit k jídlu předem definované, celoplošně používané přílohy.
    *   **"Ingredience navíc (Lokální)":** Dynamický formulář, kde může Bára vytvořit ingredience, které jsou unikátní pouze pro danou položku.

2.  **Frontend (React & TypeScript):**
    *   Rozšířili jsme datový typ `Item` o nové pole `sideDishIds: string[]`, které uchovává reference na globální přílohy.
    *   Původní pole `ingredients: Ingredient[]` jsme ponechali pro správu lokálních ingrediencí.
    *   Komponenta `ItemEditor` byla kompletně refaktorována, aby obsahovala novou logiku a stav pro správu obou typů doplňků.

3.  **Backend a Databáze (Návrh):** Ačkoliv je aplikace postavena na mockovacích datech, tento přístup je navržen s ohledem na reálnou databázi. V SQL schématu by to odpovídalo:
    *   Globální tabulce `SideDishes`.
    *   Lokální tabulce `Ingredients` s cizím klíčem na `item_id`.
    *   Propojovací tabulce `Item_SideDishes` pro many-to-many vztah mezi položkami a globálními přílohami.

Tento přístup nejen řeší Bářin problém, ale také demonstruje naši schopnost navrhovat škálovatelná řešení, která propojují intuitivní UI s robustní a promyšlenou datovou architekturou.

### Splnění původního zadání: Podkategorie a Alergeny

V další fázi jsme se zaměřili na kompletní splnění původního zadání a na obohacení systému o klíčové funkce.

1.  **Podpora podkategorií:**
    *   **Cíl:** Splnit požadavek na vnořené kategorie a umožnit tak lepší organizaci menu.
    *   **Řešení:** Refaktorovali jsme datovou strukturu a komponenty (`CategoryList`, `Breadcrumb`) tak, aby plně podporovaly rekurzivní zobrazení a navigaci v neomezeně hluboké struktuře kategorií. Tím jsme systém učinili výrazně škálovatelnějším.

2.  **Správa alergenů:**
    *   **Cíl:** Reagovat na potřeby persony Tomáše (číšníka) a přidat funkci s vysokou praktickou hodnotou.
    *   **Řešení:** Implementovali jsme systém pro správu a zobrazení alergenů u jednotlivých položek. V editačním panelu nyní může manažerka Bára snadno přiřadit k jídlům číselné kódy alergenů, které se následně zobrazují v přehledu.

3.  **Architektonické vylepšení: Typy kategorií:**
    *   **Cíl:** Vytvořit chytřejší a kontextuálnější systém.
    *   **Řešení:** Zavedli jsme do datové struktury kategorií volitelný atribut `type` (např. `main_course`, `pizza`). To nám umožňuje aplikovat specifickou logiku a UI v závislosti na typu kategorie. Například sekce pro výběr globálních příloh se nyní v editoru zobrazuje pouze u položek v kategoriích, kde to dává smysl (u `main_course`), a je skryta u pizzy nebo nápojů, což zjednodušuje rozhraní a předchází chybám.

*Dokumentace k jednotlivým fázím vývoje je k nahlédnutí zde: [Nové implementace v1.md](./Nové%20implementace%20v1.md) a [Nové implementace v2.md](./Nové%20implementace%20v2.md)*

### Fáze 3: Zpřehlednění a vizuální hierarchie

Na základě zpětné vazby a další analýzy jsme identifikovali potřebu lépe strukturovat informace o položkách a dát manažerce Báře silnější nástroje pro vizuální komunikaci nabídky.

1.  **Správa stavu položky:**
    *   **Problém:** Původní boolean hodnota `isAvailable` byla příliš omezující. Co když jídlo není dočasně dostupné, ale chceme, aby ho zákazníci viděli? Co se sezónními jídly?
    *   **Řešení:** Zavedli jsme třístavový systém: `AVAILABLE` (Dostupné), `SOLD_OUT` (Vyprodáno) a `HIDDEN` (Skryté). V UI je tento stav reprezentován barevným indikátorem a jasným textem, což umožňuje rychlou orientaci. V editoru může Bára stav snadno měnit pomocí přehledných radio tlačítek.

2.  **Zavedení základních ingrediencí:**
    *   **Problém:** Důležité ingredience, které tvoří podstatu jídla (např. "cheddar a slanina" v burgeru), byly smíchány v obecném textovém popisu, což ztěžovalo jejich správu a strojové zpracování.
    *   **Řešení:** Vytvořili jsme v datové struktuře nové pole `baseIngredients`. V UI se tyto ingredience zobrazují jako samostatné štítky, což vizuálně odděluje základní složení od marketingového popisu.

3.  **Rychlé štítky (Quick Tags):**
    *   **Problém:** Jak rychle a konzistentně označit položky jako "Nové", "Pálivé" nebo "Naše specialita"?
    *   **Řešení:** Implementovali jsme systém globálních, barevně odlišených štítků. Bára je může jednoduše přiřadit k jakékoliv položce. To nejen zlepšuje přehlednost v CMS, ale otevírá dveře pro pokročilé filtrování v klientské aplikaci.

Tato vylepšení demonstrují náš závazek k iterativnímu vývoji, kde neustále nasloucháme potřebám uživatelů a vylepšujeme produkt tak, aby byl nejen funkční, ale i maximálně efektivní a intuitivní.

## 8. Principy Designu a Heuristická Evaluace

Při návrhu jsem se aktivně řídil zavedenými principy použitelnosti a designu, abych zajistil, že výsledný produkt bude nejen funkční, ale i intuitivní a příjemný na používání.

-   **Viditelnost stavu systému:** Uživatel (Bára) vždy ví, co se děje. Vybraná kategorie je vizuálně zvýrazněna, breadcrumb ukazuje aktuální polohu a po uložení se zobrazí notifikace.
-   **Shoda mezi systémem a reálným světem:** Používáme jazyk, kterému Bára rozumí (Kategorie, Položky, Varianty), a ikony, které jsou všeobecně srozumitelné.
-   **Uživatelská kontrola a svoboda:** Bára může snadno krokovat zpět, mazat a upravovat své akce. Nic není nevratné bez potvrzení.
-   **Konzistence a standardy:** Díky využití design systému je celé rozhraní vizuálně i funkčně konzistentní. Tlačítko pro uložení je vždy na stejném místě a má stejný vzhled.
-   **Prevence chyb:** Místo toho, abychom uživatele nechali udělat chybu a pak mu zobrazili chybovou hlášku, snažíme se chybám předcházet (např. deaktivací tlačítka "Uložit", dokud nejsou vyplněna všechna povinná pole).
-   **Flexibilita a efektivita použití:** Aplikace je efektivní jak pro nové uživatele (díky průvodcům), tak pro zkušené (díky klávesovým zkratkám, inline editaci a hromadným akcím).
-   **Estetický a minimalistický design:** Rozhraní je čisté, bez zbytečných prvků, které by odváděly pozornost od hlavního úkolu.

## 9. Závěr a Výsledek

Výsledkem je nejen funkční komponenta, ale především promyšlené řešení, které staví na první místo potřeby uživatele, je postaveno na pevných architektonických základech a je připraveno na budoucí rozšiřování.

## 10. Iterativní vývoj a budoucí směřování

Projekt byl vyvíjen v několika iterativních fázích, které postupně přidávaly a vylepšovaly funkčnost.

-   **Fáze 1:** Zaměřena na základní strukturu, persony a implementaci klíčových funkcí jako správa položek, podkategorií, alergenů a typů kategorií. (viz [Nové implementace v1.md](./Nové%20implementace%20v1.md))
-   **Fáze 2:** Zaměřena na masivní vylepšení UX/UI, včetně redesignu editačního panelu do záložkového systému, redesignu karet položek, stabilizace layoutu a implementace plnohodnotné správy variant.
-   **Fáze 4: Pokročilé funkce pro efektivitu a automatizaci:**
    *   **Hromadné úpravy:** Pro maximální efektivitu byla přidána možnost vybrat více položek a hromadně jim změnit stav.
    *   **Rychlé přidávání "za chodu":** Manažerka Bára nyní může přidávat nové globální přílohy přímo z editoru položky, aniž by musela opustit svůj pracovní kontext.
    *   **Správa skladu ingrediencí:** Byl implementován základ pro pokročilou správu skladu. Systém nyní umožňuje propojit položky s centrálně spravovanými ingrediencemi a automaticky měnit stav položky (např. na "Vyprodáno"), pokud klíčová surovina dojde.

Projekt tímto nekončí. Další směřování a nápady na vylepšení jsou zdokumentovány v souboru [Nové implementace v2.md](./Nové%20implementace%20v2.md), který slouží jako backlog pro budoucí práci. Tento iterativní přístup zajišťuje, že se produkt neustále vyvíjí a reaguje na nové poznatky a potřeby uživatelů.
