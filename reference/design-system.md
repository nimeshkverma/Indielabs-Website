# The Indie Labs · Design system

Direction: **Construction**. Every figure looks drawn with compass and straightedge, construction lines left visible.

All values come from `tokens.css`. Components never hard-code colours, sizes or timings. If a value is missing, add a token first.

## Principles

1. **Credibility first.** Calm, precise and plain. Nothing on the page claims more than the copy can back up.
2. **One idea per figure.** Every figure illustrates one concept from the copy. Figures never show numbers, data or results.
3. **One coral point per figure.** `--color-highlight` marks the single thing to look at. It is never used for large areas or body text.
4. **Structure means something.** Numbering is used only for real sequences (the engagement lifecycle, legal clauses, figure numbers). No uppercase eyebrow labels.
5. **Static first.** The site is plain HTML and CSS on GitHub Pages. JavaScript only adds the figure drawing and the mobile menu; everything works without it.
6. **Accessible by default.** WCAG 2.1 AA contrast, visible keyboard focus, reduced motion respected, and every page usable at 320px wide.

## Breakpoints

| Name | Width | What changes |
|------|-------|--------------|
| sm | ≤ 560px | Footer becomes one column; buttons use compact padding |
| md | ≤ 700px | Practice grid becomes one column |
| lg | ≤ 860px | Header navigation moves behind the menu button |
| xl | ≤ 960px | Hero stacks text above figure; footer becomes two columns |

## Page inventory

| Page | Components used |
|------|-----------------|
| Home | Header, Hero, Figure, Practice item, Lifecycle steps (short), Product card, Principle card, CTA band, Footer |
| Services | Header, Section header, Practice block, Engagement model card, FAQ, CTA band, Footer |
| Products | Header, Section header, Product card, Status badge, CTA band, Footer |
| About | Header, Section header, Principle card, Bulleted list, CTA band, Footer |
| Approach | Header, Section header, Principle card, Lifecycle steps (full), Bulleted list, CTA band, Footer |
| Contact & Support | Header, Section header, Bulleted list, Notice callout, Address block, Footer |
| Privacy Policy, Terms | Header, Legal prose, Footer |

---

## 1. Wordmark

Three options, each as outlined SVG paths in Manrope (no font needed to render), in `brand/`.

| Option | File | Description | Minimum height |
|--------|------|-------------|----------------|
| 1. Wordmark | `wordmark-1-{light,dark}.svg` | "The Indie Labs" in Manrope ExtraBold, tight tracking | 16px |
| 2. Mark and wordmark | `wordmark-2-{light,dark}.svg` | Constructed square with diagonals and a coral centre point, beside Manrope Bold | 28px (below this, the diagonals blur) |
| 3. Coral point | `wordmark-3-{light,dark}.svg` | Manrope Bold, with the dot of the "i" in "Indie" replaced by a coral point | 24px (below this, the coral reads as an ordinary dot) |

**Use:** light version on `--color-bg` or `--color-surface`; dark version on the dark theme background. Never recolour, stretch or add effects.

**Clear space:** at least the cap height of the "T" on every side.

**Header:** height 22px on desktop, 20px on mobile. Wrapped in a link to the Home page with `aria-label="The Indie Labs, home"`.

**Favicon:** option 2's square mark alone, drawn without diagonals at 16px and 32px.

---

## 2. Skip link

The first focusable element on every page. Jumps to `<main id="main">`.

| State | Visual |
|-------|--------|
| Default | Off-screen |
| Focus | Top-left, `--color-text` background, `--color-bg` text, `--space-2` × `--space-3` padding |

---

## 3. Site header and navigation

**Anatomy:** wordmark · navigation list (Home, Services, Products, About, Approach, Contact & Support) · "Get in touch" primary button (`mailto:` with subject *Consulting enquiry*).

Height `--header-height`. Bottom border `--border-width` solid `--color-rule`. The header is not sticky: pages are short and a static header keeps the reading area clear.

| State | Visual | Behaviour |
|-------|--------|-----------|
| Link default | `--color-text-muted`, weight medium | — |
| Link hover | `--color-text` | Colour change over `--duration-fast` |
| Current page | `--color-text`, 2px underline in `--color-accent`, offset 6px | `aria-current="page"` |
| Focus | 2px `--color-focus` outline, offset 3px | Keyboard focus only (`:focus-visible`) |

**Responsive behaviour**

