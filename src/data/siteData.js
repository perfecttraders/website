export const SITE = {
  name: 'Perfect Traders',
  domain: 'perfect-traders.com',
  platformUrl: import.meta.env.VITE_PLATFORM_URL || 'https://trade.perfect-traders.com',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@perfect-traders.com'
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' }
]

export const STATS = [
  { label: 'Daily Trade Volume', value: '$2.8B+' },
  { label: 'Execution Speed', value: '< 25ms' },
  { label: 'Active Traders', value: '180K+' },
  { label: 'Market Instruments', value: '120+' }
]
