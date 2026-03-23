import { PageTemplate } from '@/components/templates/PageTemplate'
import { NavButton } from '@/components/molecules/NavButton'
import { Heading } from '@/components/atoms/Heading'

export const dynamic = 'force-dynamic'

async function loadData() {
  await new Promise((r) => setTimeout(r, 1200))
}

export default async function HomePage() {
  await loadData()

  return (
    <PageTemplate>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="max-w-lg w-full px-8 space-y-6">
          <Heading level={1} className="text-indigo-900">
            Welcome Home
          </Heading>

          <span className="inline-block text-xs font-medium uppercase tracking-widest text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">
            Page 1
          </span>

          <p className="text-gray-600 text-lg leading-relaxed">
            This is the <strong>Home</strong> page of the Next.js Instant Load
            demo. Every navigation — button or browser back — triggers a
            skeleton immediately, before the next page is ready.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Click the button below and watch the skeleton appear the instant you
            tap, while the About page loads in the background.
          </p>

          <NavButton href="/about">
            Go to About &rarr;
          </NavButton>
        </div>
      </main>
    </PageTemplate>
  )
}
