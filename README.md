# SCD.26 Portfolio Prototype

A lightweight static prototype for Stephen Calvillo's design portfolio direction inspired by Figma explorations.

## What This Includes

- Left navigation panel with `Work` and `Career` section switching
- Expandable experience rows with hover affordance
- Main content area that updates based on selected experience
- Day/Night theme toggle in the top-right of main content
- Spotify player section scaffold in the left panel
- Placeholder "Ask Me Anything" area for future LLM-driven interface

## Project Structure

```text
SCD.26/
  assets/                   # Case study image folders
  index.html                # App layout and semantic structure
  styles.css                # Theme tokens and UI styles
  script.js                 # Interactions and content mapping
  README.md                 # Setup and usage
  docs/
    ux-interactions.md      # UX behavior and interaction documentation
```

## Run Locally

Because this is a static site, you can use any simple local web server.

### Option 1: Python (quickest)

```bash
cd /Users/stephencalvillo/CursorProjects/SCD.26
python3 -m http.server 4173
```

Open:

`http://localhost:4173`

### Option 2: Node `serve`

```bash
cd /Users/stephencalvillo/CursorProjects/SCD.26
npx serve .
```

## Updating Content

### Experience rows

Edit `script.js` and update the `data` object:

- Add/remove entries in `work` and `career`
- For each entry, update `title`, `period`, `detail`
- Use `cases` to map asset folder references shown in the main content

### Case study assets

Drop files into `assets/` subfolders and align folder references in `script.js`.

### Spotify playlist

Replace the `iframe` `src` in `index.html` with your playlist embed URL.

## Future Extensions

- Add animated expand/collapse transitions for experience rows
- Render real image thumbnails/cards from the `assets/` directories
- Build the LLM-backed "Ask Me Anything" interface using `.md` knowledge files
- Persist theme preference in local storage

## Notes for Humans + LLM Agents

- Start from `docs/ux-interactions.md` for intended behavior.
- Keep UI behavior logic centralized in `script.js`.
- Keep visual system tokens in `styles.css` under `:root` and `body[data-theme="day"]`.