| Width | Layout |
|-------|--------|
| > 860px | Wordmark left, navigation centred, button right, all on one row |
| ≤ 860px | Wordmark and a "Menu" button on one row. "Get in touch" moves into the menu panel as its last item |

**Mobile menu (≤ 860px)**

- The trigger is a `<button>` labelled "Menu", with `aria-expanded` and `aria-controls` pointing at the navigation list.
- When open, a full-width panel drops below the header. It uses `--color-surface-raised` and `--shadow-md`, with links stacked at `--text-lg` and 48px minimum tap height.
- Escape closes the panel and returns focus to the button. Choosing a link closes it.
- **Without JavaScript:** the list shows as a wrapping row under the wordmark, so every page stays reachable. (The scrolling row in the mockup hid "Contact & Support"; this replaces it.)

---

## 4. Buttons and links

Every call to action on the site is a `mailto:` link to contact@indielabs.ai with a pre-filled subject, so buttons are `<a>` elements, never `<button>`. They are never disabled.

| Variant | Use | Visual |
|---------|-----|--------|
| Primary | The one main action in a section ("Start a conversation", "Register interest") | `--color-accent` fill, `--color-text-on-accent` text, weight semibold, `--radius-sm` |
| Line | A secondary action beside a primary ("See our services") | Transparent, 1px inset `--color-accent` border, `--color-accent` text |
| Text link | Links to other pages ("Management consulting", "How we work") | `--color-accent`, weight semibold, 1px underline offset 5px |
| Inline link | Links inside body copy | `--color-accent`, underline always visible |

| State | Primary | Line | Text and inline link |
|-------|---------|------|----------------------|
| Default | As above | As above | As above |
| Hover | `--color-accent-hover` fill | `--color-accent-tint` fill | Underline thickens to 2px |
| Active (pressed) | `--color-accent-hover` fill, no movement | `--color-accent-tint` fill | — |
| Focus | 2px `--color-focus` outline, offset 3px | Same | Same |

**Sizes:** default padding `--space-3` × `--space-5`, text `--text-sm` at 15px. Compact (≤ 560px) padding 11px × 16px. Minimum tap target 44px tall.

**Rules**

- One primary button per section.
- Labels describe the action in sentence case. No arrows or icons appended.
- Primary and line buttons sit side by side with `--space-3` gap and wrap on narrow screens.

---

## 5. Section header

**Anatomy:** `<h2>` and, optionally, one intro paragraph.

- Heading: `--text-2xl`, weight bold, `--tracking-snug`, `--leading-snug`.
- Intro: `--text-lg`, `--color-text-muted`, max `--measure`.
- Spacing: `--space-12` below the header before the section content.
- Each section is separated from the one before by a 1px `--color-rule` top border and `--space-section` padding.

No eyebrow labels above headings. The page H1 uses the Hero instead.

---

## 6. Hero

Used on Home, and in a reduced form (heading and intro only, no figure) at the top of every other page.

**Anatomy (Home):** H1 tagline · lead paragraph · primary and line buttons · Figure 1 with caption and key.

- H1: `--text-3xl`, weight bold, `--tracking-tight`, `--leading-tight`, max `--measure-heading`.
- Lead: `--text-lg`, `--color-text-muted`, max 54ch.

| Width | Layout |
|-------|--------|
| > 960px | Two columns, text left and figure right, vertically centred |
| ≤ 960px | Text first, then the figure at a maximum of 480px wide |

---

## 7. Figure

The signature component. An inline SVG drawn with three stroke roles, an optional caption and an optional key.

| Role | Class | Token | Use |
|------|-------|-------|-----|
| Construction | `.k` / `.kd` (dashed) | `--color-construct`, `--stroke-construct` | Arcs, grids, guides |
| Main | `.m` | `--color-accent`, `--stroke-figure` | The shape that carries the idea |
| Highlight | `.hi` / `.hil` | `--color-highlight` | The one point to look at |
| Labels | `.lbl` | `--font-serif` italic, `--color-text` | Point names (A, B, O, μ). Letters and symbols only, never numbers |

**Caption:** "Fig. n" in `--font-serif` italic, `--color-text-muted`. Figures are numbered in order down each page. A caption may add a short phrase taken from the page copy.

**Key:** an optional line under the caption that maps labels to words (for example "A Management").

**The figure set**

