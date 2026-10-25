// Work categories shown in the "What we build" section.
// Each category has a one-line summary and 8 example project types.
// Photos are in public/images/<id>-<n>.jpg

const categories = [
  {
    id: 'web',
    label: 'Web',
    summary: 'Websites, web apps and backends in React, Next.js, Vue, Node, TypeScript and Laravel.',
    items: [
      {
        title: 'Custom web applications',
        alt: 'A robot building a web app connected to a calendar, invoices, and orders',
        desc: "For when the spreadsheet or off-the-shelf tool you've been bending stops fitting. We build around how your team already works, whether that's quoting, scheduling or inventory. Usually React or Vue on the front, Node or Laravel behind it, Postgres for the data. You review each milestone on a staging link, and the code is yours at the end.",
      },
      {
        title: 'Company websites',
        alt: 'Laptop with code editor open',
        desc: "Fast, clean sites for companies that want to look as solid online as they are in person. Proper SEO basics, analytics, and an editor your team can use without calling us. We'll help you sort out the content too, since that's usually the hard part.",
      },
      {
        title: 'React & Next.js frontends',
        alt: 'JavaScript code close-up',
        desc: 'New frontends built from your Figma files, or old jQuery and WordPress themes moved over to React and Next.js. We write it in TypeScript and keep the components simple enough that the next developer can pick it up. Your existing URLs, SEO and analytics carry over.',
      },
      {
        title: 'Landing pages',
        alt: 'HTML source code',
        desc: 'Pages for ad campaigns, launches and webinars. They load quickly, say what you do in the first line, and send leads straight into your CRM or email tool. Tracking is set up before launch so you can see what is working.',
      },
      {
        title: 'APIs & integrations',
        alt: 'Developer workstation with code',
        desc: "A lot of business software problems are really two tools that don't talk to each other. We build REST and GraphQL APIs and connect third-party ones like Stripe, Twilio, QuickBooks and shipping carriers. Retries, rate limits and logging are handled so things keep running overnight, and we write the docs.",
      },
      {
        title: 'Node & Laravel backends',
        alt: 'Programming in a dark editor',
        desc: 'Server-side work in Node, TypeScript and Laravel: new APIs, speeding up slow ones, or moving off an old codebase. We pay attention to the boring parts like auth, validation, queues and backups. You get deployment scripts and notes on how it all fits together.',
      },
      {
        title: 'Booking systems & client portals',
        alt: 'Code on a monitor',
        desc: 'Appointment booking, client portals, member areas and vendor dashboards. Your customers can book, pay and check their status on their own, and you manage everything from an admin panel. Email and SMS reminders included.',
      },
      {
        title: 'Fixes & rescues',
        alt: 'Developer desk with multiple screens',
        desc: "Slow site, broken plugin, or a project another developer left half done. We start by going through the code, hosting and database, then send you a plain write-up of what's wrong and what it costs to fix before any work starts.",
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
        alt: 'Smartphone on a desk',
        desc: 'From idea to the App Store and Google Play. We usually build with React Native or Flutter so one codebase covers both phones, and go native with Swift or Kotlin when the app really needs it. Crash reporting, analytics and push notifications are set up from the start.',
      },
      {
        title: 'React Native & Flutter',
        alt: 'Phone held in hand',
        desc: "Cross-platform apps that still feel right on each phone. We've shipped them for delivery services, fitness brands and field teams, so we know the tricky bits: offline sync, deep links, background tasks and native modules. If a feature would be better built natively, we'll say so.",
      },
      {
        title: 'App design',
        alt: 'Mobile app wireframes and design',
        desc: "Wireframes first, because they're cheap to change. Then full screens and a clickable prototype you can show real users before any code is written. We focus on onboarding and keeping the main task within easy reach of a thumb.",
      },
      {
        title: 'On-demand & delivery apps',
        alt: 'Modern smartphone screen',
        desc: 'A customer app, a provider app and an operations dashboard, all talking to each other. GPS tracking, pricing rules, Stripe payouts, ratings and notifications. Works for home services, delivery or rentals.',
      },
      {
        title: 'Fintech & wallet apps',
        alt: 'Black smartphone',
        desc: 'Wallets, budgeting tools, invoicing and payment features. Encrypted storage, biometric login, and Stripe or Plaid integrations written so a dropped connection never charges anyone twice. We also handle exports, disputes and the edge cases that come with real money.',
      },
      {
        title: 'Apps for Shopify & WooCommerce stores',
        alt: 'iPhone on a wooden desk',
        desc: 'A mobile app that syncs with the store you already run, so products and orders stay in one place. It adds push notifications for restocks, quick reorder and loyalty points. Nothing about your current store has to change.',
      },
      {
        title: 'Chat & social features',
        alt: 'Phone with blue interface',
        desc: 'Messaging, feeds, comments and online status inside your app. Built to hold up on patchy mobile connections, with notifications that open the right conversation and basic moderation tools.',
      },
      {
        title: 'Launch & ongoing updates',
        alt: 'Smartphone on a table',
        desc: 'Certificates, store listings, privacy forms, screenshots and the occasional rejection from Apple. We handle the launch, set up automated builds, and keep the app working as each new iOS and Android version comes out.',
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
        alt: 'Abstract AI visual',
        desc: "Agents that handle real tasks: drafting email replies, qualifying leads, summarizing documents, sorting support tickets, updating your CRM. Built on OpenAI, Claude or Gemini, with a human sign-off step where it matters and a log of everything it does. Sometimes a simple script is the better buy, and we'll tell you when.",
      },
      {
        title: 'Search over your own documents',
        alt: 'Robot working through information on a tablet',
        desc: 'An assistant that answers from your manuals, policies and past tickets instead of making things up. We set up the document pipeline and vector database (Pinecone, Chroma), then test it against questions your team actually asks. Every answer shows where it came from.',
      },
      {
        title: 'Support chatbots',
        alt: 'White robot assistant',
        desc: "Bots trained on your help docs that can look up an order or reset a password, not just chat. When they can't help, they pass the customer to a person with the whole conversation attached. You get a weekly list of the questions it couldn't answer.",
      },
      {
        title: 'Phone assistants',
        alt: 'Robot hand reaching toward a person',
        desc: 'Voice bots on Twilio that answer calls, book appointments, handle pricing questions and pass urgent calls to a person. Every call is transcribed and summarized into your CRM. Useful for clinics and service businesses that miss calls after hours.',
      },
      {
        title: 'Writing assistants',
        alt: 'Two people writing at laptops in an office',
        desc: "Drafts for emails, proposals, product descriptions and support replies, written from examples you approve. A person still signs off before anything reaches a customer. You can see which draft the model wrote and edit it in the same place.",
      },
      {
        title: 'Reading invoices and forms',
        alt: 'Paper forms and a calculator on a desk',
        desc: 'Invoices, contracts, IDs and intake forms turned into clean rows in a spreadsheet or your database. Fields the model is unsure about get flagged for a person, and the original file stays attached so you can check it.',
      },
      {
        title: 'Meeting and call summaries',
        alt: 'Close-up of a computer chip',
        desc: 'A recording or a transcript becomes notes, decisions and next steps, then lands on the right ticket or CRM record. Useful after sales calls and clinic visits. You choose how long the recording is kept.',
      },
      {
        title: 'Private assistants for your team',
        alt: 'Illuminated circuit board',
        desc: "A private assistant your staff can ask about prices, policies and how a job is done. It only answers from the material you give us, and it says when it does not know. Access follows the logins your team already uses.",
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
        alt: 'Work on a computer screen',
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
      {
        title: 'Lead follow-up',
        alt: 'People working through messages at their desks',
        desc: 'A new enquiry is logged, scored and followed up without someone copying it between the website, the inbox and the CRM. A reply stops the sequence. You get a note when a lead goes quiet or when a message fails to send.',
      },
      {
        title: 'Invoices and bookkeeping',
        alt: 'Tax forms, a calculator and paperwork on a desk',
        desc: 'A paid invoice updates the books, sends a receipt and tells the person who needs to know. We connect QuickBooks, Xero or the spreadsheet you already keep, and we add a check so a payment is never recorded twice.',
      },
      {
        title: 'Reports that build themselves',
        alt: 'A line chart on a laptop screen',
        desc: 'The Monday numbers, the weekly pipeline or the stock count, assembled from the tools you already use and sent where your team reads them. We start from the report you look at today, then remove the manual export.',
      },
      {
        title: 'Approvals and handoffs',
        alt: 'A workflow mapped on a board with connected steps',
        desc: 'A request moves from the person who filed it to the person who approves it, with a reminder if it sits too long. When it is approved, the next step starts on its own: an order, a ticket or a message to the customer.',
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
      {
        title: 'Portfolio & risk dashboards',
        alt: 'Finance documents and analysis',
        desc: 'One screen for positions across all your brokers and exchanges: exposure, open P&L, margin, and an alert when you cross a limit you set. It keeps history, so you can look back at how a bad week played out.',
      },
      {
        title: 'Market data pipelines',
        alt: 'Market charts on a desk',
        desc: 'Collecting and cleaning price history, order books, news and on-chain data, including the gaps, duplicate ticks and symbol changes. Stored for fast queries, kept up to date, with an alert if a feed stops.',
      },
      {
        title: 'Mobile trading alerts',
        alt: 'Trading app on a phone',
        desc: "Phone alerts for price levels, signals and position changes, plus quick actions to close or adjust trades through your broker's API. Every action asks for confirmation, so a pocket tap never places a trade.",
      },
      {
        title: 'Broker & exchange APIs',
        alt: 'Candlestick chart',
        desc: 'Integrations with Interactive Brokers, Alpaca, Binance, Bybit, OANDA and others. Order placement, balance sync, price streams that reconnect on their own, and one data format across venues. Tested in a sandbox before live keys go in.',
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
      {
        title: 'Power BI & Tableau',
        alt: 'Data on a screen',
        desc: 'Most frustrating Power BI reports have a messy data model underneath. We set up the connections, model and measures properly, then design the pages. Row-level security, scheduled refresh, and a short training session for your team.',
      },
      {
        title: 'Data cleanup',
        alt: 'Printed charts and documents',
        desc: 'That 80,000-row file with three date formats and duplicate customers. We clean it with Python and SQL, flag what needs a human look, and leave you a repeatable pipeline so it stays clean.',
      },
      {
        title: 'Inventory & job trackers',
        alt: 'Data analysis workspace',
        desc: 'Inventory with reorder alerts and barcode scanning, job boards from intake to delivery, maintenance schedules, staff rotas. Built in Excel, or as a small web app if several people need it at once. Simple enough that people actually use it.',
      },
      {
        title: 'Forecasting',
        alt: 'Analytics planning sketch',
        desc: 'Demand forecasts with seasonality, cash-flow projections that allow for late payers, churn and cohort analysis, and what-if scenarios you can adjust. We pick a method your data can support and always show a range, not one overconfident number.',
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
      {
        title: 'Event & multi-camera edits',
        alt: 'Camera in a studio',
        desc: 'Conferences, weddings, launches and live shows. We sync every camera and audio source, cut between angles, and deliver a highlight reel, full session recordings and clips for social, with lower thirds and sponsor graphics.',
      },
      {
        title: 'Motion graphics',
        alt: 'Creative retro tech setup',
        desc: 'Logo animations, animated charts, UI walkthroughs and explainer videos from script to render, in your colors and fonts. Project files are included, so changing a price later is a quick edit.',
      },
      {
        title: 'Training & internal videos',
        alt: 'Film production gear',
        desc: 'Onboarding, safety, software tutorials and internal updates. Clear chapters, on-screen text for the key points, and zooms on the details people need to see. Consistent branding across the set, and easy to update.',
      },
      {
        title: 'Shorts, Reels & TikTok',
        alt: 'Video editing workspace',
        desc: 'We find the best 20 to 50 seconds in your podcasts and webinars and cut them into vertical clips, reframed to 9:16 with captions, since most people watch on mute. Delivered in weekly batches.',
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
      {
        title: 'Order & fulfillment automation',
        alt: 'Online shopping packages',
        desc: 'Orders routed to the right warehouse or supplier, shipping labels generated with rates compared, tracking sent to customers, and stock updated across every channel. Low-stock alerts before a bestseller runs out. Returns too.',
      },
      {
        title: 'Store migrations',
        alt: 'Open sign at a storefront',
        desc: 'Moving between Shopify, WooCommerce, Magento and others without losing orders, customers or SEO. Everything is moved and checked, payments and shipping are tested on staging, and launch day is a short planned cutover with a way back.',
      },
      {
        title: 'Retail catalogs',
        alt: 'Clothing retail display',
        desc: 'Clean size and color variants, size guides, collections that fill themselves by rules, and filters that match how people actually shop. Bulk updates from a spreadsheet so hundreds of SKUs stay manageable.',
      },
      {
        title: 'Product page improvements',
        alt: 'Product photo of a watch',
        desc: "Better galleries with zoom and video, clearer copy, reviews with photos, plain stock and delivery info, and cross-sells that make sense. We work on page speed and A/B test changes when there's enough traffic to tell.",
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
      {
        title: 'Multi-tenant platforms',
        alt: 'Modern office teamwork',
        desc: 'Tenant separation is cheap to get right early and painful to add later. We build it into the database, configuration, billing and background jobs from day one, with room for SSO and custom domains when bigger customers ask.',
      },
      {
        title: 'Stripe subscriptions',
        alt: 'Engineer reviewing code on screen',
        desc: "Plans, metered usage, trials, coupons, upgrades with correct proration, Stripe Tax, and retry emails for failed cards. Webhooks are handled so your database and Stripe don't drift apart. Customers get a self-service billing page.",
      },
      {
        title: 'Login, roles & security',
        alt: 'Startup team planning',
        desc: 'Secure sessions, Google and Microsoft sign-in, SAML for enterprise, two-factor auth and role-based permissions. We take extra care with password reset and invites, which is where users get stuck and attackers get in. Security events are logged.',
      },
      {
        title: 'AWS, Azure & CI/CD',
        alt: 'Product planning session',
        desc: "Docker, managed databases with backups, a CDN, a staging environment that matches production, and pipelines that test and deploy every change. Monitoring and searchable logs included. Written as code, so it isn't stuck in one person's head.",
      },
    ],
  },
]

// image paths follow the <category>-<n>.jpg naming in public/images
categories.forEach((c) => c.items.forEach((item, i) => { item.img = `images/${c.id}-${i + 1}.jpg` }))

export default categories
