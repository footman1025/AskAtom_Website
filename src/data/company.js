// Company facts, case studies, clients and FAQ.
//
// Anything written in [square brackets] is a SAMPLE value filled in for now.
// The brackets are not shown on the site. Replace each with the real figure
// and remove the brackets once checked. Search this file for "[" to find them.

export const stats = [
  { value: '2026', label: 'founded in New Jersey' },
  { value: '8', label: 'people on the team' },
  { value: '5.0', label: 'average client rating' },
  { value: '100%', label: 'projects delivered on time' },
  { value: '100%', label: 'projects delivered on budget' },
]

// The "Trusted by" strip lists the kinds of clients we work with. Swap in
// real client names here once they have agreed to be named.
export const clients = ['Medical clinics', 'Online retailers', 'Trading firms', 'Logistics companies', 'SaaS startups', 'Marketing agencies']

// Case studies. These are sample drafts based on the kind of work AskAtom
// does. Rewrite each one around a real project, with the real client, year
// and results.
export const caseStudies = [
  {
    img: 'images/site/case-1.jpg',
    alt: 'Operations dashboard with a route map, inventory, invoices, and a driver phone',
    client: '[Regional logistics company]',
    industry: 'Logistics',
    year: '[2026]',
    title: 'Replacing spreadsheets with a live operations platform',
    text: 'Dispatch, inventory and invoicing were spread across a dozen spreadsheets and two older tools. We built one web platform with a driver app, an operations dashboard and QuickBooks sync, and moved the data over without stopping day-to-day work.',
    results: [
      { value: '[−60%]', label: 'time spent on admin' },
      { value: '[3 → 1]', label: 'systems to maintain' },
      { value: '[12 wks]', label: 'from kickoff to launch' },
    ],
  },
  {
    img: 'images/site/case-2.jpg',
    alt: 'A fashion store moving from WooCommerce to a Shopify storefront',
    client: '[Online fashion retailer]',
    industry: 'Retail & e-commerce',
    year: '[2026]',
    title: 'Moving a busy store to Shopify without losing search traffic',
    text: 'A long-running WooCommerce store had become slow and hard to update. We moved the catalog, customers and order history to a custom Shopify theme, mapped every old URL, and rebuilt checkout with Apple Pay and Google Pay.',
    results: [
      { value: '[+38%]', label: 'completed checkouts' },
      { value: '[1.4s]', label: 'average page load' },
      { value: '[0]', label: 'rankings lost after launch' },
    ],
  },
  {
    img: 'images/site/case-3.jpg',
    alt: 'A clinic phone assistant booking appointments across several locations',
    client: '[Multi-location dental group]',
    industry: 'Healthcare',
    year: '[2026]',
    title: 'An AI phone assistant for a group of clinics',
    text: 'Front desks were missing calls during busy hours and after closing. We built a voice assistant that books and moves appointments, answers common questions, passes urgent calls to staff, and writes a summary of every call into the clinic CRM.',
    results: [
      { value: '[−70%]', label: 'missed calls' },
      { value: '[24/7]', label: 'appointment booking' },
      { value: '[+25%]', label: 'booked appointments' },
    ],
  },
]

export const industries = [
  { name: 'Healthcare & clinics', text: 'Booking, patient portals, phone assistants and reminders that cut no-shows.' },
  { name: 'Retail & e-commerce', text: 'Shopify and WooCommerce stores, checkout, catalogs and fulfillment.' },
  { name: 'Finance & trading', text: 'Expert advisors, trading bots, risk dashboards, wallets and payments.' },
  { name: 'Logistics & field service', text: 'Dispatch, tracking, driver apps and inventory systems.' },
  { name: 'Professional services', text: 'Client portals, CRM automation, document workflows and reporting.' },
  { name: 'SaaS & startups', text: 'MVPs, billing, multi-tenant platforms and cloud setup.' },
  { name: 'Home & local services', text: 'Websites, booking, call handling and lead follow-up.' },
  { name: 'Video editing', text: 'YouTube, ads, podcasts, events, shorts and motion graphics, delivered on a schedule.' },
]

export const about = {
  founded: '2026',
  team: '8 people',
  offices: 'New Jersey, USA',
  story: [
    'AskAtom Solutions LLC started in New Jersey in 2026 with a simple idea: businesses should get software that fits how they work, written by people who explain things plainly and stick around after launch.',
    'Today we are a team of 8: engineers, designers, data specialists and video editors. Being small means you talk directly to the people building your project, and nothing gets lost between a salesperson and a developer.',
  ],
  values: [
    { title: 'Say it plainly', text: 'Clear quotes, clear timelines, and a straight answer when something is not worth building.' },
    { title: 'You own the work', text: 'Source code, documentation and every login are handed over. No lock-in.' },
    { title: 'Small steps, often', text: 'Work is split into milestones you can try on a staging link before we move on.' },
    { title: 'Stay for the long run', text: 'Support after launch for fixes, updates and the next idea.' },
  ],
}

export const stack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind'] },
  { group: 'Backend', items: ['Node.js', 'Laravel / PHP', 'Python', 'PostgreSQL', 'MongoDB'] },
  { group: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { group: 'AI', items: ['OpenAI', 'Claude', 'Gemini', 'LangChain'] },
  { group: 'Automation', items: ['n8n', 'Zapier', 'Make', 'HubSpot'] },
  { group: 'Commerce & payments', items: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'] },
  { group: 'Data', items: ['Excel', 'Power BI', 'Tableau', 'Looker', 'SQL'] },
  { group: 'Trading', items: ['MQL4 / MQL5', 'Pine Script', 'Binance', 'Interactive Brokers', 'Alpaca'] },
  { group: 'Cloud', items: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
  { group: 'Video & motion', items: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Adobe Audition', 'CapCut'] },
  { group: 'Design', items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva'] },
]

// These answers are also in the FAQ structured data in index.html.
// Update both together so Google Search shows the same text.
export const faqs = [
  {
    q: 'Who owns the code when the project is done?',
    a: 'You do. We hand over the source code, documentation and all accounts and logins at the end of the project, or at each milestone if you prefer.',
  },
  {
    q: 'How do you price projects?',
    a: 'Our rate is $80/hr. For most projects we send a fixed quote split into milestones, so you know the cost of each step before it starts.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A landing page or automation can take days. An MVP usually takes a few weeks. Larger platforms are planned in phases. You get a timeline with the quote.',
  },
  {
    q: 'Can you take over a project another developer started?',
    a: "Yes, we do this often. We start by reviewing the code, hosting and database, then send a plain write-up of what we found and what it would cost to fix or finish.",
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. We stay available for fixes, updates and new features after launch, during US business hours.',
  },
  {
    q: 'What do you need from me to get started?',
    a: "A few lines about what you need and why. You don't need a spec. We'll ask questions, then send a plan and a quote.",
  },
]
