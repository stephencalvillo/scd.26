# UX and Interaction Documentation

This document describes current interaction behavior for the SCD.26 portfolio prototype and defines expected UX rules for future implementation work.

## Product Intent

The interface balances two goals:

1. **Quick scanning** of work/career history in a compact left panel
2. **Contextual depth** in the main area based on selected experience

The page is intentionally content-first and minimal, with motion deferred for a later phase.

## Information Architecture

### Left Panel (Navigation + Audio)

- **Top half**: Navigation and expandable experience list
  - Section switcher: `Work` / `Career`
  - Experience rows: clickable, expandable, and stateful
- **Bottom half**: Spotify player area
  - Embedded playlist player
  - Placeholder guidance until final playlist is provided

### Main Content

- **Header**:
  - Selected experience title
  - Day/Night mode toggle (top-right)
- **Case Studies section**:
  - Descriptive text that updates by selected row
  - Placeholder cards currently sourced from folder references
- **Ask Me Anything section**:
  - Reserved area for future conversational interface

## Interaction Rules

## 1) Work/Career Section Toggle

- Clicking `Work` or `Career` replaces the experience list dataset.
- Active tab receives a selected visual treatment.
- On tab change, the first item in that dataset becomes selected by default.
- Main content updates immediately to reflect the selected experience.

## 2) Experience Row Hover + Expand

- Every row is hoverable to indicate clickability.
- Hover state uses subtle contrast tint:
  - Night mode: white with low opacity
  - Day mode: black with low opacity
- Clicking a row expands it to reveal role description text.
- Only one row remains open at a time (single-expand behavior).
- Open row is visually differentiated with a border.

## 3) Main Content Swapping

When a row is selected:

- Header title updates to that role/experience
- Case-study description text updates contextually
- Case-study cards update based on mapped folder references from the role's `cases` array

## 4) Day/Night Mode

- Toggle switches between `day` and `night` themes.
- Day mode design intent:
  - Mostly white background
  - Black/dark text
  - Subtle borders and neutral cards
- Night mode mirrors current darker portfolio baseline.
- Theme currently applies for the active session only (no persistence yet).

## 5) Audio Player (Spotify)

- Left-bottom section contains playlist embed shell.
- Current embed is a placeholder and can be replaced with final playlist URL.
- UX intent: ambient, optional audio companion for portfolio browsing.

## 6) Ask Me Anything (Future Scope)

Planned behavior (not implemented yet):

- User asks questions about work, decisions, and perspective
- LLM responds in Stephen's tone using markdown knowledge files
- Responses can include supporting visuals from case-study assets

Recommended future architecture:

- Knowledge source:
  - Primary: curated `.md` files for voice/tone, role summaries, and project context
  - Secondary: case-study metadata and image references
- Retrieval:
  - Lightweight local retrieval or hosted vector store
- UI:
  - Chat input, response cards, optional referenced media strip

## Accessibility Notes

- Experience rows are button-based for keyboard and screen-reader compatibility.
- Section controls use tab semantics.
- Contrast should be validated in both themes once final typography and spacing are locked.

## Implementation Notes for Contributors

- Core behavior source: `script.js`
- Theme tokens and visual system: `styles.css`
- Layout semantics and structural content: `index.html`

When extending:

- Keep interaction logic simple and centralized in `script.js`
- Avoid hard-coding visual values in JavaScript
- Prefer adding design tokens in CSS variables before introducing new UI states
