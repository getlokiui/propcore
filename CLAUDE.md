# Propcore Registry - Claude Code Instructions

## Project Structure

```
propcore/
├── src/
│   ├── components/ui/       # All UI components (no blocks folder)
│   ├── examples/ui/         # Example files for docs
│   ├── data/
│   │   ├── components.ts    # Component registry with example imports
│   │   └── sidebar-links.ts # Navigation structure
│   ├── markdown/components/ # MDX documentation files
│   └── app/                 # Next.js app router pages
├── public/r/                # Registry JSON files for shadcn CLI
└── AUDIT_REPORT.md          # Security/design audit status
```

## Adding Component Examples (3 PLACES REQUIRED)

To add a new example for a component, you must update **3 files**:

### 1. Create the example file
```
src/examples/ui/[component]/[example-name].tsx
```

### 2. Import and register in components.ts
```typescript
// src/data/components.ts

// Add import at top
import MyNewDemo from "@/examples/ui/component/my-new"

// Add to component's examples object
{
  name: "Component",
  exampleComponent: ComponentDemo,
  examples: {
    default: ComponentDefaultDemo,
    "my-new": MyNewDemo,  // <-- add here
  },
},
```

### 3. Add to MDX documentation
```mdx
// src/markdown/components/[component].mdx

### My New Example

Description of what this example shows.

<ComponentPreview component="component" example="my-new">
  ```tsx file=<rootDir>/src/examples/ui/component/my-new.tsx
  ```
</ComponentPreview>
```

## Registry JSON Files

Located in `public/r/`. These define what gets installed via:
```bash
pnpm dlx shadcn@latest add https://propcore.audreyui.com/r/[component].json
```

Key fields:
- `type`: Use `registry:ui` (not `registry:block`)
- `path`: Should point to `src/components/ui/[component].tsx`
- `target`: Should be `components/ui/[component].tsx`

## Design System Rules

### Borders
- Use `border-3` (3px) for most components
- `border-2` only for small decorative elements (dots, legend items)

### Shadows
- Always solid offset, never blur
- Use `shadow-shadow` utility class
- Format: `box-shadow: 4px 4px 0 var(--border)`

### Colors
- `main` = Revolutionary red
- `accent` = Gold/yellow
- `border` = Black
- `background` = Cream/paper

### Typography
- Headings: `font-heading` (Oswald), uppercase, tracking-wider
- Body: `font-base` (Space Grotesk)

### Accessibility
- All decorative SVGs need `aria-hidden="true"`
- Interactive elements need `focus-visible` states

## Build Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run linter
npx tsc --noEmit  # TypeScript check only
pnpm velite       # Rebuild MDX docs index (REQUIRED after adding new MDX files)
```

## Velite (MDX Documentation System)

Velite processes MDX files from `src/markdown/` into a JSON index at `.velite/docs.json`.

**IMPORTANT:** After creating or modifying MDX files, you MUST run:
```bash
pnpm velite
```

Without this, new documentation pages will return 404.

### MDX Frontmatter Requirements
```yaml
---
title: Component Name        # Required, max 50 chars
description: Short desc      # Required, max 100 chars
shadcnDocsLink: https://...  # Optional
---
```

## Common Gotchas

1. **New docs page returns 404**: Run `pnpm velite` to rebuild the docs index
2. **Examples not showing**: Check all 3 places are updated (example file, components.ts, MDX)
3. **Blocks references**: We removed the blocks folder - everything is in `components/ui/`
4. **overflow-visible**: Cards with stamps/badges that break bounds need `overflow-visible`
5. **Registry JSON**: Must match actual file paths in `src/components/ui/`
6. **Description too long**: MDX descriptions must be under 100 characters
