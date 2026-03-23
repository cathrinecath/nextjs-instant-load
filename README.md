# nextjs-instant-load

A Next.js pattern that shows an instant skeleton screen on every route change — including browser back/forward navigation — with zero layout shift.

## How it works

When a user clicks a navigation button, the app immediately swaps the current page content with a skeleton placeholder while the next route loads. Once the new page is ready, the skeleton is replaced with the actual content.

This is achieved without any third-party loading libraries — just React context and Next.js hooks.

```
User clicks NavButton
  → startNavigation() called
  → NavigationContext sets isLoading = true
  → PageTemplate renders <SkeletonPage /> instead of children
  → Next.js navigates to new route
  → pathname changes → RouteChangeListener calls finishNavigation()
  → NavigationContext sets isLoading = false
  → PageTemplate renders actual page content
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout — mounts NavigationProvider & RouteChangeListener
│   ├── page.tsx            # Home page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── atoms/
│   │   ├── Button.tsx      # Base button component
│   │   ├── Heading.tsx     # Heading component
│   │   └── SkeletonBlock.tsx # Animated skeleton block
│   ├── molecules/
│   │   ├── NavButton.tsx   # Button that triggers navigation loading state
│   │   └── SkeletonPage.tsx # Full-page skeleton layout
│   ├── organisms/
│   │   └── RouteChangeListener.tsx # Listens for route changes and popstate events
│   └── templates/
│       └── PageTemplate.tsx # Swaps children with skeleton during navigation
└── context/
    └── NavigationContext.tsx # Global loading state (isLoading, start/finish navigation)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

Clone this project

```bash
cd nextjs-instant-load
npm install
```

### Running locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm start
```

## Key Components

### `NavigationContext`

Holds the global `isLoading` state. Exposes `startNavigation()` and `finishNavigation()` to any component in the tree.

### `RouteChangeListener`

Mounted once in the root layout. Watches `usePathname()` to detect when a new route has finished loading, then calls `finishNavigation()`. Also listens to the `popstate` event so browser back/forward buttons trigger the skeleton too.

### `NavButton`

A wrapper around the base `Button` component. Calls `startNavigation()` before pushing the new route — this ensures the skeleton appears instantly on click, before Next.js begins the route transition.

### `PageTemplate`

Wraps every page. Renders `<SkeletonPage />` when `isLoading` is `true`, otherwise renders the actual page children.

## License

MIT
