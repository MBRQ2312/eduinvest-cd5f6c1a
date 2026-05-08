
# EduInvest LearnOnce — täielik ümberkujundus

Eesmärk: muuta demo selgeks 6-sammuliseks looks, mis algab **lapsevanema taotlusest** (mitte tehnilisest sisendist), järgib seaduslikku loogikat ja on visuaalselt minimaalne.

Põhisõnum, mis on läbiv märgis igal AI-vaatel: **"AI ei otsusta. Õpetaja otsustab."**

> *Märkus: üleslaaditud `Teabeleht.pdf` ei õnnestunud parsida (binaarne tõrge). Plaan järgib sinu kirjelduses olevat protsessiloogikat. Kui Teabelehel on lisanüansse (sõnastus, juriidilised viited), saame need pärast esimest läbimist juurde lisada — ütle siis, mis seal kirjas on.*

---

## A. Kogu ümberkujundus ühe pilguga

### Uus protsessiriba (ainus stepper kogu demos)
```
Taotlus → Kooli vaade → Tõendid → AI eelanalüüs → Otsus → Selgitus & koondvaade
   1          2            3            4              5              6
```

Stepper on horisontaalne, alati nähtav demo ülaservas, max 6 punkti. Aktiivne = primary, valminud = roheline check, ootel = hall.

### Iga ekraani reegel
- **1 küsimus** ekraani päises (lühike ja konkreetne).
- **3–5 põhipunkti** sisus.
- **1 CTA** allservas.
- **Lühike pealkiri** ("1. Lapsevanem esitab taotluse" — mitte "Õppija sisend ja koolivälise õpikogemuse kirjeldamine").
- AI-ga seotud vaadetes püsiv märgis: **"AI ei otsusta · Õpetaja otsustab"**.

### Avaleht
Eemaldame: `ImpactStats` numbrid (allika valideerimiseta), VÕTA pikk tekst, eesti keele moodul, vastutusmudeli tabel, "Sõnum žüriile" CTA — kõik liiguvad **avalehe alla "Loe lähemalt" accordion'i** (sisu säilib, aga ei sega põhilugu).

Avaleht jääb:
1. Lühike hero (2 lauset + 1 CTA "Käivita demo")
2. Rollivärav (4 kaarti: Lapsevanem · Treener · Õpetaja · Koolijuht)
3. "Loe lähemalt" accordion (VÕTA, eesti keel, vastutusmudel)
4. Pitch-sõnum lõpus: *"EduInvest LearnOnce ei loo õppimist juurde. See teeb juba toimunud õppimise nähtavaks, võrreldavaks ja õpetaja otsusel arvestatavaks."*

---

## B. Kuus uut vaadet (asendavad praegused 7 sammu)

### Vaade 1 — Lapsevanema taotlus
**Pealkiri:** "1. Lapsevanem esitab taotluse"
**Küsimus:** *"Minu laps õpib väljaspool kooli. Palun hinnake, kas seda saab koolis arvestada."*

Üks taotluskaart, 5 rida:
- Õppija: Nikita T., 8. klass
- Kooliväline tegevus: jalgpallitrenn 3× nädalas
- Tegevuse keel: eesti keel
- Taotleja: lapsevanem
- Soov: arvestada kehalise kasvatuse ja eesti keele praktilise kasutuse toetava tõendina

Selgitus all: *"Lapsevanem ei pea teadma õppekava täpset kattuvust. Kool aitab seosed välja selgitada."*

CTA: **Saada taotlus koolile →**

### Vaade 2 — Kool seob taotluse õppekavaga
**Pealkiri:** "2. Kool seob taotluse õppekavaga"
**Küsimus:** *"Millised õpitulemused võivad selle tegevusega kattuda?"*

Kaks plokki kõrvuti (mobiilis allapanu):

**A) Kehaline kasvatus**
- regulaarne liikumine
- vastupidavus
- koostöö
- enesejuhtimine

**B) Eesti keele praktiline kasutus**
- juhiste mõistmine
- suhtlus eestikeelses keskkonnas
- sporditerminoloogia
- lühike eneseanalüüs

Märkus all (kollane info-kast): *"Eesti keele osa ei asenda automaatselt eesti keele hinnet. See võib olla toetav tõend."*

CTA: **Edasi: küsi treenerilt tõendid →**

### Vaade 3 — Treener kinnitab tõendid
**Pealkiri:** "3. Treener kinnitab tõendid"
**Küsimus:** *"Kas tõendite kogum on piisav, et seos õppekavaga kontrollida?"*

