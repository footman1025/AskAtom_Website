// Work categories shown in the "What we build" section.
// Each category has a one-line summary and 4 example project types.
// Photos are in public/images/<id>-<n>.jpg

const categories = [
  {
    id: 'web',
    label: 'Web',
    summary: 'Websites, web apps and backends in React, Next.js, Vue, Node, TypeScript and Laravel.',
    items: [
      {
        title: 'Custom web applications',
        alt: 'A spreadsheet turning into a custom web app with scheduling, inventory, and a database',
        desc: "For when the spreadsheet or off-the-shelf tool you've been bending stops fitting. We build around how your team already works, whether that's quoting, scheduling or inventory. Usually React or Vue on the front, Node or Laravel behind it, Postgres for the data. You review each milestone on a staging link, and the code is yours at the end.",
      },
      {
        title: 'Company websites',
        alt: 'A company website on a desktop monitor, with SEO, analytics, and content editing',
        desc: "Fast, clean sites for companies that want to look as solid online as they are in person. Proper SEO basics, analytics, and an editor your team can use without calling us. We'll help you sort out the content too, since that's usually the hard part.",
      },
      {
        title: 'React & Next.js frontends',
        alt: 'A workflow from Figma and WordPress into a React and Next.js site on a laptop and phone',
        desc: 'New frontends built from your Figma files, or old jQuery and WordPress themes moved over to React and Next.js. We write it in TypeScript and keep the components simple enough that the next developer can pick it up. Your existing URLs, SEO and analytics carry over.',
      },
      {
        title: 'Landing pages',
        alt: 'A landing page on a laptop and phone, connected to ads, video, and analytics',
        desc: 'Pages for ad campaigns, launches and webinars. They load quickly, say what you do in the first line, and send leads straight into your CRM or email tool. Tracking is set up before launch so you can see what is working.',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    summary: 'iOS and Android apps in React Native, Flutter, Swift and Kotlin, through to store release.',
    items: [
      {
        title: 'iOS & Android apps',
        alt: 'Two phone apps for tasks and travel bookings, shown with Apple and Android',
        desc: 'From idea to the App Store and Google Play. We usually build with React Native or Flutter so one codebase covers both phones, and go native with Swift or Kotlin when the app really needs it. Crash reporting, analytics and push notifications are set up from the start.',
      },
      {
        title: 'React Native & Flutter',
        alt: 'React Native and Flutter apps for delivery, fitness, and field teams on two phones',
        desc: "Cross-platform apps that still feel right on each phone. We've shipped them for delivery services, fitness brands and field teams, so we know the tricky bits: offline sync, deep links, background tasks and native modules. If a feature would be better built natively, we'll say so.",
      },
      {
        title: 'App design',
        alt: 'An app design moving from wireframes to a finished travel screen and a phone prototype',
        desc: "Wireframes first, because they're cheap to change. Then full screens and a clickable prototype you can show real users before any code is written. We focus on onboarding and keeping the main task within easy reach of a thumb.",
      },
      {
        title: 'On-demand & delivery apps',
        alt: 'A delivery marketplace with a customer phone, a driver phone, and an operations dashboard',
        desc: 'A customer app, a provider app and an operations dashboard, all talking to each other. GPS tracking, pricing rules, Stripe payouts, ratings and notifications. Works for home services, delivery or rentals.',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    summary: 'Agents, chatbots and assistants on OpenAI, Claude and Gemini, answering from your own documents and calls.',
    items: [
      {
        title: 'AI agents',
        alt: 'An AI agent on a laptop connected to email, leads, documents, tickets, and a CRM',
        desc: "Agents that handle real tasks: drafting email replies, qualifying leads, summarizing documents, sorting support tickets, updating your CRM. Built on OpenAI, Claude or Gemini, with a human sign-off step where it matters and a log of everything it does. Sometimes a simple script is the better buy, and we'll tell you when.",
      },
      {
        title: 'Search over your own documents',
        alt: 'Documents flowing into a search assistant that answers with the source pages',
        desc: 'An assistant that answers from your manuals, policies and past tickets instead of making things up. We set up the document pipeline and vector database (Pinecone, Chroma), then test it against questions your team actually asks. Every answer shows where it came from.',
      },
      {
        title: 'Support chatbots',
        alt: 'A support chatbot looking up an order, resetting a password, and handing off to a person',
        desc: "Bots trained on your help docs that can look up an order or reset a password, not just chat. When they can't help, they pass the customer to a person with the whole conversation attached. You get a weekly list of the questions it couldn't answer.",
      },
      {
        title: 'Phone assistants',
        alt: 'A phone assistant booking an appointment, answering a price question, and saving the call transcript',
        desc: 'Voice bots on Twilio that answer calls, book appointments, handle pricing questions and pass urgent calls to a person. Every call is transcribed and summarized into your CRM. Useful for clinics and service businesses that miss calls after hours.',
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    summary: 'n8n, Zapier and Make workflows that move leads, invoices, reports and alerts between the tools you already use.',
    items: [
      {
        title: 'n8n, Zapier & Make workflows',
        alt: 'A workflow connecting a website, email, calendar, and payments to a CRM, Slack, the books, and an alert',
        desc: 'Automations for the copy-paste work between your tools. A new lead gets scored, added to the CRM and posted to Slack. A paid invoice updates the books and sends a thank-you. We map your process first, automate the slow parts, and add alerts for when something fails.',
      },
      {
        title: 'CRM setup & automation',
        alt: 'Phone with email, calendar and messaging apps beside a laptop',
        desc: 'HubSpot, GoHighLevel, Zoho and Monday. Leads from every channel into one pipeline, follow-ups that stop when someone replies, reminders that cut no-shows. We clean up duplicates and dead fields first so the reports are worth reading.',
      },
      {
        title: 'IoT & hardware integration',
        alt: 'Printed circuit board',
        desc: 'Connecting scanners, sensors, printers and network gear to the software you use. Typical jobs: warehouse barcode workflows, equipment monitoring, Meraki and UniFi automation, and VoIP phone systems linked to a CRM. If a device goes quiet, you get an alert.',
      },
      {
        title: 'Monitoring & alerts',
        alt: 'Operations dashboard with charts on a laptop',
        desc: "Uptime checks, error tracking, SSL and domain expiry warnings, failed backup alerts and suspicious login notices for your sites and servers. Alerts go to Slack or email in plain English, and we tune them so they don't turn into noise.",
      },
    ],
  },
  {
    id: 'trading',
    label: 'Trading',
    summary: 'MT4/MT5 expert advisors, Pine Script, crypto bots and broker API work.',
    items: [
      {
        title: 'MT4/MT5 expert advisors',
        alt: 'Multi-monitor trading setup',
        desc: "We turn your written trading rules into MQL4 or MQL5 EAs: entries, exits, position sizing and risk limits like max drawdown and daily loss. Each one comes with multi-year backtests and trade logs. We'll be straight with you about what a backtest does and doesn't prove.",
      },
      {
        title: 'TradingView Pine Script',
        alt: 'Stock chart on screen',
        desc: 'Custom indicators, screeners and strategies for TradingView, with alerts to your phone or a webhook. Strategy backtests include commissions and slippage so the results mean something. You get the source code.',
      },
      {
        title: 'Crypto bots',
        alt: 'Crypto price chart',
        desc: "Grid, DCA, rebalancing and signal bots for Binance, Coinbase, Kraken and others. Orders are safe to retry, API keys never get withdrawal rights, and you can run in paper mode before going live. There's a kill switch and a full log.",
      },
      {
        title: 'Backtesting tools',
        alt: 'Financial charts and laptop',
        desc: 'Python tools that run your strategy over years of historical data with realistic costs, and report drawdown, win rate and profit factor. Walk-forward and out-of-sample tests help catch curve-fitting. Change a setting, rerun, compare.',
      },
    ],
  },
  {
    id: 'excel',
    label: 'Excel & data',
    summary: 'Dashboards, models and reporting in Excel, Power BI, Tableau, SQL and Python.',
    items: [
      {
        title: 'Dashboards',
        alt: 'Analytics dashboard on laptop',
        desc: 'Pulling numbers out of scattered spreadsheets and app exports into one dashboard that updates itself. Excel, Power BI, Tableau or Looker, whichever your team already uses. Nobody has to copy-paste on Monday morning anymore.',
      },
      {
        title: 'Automated reports',
        alt: 'Charts and graphs on laptop',
        desc: 'Weekly KPI and sales reports that build themselves from your CRM, store and accounting data, and land in inboxes or Slack at the same time every week. Anything off target is highlighted.',
      },
      {
        title: 'Financial models',
        alt: 'Accounting with calculator',
        desc: 'Models for fundraising, pricing, or deciding whether a second location pays off. Assumptions kept separate from the math, scenarios you can switch between, and revenue built from real drivers like units, price and churn. Documented so a lender or investor can follow it.',
      },
      {
        title: 'Bookkeeping automation',
        alt: 'Calculator and spreadsheets',
        desc: "Bank and card transactions imported and categorized by rules you approve, invoices matched to payments, receipts scanned and filed, all exported to QuickBooks or Xero. Anything the rules can't place waits for a person to decide.",
      },
    ],
  },
  {
    id: 'video',
    label: 'Video',
    summary: 'Editing for YouTube, social, ads, podcasts and events, plus motion graphics.',
    items: [
      {
        title: 'Color & post-production',
        alt: 'Color grading timeline on screen',
        desc: 'Color correction and grading, audio cleanup, stabilization, and matching footage from different cameras so it cuts together. Exported in every format and aspect ratio you need, with files named so nothing gets uploaded wrong.',
      },
      {
        title: 'YouTube & social editing',
        alt: 'Vlogging camera setup',
        desc: 'Edits paced to keep people watching: a quick hook, dead air removed, synced captions, and B-roll where attention drops. Send raw footage and a brief, and you get back the video, thumbnail frames and chapter timestamps. One revision round included.',
      },
      {
        title: 'Ads & promos',
        alt: 'Cinema camera rig',
        desc: 'Short ads built around one message and a clear call to action. Delivered in 16:9, 1:1 and 9:16, with 30, 15 and 6-second cutdowns, each reframed properly instead of cropped. Licensed music only.',
      },
      {
        title: 'Podcast editing',
        alt: 'Studio microphone',
        desc: 'Noise removal, leveling, filler-word cleanup that still sounds natural, and loudness set to platform standards. For video podcasts we sync the cameras and cut between speakers. Each episode comes with show notes, timestamps and a few short clips.',
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    summary: 'Shopify, WooCommerce, WordPress and Magento stores, payments and fulfillment.',
    items: [
      {
        title: 'Payment gateways',
        alt: 'Card payment at a terminal',
        desc: "Setting up and fixing Stripe, PayPal, Square and Authorize.net on WooCommerce, Shopify and custom sites. 3-D Secure, webhooks, refunds, subscriptions and failed-payment emails. We test the failure cases first, since that's where money goes missing.",
      },
      {
        title: 'Checkout improvements',
        alt: 'Online checkout with credit card',
        desc: 'Shorter Stripe and PayPal checkouts: Apple Pay and Google Pay up front, address autocomplete, live tax and shipping, guest checkout. Retries never double-charge, and customers with a failed payment get an easy way back.',
      },
      {
        title: 'WooCommerce stores',
        alt: 'Contactless payment',
        desc: 'New WooCommerce builds and cleanups of existing ones. Lighter themes, fewer plugins, faster product pages and a smoother checkout. For an existing store we start with an audit and a prioritized list of fixes.',
      },
      {
        title: 'Shopify stores',
        alt: 'Miniature shopping cart with boxes',
        desc: "Custom Shopify themes in Liquid, with sections your team can rearrange on their own. We're picky about apps, since many are just another monthly fee. Moving over from WooCommerce, Wix or Squarespace includes a full redirect map so you keep your search rankings.",
      },
    ],
  },
  {
    id: 'saas',
    label: 'SaaS',
    summary: 'MVPs and full products with billing, auth, admin panels and cloud setup.',
    items: [
      {
        title: 'MVP builds',
        alt: 'Developers collaborating at a screen',
        desc: "The first version of your product only has to show that people will pay. We help cut the scope down to that, then build it: login, the core feature, Stripe billing and an admin view, on Next.js, Node and Postgres. It's built to grow, not to be thrown away.",
      },
      {
        title: 'Internal team tools',
        alt: 'Team working around laptops',
        desc: 'For when spreadsheets and group chats stop keeping up. Shared boards, task assignment, file sharing with versions, approvals and live updates, shaped around how your team already works.',
      },
      {
        title: 'Analytics features',
        alt: 'Analytics dashboard on a MacBook',
        desc: 'Event tracking, pipelines that stay fast at millions of rows, and dashboards your customers can use inside your product. For you, the SaaS basics on one screen: activation, retention, churn and MRR.',
      },
      {
        title: 'Client portals & admin panels',
        alt: 'Team meeting with laptops',
        desc: 'A place where customers see their projects, invoices, files and support threads, and an admin panel where your staff manage users, billing and permissions. In your branding, connected to Stripe, QuickBooks or your CRM.',
      },
    ],
  },
]

// image paths follow the <category>-<n>.jpg naming in public/images
categories.forEach((c) => c.items.forEach((item, i) => { item.img = `images/${c.id}-${i + 1}.jpg` }))

export default categories
