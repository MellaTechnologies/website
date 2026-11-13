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
  country: "ET",
  locale: "en_US",
  colors: { plum: "#440450", orchid: "#F2A0F5" },
} as const;

export const appointmentHref = `mailto:${site.email}?subject=${encodeURIComponent("Appointment request")}`;

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
