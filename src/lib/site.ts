import type { Dict } from "./i18n";

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
  email: "info@mellatechnologies.com",
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

export const appointmentHref = `mailto:${site.email}?subject=${encodeURIComponent("Appointment request / የቀጠሮ ጥያቄ")}`;

/** Credibility figures shown in the stat strips. */
export const stats: { value: string; label: Dict }[] = [
  { value: "100%", label: { en: "Customer-first, every project", am: "ደንበኛ ቀዳሚ፣ በእያንዳንዱ ፕሮጀክት" } },
  { value: "1 → ∞", label: { en: "Start with one process, grow at your pace", am: "ከአንድ ሂደት ጀምሮ በፍጥነትዎ ያድጉ" } },
  { value: "Free", label: { en: "On-site consultation to begin", am: "ለመጀመር የቦታ ላይ ምክክር" } },
  { value: "Local", label: { en: "Team you can call, email or meet", am: "የሚደውሉለት፣ ኢሜይል የሚልኩለት ወይም የሚገናኙት ቡድን" } },
];

/**
 * Portfolio case studies — PLACEHOLDER content.
 * Replace with real client work: swap names, details, metrics and (optional) links.
 * Bullet strings follow "Lead — detail"; the " — " separator is parsed in the UI.
 */
type CaseStudy = {
  slug: string;
  client: Dict;
  industry: Dict;
  challenge: Dict;
  challengePoints: Dict[];
  solution: Dict;
  solutionPoints: Dict[];
  result: Dict;
  metric: Dict;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-inventory",
    client: { en: "Addis Mart", am: "አዲስ ማርት" },
    industry: { en: "Retail & wholesale", am: "ችርቻሮና ጅምላ" },
    challenge: {
      en: "Stock counted by hand in notebooks, with frequent stock-outs and no view of fast-moving items.",
      am: "ዕቃ በደብተር በእጅ ይቆጠራል፣ ተደጋጋሚ የዕቃ እጥረት ያጋጥማል፣ በፍጥነት የሚሸጡ ዕቃዎችንም ለማየት አይቻልም።",
    },
    challengePoints: [
      {
        en: "Counted by hand — Stock tallied in notebooks, slow and easy to get wrong.",
        am: "በእጅ መቁጠር — ዕቃ በደብተር ይመዘገባል፣ ዘገምተኛና በቀላሉ የሚሳሳት።",
      },
      {
        en: "Frequent stock-outs — Best-sellers ran out with no early warning.",
        am: "ተደጋጋሚ እጥረት — በብዛት የሚሸጡ ዕቃዎች ቅድመ ማስጠንቀቂያ ሳይኖር ያልቃሉ።",
      },
      {
        en: "No clear view — No way to see what was moving fast or sitting idle.",
        am: "ግልጽ እይታ የለም — በፍጥነት የሚንቀሳቀሰውን ወይም ተኝቶ የቀረውን ለማወቅ መንገድ የለም።",
      },
    ],
    solution: {
      en: "A live inventory and point-of-sale system with low-stock alerts and daily sales totals.",
      am: "የቀጥታ የዕቃ ክምችትና የሽያጭ ነጥብ ሥርዓት ከዕቃ እጥረት ማስጠንቀቂያና ከዕለታዊ የሽያጭ ድምር ጋር።",
    },
    solutionPoints: [
      { en: "Live inventory — Stock updates automatically with every sale.", am: "ቀጥታ ክምችት — በእያንዳንዱ ሽያጭ ዕቃው በራሱ ይዘመናል።" },
      { en: "Point of sale — Each sale recorded in seconds, receipts included.", am: "የሽያጭ ነጥብ — እያንዳንዱ ሽያጭ በሰከንዶች ይመዘገባል፣ ደረሰኝም ይካተታል።" },
      { en: "Low-stock alerts — The team is warned before a fast mover runs out.", am: "የእጥረት ማስጠንቀቂያ — በፍጥነት የሚሸጥ ዕቃ ከማለቁ በፊት ቡድኑ ይጠነቀቃል።" },
      { en: "Daily totals — The day's sales summed up on their own.", am: "ዕለታዊ ድምር — የቀኑ ሽያጭ በራሱ ይደመራል።" },
    ],
    result: { en: "Stock-outs down, counting time cut from hours to minutes.", am: "እጥረት ቀንሷል፣ የመቁጠር ጊዜ ከሰዓታት ወደ ደቂቃዎች ወርዷል።" },
    metric: { en: "−90% time on stock counts", am: "−90% በዕቃ ቆጠራ ጊዜ" },
    image: "/work-1.png",
  },
  {
    slug: "clinic-bookings",
    client: { en: "Bana Clinic", am: "ባና ክሊኒክ" },
    industry: { en: "Healthcare", am: "ጤና እንክብካቤ" },
    challenge: {
      en: "Appointments kept in a paper book, double-bookings and missed follow-ups.",
      am: "ቀጠሮዎች በወረቀት መዝገብ ይያዛሉ፣ ድርብ ቀጠሮና ያመለጡ ክትትሎች ያጋጥማሉ።",
    },
    challengePoints: [
      { en: "Paper appointment book — One shared book, hard to read and easy to lose.", am: "የወረቀት ቀጠሮ መዝገብ — አንድ የጋራ መዝገብ፣ ለማንበብ አስቸጋሪና በቀላሉ የሚጠፋ።" },
      { en: "Double-bookings — Two patients landing in the same slot.", am: "ድርብ ቀጠሮ — ሁለት ታካሚዎች በአንድ ጊዜ ላይ ይገጥማሉ።" },
      { en: "Missed follow-ups — No reminders, so appointments slipped through.", am: "ያመለጡ ክትትሎች — አስታዋሽ ስለሌለ ቀጠሮዎች ያመልጣሉ።" },
    ],
    solution: {
      en: "Online bookings with reminders and a shared schedule for the front desk.",
      am: "ከአስታዋሽ ጋር የመስመር ላይ ቀጠሮና ለአቀባበል ክፍሉ የጋራ መርሐ ግብር።",
    },
    solutionPoints: [
      { en: "Online bookings — Patients pick an open slot themselves.", am: "የመስመር ላይ ቀጠሮ — ታካሚዎች ራሳቸው ክፍት ጊዜ ይመርጣሉ።" },
      { en: "Automatic reminders — Fewer no-shows with timely messages.", am: "ራስ-ሰር አስታዋሽ — በወቅታዊ መልዕክቶች ቀጠሮ የሚያፈርሱ ይቀንሳሉ።" },
      { en: "Shared schedule — The whole front desk sees the same day at a glance.", am: "የጋራ መርሐ ግብር — መላው የአቀባበል ክፍል ተመሳሳዩን ቀን በአንድ እይታ ያያል።" },
    ],
    result: { en: "Fewer no-shows and a clear view of each day at a glance.", am: "ቀጠሮ የሚያፈርሱ ቀንሰዋል፣ እያንዳንዱ ቀንም በአንድ እይታ ግልጽ ሆኗል።" },
    metric: { en: "−40% no-shows", am: "−40% ቀጠሮ ማፍረስ" },
    image: "/work-2.png",
  },
  {
    slug: "logistics-reports",
    client: { en: "Sheger Logistics", am: "ሸገር ሎጂስቲክስ" },
    industry: { en: "Transport & logistics", am: "ትራንስፖርትና ሎጂስቲክስ" },
    challenge: {
      en: "Daily figures added up by hand across several spreadsheets passed between staff.",
      am: "ዕለታዊ ቁጥሮች በሠራተኞች መካከል በሚተላለፉ በርካታ ስፕረድሺቶች ላይ በእጅ ይደመራሉ።",
    },
    challengePoints: [
      { en: "Manual figures — Daily numbers added up by hand.", am: "በእጅ ቁጥሮች — ዕለታዊ ቁጥሮች በእጅ ይደመራሉ።" },
      { en: "Scattered spreadsheets — Data passed between staff in separate files.", am: "የተበታተኑ ስፕረድሺቶች — መረጃ በተለያዩ ፋይሎች በሠራተኞች መካከል ይተላለፋል።" },
      { en: "Slow to compile — A morning's work before anyone saw the totals.", am: "ለማጠናቀር ዘገምተኛ — ድምሩን ከማየት በፊት የጠዋት ሥራ ይፈጃል።" },
    ],
    solution: {
      en: "One shared system with automatic reports and dashboards for management.",
      am: "ለአመራር ራስ-ሰር ሪፖርቶችና ዳሽቦርዶች ያሉት አንድ የጋራ ሥርዓት።",
    },
    solutionPoints: [
      { en: "One shared system — All figures live in a single place.", am: "አንድ የጋራ ሥርዓት — ሁሉም ቁጥሮች በአንድ ቦታ ይገኛሉ።" },
      { en: "Automatic reports — Totals compiled the moment data lands.", am: "ራስ-ሰር ሪፖርቶች — መረጃው እንደገባ ድምሩ ይጠናቀራል።" },
      { en: "Management dashboards — Clear visibility for faster decisions.", am: "የአመራር ዳሽቦርዶች — ለፈጣን ውሳኔ ግልጽ እይታ።" },
    ],
    result: { en: "Reports that once took a morning are now ready instantly.", am: "ቀደም ሲል ጠዋት ይፈጁ የነበሩ ሪፖርቶች አሁን ወዲያውኑ ዝግጁ ናቸው።" },
    metric: { en: "Reports in seconds", am: "ሪፖርቶች በሰከንዶች" },
    image: "/work-3.png",
  },
  {
    slug: "restaurant-pos",
    client: { en: "Enat Kitchen", am: "እናት ኪችን" },
    industry: { en: "Hospitality", am: "እንግዳ አቀባበል" },
    challenge: {
      en: "Orders and receipts on paper pads, hard to reconcile at the end of the night.",
      am: "ትዕዛዞችና ደረሰኞች በወረቀት ላይ፣ በሌሊቱ መጨረሻ ለማስታረቅ አስቸጋሪ።",
    },
    challengePoints: [
      { en: "Paper order pads — Orders and receipts written by hand.", am: "የወረቀት ትዕዛዝ ደብተር — ትዕዛዞችና ደረሰኞች በእጅ ይጻፋሉ።" },
      { en: "Hard to reconcile — Totals rarely matched at the end of the night.", am: "ለማስታረቅ አስቸጋሪ — በሌሊቱ መጨረሻ ድምሩ እምብዛም አይገጥምም።" },
      { en: "Manual menu changes — No simple way to update items and prices.", am: "በእጅ የምናሌ ለውጥ — ዕቃዎችንና ዋጋዎችን ለማዘመን ቀላል መንገድ የለም።" },
    ],
    solution: {
      en: "A point-of-sale app with receipts, daily totals and simple menu management.",
      am: "ከደረሰኝ፣ ከዕለታዊ ድምርና ከቀላል የምናሌ አያያዝ ጋር የሽያጭ ነጥብ መተግበሪያ።",
    },
    solutionPoints: [
      { en: "Point-of-sale app — Orders and receipts handled in one place.", am: "የሽያጭ ነጥብ መተግበሪያ — ትዕዛዞችና ደረሰኞች በአንድ ቦታ ይያዛሉ።" },
      { en: "Daily totals — The night's takings add up automatically.", am: "ዕለታዊ ድምር — የሌሊቱ ገቢ በራሱ ይደመራል።" },
      { en: "Menu management — Items and prices updated in a few taps.", am: "የምናሌ አያያዝ — ዕቃዎችና ዋጋዎች በጥቂት ነኪዎች ይዘመናሉ።" },
    ],
    result: { en: "Faster service and books that balance every evening.", am: "ፈጣን አገልግሎትና በየምሽቱ የሚመጣጠን ሂሳብ።" },
    metric: { en: "Nightly totals balanced", am: "የሌሊት ድምር ተመጣጥኗል" },
  },
  {
    slug: "school-admin",
    client: { en: "Light Academy", am: "ብርሃን አካዳሚ" },
    industry: { en: "Education", am: "ትምህርት" },
    challenge: {
      en: "Attendance, fees and records spread across notebooks and Excel files.",
      am: "መገኘት፣ ክፍያና መዝገቦች በደብተሮችና በኤክሴል ፋይሎች ተበታትነዋል።",
    },
    challengePoints: [
      { en: "Spread across tools — Attendance, fees and records in notebooks and Excel.", am: "በመሣሪያዎች የተበታተነ — መገኘት፣ ክፍያና መዝገቦች በደብተርና በኤክሴል።" },
      { en: "Duplicated effort — The same details re-entered in several places.", am: "የተደጋገመ ሥራ — ተመሳሳይ መረጃ በበርካታ ቦታዎች እንደገና ይገባል።" },
      { en: "Hard to find records — Pulling a student's history took time.", am: "መዝገብ ለማግኘት አስቸጋሪ — የተማሪን ታሪክ ማውጣት ጊዜ ይፈጃል።" },
    ],
    solution: {
      en: "A custom admin app for attendance, fee tracking and student records in one place.",
      am: "ለመገኘት፣ ለክፍያ ክትትልና ለተማሪ መዝገብ በአንድ ቦታ የሆነ ብጁ የአስተዳደር መተግበሪያ።",
    },
    solutionPoints: [
      { en: "One admin app — Attendance, fees and records together.", am: "አንድ የአስተዳደር መተግበሪያ — መገኘት፣ ክፍያና መዝገቦች በአንድ ላይ።" },
      { en: "Fee tracking — Who has paid and who hasn't, at a glance.", am: "የክፍያ ክትትል — ማን እንደከፈለና ማን እንዳልከፈለ በአንድ እይታ።" },
      { en: "Student records — Every student's details in one searchable place.", am: "የተማሪ መዝገብ — የእያንዳንዱ ተማሪ መረጃ በአንድ ሊፈለግ በሚችል ቦታ።" },
    ],
    result: { en: "Staff spend less time on paperwork and more with students.", am: "ሠራተኞች በወረቀት ሥራ ያነሰ፣ ከተማሪዎች ጋር ደግሞ የበለጠ ጊዜ ያሳልፋሉ።" },
    metric: { en: "One place for records", am: "ለመዝገቦች አንድ ቦታ" },
  },
  {
    slug: "workshop-website",
    client: { en: "Dire Motors", am: "ድሬ ሞተርስ" },
    industry: { en: "Services", am: "አገልግሎቶች" },
    challenge: {
      en: "No online presence, so new customers struggled to find or contact them.",
      am: "የመስመር ላይ መገኘት ስለሌለ አዳዲስ ደንበኞች ሊያገኟቸው ወይም ሊያነጋግሯቸው ተቸግረዋል።",
    },
    challengePoints: [
      { en: "No online presence — New customers couldn't find the business.", am: "የመስመር ላይ መገኘት የለም — አዳዲስ ደንበኞች ንግዱን ማግኘት አልቻሉም።" },
      { en: "Hard to contact — No clear way to reach them online.", am: "ለማነጋገር አስቸጋሪ — በመስመር ላይ ለማግኘት ግልጽ መንገድ የለም።" },
      { en: "Lost enquiries — Interested customers went elsewhere instead.", am: "የጠፉ ጥያቄዎች — ፍላጎት ያላቸው ደንበኞች ወደ ሌላ ቦታ ሄዱ።" },
    ],
    solution: {
      en: "A fast, mobile-friendly website with services, location and a contact button.",
      am: "ፈጣንና ለሞባይል ምቹ የሆነ ከአገልግሎቶች፣ አድራሻና የማነጋገሪያ አዝራር ጋር ድር ጣቢያ።",
    },
    solutionPoints: [
      { en: "Fast website — Loads quickly on any phone.", am: "ፈጣን ድር ጣቢያ — በማንኛውም ስልክ በፍጥነት ይከፈታል።" },
      { en: "Services & location — What they do and where to find them, up front.", am: "አገልግሎቶችና አድራሻ — ምን እንደሚሠሩና የት እንደሚገኙ፣ በግልጽ።" },
      { en: "Contact button — One tap to get in touch.", am: "የማነጋገሪያ አዝራር — ለመገናኘት አንድ ነኪ።" },
    ],
    result: { en: "New enquiries now arrive straight from online search.", am: "አዳዲስ ጥያቄዎች አሁን በቀጥታ ከመስመር ላይ ፍለጋ ይመጣሉ።" },
    metric: { en: "Found online", am: "በመስመር ላይ ተገኝቷል" },
  },
];