Kontrollnimekiri (✓ / ⚠ / ✕):
- Treeneri kinnitus — olemas ✓
- Treeningmaht — olemas ✓
- Treeninggraafik — olemas ✓
- Võistlusinfo — olemas ✓
- Tegevuse keel — kinnitatud ✓
- Õppija eneseanalüüs — puudu ⚠
- Õpetaja lühivestlus — soovitatud ⚠

Selgitus: *"Arvestamise aluseks ei ole ainult õpilase väide, vaid tõendite kogum."*

CTA: **Saada tõendid koolile →**

> **Taustal käivitub AI eelanalüüs** (kasutaja ei pea ootama, ei näe spinner'it). Tulemus on järgmises vaates valmis.

### Vaade 4 — AI eelanalüüs (õpetajale)
**Pealkiri:** "4. AI teeb õpetajale eelanalüüsi"
**Küsimus:** *"Kuidas tõendid katavad õppekava õpitulemusi?"*

Püsiv märgis ülal: 🛡️ **AI ei otsusta · Õpetaja otsustab**

Kolm kaarti kõrvuti:

| 🟢 Tugev seos | 🟡 Osaline seos | 🔴 Puudu |
|---|---|---|
| regulaarne liikumis­harjumus | koostöö | õppija lühike eneseanalüüs |
| vastupidavuse arendamine | enesejuhtimine | õpetaja lühivestlus |
| juhendatud treening | eestikeelne suhtlus | |

CTA: **Edasi õpetaja otsuseni →**

### Vaade 5 — Õpetaja teeb otsuse
**Pealkiri:** "5. Õpetaja teeb otsuse"
**Küsimus:** *"Mis on sinu otsus selle õppija kohta?"*

Neli radio-valikut:
- ⃝ Arvestan täielikult
- ⃝ Arvestan osaliselt **← vaikimisi valitud**
- ⃝ Vajan lisatõendit
- ⃝ Ei arvesta

Näidisotsuse tekst (kahes plokis):

> **Kehaline kasvatus** — arvestan osaliselt.
> Treening katab regulaarse liikumise ja vastupidavuse osa.
> Mõned õpitulemused vajavad veel õpetaja vaatlust.

> **Eesti keel** — märgin toetava tõendina eestikeelses keskkonnas suhtlemise kohta.
> See ei asenda eesti keele hinnet.

Väike tekst all: *"Otsus dokumenteeritakse kooli töövoos."*

CTA: **Salvesta otsus →**

### Vaade 6 — Pere selgitus + koolijuhi koondvaade
**Pealkiri:** "6. Pere saab selgituse, kool näeb mustreid"

Kaks veergu:

**Vasakul — Pere selgitus**
- Mida arvestati
- Miks arvestati
- Mida ei arvestatud
- Mis jääb veel teha

**Paremal — Koolijuhi koondvaade**
- Sarnaseid taotlusi: N
- Korduvad ained: kehaline, muusika, eesti keel
- Lisatõendit vajab: N juhtumit
- Hinnanguline ajasääst õpetajale: ~X tundi/kuus
- Korduvad juhtumid, millest saab kooli hea tava

Lõppu pitch-sõnum (suur card):
> *"EduInvest LearnOnce ei loo õppimist juurde. See teeb juba toimunud õppimise nähtavaks, võrreldavaks ja õpetaja otsusel arvestatavaks."*

---

## C. Rollivaated (eraldi URL-id, lugu sama)

Rollivaated on **lühivaated samast loost ühe rolli silmade läbi**. Kõik kasutavad sama `demoCase` andmestikku.

| Roll | URL | Olek | Mis ta näeb |
|---|---|---|---|
| Lapsevanem | `/perele` | olemas, lihtsustame | Vaade 1 + "algata vestlus" CTA + Vaade 6 vasak veerg |
| Treener | `/treener` | olemas, täiendame | Vaade 3 + sihtmärgi valija (eKool / Stuudium / Arno) |
| Õpetaja | `/opetaja` | **uus** | Vaade 4 + Vaade 5 (AI süntees + otsus) |
| Koolijuht | `/juht` | **uus** | Vaade 6 parem veerg + tunniplaani soovitused |

**AI taustal:** kõik AI-päringud (`ai-preanalysis` edge function) jooksevad **automaatselt vaate avamisel** läbi uue `useAiAnalysis` hook'i. Kasutaja ei vajuta "analüüsi" nuppu. Loading ajal näidatakse `Skeleton`-komponente, mitte spinner'it.

---

## D. Visuaalsed lihtsustused kogu projektis

1. **Tühi ruum** — suuremad `padding`'ud (p-7 → p-9), suuremad `gap`'id sektsioonide vahel.
2. **Vähem ikoone** — eemaldan ikoonid kõikidelt rea-tasemel chip'idelt; jätan ainult ploki-tasemel (max 1 ikoon ploki kohta).
3. **Lühemad pealkirjad** — "Õpetaja otsustustugi koolivälise õppimise arvestamiseks" → "Õpetaja otsustustugi". Detail läheb body teksti.
4. **Värv = tähendus:**
   - Sinine (primary) = tegevus / CTA
   - Roheline (success) = tehtud / tugev seos
   - Kollane (warning) = juriidiline piirang / osaline
   - Punane (destructive) = puudu / ei kata
   - Hall = neutraalne info
5. **Üks `primitives.tsx`** kogu UI-alustarule:
   - `<SectionLabel>`, `<InfoCard tone>`, `<DataBlock>`, `<DataRow>`, `<RoleCard>`, `<HelpPopup>`, `<AiBadge>` (läbiv "AI ei otsusta" märgis), `<EvidenceItem status>`, `<RelationCard tone>`, `<ProcessBar>`.
6. **Üks `demoCase.ts`** — Nikita andmed ühes failis (täna 8+ failis).
7. **Mobile-first** — sammu kaardid `lg:grid-cols-2` → `grid-cols-1` vaikimisi, sticky CTA all.

---

## E. Eemaldatav / peidetav sisu

**Surnud kood — kustutatakse (−1640 rida):**
- `Step1Input.tsx`, `Step2Analysis.tsx`, `Step3Decision.tsx`, `Step4Impact.tsx`
- `PartnerView.tsx`, `PartnerConfirmationStep.tsx`

**Liigutatakse "Loe lähemalt" accordion'i alla:**
- VÕTA pikk tekst
- eKool / Stuudium / Arno tehniline kirjeldus
- Vastutusmudeli tabel

**Eemaldatakse täielikult:**
- `ImpactStats` numbrid kuni allikas pole märgitud
- "3 of 4", "~2 minutit" jms validee­rimata numbrid
- Dubleerivad uppercase tracking-chipid, mis ainult kordavad pealkirja

**Mida ma EI muuda:**
- Värvipaletti — kasutan ainult olemasolevaid tokeneid
- `ai-preanalysis` edge function'i sisu (jääb samaks, ainult kutsumise koht muutub)
- Lovable Cloud seadistust

---

## F. Failide muudatus kokku

**Uued failid:**
- `src/components/demo/primitives.tsx`
- `src/components/demo/demoCase.ts`
- `src/hooks/useAiAnalysis.ts` (taustaanalüüs)
- `src/components/landing/RoleGate.tsx`
- `src/components/demo/ProcessBar.tsx` (uus 6-sammuline horisontaalne stepper)
- 6 uut sammu-komponenti: `ApplicationStep.tsx`, `SchoolMappingStep.tsx`, `EvidenceStep.tsx`, `AiAnalysisStep.tsx`, `DecisionStep.tsx`, `ExplanationStep.tsx`
- `src/pages/Teacher.tsx`
- `src/pages/Principal.tsx`

**Muudetavad:**
- `src/pages/Index.tsx` — drastiline lihtsustamine (~413 → ~120 rida)
- `src/pages/Parent.tsx` — Vaade 1 sisu + "algata vestlus" CTA
- `src/pages/Coach.tsx` — Vaade 3 sisu + sihtmärgi valija
- `src/App.tsx` — `/opetaja` ja `/juht` marsruudid
- `supabase/functions/ai-preanalysis/index.ts` jääb samaks

**Kustutatavad:**
- 7 vana `LearnOnceStep*.tsx` faili (asenduvad uute 6 sammuga)
- 6 surnud koodi faili (Step1Input jne, PartnerView jne)

**Mõju kokku:** ~−2500 rida koodi, +12 uut faili, demo voog 7 sammust 6 sammu, üks selge protsessiriba kogu loo peal.

---

## Üks otsustuskoht enne alustamist

**Koolijuhi koondvaate arvud** (sarnaseid taotlusi N, ajasääst ~X tundi):
- **A:** staatilised mock-arvud koos selge sildiga *"näidisandmed"* — kiire, hackathoni-friendly
- **B:** Lovable Cloud tabelitest — toimib päriselt, aga vajab andmemudelit ja seemneid

Vaikimisi soovitan **A** koos selge "näidisandmed" märgisega, et numbrid ei näiks valideeritud uuringuna. Hiljem saame andmemudeli juurde teha.
