import { MENU_ITEMS, getCategoryLabel } from '../data/menuData'

const ALIASES = {
  maagi: 'maggi',
  maggie: 'maggi',
  sandwitch: 'sandwich',
  sandwiche: 'sandwich',
  omlette: 'omelette',
  omlet: 'omelette',
  chikko: 'chikoo',
  chiko: 'chikoo',
  pomogranate: 'pomegranate',
  pomogrenate: 'pomegranate',
  cofee: 'coffee',
  coffe: 'coffee',
  balck: 'black',
  vannilla: 'vanilla',
  momo: 'momos',
  fri: 'fries',
  perri: 'peri',
}

const normalize = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const tokenize = (s) =>
  normalize(s)
    .split(' ')
    .filter(Boolean)
    .map((t) => ALIASES[t] || t)

const searchableText = (item) =>
  `${item.name} ${item.description} ${getCategoryLabel(
    item.category,
  )} ${item.type === 'veg' ? 'veg vegetarian' : 'nonveg non-vegetarian'} ${item.price}`

export const scoreItem = (item, words) => {
  const name = normalize(item.name)
  const text = normalize(searchableText(item))
  const cat = normalize(getCategoryLabel(item.category))
  const type = item.type === 'veg' ? 'veg vegetarian' : 'nonveg non-vegetarian'
  let score = 0
  for (const w of words) {
    if (!w) continue
    let wordScore = 0
    if (name.startsWith(w)) wordScore += 5
    else if (name.includes(w)) wordScore += 4
    else if (cat.includes(w)) wordScore += 2
    else if (type.includes(w)) wordScore += 2
    if (text.includes(w)) wordScore += 1
    if (String(item.price).includes(w)) wordScore += 0.5
    if (wordScore === 0) return 0
    score += wordScore
  }
  return score
}

export const searchItems = (query) => {
  const words = tokenize(query)
  if (words.length === 0) return []
  return MENU_ITEMS.map((item) => ({
    item,
    score: scoreItem(item, words),
  }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .map((r) => r.item)
}

export const getSuggestions = (query, limit = 6) =>
  searchItems(query).slice(0, limit)

export const matchesFilters = (item, filters) => {
  if (filters.category !== 'all' && item.category !== filters.category) return false
  if (filters.type !== 'all' && item.type !== filters.type) return false
  if (filters.price === 'under50' && item.price >= 50) return false
  if (filters.price === '50to100' && (item.price < 50 || item.price > 100)) return false
  if (filters.price === 'above100' && item.price <= 100) return false
  return true
}

export const DEFAULT_FILTERS = { category: 'all', type: 'all', price: 'all' }

export const isFiltering = (filters) =>
  filters.category !== 'all' || filters.type !== 'all' || filters.price !== 'all'

export const PRICE_FILTERS = [
  { id: 'all', label: 'Any price' },
  { id: 'under50', label: 'Under ₹50' },
  { id: '50to100', label: '₹50 – ₹100' },
  { id: 'above100', label: 'Above ₹100' },
]

export const TYPE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-veg' },
]