| Figure | Idea | Where |
|--------|------|-------|
| Constructed square, centre point | Four practices, one team | Home hero |
| Grid with an orthogonal path | Management: structure and a clear line of decision | Practice items |
| Graph of nodes and edges | Technology: architecture | Practice items |
| Scatter with a vector | Product: direction from evidence | Practice items |
| Bell curve with a shaded band | AI: uncertainty understood upfront | Practice items |
| Box, scatter, fitted line, extended line | The engagement lifecycle, one stage per step | Lifecycle steps |
| Threshold line with points below highlighted | Treasurywise | Product card |
| Two overlapping circles | Ourdays | Product card |
| Nested subdivided rectangle | Carefolio | Product card |

**States**

| State | Visual | Trigger |
|-------|--------|---------|
| Static | Complete figure | Default. No JavaScript, reduced motion, or printing |
| Pre-draw | Strokes hidden (dash offset 1), points and labels at 0 opacity | JavaScript adds `.pre` before observing |
| Drawing | Construction strokes draw over `--duration-draw`; main lines follow after `--delay-draw-main`; points and labels fade in after `--delay-draw-labels` | Figure is 20% in view (`IntersectionObserver`) |
| Drawn | Complete figure | Animation ends; the figure never redraws |

**Accessibility**

- A figure that carries meaning (the hero) has `role="img"` and an `aria-label` describing the idea in words.
- A figure that repeats the meaning of the text beside it (practice items) is `aria-hidden="true"`.
- Colour never carries meaning alone. The coral point is also the labelled or largest point.

**Responsive:** figures scale to their container width (`width: 100%; height: auto`). Stroke widths stay constant via `vector-effect` where an SVG is shown much smaller than its viewBox.

---

## 8. Practice item

Used on Home ("What we do") and, expanded, on Services.

**Anatomy (Home):** figure with "Fig. n" caption · 1px `--color-rule` divider · h3 practice name · promise · "Example engagements" label · three-item list · text link to the Services anchor.

**Anatomy (Services, the practice block):** adds "Where we help" (three bullets) and engagement descriptions; the CTA is a primary button ("Discuss a management engagement").

- No container, background or shadow; the figure and the rule hold the item together.
- h3: `--text-xl`, weight bold. Promise: `--color-text-muted`, max `--measure-narrow`.
- Not clickable as a whole; only its link is.

| Width | Layout |
|-------|--------|
| > 700px | Two-by-two grid, `--space-grid` gaps |
| ≤ 700px | One column, in the order Management, Technology, Product, AI |

On Services at > 960px, the block's figure sits in a left column and the text in a right column; below that, it stacks.

---

## 9. Cards

Cards are used only where content is a set of parallel items. All card variants are non-interactive containers; only links inside them are focusable. No hover effect on the card itself, so nothing looks clickable that isn't.

| Variant | Content | Container |
|---------|---------|-----------|
| Product card | Figure · name · status badge · type ("SaaS", "Consumer app") · pitch · "Who it's for" · "What we're building" list · safety line (e.g. "It doesn't recommend investments.") · "Register interest" primary button | `--color-surface`, `--radius-md`, `--space-8` padding |
| Product card (compact, Home) | Name · status badge · one-line pitch | Same container, `--space-6` padding |
| Principle card | Short bold title · one or two sentences (Why work with us, What we believe, Approach principles) | No container; 1px `--color-rule` top border and `--space-4` padding above |
| Engagement model card | Title · one or two sentences (Fixed-scope project, Ongoing advisory, Embedded support) | Same as principle card |

| Width | Product cards | Principle and engagement cards |
|-------|---------------|--------------------------------|
| > 960px | Three across (Home) or stacked full-width with figure left (Products page) | Two or three across, matching the number of items |
| 700–960px | Two across | Two across |
| ≤ 700px | One column | One column |

---

## 10. Product status badge

Shows a product's real status. Every product card must have one.

| Variant | Label | Background | Text |
|---------|-------|------------|------|
| In development | "In development" | `--color-status-dev-bg` | `--color-status-dev-text` |
| Early access | "Early access" | `--color-status-early-bg` | `--color-status-early-text` |

- `--text-sm`, weight semibold, sentence case, `--radius-full`, padding `--space-1` × `--space-3`.
- Static text, not a link or button. The label itself states the status, so colour is never the only signal.
- Only these two labels exist. No "Live", "New" or "Coming soon" until a product actually launches and this document is updated.
- Sits on the same line as the product name; wraps beneath it if space runs out.

---

## 11. Lifecycle steps

An ordered list, because the content is a real sequence.

