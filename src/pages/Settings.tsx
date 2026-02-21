import { useState } from 'react'
import { User, Key, Bell, Shield, Cpu } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'api', label: 'API Keys', icon: Key },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'ai', label: 'AI Model', icon: Cpu },
  { id: 'security', label: 'Security', icon: Shield },
]

export default function Settings() {
  const [active, setActive] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    slack: false,
    digest: true,
  })
  const [aiModel, setAiModel] = useState('claude-sonnet-4-6')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground text-sm mt-1">Manage your workspace preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar nav */}
        <nav className="flex flex-col gap-1 w-48 shrink-0">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                active === id
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="flex-1 space-y-4">
          {active === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                    AU
                  </div>
                  <Button variant="outline" size="sm">Change avatar</Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'First Name', value: 'Admin' },
                    { label: 'Last Name', value: 'User' },
                  ].map(({ label, value }) => (
                    <div key={label} className="space-y-1.5">
                      <label className="text-sm font-medium">{label}</label>
                      <input
                        defaultValue={value}
                        className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    defaultValue="admin@cerebro.ai"
                    className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <Button>Save changes</Button>
              </CardContent>
            </Card>
          )}

          {active === 'api' && (
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage API keys for external integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
                  <div>
                    <p className="text-sm font-medium">Production Key</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">cbr_prod_••••••••••••••••</p>
                  </div>
                  <Button variant="outline" size="sm">Reveal</Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/50">
                  <div>
                    <p className="text-sm font-medium">Development Key</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">cbr_dev_••••••••••••••••</p>
                  </div>
                  <Button variant="outline" size="sm">Reveal</Button>
                </div>
                <Button variant="outline">
                  <Key className="w-4 h-4" />
                  Generate new key
                </Button>
              </CardContent>
            </Card>
          )}

          {active === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Choose how you receive alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {([
                  { key: 'email', label: 'Email notifications', desc: 'Receive updates via email' },
                  { key: 'slack', label: 'Slack notifications', desc: 'Send alerts to your Slack workspace' },
                  { key: 'digest', label: 'Weekly digest', desc: 'Get a weekly summary of activity' },
                ] as const).map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifications((n) => ({ ...n, [key]: !n[key] }))}
                      className={`relative w-10 h-5 rounded-full transition-colors ${
                        notifications[key] ? 'bg-primary' : 'bg-muted'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                          notifications[key] ? 'translate-x-5' : ''
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {active === 'ai' && (
            <Card>
              <CardHeader>
                <CardTitle>AI Model Configuration</CardTitle>
                <CardDescription>Select the model powering Cerebro's intelligence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: 'claude-opus-4-6', label: 'Claude Opus 4.6', desc: 'Most capable — best for complex reasoning' },
                  { id: 'claude-sonnet-4-6', label: 'Claude Sonnet 4.6', desc: 'Balanced speed and intelligence (recommended)' },
                  { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5', desc: 'Fastest — ideal for high-volume queries' },
                ].map(({ id, label, desc }) => (
                  <button
                    key={id}
                    onClick={() => setAiModel(id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-colors ${
                      aiModel === id
                        ? 'border-primary bg-accent'
                        : 'border-border hover:bg-muted/50'
                    }`}
                  >
                    <div className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      aiModel === id ? 'border-primary' : 'border-muted-foreground'
                    }`}>
                      {aiModel === id && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </button>
                ))}
                <Button className="mt-2">Save model preference</Button>
              </CardContent>
            </Card>
          )}

          {active === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Protect your account and data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Current Password</label>
                  <input
                    type="password"
                    className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">New Password</label>
                  <input
                    type="password"
                    className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <Button>Update password</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
