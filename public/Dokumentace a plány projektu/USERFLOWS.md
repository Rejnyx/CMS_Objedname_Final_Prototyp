# User Flows: Správa menu v CMS

Tento dokument popisuje klíčové uživatelské scénáře (user flows) pro personu Báru Novotnou při práci s komponentou pro správu menu.

## Flow 1: Přidání kompletní nové položky (Klíčový scénář)

**Cíl:** Bára chce rychle přidat novou sezónní položku včetně kategorie, variant a ingrediencí.
**Kontext:** Začátek dne, příprava na novou akci.

1.  **Start:** Bára je na obrazovce `/admin/menu`.
2.  **Akce:** Klikne na tlačítko `[+ Přidat kategorii]`.
3.  **UI:** Zobrazí se inline formulář nebo malý modal pro zadání názvu.
4.  **Akce:** Zadá "Letní saláty" a potvrdí.
5.  **UI:** Nová kategorie se objeví v levém panelu. Bára na ni klikne, aby ji vybrala.
6.  **Akce:** V pravém panelu (který je nyní prázdný) klikne na tlačítko `[+ Přidat položku]`.
7.  **UI:** Z pravé strany se vysune editační panel "Nová položka".
8.  **Akce (v panelu):**
    a. Vyplní název "Caesar s kuřecím masem" a základní cenu.
    b. V sekci "Varianty" klikne na `[+ Přidat variantu]`, zadá název "Velká" a cenový modifikátor "+40 Kč".
    c. V sekci "Ingredience navíc" vybere z našeptávače "Ančovičky".
    d. Nahraje fotku.
9.  **Akce:** Klikne na `[Uložit]`.
10. **UI:** Editační panel se zasune. V pravém panelu se objeví nová položka "Caesar s kuřecím masem" se všemi detaily.
11. **Výsledek:** Bára úspěšně a plynule přidala novou komplexní položku za méně než 5 minut.

## Flow 2: Rychlá úprava ceny (Běžná operace)

**Cíl:** Bára potřebuje okamžitě změnit cenu burgeru.
**Kontext:** Reakce na zvýšení cen od dodavatele.

1.  **Start:** Bára je na obrazovce `/admin/menu`.
2.  **Akce:** V levém panelu vybere kategorii "Hlavní jídla".
3.  **UI:** V pravém panelu se zobrazí seznam hlavních jídel.
4.  **Akce:** Najede myší na položku "Hovězí Burger" a klikne na ikonu tužky u ceny.
5.  **UI:** Pole s cenou se změní na editační pole (inline editace).
6.  **Akce:** Přepíše cenu a stiskne Enter (nebo klikne mimo pole).
7.  **UI:** Zobrazí se notifikace "Cena uložena" (autosave).
8.  **Výsledek:** Cena je změněna na 2 kliknutí bez opuštění hlavní obrazovky.

## Flow 3: Změna stavu položky (Denní rutina)

**Cíl:** Kuchař hlásí, že došly suroviny na salát. Bára musí položku označit jako vyprodanou.
**Kontext:** Během poledního shonu.

1.  **Start:** Bára je na obrazovce `/admin/menu`.
2.  **Akce:** Rychle vyhledá "Caesar salát" pomocí vyhledávacího pole.
3.  **UI:** Zobrazí se pouze položka "Caesar salát", u které je vidět zelený indikátor a stav "Dostupné".
4.  **Akce:** Klikne na položku, aby otevřela editační panel.
5.  **UI:** V záložce "Základní" vidí sekci "Stav".
6.  **Akce:** Přepne stav z "Dostupné" na "Vyprodáno".
7.  **Akce:** Klikne na `[Uložit]`.
8.  **UI:** Editační panel se zavře. U položky "Caesar salát" se nyní zobrazuje oranžový indikátor a stav "Vyprodáno". Celá karta položky je mírně zešedlá, aby byla vizuálně odlišena.
9.  **Výsledek:** Položka je na veřejném menu viditelná, ale označená jako vyprodaná, což zabraňuje objednávkám, ale informuje zákazníky. Akce byla provedena rychle a intuitivně. Pro úplné skrytí (např. u sezónních jídel) by Bára zvolila stav "Skryté".
