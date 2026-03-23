import { PageTemplate } from '@/components/templates/PageTemplate'
import { NavButton } from '@/components/molecules/NavButton'
import { Heading } from '@/components/atoms/Heading'

export const dynamic = 'force-dynamic'

async function loadData() {
  await new Promise((r) => setTimeout(r, 1500))
}

export default async function AboutPage() {
  await loadData()

  return (
    <PageTemplate>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-lg w-full px-8 space-y-6">
          <Heading level={1} className="text-purple-900">
            About Us
          </Heading>

          <span className="inline-block text-xs font-medium uppercase tracking-widest text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
            Page 2
          </span>

          <p className="text-gray-600 text-lg leading-relaxed">
            This is the <strong>About</strong> page. The skeleton appeared the
            moment you clicked the button on the previous page — before any data
            was fetched.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Try hitting your browser&apos;s back button instead of the one
            below. The skeleton will trigger either way.
          </p>

          <NavButton href="/" variant="secondary">
            &larr; Back to Home
          </NavButton>
        </div>
      </main>
    </PageTemplate>
  )
}
