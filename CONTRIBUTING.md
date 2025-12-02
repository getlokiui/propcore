# Contributing to Propcore

Thanks for your interest in contributing! This guide will help you get started.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/audreyui/propcore.git
cd propcore

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

## Project Structure

```
propcore/
├── src/
│   ├── components/ui/       # UI components
│   ├── examples/ui/         # Example files for documentation
│   ├── data/
│   │   ├── components.ts    # Component registry
│   │   └── sidebar-links.ts # Navigation
│   ├── markdown/components/ # MDX documentation
│   └── app/                 # Next.js pages
└── public/r/                # Registry JSON files (for shadcn CLI)
```

## Adding a New Component

### 1. Create the component

```
src/components/ui/my-component.tsx
```

Follow the design system rules below.

### 2. Create a default example

```
src/examples/ui/my-component/default.tsx
```

### 3. Register in components.ts

```typescript
// src/data/components.ts

import MyComponentDemo from "@/examples/ui/my-component/default"

// Add to the components array
{
  name: "My Component",
  slug: "my-component",
  exampleComponent: MyComponentDemo,
  examples: {
    default: MyComponentDemo,
  },
},
```

### 4. Create MDX documentation

```mdx
// src/markdown/components/my-component.mdx
---
title: My Component
description: Brief description under 100 characters.
---

## Installation

<InstallTabs component="my-component" />

## Usage

<ComponentPreview component="my-component" example="default">
  ```tsx file=<rootDir>/src/examples/ui/my-component/default.tsx
  ```
</ComponentPreview>
```

### 5. Create registry JSON

```json
// public/r/my-component.json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-component",
  "type": "registry:ui",
  "title": "My Component",
  "description": "Brief description",
  "files": [
    {
      "path": "src/components/ui/my-component.tsx",
      "type": "registry:ui",
      "target": "components/ui/my-component.tsx"
    }
  ]
}
```

### 6. Rebuild the docs index

```bash
pnpm velite
```

This is required after adding new MDX files.

## Design System Rules

### Borders

- Use `border-3` (3px) for most components
- `border-2` only for small decorative elements

### Shadows

- Always solid offset, never blur
- Use the `shadow-shadow` utility class
- Format: `box-shadow: 4px 4px 0 var(--border)`

### Colors

| Token        | Usage                |
| ------------ | -------------------- |
| `main`       | Primary red          |
| `accent`     | Gold/yellow accents  |
| `border`     | Black borders        |
| `background` | Cream/paper bg       |

### Typography

- Headings: `font-heading` (Oswald), uppercase, `tracking-wider`
- Body: `font-base` (Space Grotesk)

### Accessibility

- Decorative SVGs need `aria-hidden="true"`
- Interactive elements need `focus-visible` states
- Maintain color contrast ratios

## Adding Examples to Existing Components

Update **3 places**:

1. Create example file: `src/examples/ui/[component]/[example-name].tsx`
2. Import and register in `src/data/components.ts`
3. Add `<ComponentPreview>` block to the MDX file

## Code Style

- Use TypeScript
- Use ES modules (`import`/`export`), not CommonJS
- Format with Prettier
- Run `pnpm lint` before submitting

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run linter
pnpm velite       # Rebuild MDX docs index
npx tsc --noEmit  # TypeScript check
```

## Pull Requests

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `pnpm build` to ensure everything compiles
4. Submit a PR with a clear description of your changes

## Questions?

Open an issue if something is unclear or you need help.
