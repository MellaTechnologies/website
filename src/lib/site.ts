export const site = {
  name: "Mella Technologies",
  shortName: "Mella",
  // Set NEXT_PUBLIC_SITE_URL in production if the domain differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mellatechnologies.com").replace(/\/$/, ""),
  title: "Mella Technologies — Turn Manual Work into Digital Systems in Ethiopia",
  description:
    "Mella Technologies is a customer-first software company in Ethiopia. We replace paper records, notebooks and spreadsheets with simple digital systems for stock, sales, customers, staff and reports — with training and support included.",
  keywords: [
    "digital transformation Ethiopia",
    "digitize business Ethiopia",
    "paperless business Ethiopia",
    "custom business software Ethiopia",
    "software company Addis Ababa",
    "inventory management system Ethiopia",
    "point of sale system Ethiopia",
    "customer management software",
    "payroll and attendance system",
    "Excel to web app",
    "website design Ethiopia",
    "Mella Technologies",
  ],
  email: "yohana@mellatechnologies.com",
  phone: "+251900118533",
  phoneDisplay: "+251 900 118 533",
  phones: [
    { tel: "+251900118533", display: "+251 900 118 533" },
    { tel: "+251995499377", display: "+251 995 499 377" },
    { tel: "+251966926721", display: "+251 966 926 721" },
  ],
  country: "ET",
  locale: "en_US",
  colors: { paper: "#ffffff", ink: "#2c1c12", accent: "#b5461c" },
} as const;

export const appointmentHref = `mailto:${site.email}?subject=${encodeURIComponent("Appointment request")}`;

/** Credibility figures shown in the stat strips. */
export const stats = [
  { value: "100%", label: "Customer-first, every project" },
  { value: "1 → ∞", label: "Start with one process, grow at your pace" },
  { value: "Free", label: "On-site consultation to begin" },
  { value: "Local", label: "Team you can call, email or meet" },
] as const;

/** Why businesses choose Mella — reused on Home and About. */
export const values = [
  { title: "Customer first", body: "We start by listening to how you and your customers work today, and design around that." },
  { title: "Built around you", body: "Digitize one process first or everything at once. You choose, and we grow with you." },
  { title: "Affordable", body: "Pricing set by the size of your business, so small businesses pay small-business prices." },
  { title: "Free consultation", body: "We visit, look at your current paperwork and show you what going digital would look like." },
  { title: "Full training", body: "We train your staff until they are confident, so nobody goes back to the notebook." },
  { title: "Ongoing support", body: "After launch we check in regularly and fix issues quickly. A local team you can call or meet." },
] as const;

/** How an engagement runs, start to finish — the numbered process. */
export const processSteps = [
  { step: "01", title: "Consult", body: "A free visit to see your paperwork and understand how your business really runs." },
  { step: "02", title: "Design", body: "We map the manual steps and plan a simple system around the one that costs you most time." },
  { step: "03", title: "Build", body: "We build and test the tool, shaped to your workflow — not a rigid off-the-shelf product." },
  { step: "04", title: "Train", body: "Hands-on training for your team until everyone is confident using it day to day." },
  { step: "05", title: "Support", body: "We check in regularly, fix issues fast, and add the next process when you're ready." },
] as const;

/**
 * Portfolio case studies — PLACEHOLDER content.
 * Replace with real client work: swap names, details, metrics and (optional) links.
 */