| Variant | Where | Content |
|---------|-------|---------|
| Short | Home, "How an engagement runs" | Four steps: Scope, Discovery, Delivery, Handover. Each a bold step name and one sentence |
| Full | Approach, "From first email to handover" | Five steps, each with a description and a "You receive" line in `--font-serif` italic |

- Each step shows its stage of the lifecycle figure (box, scatter, fitted line, extended line) above the text, at 120px wide.
- Step numbers use the list's own numbering, in `--color-accent`, weight bold.

| Width | Layout |
|-------|--------|
| > 960px | Short variant: four columns. Full variant: five columns with a 1px construction line joining the figures |
| 560–960px | Two columns |
| ≤ 560px | One column; the joining line becomes vertical down the left edge |

---

## 12. FAQ

Uses native `<details>` and `<summary>`, so it works without JavaScript and is keyboard accessible by default.

| State | Visual | Behaviour |
|-------|--------|-----------|
| Closed | Question in weight semibold, a plus sign drawn as two 1px lines on the right, 1px `--color-rule` below | — |
| Hover | Question in `--color-accent` | — |
| Focus | 2px `--color-focus` outline on the summary | Enter or Space toggles |
| Open | Plus rotates 45° to a cross over `--duration-base`; answer shows below in `--color-text-muted`, max `--measure` | Several can be open at once |

Responsive: full width of the content column at every size.

---

## 13. CTA band

Closes most pages.

**Anatomy:** heading (`--text-2xl`) · one sentence of body · one primary button.

- `--color-surface` background, full bleed, `--space-section` padding top and bottom.
- Content left-aligned within the wrap, max `--measure`.
- A faint construction arc in `--color-construct` may sit at the right edge on screens wider than 960px. It is decorative and `aria-hidden`.

---

## 14. Notice callout

Used once, on Contact & Support: "Please don't email health reports, prescriptions or other medical records."

- `--color-notice-bg`, 3px left border in `--color-notice-border`, `--radius-md` on the right corners only, `--space-4` × `--space-5` padding.
- Text `--color-notice-text`, the first sentence in weight bold.
- Not dismissible.

---

## 15. Lists

| Variant | Use | Visual |
|---------|-----|--------|
| Bulleted | "Where we help", "What we're building", the Contact checklists | Markers in `--color-construct`; `--space-1` between items |
| Ruled | Footer navigation and short link lists | No markers; `--space-2` between items |

---

## 16. Address block

The registered address must appear exactly as below, on four lines, on Contact & Support and in the footer.

```html
<address>The Indie Labs<br>3rd Floor, JMD Regent Arcade<br>MG Road, Near Sikanderpur Metro Station<br>Gurugram, Haryana 122001, India</address>
```

- `font-style: normal`, `--leading-address`.
- `white-space: nowrap` so no line wraps and splits the address differently. The rule is removed below 360px wide, the only width where the longest line no longer fits.

---

## 17. Footer

**Anatomy:** tagline · footer navigation · "Email" with contact@indielabs.ai · "Registered address" with the address block · base row with © 2026 The Indie Labs. All rights reserved., Privacy Policy and Terms of Use.

- Top border 1px `--color-rule`. Column headings in `--font-serif` italic, `--color-text-muted`.
- Tagline: `--text-xl`, weight bold, `--tracking-snug`.
- Base row: `--text-sm`, `--color-text-muted`, separated by a 1px `--color-rule` line.

| Width | Layout |
|-------|--------|
| > 960px | Four columns: tagline, navigation, email, address (address column sized to its content) |
| 560–960px | Two columns |
| ≤ 560px | One column; the base row stacks copyright above the legal links |

---

## 18. Legal prose

Used for the Privacy Policy and Terms of Use.

- Single column, max `--measure`, body at `--text-base`.
- Effective date directly under the H1 in `--color-text-muted`.
- Clause headings as numbered h2 at `--text-xl` (the numbering is part of the legal text).
- Ends with the page's CTA as a text link, not a band, to keep the page plain.

---

## Implementation notes

- **Fonts:** both families are self-hosted (see `@font-face` in `tokens.css`). The paths assume the site is served from the domain root, as it will be with indielabs.ai on GitHub Pages. Use relative paths if you test on a `github.io/<repo>/` address.
- **Themes:** light is the default and dark follows the system setting. The current scope has no visible theme switch; `data-theme` exists for testing and for adding one later.
- **Figures in dark theme:** they need no changes, because every stroke and fill reads its colour from the tokens.
- **Performance budget:** no external requests, no images except inline SVG, and under 15 KB of JavaScript per page.
