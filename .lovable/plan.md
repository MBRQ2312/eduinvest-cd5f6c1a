# Plan — selgemad nupud, kaardid ja sektsioonide eristatavus

## Eesmärk
Praegune disain on visuaalselt liiga "vaikne": primary-nupp on okei, aga sekundaarsed nupud ja sektsioonid sulanduvad taustaga. Tahame, et kasutaja näeks kohe (a) mis on klikitav nupp, (b) kus üks sektsioon lõppeb ja teine algab. Kõik värvid juba olemasolevatest tokenitest (`--primary`, `--accent`, `--success`, `--muted`, `--border`, `--card`) — uusi värve EI lisa.

## 1. Disainisüsteemi laiendused (`src/index.css` + `src/components/ui/button.tsx`)

**Button variandid** — selge 3-tasandiline hierarhia:
- `default` (primary): täidetud `bg-primary`, `shadow-sm`, hover `bg-primary/90`, focus-visible ring nähtav (juba olemas, tugevdame).
- `secondary`: täidetud `bg-secondary` + `border border-border-strong` (uus token, vt allpool), tume tekst.
- `outline`: tausta-värv `bg-card`, `border-2 border-border-strong`, hover `bg-muted`. Praegu on `border` (1px) — tõstame nähtavusele.
- `ghost`: jääb õhuline, AGA ainult ikoonidele/navi-linkidele; lisame focus-ringi.
- Min kõrgus: `default` 40px, `lg` 48px (praegu 44px → 48px), kõikidel `px` suuremaks 1 sammu võrra.
- Focus-visible: kõikidel `ring-2 ring-ring ring-offset-2` — juba CVA-s, kontrollime et töötab kõikide variantidega.

**Uus border token** `--border-strong` on juba `index.css`-is defineeritud (`30 14% 74%`), aga Tailwindi configis pole välja toodud. Lisame `tailwind.config.ts`-sse `borderColor.strong` vms, et saaks `border-border-strong` kasutada.

**Sektsiooni utility** (`@layer components` `index.css`-is):
- `.section-alt` → `background-color: hsl(var(--muted) / 0.4)` — õrn vahelduv taust.
- `.section-divider` → `border-top: 1px solid hsl(var(--border))` — kasutame lehte raamistavate sektsioonide vahel.

## 2. `src/pages/Index.tsx` muudatused

Toon iga `<section>` sisse selge piir/taust. Wrap'in iga sektsiooni täislaiuses div'i, mis annab vahelduva tausta; sisemine `max-w-[1180px]` jääb. Praegu on kõik `<main>` sees ühe maxwidth alusel — refaktoorin nii, et taustakihid on `<section>` enda külge ja sisu jääb keskele containeris.

Vaheldumise kava (top → bottom):
1. HERO — `bg-background` (paber)
2. ROLLIVÄRAV — `bg-muted/40` (õrn)
3. OTSUSTUSVOOG — `bg-background`
4. VÄÄRTUSKAARDID — `bg-muted/40`
5. Loe lähemalt — `bg-background`

Iga sektsiooni vahel `border-t border-border` joon.

Kaardid (rollivärav + väärtuskaardid + timeline-card):
- `border` → `border` + tugevam `border-border-strong`
- lisada `shadow-card` kõikidele (mitte `shadow-sm`)
- hover: `border-primary` (mitte `border-primary/40`) + `shadow-elevated`

CTA "Vaata otsustusvoogu": jääb primary, aga lisada teine `outline`-variant ("Loe taustaks") POLE — kasutaja ütles, ära lisa uusi nuppe. Jäta üks.

## 3. `src/pages/Pitch.tsx` muudatused

`SlideShell` → `border-border/60` asendada `border-border-strong`-iga, säilitada `shadow-[…]`. Slaide eristab juba "kaart"-stiil, seega seal sektsiooni-vahelduvat tausta ei vaja.

`SoftCard` toonid jäävad, aga `border-*/15` → `border-*/30` selgemaks.

Nupud (`<Button>`) saavad uue variandi-süsteemi automaatselt.

## 4. Muud lehed
`Parent.tsx`, `Coach.tsx`, `Teacher.tsx`, `Principal.tsx` ja `demo/StepShell.tsx`, `DemoShell.tsx`, `primitives.tsx` saavad nuppude / kaartide muudatused automaatselt CVA ja tokenite kaudu. Käsitsi puudutame ainult kui leiame kohtades, kus on hardcoded `border-border/60` — vahetame `border-border` või `border-border-strong`.

## 5. Ligipääsetavus & responsive
- Kontrastid: `--foreground` (#111827) `--muted` (kerge beež) taustal — AAA. `--primary` (#006D6F) valgel — AAA. Säilitame.
- Focus-ring on alati `ring-2 ring-ring` (teal) — nähtav nii valgel kui muted taustal.
- Mobiil: vahelduv taust töötab täislaiuses; sisemine padding jääb `px-4 sm:px-6`. Testin 360px laiusel.

## 6. Tehniline kokkuvõte (failid)
```text
src/index.css                       — uus .section-alt utility, --border-strong kinnitus
tailwind.config.ts                  — borderColor.strong, võimalik bg.alt
src/components/ui/button.tsx        — variandid: outline/secondary tugevamaks, sizing
src/pages/Index.tsx                 — sektsioonide vahelduv taust + dividerid, kaardid
src/pages/Pitch.tsx                 — kaardi-bordereid tugevamaks
src/components/demo/StepShell.tsx   — kaardi border tugevamaks
src/components/demo/DemoShell.tsx   — sama
src/components/demo/primitives.tsx  — DataBlock / RoleCard borderid
```

## Ei muuda
- värvipalett (kõik tokenid jäävad)
- sisu, copy, struktuur, sammude arv, AI roll
- sektsioonide järjekord
