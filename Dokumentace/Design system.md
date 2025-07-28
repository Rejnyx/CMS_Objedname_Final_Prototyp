# Design Systém Aplikace "Objednáme"

Tento dokument reflektuje aktuální stav design systému a komponent použitých v aplikaci. Slouží jako technická dokumentace pro vývojáře a designéry k udržení vizuální a funkční konzistence.

## 1. Základní stavební kameny (Tokens)

### 1.1. Barevná paleta

Barvy jsou definovány v `tailwind.config.js` a doplněny o specifické hodnoty přímo v komponentách.

- **Primary (Primární):**
  - `primary-500`: `#FF6C1E` (Použito pro focus ring, hover efekty)
  - `primary-600`: `#E6621A` (Použito pro hover stavy)
  - `active-bg`: `#FFEEE2` (Pozadí aktivních prvků v sidebaru)
  - `orange-500`: (Výchozí Tailwind barva) Použito pro text aktivní položky v sidebaru a notifikační tečku.
  - Zvláštní chování: Komponenta `Button` s variantou `primary` má natvrdo nastaveno pozadí `#626262` (`neutral-600`).

- **Neutral (Neutrální):**
  - `neutral-0`: `#FFFFFF` (Pozadí tlačítek s ikonou, vyhledávacího pole v headeru)
  - `neutral-100`: `#FAF4F0` (Pozadí headeru, pozadí `SearchInput`)
  - `neutral-200`: `#F7F7F7` (Pozadí `secondary` tlačítka, okraje)
  - `neutral-300`: `#E5E5E5` (Hover stav `secondary` tlačítka)
  - `neutral-600`: `#626262` (Text `ghost` tlačítka, pozadí `primary` tlačítka)
  - `neutral-700`: `#4a4a4a`
  - `neutral-800`: `#333333` (Text v navigačních položkách, ikony)
  - `neutral-900`: `#212121` (Hlavní nadpisy, text profilu)
  - `zinc-600`: (Výchozí Tailwind barva) Použito pro popisky a placeholder text.

- **System & Status (Systémové barvy):**
  - `success`: `#28A745` (Tlačítko `success`)
  - `danger`: `#E53935` (Tlačítko `danger`)
  - `blue-500`: `#4A90E2`

### 1.2. Typografie

Používá se bezpatkový font **Inter**.

- **Font Family:** Inter, sans-serif

**Použité styly (příklady z kódu):**

| Použití                 | Třídy (`className`)                               | Příklad v UI                      |
| ----------------------- | ------------------------------------------------- | --------------------------------- |
| **Hlavní nadpis (H1)**  | `text-2xl font-bold`                              | "Správa kategorií" v Headeru      |
| **Text profilu**        | `text-base font-bold`                             | Jméno uživatele v Headeru         |
| **Text tlačítka**       | `font-semibold`                                   | Všechna tlačítka                  |
| **Aktivní navigace**    | `font-semibold`                                   | Aktivní položka v Sidebar         |
| **Běžná navigace**      | `font-medium`                                     | Neaktivní položky v Sidebar       |
| **Input text**          | `text-sm font-medium`                             | Vyhledávací pole                  |
| **Popisky**             | `text-sm font-normal` / `text-xs font-normal`     | Popisky v Headeru, role admina    |

### 1.3. Spacing a Grid

Používá se systém násobků, primárně z Tailwindu.

- **Padding:**
  - `px-4 py-3`: Tlačítka
  - `pl-12 pr-4 py-3`: Vyhledávací pole
  - `p-3`: Tlačítka s ikonou
  - `px-12 py-6`: Header
- **Mezery (Gap):**
  - `gap-4`: Mezi prvky v Headeru
  - `space-y-2`: Mezi položkami v Sidebar
- **Border Radius (Zaoblení rohů):**
  - `rounded-lg`: Tlačítka, inputy, profilový obrázek
  - `rounded-2xl`: Sidebar (vpravo nahoře a dole)

---

## 2. Komponenty

### 2.1. Button

- **Zdroj:** `src/components/ui/Button.tsx`
- **Popis:** Základní interaktivní prvek.
- **Varianty a styly:**
  - **`primary`**: Pozadí `#626262` (natvrdo), text `white`.
  - **`danger`**: Pozadí `#E53935`, text `white`.
  - **`secondary`**: Pozadí `neutral-200`, text `neutral-800`.
  - **`ghost`**: Průhledné pozadí, text `neutral-600`, bez stínu.
  - **`success`**: Pozadí `#28A745`, text `white`.
- **Tlačítka s ikonou (v Headeru):**
  - **Popis:** Čtvercová tlačítka pro akce.
  - **Styl:** `w-12 h-12`, pozadí `white`, okraj `border-neutral-200`, hover `bg-neutral-200`.

### 2.2. SearchInput

- **Zdroj:** `src/components/ui/SearchInput.tsx`
- **Popis:** Formulářový prvek pro vyhledávání.
- **Styl:** Pozadí `neutral-100`, okraj `border-neutral-200`, ikona `Search` vlevo. Text `text-zinc-600`. Focus stav má `ring-primary-500`.
- **Varianta v Headeru:** Má bílé pozadí (`bg-white`).

### 2.3. Checkbox

- **Zdroj:** `src/components/ui/Checkbox.tsx`
- **Popis:** Komponenta pro zaškrtávací pole. (Obsah souboru nebyl analyzován).

### 2.4. Ostatní UI komponenty

V adresáři `src/components/ui` se nacházejí i další komponenty, které tvoří design systém:

- `AddonCard.tsx`
- `AllergenCard.tsx`
- `Breadcrumb.tsx`
- `SidePanel.tsx`
- `Tabs.tsx`
- `VariantCard.tsx`

(Jejich detailní implementace nebyla v rámci této revize analyzována).

---

## 3. Layout

### 3.1. Sidebar

- **Zdroj:** `src/components/layout/Sidebar.tsx`
- **Popis:** Levá navigační lišta.
- **Styl:** Šířka `w-64`, pozadí `bg-white`, zaoblení vpravo.
- **Aktivní položka:** Zvýrazněna pozadím `active-bg` (`#FFEEE2`), textem `text-orange-500` a svislým proužkem `bg-orange-500`.
- **Neaktivní položka:** Text `text-neutral-800`, hover stav s pozadím `bg-neutral-200`.

### 3.2. Header

- **Zdroj:** `src/components/layout/Header.tsx`
- **Popis:** Horní lišta aplikace.
- **Styl:** Výška `h-24`, pozadí `#FAF4F0` (`neutral-100`). Obsahuje nadpisy, vyhledávací pole, tlačítka s ikonami a profil uživatele.

---

## 4. Odstraněné nebo neidentifikované prvky

Následující prvky z původního `Design system.md` nebyly v analyzovaných souborech nalezeny nebo jsou implementovány zcela odlišně:

- **Štítky (Tags/Badges):** Neexistují jako samostatná komponenta. Stavové indikátory (např. notifikační tečka) jsou součástí jiných komponent.
- **Dropdown / Select:** Nebyla nalezena samostatná komponenta.
- **Karty (Cards):** Komponenty jako `Stat Card`, `Customer Review Card` nebyly nalezeny. Místo nich existují specifičtější karty jako `AddonCard`, `VariantCard`.
- **Grafy (Charts):** Nebyly analyzovány.
- **Tabulka (Table):** Nebyla analyzována.
- **Collapsible:** Nebyla nalezena samostatná komponenta.
