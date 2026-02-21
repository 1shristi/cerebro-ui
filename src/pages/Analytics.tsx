import { TrendingUp, TrendingDown, Zap, Clock, Users, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const metrics = [
  { label: 'Total Queries', value: '48,291', trend: '+24%', up: true, icon: Zap },
  { label: 'Avg Response Time', value: '1.2s', trend: '-18%', up: true, icon: Clock },
  { label: 'Active Users', value: '342', trend: '+11%', up: true, icon: Users },
  { label: 'Docs Indexed', value: '1,203', trend: '+8%', up: true, icon: FileText },
]

const topQueries = [
  { query: 'Product roadmap Q3', count: 284, pct: 85 },
  { query: 'Competitor analysis', count: 201, pct: 60 },
  { query: 'API documentation', count: 178, pct: 53 },
  { query: 'Onboarding flow', count: 145, pct: 43 },
  { query: 'Pricing strategy', count: 122, pct: 37 },
]

const weeklyData = [
  { day: 'Mon', queries: 6200 },
  { day: 'Tue', queries: 7100 },
  { day: 'Wed', queries: 8900 },
  { day: 'Thu', queries: 7400 },
  { day: 'Fri', queries: 9200 },
  { day: 'Sat', queries: 4100 },
  { day: 'Sun', queries: 3800 },
]

const maxQueries = Math.max(...weeklyData.map((d) => d.queries))

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Insights into how your knowledge base is being used
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ label, value, trend, up, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    up ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {trend}
                </span>
              </div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart (simplified CSS) */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Query Volume</CardTitle>
            <CardDescription>Number of AI queries per day this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3 h-40">
              {weeklyData.map(({ day, queries }) => (
                <div key={day} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-xs text-muted-foreground">{queries.toLocaleString()}</span>
                  <div
                    className="w-full rounded-t-md bg-primary/80 hover:bg-primary transition-colors"
                    style={{ height: `${(queries / maxQueries) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Queries */}
        <Card>
          <CardHeader>
            <CardTitle>Top Queries</CardTitle>
            <CardDescription>Most searched topics in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topQueries.map(({ query, count, pct }) => (
                <div key={query} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium truncate">{query}</span>
                    <span className="text-muted-foreground ml-4 shrink-0">{count}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
