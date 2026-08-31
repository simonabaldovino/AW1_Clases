---
name: Canine Clarity
colors:
  surface: '#f4fafd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9ec'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1f'
  on-surface-variant: '#414751'
  inverse-surface: '#2b3234'
  inverse-on-surface: '#ebf2f4'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffd167'
  on-secondary-container: '#765900'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffdf9b'
  secondary-fixed-dim: '#edc157'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f4fafd'
  on-background: '#161d1f'
  surface-variant: '#dde4e6'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The design system is built on a foundation of **Minimalist Playfulness**. It balances the professional rigor required for pet hygiene with the warmth of a community-focused service. The emotional response should be one of "Safe Joy"—where pet owners feel an immediate sense of professional competence softened by an approachable, friendly personality.

The aesthetic utilizes generous whitespace to signify cleanliness, paired with soft, organic shapes that mirror the friendly nature of dogs. Interaction patterns are smooth and forgiving, avoiding sharp edges or aggressive transitions. The visual direction prioritizes high-quality photography of happy, well-groomed pets, treated as the primary "hero" content against a clean, structured backdrop.

## Colors

This color palette is designed to evoke trust and vitality.
- **Primary (Soft Blue):** Used for primary actions, branding, and trust-building elements. It provides a professional, "clean water" feel.
- **Secondary (Warm Yellow):** Used sparingly for highlights, "Joy" moments, and notifications. It adds energy without being overwhelming.
- **Surface (Clean White/Off-white):** The primary background color to maintain a hygienic, airy atmosphere.
- **Neutral (Slate Grey):** Used for text and secondary icons to ensure high legibility while appearing softer and friendlier than pure black.

## Typography

The typography strategy uses a "Soft-meets-Structured" approach. **Quicksand** is reserved for headings to provide a distinctive, rounded character that feels inherently friendly and "pet-like." **Plus Jakarta Sans** is used for body copy and labels to maintain a professional, modern edge with exceptional legibility.

- **Headlines:** Always use Quicksand with a medium to bold weight.
- **Body Copy:** Use Plus Jakarta Sans in regular weight for long-form text.
- **Labels:** Use Plus Jakarta Sans in semi-bold or bold, often in all caps for micro-copy, to provide clear functional hierarchy.

## Layout & Spacing

The design system employs a **Fluid-Fixed Hybrid** grid. On desktop, content is contained within a 1200px max-width container with a 12-column structure. On mobile, the layout shifts to a single column with generous side margins to prevent a cluttered feel.

Spacing is governed by an 8px base unit. Large "breathable" gaps are prioritized between sections (80px+) to maintain the minimalist aesthetic. Elements within cards or components should use tighter spacing (16px-24px) to indicate relationship and grouping.

## Elevation & Depth

To maintain a clean and modern look, the design system avoids heavy shadows. Instead, it uses **Tonal Layering** and **Ambient Softness**:

- **Low Elevation:** Used for cards and secondary buttons. A very soft, wide-dispersion shadow (Blur: 20px, Opacity: 4%) tinted with the primary blue color rather than black.
- **High Elevation:** Used for modals and floating action buttons. A slightly more pronounced shadow with a subtle vertical offset to simulate "lifting" off the clean white surface.
- **Flat Containers:** Used for input fields and informational blocks, defined by a 1px border in a very light neutral-blue tint (#E2E8F0) rather than a shadow.

## Shapes

The shape language is consistently **Rounded**. This mirrors the soft features of pets and promotes a safe, welcoming brand image. 

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Cards & Large Containers:** 1rem (16px) corner radius.
- **Promotional Banners:** 1.5rem (24px) corner radius to differentiate from functional UI.
- **Icons:** Should always feature rounded terminals and corners; avoid sharp 90-degree angles.

## Components

### Buttons
- **Primary:** Solid Primary Blue with white text. High-contrast, rounded corners.
- **Secondary:** Transparent background with a Primary Blue border.
- **Tertiary:** Solid Warm Yellow with Neutral text—used exclusively for "Call to Action" highlights like "Book Now."

### Cards
Cards should have a white background with a 1px light-blue border or the "Low Elevation" ambient shadow. Padding should be generous (min 24px) to ensure content doesn't feel cramped.

### Input Fields
Inputs use a light grey background (#F8F9FA) with an 8px corner radius. On focus, the border transitions to Primary Blue with a soft blue glow.

### Chips/Tags
Used for "Service Types" (e.g., "Full Groom," "Nail Trim"). These should be pill-shaped (fully rounded) with a light version of the Primary Blue background and darker blue text.

### Feedback Elements
- **Success:** Soft Green.
- **Care/Alert:** Warm Yellow (Secondary color).
- **Error:** Soft Coral (Avoid harsh reds).

### Additional Components
- **Service Progress Bar:** A rounded, playful bar showing the grooming stage (e.g., "Bathing," "Brushing," "Ready!").
- **Pet Profiles:** Circular avatars for pet photos with a Secondary Yellow border ring.