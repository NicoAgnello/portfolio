import SectionNav from "@/components/navigation/SectionNav"

export default function MainLayout({ sidebar, children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav centrado arriba */}
      <header className="flex justify-center pt-6 pb-4 px-4">
        <SectionNav />
      </header>

      {/* Grid sidebar + contenido */}
      <div className="max-w-6xl mx-auto px-4 pb-12 flex gap-6 items-start">
        <aside className="w-80 shrink-0 sticky top-6">
          {sidebar}
        </aside>
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}
