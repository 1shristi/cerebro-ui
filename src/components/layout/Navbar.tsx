import { Bell, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavbarProps {
  title?: string
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-border bg-background">
      <div className="flex items-center gap-4">
        {title && (
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 h-9 w-64 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
        </Button>
      </div>
    </header>
  )
}
