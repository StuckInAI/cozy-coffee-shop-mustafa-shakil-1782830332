---
status: pending
title: Cozy Indie Coffee Shop Landing Page
---

## Overview
Build a single-page landing site for an indie coffee shop featuring a dark mode design with warm, inviting aesthetics. The page will include a hero section, menu highlights, and a location block — all styled with premium warmth rather than corporate polish.

## Implementation Steps

1. **Set up page structure**
   - Create `/app/src/pages/Home.tsx` as the main landing page
   - Set up `/app/src/components/Hero.tsx`, `/app/src/components/MenuHighlights.tsx`, and `/app/src/components/Location.tsx` as section components
   - Import and compose all sections into the Home page
   - **Expected outcome:** Page structure scaffolded and sections render without styling

2. **Create the Hero section component**
   - Build an eye-catching hero with a large heading, subheading, and a call-to-action button
   - Include background imagery or a warm gradient (cream, amber, chocolate tones)
   - Add welcoming copy that emphasizes the indie, cozy nature
   - **Expected outcome:** Hero section displays with engaging typography and warm color palette

3. **Build the Menu Highlights section**
   - Create a component displaying 3–4 signature drinks/items (coffee, pastries, etc.)
   - Show each item with a name, description, and optional price
   - Use a grid or card layout that feels artisanal, not corporate
   - **Expected outcome:** Menu items display in a warm, aesthetic grid layout

4. **Implement the Location block**
   - Display the shop's address, hours, and contact info
   - Optionally embed a map or add directions link
   - Style with the same warm, premium aesthetic
   - **Expected outcome:** Location information is visible and styled consistently

5. **Apply dark mode styling**
   - Use dark brown, charcoal, or deep navy as the base
   - Layer in warm accent colors: cream, warm amber, burnt orange, terracotta
   - Ensure text contrast meets accessibility standards
   - Apply to all components and set as the site's default theme
   - **Expected outcome:** Entire page has a cohesive dark + warm color scheme

6. **Polish typography and spacing**
   - Choose elegant, readable fonts that feel indie and premium (serif or refined sans)
   - Use generous whitespace to avoid a cramped feeling
   - Ensure readability in dark mode
   - **Expected outcome:** Page feels spacious, warm, and premium without corporate rigidity

7. **Test responsiveness**
   - Verify the hero, menu, and location sections look good on mobile, tablet, and desktop
   - Adjust spacing and font sizes for smaller screens
   - **Expected outcome:** Landing page is fully responsive across all device sizes

## Notes
- All styling uses Tailwind CSS v4 utilities (no custom CSS modules)
- Dark mode is implemented via Tailwind's dark mode classes
- Focus on creating an inviting, intimate atmosphere rather than sleek corporate design
- Consider subtle animations or hover effects if they enhance the cozy feeling
