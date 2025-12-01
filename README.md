# Propcore

**Neo-constructivist components for React**

<img src="public/preview.png" alt="Propcore preview">

## Introduction

Propcore is a collection of neo-constructivist-styled React components based on [shadcn/ui](https://ui.shadcn.com/).

Neo-constructivism draws from the 1920s Soviet avant-garde — the bold geometric forms of El Lissitzky, the dynamic diagonals of Rodchenko, and the stark red-black-white palette of revolutionary propaganda posters.

Where neobrutalism embraces discomfort, neo-constructivism embraces **purpose**. Every element exists to communicate, not decorate.

## Features

- Sharp 3px borders, hard offset shadows (no blur)
- Revolutionary red, industrial black, paper cream palette
- Oswald typography, ALL CAPS headings
- Mechanical hover states (translate + shadow shift)
- Propaganda-style decorations (stamps, stripes, badges)
- Full dark mode support
- Built on Tailwind v4 and React 19

## Installation

```bash
# Initialize with shadcn CLI
pnpm dlx shadcn@latest init

# Add a component
pnpm dlx shadcn@latest add https://propcore.audreyui.com/r/button.json
```

## Documentation

Visit [propcore.audreyui.com/docs](https://propcore.audreyui.com/docs) to get started.

## Design Principles

_"The artist is not a special kind of person, but every person is a special kind of artist."_ — El Lissitzky

- **Restriction breeds intention** — Limited palette forces deliberate choices
- **Borders are non-negotiable** — Every component has a hard black edge
- **Shadows don't blur** — Solid offsets create depth without softness
- **Typography is structural** — Text has weight, direction, and hierarchy
- **Interactions feel mechanical** — Like pressing buttons on industrial machinery

## Project Structure

```
src/
├── components/ui/       # All UI components
├── examples/ui/         # Example files shown in docs
├── data/
│   ├── components.ts    # Component registry & example imports
│   └── sidebar-links.ts # Navigation
├── markdown/components/ # MDX documentation
└── app/                 # Next.js pages
public/r/                # Registry JSON for shadcn CLI
```

## Contributing

### Adding Component Examples

Examples require updates in **3 places**:

1. **Create example file**: `src/examples/ui/[component]/[name].tsx`

2. **Register in components.ts**:
```typescript
// Import at top
import MyDemo from "@/examples/ui/component/my-demo"

// Add to examples object
{
  name: "Component",
  examples: {
    "my-demo": MyDemo,
  },
}
```

3. **Add to MDX docs**: `src/markdown/components/[component].mdx`
```mdx
### My Demo

<ComponentPreview component="component" example="my-demo">
  ```tsx file=<rootDir>/src/examples/ui/component/my-demo.tsx
  ```
</ComponentPreview>
```

### Development

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm lint         # Run linter
```

## Credits

Forked from [neobrutalism-components](https://github.com/ekmas/neobrutalism-components) by Samuel Breznjak. Registry infrastructure and component architecture preserved, restyled with neo-constructivist design language.

## License

[MIT](LICENSE)
