# Repository conventions

## UI components

- Prefer components from [shadcn-svelte](https://www.shadcn-svelte.com/docs/components) for every UI primitive it provides (for example: Button, Card, Dialog, Sheet, Input, Select, Table, Tabs, Toast/Sonner).
- Install or generate a missing shadcn-svelte component using its documented workflow; do not recreate a covered primitive by hand.
- Keep generated primitives in `src/lib/components/ui/<component>/`. Do not edit generated files unless the change is required for the whole application.
- Put application-wide, reusable compositions in `src/lib/components/` (for example, `AppHeader.svelte`), and feature-only UI inside its feature folder.
- Extract a shared component only when it is used by multiple features or has a clearly reusable responsibility. Do not create speculative wrapper components.

## Icons

- Use the installed `@lucide/svelte` package for interface icons. Import only the icons used by a component so the production bundle remains tree-shakeable.
- Do not add another icon package, inline SVG icon set, or emoji in place of a UI icon.
- Icons that perform an action must have an accessible name via adjacent text, an `aria-label`, or visually hidden text. Decorative icons must be hidden from assistive technology.

## Typography

- Always read and apply the patterns in [`documents/typography.md`](./documents/typography.md) when creating or changing text UI.
- Use its documented Tailwind utility recipes as the default treatment for headings, body copy, links, blockquotes, lists, tables, inline code, lead text, and muted text.
- Preserve semantic HTML (`h1` through `h4`, `p`, `ul`/`ol`, `table`, `blockquote`, and `code`); use classes to style the correct element rather than replacing it with a generic `div`.

## Internationalization and appearance

- Use `src/lib/i18n/` and `svelte-i18n` for user-facing text. Indonesian (`id`) is the default and fallback locale; English (`en`) is the supported secondary locale.
- Add every new user-facing string to both locale message files. Do not hard-code translatable text in components.
- Use `mode-watcher` at the root layout with `defaultMode="system"`. Do not add a manual theme toggle unless requested; all new UI must be legible in both system light and dark modes.

## Formatting and linting

- Run `npm run validate` after every code change and before handing work back. It checks Prettier formatting, ESLint, and Svelte types.
- Run `npm run format` before the final validation when files require formatting. Do not bypass linting or formatting rules without explaining the exception.

## Feature-based structure

Use this structure for new product work:

```text
src/
  lib/
    api/                 # shared HTTP client and API helpers
    components/          # shared application components; ui/ is shadcn-svelte
      media/             # reusable image and media components
    utils/               # framework-agnostic shared utilities
  features/
    <feature>/
      api/               # feature endpoint functions
      components/        # feature-only UI
      queries/           # TanStack Query options and hooks
      schemas/           # validation schemas
      types/             # feature domain types
      utils/             # feature-only utilities
      index.ts           # intentional public exports only
  routes/                # SvelteKit route composition, params, and load files
```

- Keep route files thin: compose feature and shared components there; keep feature logic in `src/features/<feature>/`.
- A feature may import from `src/lib/` and its own files. It must not import another feature's internal files; use that feature's `index.ts` only when a cross-feature dependency is genuinely required.
- Use the smallest useful feature folder. Do not create empty folders or files for categories a feature does not use.

## Images and media

- Use `src/lib/components/media/ResponsiveImage.svelte` for application images. It standardizes accessible image markup and native loading behavior without adding a dependency.
- Pass meaningful `alt`, `width`, and `height` values for content images. Use `alt=""` only for decorative images.
- Keep images in the feature that owns them, unless they are reused by multiple features; put genuinely shared assets in `static/images/`.
- Default to `loading="lazy"`; use `loading="eager"` only for an above-the-fold image that is important to the initial view.
- Use the original image at an appropriate display size and optimize source files before committing. Do not use CSS backgrounds for meaningful content images.

## API and server state

- For any client-side API/server state, use `@tanstack/svelte-query`; install it when the first API feature needs it.
- Configure one `QueryClient` at the application root. Put the shared fetch client and error normalization in `src/lib/api/`.
- Define endpoint functions in `features/<feature>/api/` and keep query keys, `queryOptions`, and mutations in `features/<feature>/queries/`.
- Components consume feature queries; they must not call `fetch` directly. Validate request and response boundaries with a schema when data is external or user-controlled.
- Use stable query-key factories, invalidate only affected keys after mutations, and handle loading, empty, and error states using shadcn-svelte components where available.

## New feature checklist

1. Add `src/features/<feature>/` and only the folders it needs.
2. Add types and validation at the data boundary.
3. Add API functions, then TanStack Query definitions for server state.
4. Build feature UI from shadcn-svelte primitives, Lucide icons, and feature-local components; apply `documents/typography.md` for text styling.
5. Compose the feature in a thin SvelteKit route and run `npm run validate`.
