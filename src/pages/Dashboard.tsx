import { Brain, FileText, Zap, TrendingUp, ArrowUpRight, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const stats = [
  {
    label: 'Knowledge Nodes',
    value: '2,847',
    change: '+12%',
    icon: Brain,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    label: 'Documents',
    value: '1,203',
    change: '+8%',
    icon: FileText,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: 'AI Queries',
    value: '48,291',
    change: '+24%',
    icon: Zap,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    label: 'Accuracy Score',
    value: '96.4%',
    change: '+2.1%',
    icon: TrendingUp,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

const recentActivity = [
  { title: 'Product Roadmap Q3 2025', type: 'Document', status: 'Indexed', time: '2m ago' },
  { title: 'Competitor Analysis Report', type: 'Analysis', status: 'Processing', time: '15m ago' },
  { title: 'API Integration Guide', type: 'Document', status: 'Indexed', time: '1h ago' },
  { title: 'Customer Feedback Synthesis', type: 'AI Summary', status: 'Indexed', time: '3h ago' },
  { title: 'Q2 Financial Overview', type: 'Report', status: 'Draft', time: '1d ago' },
]

const statusVariant: Record<string, 'success' | 'warning' | 'secondary'> = {
  Indexed: 'success',
  Processing: 'warning',
  Draft: 'secondary',
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Welcome back — here's what's happening in your knowledge base.
          </p>
        </div>
        <Button>
          <Zap className="w-4 h-4" />
          Ask Cerebro
        </Button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, icon: Icon, color, bg }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${bg}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <ArrowUpRight className="w-3 h-3" />
                  {change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates to your knowledge base</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {recentActivity.map((item) => (
              <div key={item.title} className="flex items-center gap-4 py-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted shrink-0">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                </div>
                <Badge variant={statusVariant[item.status] ?? 'secondary'}>{item.status}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
