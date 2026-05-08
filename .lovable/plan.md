
# Pitch + prototüüp: Luukas Ilvese tagasiside

**Põhimuutus:** ärge müüge taotluse menetlust — müüge kooliressursi juhtimist. Koolijuht on peakangelane, demo on näide, mitte toode.

## 1. Pitch (`src/pages/Pitch.tsx`) — slaidide ümberkorraldus

Uus 12-slaidi järjekord (asendab praeguse):

| # | Slaid | Sisu lühidalt |
|---|-------|---------------|
| 1 | **Suur probleem (30 s)** | Õpetajate ülekoormus, pikad koolipäevad, dubleeriv õppimine. "Kool ei vaja veel üht vormi. Kool vajab juhtimisinfot." |
| 2 | **Miks nüüd?** | Seaduslik paindlikkus on olemas, tööriist puudub |
| 3 | **Mida koolijuht tegelikult ostab?** | 5 kaarti: korduvad mustrid · tunniplaani õhk · õpetaja tööaja suunamine · põhjendatud otsus perele · huvihariduse väärtus |
| 4 | **Lahendus üldiselt** | Tõendid kokku · seosed nähtavaks · otsus koolile. Loetelu kasutusjuhtudest (muusika, kunst, robootika, kosmosering, eesti keele trenn, olümpiaadid) |
| 5 | **Demojuhtum (Nikita — näide)** | Selge tähistus: "üks näide paljudest" |
| 6 | **AI roll** | Eeltöö, ei otsusta |
| 7 | **Koolijuhi vaade — peamine** | Screenshot/mock dashboardist, lingitakse `/juht`-i |
| 8 | **Mõju ja kuidas raha realiseerub** | Eesti mõõtkava + uus plokk: "Raha realiseerub kooli töökorralduses" |
| 9 | **Valideerimine** | Praegused 69/320/4.64 mõõdikud |
| 10 | **Ärimudel — kes maksab?** | 3 veergu (kool / KOV / huvikool) + hinnastamise hüpoteesid + aus märkus |
| 11 | **Tehniline ausus + riskid** | Mock vs valideerimine järgmises etapis |
| 12 | **Mai → september 2026 teekaart + lõppsõnum** | "Me ei digitaliseeri vana bürokraatiat. Me loome koolile otsustustoe." |

Konkreetsed muudatused:
- **Uus Slide1** — suur probleem ja tugev lause asendab praegust ava
- **Uus slaid "Mida koolijuht ostab?"** (5 kaarti) enne demojuhtumit
- **Uus slaid "Kuidas raha realiseerub kooli töökorralduses"** (lisatud Slide9 alla või eraldi)
- **Uuendatud SlidePayers** — lisatud hinnastamise hüpoteesid + aus märkus maksevalmiduse kohta
- **Uuendatud SlideRisks** — selgem mock-andmete ausus (EHIS/eKool/Stuudium pole valmis liidestus)
- **Uus teekaart-slaid** mai/juuni/august/september 2026 verstapostidega
- **Lõppsõnum-blokk** Slide14 lõppu

## 2. Prototüüp

### `src/pages/Index.tsx`
- Tõsta **koolijuht** rolli kaardide esimeseks ja visuaalselt suurimaks
- Lisa rolli alla silt "Pitch'i põhidemo"
- Õpetaja/lapsevanem/treener jäävad alla "tugivaadetena"

### `src/pages/Principal.tsx`
- Uus pealkiri + alatekst (Luukase sõnastus)
- Uus plokk **"Mida saan koolijuhina teha?"** (5 punkti) enne CTA-sid
- Olemasolevad mõõdikud säilivad

### Uus märkus mock-andmete kohta
- Lisa väike `MockDataNotice` komponent (badge/banner) Principal + HobbySchool lehtedele:
  > "Häkil mock-andmed. EHIS / eKool / Stuudium liidestus järgmises etapis."

### `src/pages/HobbySchool.tsx`
- Lisa MockDataNotice ülaossa

## Tehniline plaan

```text
src/pages/Pitch.tsx           — restructure SLIDES array; add 3-4 new slide components, update existing
src/pages/Index.tsx           — reorder roles, emphasize Principal
src/pages/Principal.tsx       — new header copy, new "Mida saan teha?" block, MockDataNotice
src/pages/HobbySchool.tsx     — MockDataNotice
src/components/MockDataNotice.tsx  — new tiny shared component
```

Hoiame sama värvipaleti (`C.green/teal/purple/lime/orange`) ja `SlideShell`/`Card`/`Title` primitiivid — ainult sisu ja järjekord muutub.