/** Manual processes we turn into digital systems. */
export const solutions: { slug: string; name: Dict; body: Dict }[] = [
  { slug: "inventory", name: { en: "Stock & inventory", am: "ዕቃና ክምችት" }, body: { en: "Swap stock notebooks for live counts and low-stock alerts.", am: "የዕቃ ደብተሮችን በቀጥታ ቆጠራና በእጥረት ማስጠንቀቂያ ይተኩ።" } },
  { slug: "sales", name: { en: "Sales & point of sale", am: "ሽያጭና የሽያጭ ነጥብ" }, body: { en: "Record every sale in seconds, with receipts and daily totals.", am: "እያንዳንዱን ሽያጭ ከደረሰኝና ከዕለታዊ ድምር ጋር በሰከንዶች ይመዝግቡ።" } },
  { slug: "customers", name: { en: "Customer records", am: "የደንበኛ መዝገቦች" }, body: { en: "Keep every customer, order and follow-up in one place.", am: "እያንዳንዱን ደንበኛ፣ ትዕዛዝና ክትትል በአንድ ቦታ ያስቀምጡ።" } },
  { slug: "bookings", name: { en: "Bookings & appointments", am: "ቦታ ማስያዝና ቀጠሮዎች" }, body: { en: "Replace the appointment book with online scheduling.", am: "የቀጠሮ መዝገብን በመስመር ላይ መርሐ ግብር ይተኩ።" } },
  { slug: "staff", name: { en: "Staff, attendance & payroll", am: "ሠራተኞች፣ መገኘትና ደመወዝ" }, body: { en: "Track attendance and leave, and run payroll without paper.", am: "መገኘትንና ፈቃድን ይከታተሉ፣ ደመወዝንም ያለ ወረቀት ያስተዳድሩ።" } },
  { slug: "reports", name: { en: "Reports & dashboards", am: "ሪፖርቶችና ዳሽቦርዶች" }, body: { en: "See today's numbers at a glance instead of adding them by hand.", am: "የዛሬውን ቁጥሮች በእጅ ከመደመር ይልቅ በአንድ እይታ ይመልከቱ።" } },
  { slug: "forms", name: { en: "Forms & approvals", am: "ቅጾችና ፈቃዶች" }, body: { en: "Turn paper forms and signatures into quick digital requests.", am: "የወረቀት ቅጾችንና ፊርማዎችን ወደ ፈጣን ዲጂታል ጥያቄዎች ይቀይሩ።" } },
  { slug: "spreadsheets", name: { en: "Excel to app", am: "ኤክሴልን ወደ መተግበሪያ" }, body: { en: "Move the spreadsheets you rely on into a shared, safe system.", am: "የሚተማመኑባቸውን ስፕረድሺቶች ወደ የጋራና ደህንነቱ የተጠበቀ ሥርዓት ያዛውሩ።" } },
  { slug: "websites", name: { en: "Websites", am: "ድር ጣቢያዎች" }, body: { en: "Help customers find you online and get in touch.", am: "ደንበኞች በመስመር ላይ እንዲያገኙዎትና እንዲያነጋግሩዎት ያግዙ።" } },
  { slug: "custom", name: { en: "Custom apps", am: "ብጁ መተግበሪያዎች" }, body: { en: "Something else done by hand? We build the app for it.", am: "በእጅ የሚሠራ ሌላ ነገር አለ? ለእሱ መተግበሪያ እንገነባለን።" } },
];
