# The Indie Labs website

## Stack
- Plain HTML, CSS and vanilla JS. No frameworks, no build step, no backend.
- The site lives in /docs. Never put site files outside /docs.
- /reference holds the source of truth: content.md (copy), tokens.css and design-system.md (design), the wordmark SVG and the approved mockup.

## Rules
- Use copy from reference/content.md exactly. Never invent clients, testimonials, metrics, certifications or awards.
- Use only the tokens from tokens.css for colours, type and spacing.
- Header and footer markup must be identical on every page. When you change one, update all pages.
- Contact is a mailto link to contact@indielabs.ai, written with HTML entities to deter scrapers. No forms.
- The registered address appears exactly as in content.md, on Contact & Support and in the footer.
- Accessibility: semantic HTML, alt text on all images, visible focus states, WCAG AA colour contrast.
- Performance: no external scripts other than Google Fonts. Use SVG wherever possible.
- Show me a plan before making multi-file changes.