export const caseStudies = [
  {
    slug: "retail-inventory",
    client: "Addis Mart",
    industry: "Retail & wholesale",
    challenge: "Stock counted by hand in notebooks, with frequent stock-outs and no view of fast-moving items.",
    challengePoints: [
      "Counted by hand — Stock tallied in notebooks, slow and easy to get wrong.",
      "Frequent stock-outs — Best-sellers ran out with no early warning.",
      "No clear view — No way to see what was moving fast or sitting idle.",
    ],
    solution: "A live inventory and point-of-sale system with low-stock alerts and daily sales totals.",
    solutionPoints: [
      "Live inventory — Stock updates automatically with every sale.",
      "Point of sale — Each sale recorded in seconds, receipts included.",
      "Low-stock alerts — The team is warned before a fast mover runs out.",
      "Daily totals — The day's sales summed up on their own.",
    ],
    result: "Stock-outs down, counting time cut from hours to minutes.",
    metric: "−90% time on stock counts",
    image: "/work-1.png",
  },
  {
    slug: "clinic-bookings",
    client: "Bana Clinic",
    industry: "Healthcare",
    challenge: "Appointments kept in a paper book, double-bookings and missed follow-ups.",
    challengePoints: [
      "Paper appointment book — One shared book, hard to read and easy to lose.",
      "Double-bookings — Two patients landing in the same slot.",
      "Missed follow-ups — No reminders, so appointments slipped through.",
    ],
    solution: "Online bookings with reminders and a shared schedule for the front desk.",
    solutionPoints: [
      "Online bookings — Patients pick an open slot themselves.",
      "Automatic reminders — Fewer no-shows with timely messages.",
      "Shared schedule — The whole front desk sees the same day at a glance.",
    ],
    result: "Fewer no-shows and a clear view of each day at a glance.",
    metric: "−40% no-shows",
    image: "/work-2.png",
  },
  {
    slug: "logistics-reports",
    client: "Sheger Logistics",
    industry: "Transport & logistics",
    challenge: "Daily figures added up by hand across several spreadsheets passed between staff.",
    challengePoints: [
      "Manual figures — Daily numbers added up by hand.",
      "Scattered spreadsheets — Data passed between staff in separate files.",
      "Slow to compile — A morning's work before anyone saw the totals.",
    ],
    solution: "One shared system with automatic reports and dashboards for management.",
    solutionPoints: [
      "One shared system — All figures live in a single place.",
      "Automatic reports — Totals compiled the moment data lands.",
      "Management dashboards — Clear visibility for faster decisions.",
    ],
    result: "Reports that once took a morning are now ready instantly.",
    metric: "Reports in seconds",
    image: "/work-3.png",
  },
  {
    slug: "restaurant-pos",
    client: "Enat Kitchen",
    industry: "Hospitality",
    challenge: "Orders and receipts on paper pads, hard to reconcile at the end of the night.",
    challengePoints: [
      "Paper order pads — Orders and receipts written by hand.",
      "Hard to reconcile — Totals rarely matched at the end of the night.",
      "Manual menu changes — No simple way to update items and prices.",
    ],
    solution: "A point-of-sale app with receipts, daily totals and simple menu management.",
    solutionPoints: [
      "Point-of-sale app — Orders and receipts handled in one place.",
      "Daily totals — The night's takings add up automatically.",
      "Menu management — Items and prices updated in a few taps.",
    ],
    result: "Faster service and books that balance every evening.",
    metric: "Nightly totals balanced",
  },
  {
    slug: "school-admin",
    client: "Light Academy",
    industry: "Education",
    challenge: "Attendance, fees and records spread across notebooks and Excel files.",
    challengePoints: [
      "Spread across tools — Attendance, fees and records in notebooks and Excel.",
      "Duplicated effort — The same details re-entered in several places.",
      "Hard to find records — Pulling a student's history took time.",
    ],
    solution: "A custom admin app for attendance, fee tracking and student records in one place.",
    solutionPoints: [
      "One admin app — Attendance, fees and records together.",
      "Fee tracking — Who has paid and who hasn't, at a glance.",
      "Student records — Every student's details in one searchable place.",
    ],
    result: "Staff spend less time on paperwork and more with students.",
    metric: "One place for records",
  },
  {
    slug: "workshop-website",
    client: "Dire Motors",
    industry: "Services",
    challenge: "No online presence, so new customers struggled to find or contact them.",
    challengePoints: [
      "No online presence — New customers couldn't find the business.",
      "Hard to contact — No clear way to reach them online.",
      "Lost enquiries — Interested customers went elsewhere instead.",
    ],
    solution: "A fast, mobile-friendly website with services, location and a contact button.",
    solutionPoints: [
      "Fast website — Loads quickly on any phone.",
      "Services & location — What they do and where to find them, up front.",
      "Contact button — One tap to get in touch.",
    ],
    result: "New enquiries now arrive straight from online search.",
    metric: "Found online",
  },
] as const;

/** Manual processes we turn into digital systems. */
export const solutions = [
  { slug: "inventory", name: "Stock & inventory", body: "Swap stock notebooks for live counts and low-stock alerts." },
  { slug: "sales", name: "Sales & point of sale", body: "Record every sale in seconds, with receipts and daily totals." },
  { slug: "customers", name: "Customer records", body: "Keep every customer, order and follow-up in one place." },
  { slug: "bookings", name: "Bookings & appointments", body: "Replace the appointment book with online scheduling." },
  { slug: "staff", name: "Staff, attendance & payroll", body: "Track attendance and leave, and run payroll without paper." },
  { slug: "reports", name: "Reports & dashboards", body: "See today's numbers at a glance instead of adding them by hand." },
  { slug: "forms", name: "Forms & approvals", body: "Turn paper forms and signatures into quick digital requests." },
  { slug: "spreadsheets", name: "Excel to app", body: "Move the spreadsheets you rely on into a shared, safe system." },
  { slug: "websites", name: "Websites", body: "Help customers find you online and get in touch." },
  { slug: "custom", name: "Custom apps", body: "Something else done by hand? We build the app for it." },
] as const;
