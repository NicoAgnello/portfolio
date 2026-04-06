import MainLayout from "@/components/layout/MainLayout"
import ProfileCard from "@/components/sidebar/ProfileCard"
import About from "@/sections/About"

function App() {
  return (
    <MainLayout sidebar={<ProfileCard />}>
      <div className="space-y-16 pt-2">
        <About />

        <section id="projects">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <p className="text-muted-foreground">Placeholder — sección Projects.</p>
        </section>

        <section id="skills">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <p className="text-muted-foreground">Placeholder — sección Skills.</p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-muted-foreground">Placeholder — sección Contact.</p>
        </section>
      </div>
    </MainLayout>
  )
}

export default App
