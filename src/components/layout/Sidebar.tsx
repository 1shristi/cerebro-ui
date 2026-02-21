import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Brain,
  Users,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/knowledge', label: 'Knowledge', icon: BookOpen },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
]

const bottomItems = [
  { to: '/team', label: 'Team', icon: Users },
]

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 min-h-screen bg-sidebar-bg text-sidebar-fg border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">Cerebro</span>
        <span className="ml-auto">
          <Zap className="w-4 h-4 text-primary" />
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-muted-fg">
          Main
        </p>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-white'
                  : 'text-sidebar-muted-fg hover:bg-sidebar-muted hover:text-sidebar-fg',
              )
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-1">
        {bottomItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-white'
                  : 'text-sidebar-muted-fg hover:bg-sidebar-muted hover:text-sidebar-fg',
              )
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}

        {/* User profile */}
        <div className="flex items-center gap-3 px-3 py-2 mt-2 rounded-lg hover:bg-sidebar-muted cursor-pointer transition-colors">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold shrink-0">
            AU
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin User</p>
            <p className="text-xs text-sidebar-muted-fg truncate">admin@cerebro.ai</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
