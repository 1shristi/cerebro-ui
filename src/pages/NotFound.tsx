import { Link } from 'react-router-dom'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
      <p className="text-xl font-medium text-foreground mb-1">Page not found</p>
      <p className="text-muted-foreground mb-8">
        Cerebro couldn't find what you're looking for.
      </p>
      <Button asChild>
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  )
}
