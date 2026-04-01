# Codex Prompt: Generate 500+ Project Pages

You are building a real estate landing system.

Input: Excel dataset with ~547 projects (Master_Properties sheet)

Goal:
Generate ONE page per project.

Each page must include:

1. HERO
- Project name
- Developer
- Location
- Starting price

2. INVESTOR SNAP
- Yield %
- Capital appreciation %
- Total return %

3. AREA SNAPSHOT
- Schools
- Hospitals
- Malls
- Travel times

4. GALLERY
- Interiors
- Exteriors

5. CTA
- WhatsApp link (Nareen)

---

TECH REQUIREMENTS:

- Use dynamic routing: /project/[slug]
- Slug = project name lowercased + hyphenated

Example:
Mirage at The Oasis → /project/mirage-at-the-oasis

---

DATA MAPPING:

Name → title
Developer → developer
Location → location
Start Price (AED) → price
Annual Yield % → ROI
Cap Appr % → growth
Total Return % → total_return

---

OUTPUT:

- Generate React pages OR JSON-driven rendering
- Do NOT hardcode
- Must scale to 500+ pages

---

BONUS:

- Add filtering by area / developer
- Add sorting by ROI

