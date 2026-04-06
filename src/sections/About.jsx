import { Badge } from "@/components/ui/badge";

const stack = [
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "MongoDB"
];

export default function About() {
  return (
    <section id="about" className="space-y-8">
      {/* Encabezado */}
      <div className="space-y-4">
        <p className="text-sm text-primary font-medium tracking-wide uppercase">
          Sobre mí
        </p>
        <h2 className="text-3xl font-bold leading-tight">
          Hola, soy Nicolás{" "}
          <span className="inline-block animate-[wave_1.5s_ease-in-out_1]">
            👋
          </span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Estoy estudiando{" "}
          <span className="text-foreground font-medium">
            Analista de Sistemas
          </span>{" "}
          y enfocándome en convertirme en desarrollador Full Stack.
        </p>
      </div>
      {/* Bio */}
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Me interesa entender cómo funcionan las aplicaciones de punta a punta
          — desde la lógica del backend hasta la experiencia del usuario.
        </p>
        <p>
          Disfruto construir proyectos reales donde puedo aplicar lo que
          aprendo, mejorar mis habilidades y enfrentar problemas concretos.
        </p>
      </div>

      {/* Stack */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Stack principal</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Currently */}
      <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
        <span className="mt-0.5 w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
        <div>
          <p className="text-sm font-medium text-foreground">Actualmente</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            Formándome y desarrollando aplicaciones propias, con el objetivo de
            crecer profesionalmente dentro del mundo IT.
          </p>
        </div>
      </div>
    </section>
  );
}
