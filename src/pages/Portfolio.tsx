import { Github, Twitter, Linkedin, Mail, ExternalLink, ArrowDown, Brain } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const skills = {
  Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
  Backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST / GraphQL'],
  AI: ['LLMs', 'RAG Pipelines', 'Vector DBs', 'LangChain', 'OpenAI API'],
  DevOps: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Terraform'],
}

const projects = [
  {
    name: 'Cerebro UI',
    description:
      'AI-powered knowledge management dashboard. Index documents, query your knowledge base with natural language, and surface insights across your organisation.',
    tags: ['React', 'TypeScript', 'Tailwind', 'AI'],
    href: '#',
    status: 'Live',
  },
  {
    name: 'RAG Engine',
    description:
      'Open-source retrieval-augmented generation engine that plugs into any LLM. Supports PDF, Notion, Confluence, and web sources out of the box.',
    tags: ['Python', 'LangChain', 'Pinecone', 'FastAPI'],
    href: '#',
    status: 'Open Source',
  },
  {
    name: 'DataFlow',
    description:
      'Visual ETL pipeline builder that lets non-engineers create, schedule, and monitor data workflows through a drag-and-drop interface.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    href: '#',
    status: 'Live',
  },
  {
    name: 'ObsidianSync',
    description:
      'Two-way sync tool that keeps an Obsidian vault in perfect sync with a remote vector database for semantic search across notes.',
    tags: ['TypeScript', 'Electron', 'SQLite', 'Qdrant'],
    href: '#',
    status: 'Beta',
  },
]

const statusVariant: Record<string, 'success' | 'default' | 'warning'> = {
  Live: 'success',
  'Open Source': 'default',
  Beta: 'warning',
}

const socials = [
  { label: 'GitHub', icon: Github, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm">Alex Rivera</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            {['About', 'Skills', 'Projects', 'Contact'].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {s}
              </a>
            ))}
          </nav>
          <Button size="sm" asChild>
            <a href="#contact">Hire me</a>
          </Button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Avatar placeholder */}
          <div className="mx-auto w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-primary/20">
            AR
          </div>

          <div className="space-y-3">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              Available for freelance &amp; full-time
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="text-primary">Alex Rivera</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Full-Stack Engineer &amp; AI Systems Builder
            </p>
          </div>

          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I build products at the intersection of great UX and applied AI — from fast React
            frontends to RAG pipelines that make knowledge actually useful.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button asChild>
              <a href="#projects">View my work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 pt-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute bottom-8 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack engineer with 7+ years of experience shipping products that people
              actually use. My sweet spot is building intelligent systems — things that combine solid
              engineering with the practical application of modern AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Previously at <strong className="text-foreground">Stripe</strong>,{' '}
              <strong className="text-foreground">Notion</strong>, and two YC-backed startups.
              I currently spend most of my time on Cerebro, an AI-native knowledge platform, and
              take on selective consulting work.
            </p>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#">Download CV</a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '7+', label: 'Years experience' },
              { value: '30+', label: 'Projects shipped' },
              { value: '12', label: 'Happy clients' },
              { value: '4', label: 'Open source libs' },
            ].map(({ value, label }) => (
              <Card key={label}>
                <CardContent className="p-5 text-center">
                  <p className="text-3xl font-bold text-primary">{value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Skills &amp; Technologies</h2>
            <p className="text-muted-foreground">The tools I reach for to get things done</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Selected Projects</h2>
            <p className="text-muted-foreground">Things I've built that I'm proud of</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="group hover:shadow-md transition-shadow flex flex-col"
              >
                <CardContent className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant={statusVariant[project.status] ?? 'secondary'}>
                        {project.status}
                      </Badge>
                      <a
                        href={project.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-accent text-accent-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm open to interesting projects and full-time opportunities. Whether you have a question
            or just want to say hi — my inbox is always open.
          </p>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                {[
                  { label: 'Name', placeholder: 'Jane Smith', type: 'text' },
                  { label: 'Email', placeholder: 'jane@example.com', type: 'email' },
                ].map(({ label, placeholder, type }) => (
                  <div key={label} className="space-y-1.5 text-left">
                    <label className="text-sm font-medium">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
              </div>
              <Button className="w-full">
                <Mail className="w-4 h-4" />
                Send message
              </Button>
            </CardContent>
          </Card>

          {/* Alternative links */}
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-3">
          <span>© 2026 Alex Rivera. Built with React + Tailwind.</span>
          <a href="/" className="hover:text-foreground transition-colors">
            Back to dashboard →
          </a>
        </div>
      </footer>
    </div>
  )
}
