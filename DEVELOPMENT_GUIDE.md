# Website Development Guide

This guide explains how your new homepage is organized and where to make design/content changes.

## 1) Project Structure

- [index.html](index.html)
  - Main homepage content and layout structure.
  - Contains project cards, section text, navigation links, and external links.
  - Loads your font, favicon, CSS, and JS.

- [assets/css/site.css](assets/css/site.css)
  - Main design system for the new homepage.
  - Best place to change theme colors, spacing, border radius, backgrounds, and visual style.

- [assets/js/site.js](assets/js/site.js)
  - Lightweight behavior only (scroll reveal animation).
  - Usually not needed for theme or color changes.

- [assets/imgs](assets/imgs)
  - Image and media assets used by your pages.
  - Place wallpapers/icons/images here and update paths in HTML/CSS.

## 2) Fast Theme Editing

Open [assets/css/site.css](assets/css/site.css#L1) and edit the variables in `:root`.

Useful variables:
- `--bg` for base background tone
- `--surface` for cards/panels
- `--ink` for primary text
- `--muted` for secondary text
- `--line` for borders/grid lines
- `--accent`, `--accent-2`, `--accent-3` for highlight colors
- `--radius` for rounded corners

If you want less rounded UI, reduce `--radius` (example: 22px -> 10px).

## 3) Change Backgrounds and Wallpapers

### Gradient background
- Edit the `body` background in [assets/css/site.css](assets/css/site.css).

### Decorative floating color shapes
- Edit these classes in [assets/css/site.css](assets/css/site.css):
  - `.bg-orb`
  - `.bg-orb-1`
  - `.bg-orb-2`

### Dot/pattern overlay
- Edit `.bg-grid` in [assets/css/site.css](assets/css/site.css).

### Add a wallpaper image
1. Put image in [assets/imgs](assets/imgs).
2. Add CSS like this in [assets/css/site.css](assets/css/site.css):

```css
body {
  background-image: url("../imgs/your-wallpaper.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

## 4) Change Icons

### Browser tab icon (favicon)
- Update the `link rel="icon"` path in [index.html](index.html).

### Footer/social links
- Edit link text/URLs in [index.html](index.html).

### If you want nicer icon styling
- Use SVG icons in HTML for cleaner modern style and easy color control with CSS.

## 5) Make Rounded Buttons More Square

Main classes to adjust in [assets/css/site.css](assets/css/site.css):
- `.cta` (main call-to-action button)
- `.topbar` (header container)
- `.project-card` (project tiles)
- `.about`, `.footer` (panels)

You can either:
1. Lower `--radius` globally, or
2. Set custom `border-radius` per class.

## 6) Content Editing Workflow

1. Edit section text and links in [index.html](index.html).
2. Add/replace media files in [assets/imgs](assets/imgs).
3. Tune colors/layout in [assets/css/site.css](assets/css/site.css).
4. Keep behavior tweaks in [assets/js/site.js](assets/js/site.js).

## 7) Current Migration Status

Homepage is on the new clean system:
- [index.html](index.html)
- [assets/css/site.css](assets/css/site.css)
- [assets/js/site.js](assets/js/site.js)

These project pages still use legacy template styling for now:
- [aerodesign.html](aerodesign.html)
- [coilgun.html](coilgun.html)
- [enph353.html](enph353.html)
- [gesture-controlled-laser-turret.html](gesture-controlled-laser-turret.html)
- [robotsummer.html](robotsummer.html)

Once those are migrated, remaining legacy vendor files can be removed safely.

## 8) Recommended Next Step

Migrate one project page at a time into the same structure/style as [index.html](index.html) so your whole site has one consistent theme system.
