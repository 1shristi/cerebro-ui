import { useState } from 'react'
import { Search, Plus, Filter, BookOpen, Tag, FileText, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const categories = ['All', 'Documents', 'Articles', 'Reports', 'Notes']

const knowledgeItems = [
  {
    id: 1,
    title: 'Product Strategy 2025',
    excerpt: 'Comprehensive overview of product goals, key initiatives, and success metrics for the upcoming year.',
    category: 'Documents',
    tags: ['strategy', 'product'],
    source: 'Internal',
    updated: '2 days ago',
  },
  {
    id: 2,
    title: 'Machine Learning Architecture Patterns',
    excerpt: 'A deep dive into modern ML architecture patterns including transformer models and their applications.',
    category: 'Articles',
    tags: ['ml', 'architecture', 'ai'],
    source: 'Web',
    updated: '5 days ago',
  },
  {
    id: 3,
    title: 'Q1 2025 Market Analysis',
    excerpt: 'Quarterly analysis of market trends, competitor movements, and opportunities in the AI sector.',
    category: 'Reports',
    tags: ['market', 'analysis'],
    source: 'Internal',
    updated: '1 week ago',
  },
  {
    id: 4,
    title: 'API Design Best Practices',
    excerpt: 'Guidelines for designing RESTful and GraphQL APIs with emphasis on developer experience.',
    category: 'Notes',
    tags: ['api', 'engineering'],
    source: 'Internal',
    updated: '2 weeks ago',
  },
  {
    id: 5,
    title: 'User Research Synthesis',
    excerpt: 'Synthesized findings from 50+ user interviews conducted in Q4 2024.',
    category: 'Reports',
    tags: ['research', 'ux'],
    source: 'Internal',
    updated: '3 weeks ago',
  },
  {
    id: 6,
    title: 'Retrieval Augmented Generation Guide',
    excerpt: 'How to implement RAG pipelines for enterprise knowledge management systems.',
    category: 'Articles',
    tags: ['rag', 'ai', 'llm'],
    source: 'Web',
    updated: '1 month ago',
  },
]

const sourceIcon = (source: string) =>
  source === 'Web' ? Globe : FileText

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = knowledgeItems.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory
    const matchQ = item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Knowledge Base</h2>
          <p className="text-muted-foreground text-sm mt-1">
            {knowledgeItems.length} items across all categories
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search knowledge base..."
          className="w-full pl-10 pr-4 h-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((item) => {
          const SourceIcon = sourceIcon(item.source)
          return (
            <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent shrink-0">
                    <BookOpen className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <SourceIcon className="w-3 h-3" />
                    {item.source}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.excerpt}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">{item.updated}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p className="font-medium">No items found</p>
          <p className="text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
