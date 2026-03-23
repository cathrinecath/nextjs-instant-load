import { SkeletonBlock } from '@/components/atoms/SkeletonBlock'

export function SkeletonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full px-8 space-y-6">
        {/* heading */}
        <SkeletonBlock className="h-10 w-2/3" />

        {/* badge */}
        <SkeletonBlock className="h-6 w-24" />

        {/* paragraph 1 */}
        <div className="space-y-3">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-11/12" />
          <SkeletonBlock className="h-4 w-4/5" />
        </div>

        {/* paragraph 2 */}
        <div className="space-y-3">
          <SkeletonBlock className="h-4 w-full" />
          <SkeletonBlock className="h-4 w-3/4" />
        </div>

        {/* button */}
        <SkeletonBlock className="h-12 w-44" />
      </div>
    </main>
  )
}
