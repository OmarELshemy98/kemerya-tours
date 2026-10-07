import re

# Read en.ts
with open('lib/brand-content/en.ts', 'r', encoding='utf-8-sig') as f:
    en = f.read()

# Read all locale files
locales = ['fr', 'es', 'it', 'de', 'pt', 'nl', 'ar', 'zh']
locale_data = {}
for loc in locales:
    with open(f'lib/brand-content/{loc}.ts', 'r', encoding='utf-8-sig') as f:
        locale_data[loc] = f.read()

# Extract trust eyebrows
print("=== TRUST EYEBROWS ===")
en_match = re.search(r'trust: \{\s+eyebrow: "([^"]+)"', en)
en_eyebrow = en_match.group(1) if en_match else "N/A"
print(f'EN: {en_eyebrow}')
for loc, content in locale_data.items():
    loc_match = re.search(r'trust: \{\s+eyebrow: "([^"]+)"', content)
    loc_eyebrow = loc_match.group(1) if loc_match else "N/A"
    print(f'{loc}: {loc_eyebrow}')
print()

# Extract advantages intro
print("=== ADVANTAGES INTRO ===")
en_match = re.search(r'advanta.*intro:\s*"([^"]+)"', en, re.DOTALL)
en_adv = en_match.group(1)[:200] if en_match else "N/A"
print(f'EN: {en_adv}')
for loc, content in locale_data.items():
    loc_match = re.search(r'advanta.*intro:\s*"([^"]+)"', content, re.DOTALL)
    loc_adv = loc_match.group(1)[:200] if loc_match else "N/A"
    print(f'{loc}: {loc_adv}')
print()

# Extract partnership intro
print("=== PARTNERSHIP INTRO ===")
en_match = re.search(r'partnership: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', en)
en_part = en_match.group(2)[:250] if en_match else "N/A"
print(f'EN: {en_part}')
for loc, content in locale_data.items():
    loc_match = re.search(r'partnership: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', content)
    loc_part = loc_match.group(2)[:250] if loc_match else "N/A"
    print(f'{loc}: {loc_part}')
print()

# Check for "client" vs "travelers" in en.ts
print("=== EN.TS: instances of 'traveler' ===")
for i, line in enumerate(en.split('\n'), 1):
    if 'traveler' in line.lower() or 'traveller' in line.lower():
        print(f'  Line {i}: {line.strip()[:120]}')
print()

# Check partnership steps last line for "travelers" vs "client"
print("=== PARTNERSHIP STEPS (last step) ===")
en_steps = re.findall(r'partnershipSteps: \[\s*([\s\S]*?)\s*\],', en)
if en_steps:
    en_last = re.findall(r'\[\"([^\"]+)\"', en_steps[0][-200:])
    print(f'EN last steps: {en_last}')
for loc, content in locale_data.items():
    loc_steps = re.findall(r'partnershipSteps: \[\s*([\s\S]*?)\s*\],', content)
    if loc_steps:
        loc_last = re.findall(r'\[\"([^\"]+)\"', loc_steps[0][-200:])
        print(f'{loc} last steps: {loc_last}')
print()

# Check categories intro for "broader" vs "wider"
print("=== CATEGORIES INTRO ===")
en_match = re.search(r'categories: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', en)
en_cat = en_match.group(2)[:250] if en_match else "N/A"
print(f'EN: {en_cat}')
for loc, content in locale_data.items():
    loc_match = re.search(r'categories: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', content)
    loc_cat = loc_match.group(2)[:250] if loc_match else "N/A"
    print(f'{loc}: {loc_cat}')
print()

# Check conversion section intro
print("=== CONVERSION INTRO ===")
en_match = re.search(r'conversion: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', en)
en_conv = en_match.group(2)[:250] if en_match else "N/A"
print(f'EN: {en_conv}')
for loc, content in locale_data.items():
    loc_match = re.search(r'conversion: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', content)
    loc_conv = loc_match.group(2)[:250] if loc_match else "N/A"
    print(f'{loc}: {loc_conv}')
print()

# Check footer blurb
print("=== FOOTER ===")
en_blurb = re.search(r'footer: \{\s+blurb: "([^"]+)"[\s\S]*?headline: "([^"]+)"', en)
if en_blurb:
    print(f'EN blurb: {en_blurb.group(1)}')
    print(f'EN headline: {en_blurb.group(2)}')
for loc, content in locale_data.items():
    loc_blurb = re.search(r'footer: \{\s+blurb: "([^"]+)"[\s\S]*?headline: "([^"]+)"', content)
    if loc_blurb:
        print(f'{loc} blurb: {loc_blurb.group(1)}')
        print(f'{loc} headline: {loc_blurb.group(2)}')
print()

# Check contact section
print("=== CONTACT ===")
en_match = re.search(r'contact: \{\s+eyebrow: "([^"]+)"[\s\S]*?title: "([^"]+)"[\s\S]*?subtitle:\s*"([^"]+)"', en)
if en_match:
    print(f'EN eyebrow: {en_match.group(1)}')
    print(f'EN title: {en_match.group(2)}')
    print(f'EN subtitle: {en_match.group(3)[:150]}')
for loc, content in locale_data.items():
    loc_match = re.search(r'contact: \{\s+eyebrow: "([^"]+)"[\s\S]*?title: "([^"]+)"[\s\S]*?subtitle:\s*"([^"]+)"', content)
    if loc_match:
        print(f'{loc} eyebrow: {loc_match.group(1)}')
        print(f'{loc} title: {loc_match.group(2)}')
        print(f'{loc} subtitle: {loc_match.group(3)[:150]}')
print()

# Check footer blurb for traveler language
print("=== FOOTER BLURB (traveler vs client) ===")
en_blurb_full = re.search(r'footer: \{\s+blurb: "([^"]+)"', en)
print(f'EN blurb full: {en_blurb_full.group(1) if en_blurb_full else "N/A"}')
for loc, content in locale_data.items():
    loc_blurb = re.search(r'footer: \{\s+blurb: "([^"]+)"', content)
    print(f'{loc} blurb: {loc_blurb.group(1) if loc_blurb else "N/A"}')
print()

# Check clientTypes intro (traveler reference)
print("=== CLIENTTYPES INTRO ===")
en_match = re.search(r'clientTypes: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', en)
en_ct = en_match.group(2)[:200] if en_match else "N/A"
print(f'EN: {en_ct}')
for loc, content in locale_data.items():
    loc_match = re.search(r'clientTypes: \{\s+eyebrow: "([^"]+)"[\s\S]*?intro:\s*"([^"]+)"', content)
    loc_ct = loc_match.group(2)[:200] if loc_match else "N/A"
    print(f'{loc}: {loc_ct}')
