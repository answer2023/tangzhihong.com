# FreeJournal Design System

## Brand

FreeJournal builds simple, fast, privacy-first macOS native tools.
Tone: minimal, confident, warm. No hype, no clutter.

## Typography

| Role     | Font              | Weight | Size   | Letter-spacing |
|----------|-------------------|--------|--------|----------------|
| Display  | Instrument Serif  | 400    | 48px   | -0.03em        |
| H1       | Instrument Serif  | 400    | 36px   | -0.02em        |
| H2       | Inter             | 600    | 18px   | -0.01em        |
| H3       | Inter             | 600    | 15px   | 0              |
| Body     | Inter             | 400    | 15px   | 0              |
| Small    | Inter             | 400    | 13px   | 0              |
| Caption  | Inter             | 500    | 12px   | 0.06em         |
| Mono     | SF Mono, monospace| 400    | 13px   | 0              |

- Line height: body 1.7, headings 1.3
- Headings use Instrument Serif (italic for display) to add editorial warmth
- Body uses Inter for clarity and professionalism

## Color Palette

### Light Mode
| Token        | Hex       | Usage                        |
|--------------|-----------|------------------------------|
| --bg         | #ffffff   | Page background              |
| --bg-page    | #fafaf9   | Warm off-white page bg       |
| --bg-subtle  | #f5f3f0   | Card/section bg              |
| --text       | #1a1a1a   | Primary text                 |
| --text-sec   | #6b6560   | Secondary text               |
| --text-tri   | #a39e98   | Tertiary/caption text        |
| --accent     | #c0392b   | Brand red, CTAs              |
| --accent-hover| #a93226  | Hover state                  |
| --accent-light| #fdf2f0  | Light red tint bg            |
| --border     | #e8e4df   | Warm gray borders            |
| --card       | #ffffff   | Card background              |

### Dark Mode
| Token        | Hex       |
|--------------|-----------|
| --bg         | #111110   |
| --bg-page    | #0c0c0b   |
| --bg-subtle  | #1a1918   |
| --text       | #e8e5e1   |
| --text-sec   | #a39e98   |
| --text-tri   | #6b6560   |
| --accent     | #e74c3c   |
| --accent-hover| #d44332  |
| --accent-light| #2d1a18  |
| --border     | #2a2826   |
| --card       | #1a1918   |

## Spacing

- Section padding: 64px vertical
- Card padding: 32px
- Component gap: 16px
- Max content width: 720px (reading), 1080px (layout)

## Components

### Buttons
- Primary: accent bg, white text, 8px radius, 12px 32px padding
- Outline: transparent bg, accent border, accent text
- Disabled/Coming Soon: 50% opacity, no pointer events

### Cards
- 1px warm border, 12px radius
- Subtle shadow on hover
- No heavy box shadows at rest

### Navigation
- Sticky top, bg blur backdrop
- Logo left (brand red), links right
- Active link: accent color

### Tags
- Small pills: bg-subtle, 6px radius, 12px font

## Do
- Use warm grays (not cold blue-grays)
- Keep whitespace generous
- Let typography create hierarchy (not color)
- Maintain serif/sans-serif contrast between headings and body

## Don't
- Don't use more than 2 font families
- Don't use heavy drop shadows
- Don't add decorative gradients or illustrations
- Don't use pure black (#000) for text
