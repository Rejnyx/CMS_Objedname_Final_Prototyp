# Sitemap: CMS pro správu menu

Tento dokument definuje strukturu stránek (views) pro zamýšlený CMS systém. Jelikož se jedná o moderní Single Page Application (SPA) postavenou v Reactu, mnoho akcí (jako editace nebo přidávání) se nebude odehrávat na samostatných URL, ale v modálních oknech nebo postranních panelech, aby uživatel (Bára) neztrácel kontext.

## 1. Veřejná část (Hypotetická)

- `/` - Přihlašovací stránka

## 2. Administrační část (Po přihlášení)

- `/admin` - Hlavní dashboard
  - Přehled klíčových metrik (prodeje, stav zásob). Odtud by vedly odkazy do jednotlivých modulů.

- `/admin/menu` - **Správa menu (Naše klíčová komponenta)**
  - Toto je hlavní view, které budeme implementovat.
  - Zobrazuje vlevo strom kategorií a vpravo položky ve vybrané kategorii.

### 2.1. Akce v rámci `/admin/menu` (řešeno jako UI stavy, ne samostatné stránky)

- **Správa kategorií:**
  - `view-state: new-category` (Otevřený formulář pro vytvoření nové kategorie)
  - `view-state: edit-category/:id` (Otevřený formulář pro editaci existující kategorie)

- **Správa položek:**
  - `view-state: new-item` (Otevřený formulář/průvodce pro přidání nové položky do vybrané kategorie)
  - `view-state: edit-item/:id` (Otevřený editační panel pro existující položku, kde se spravují i varianty a ingredience)

- `/admin/ingredients` - (Hypotetická) Samostatná správa všech dostupných ingrediencí v restauraci.
- `/admin/settings` - (Hypotetická) Nastavení systému, uživatelů a rolí.

Tato struktura zajišťuje, že Bára může provádět 90 % své práce na jediné, přehledné obrazovce (`/admin/menu`), což minimalizuje proklikávání a zrychluje práci.
