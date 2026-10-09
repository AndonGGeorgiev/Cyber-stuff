// Site settings
var SITE = {
  name: "cyber-stuff",
  tagline: "Free cybersecurity notes and news, written for learning."
};

// Blog posts. kind is "Recovery tool" or "Security advice".
// Example:
// { kind: "Security advice", title: "...", summary: "...", date: "2026-10-05", url: "posts/my-first-post.html" }
var blogPosts = [ 
    {
    title: "Digital Mailboxes of the Web: Everything You Need to Know About IP Addresses",
    summary: "How IP addresses work, the main types, why they matter for your security, and four steps to protect your home network.",
    date: "2026-10-09",
    url: "posts/ip-addresses-explained.html",
    image: "images/ip-headline.jpg"
  },
  {
    title: "Stop Reusing Your Passwords: The 15-Minute Blueprint to Total Password Sanity",
    summary: "Why reused passwords get you breached, how seven password managers compare, and a 15-minute plan to get started.",
    date: "2026-10-05",
    url: "posts/stop-reusing-passwords.html",
    image: "images/passwords-headline.jpg"
  },
    {
    title: "How to Scrub Your Name from Data Broker Sites in 20 Minutes (Without Paying a Dime)",
    summary: "Data brokers publish your address, phone number and relatives. Here is how to request removal yourself, for free, using a burner email.",
    date: "2026-10-05",
    url: "posts/scrub-data-broker-sites.html",
    image: "images/footprint-headline.jpg"
  },
  {
    title: "Why Your Smart TV Shouldn't Talk to Your Laptop: A Practical Guide to Network Segmentation",
    summary: "A flat home network lets a compromised smart TV reach your laptop. Here is how to separate them with a guest network in under 20 minutes.",
    date: "2026-10-05",
    url: "posts/smart-tv-network-segmentation.html",
    image: "images/tv-headline.jpg"
  },
  
  {
    title: "The \"Zero-Trust\" Home Network: How to Isolate Your Smart Devices in Under 30 Minutes",
    summary: "Split your smart gadgets onto a separate Wi-Fi network so one compromised device can't reach your laptop and personal files.",
    date: "2026-10-05",
    url: "posts/zero-trust-home-network.html",
    image: "images/zero-trust-headline.jpg"
  }
];

// News items: your own short summary plus a direct link to the source.
// Example:
// { title: "...", summary: "...", source: "BleepingComputer", date: "2026-10-05", url: "https://..." }
// Reliable news sources: name, link, short description, and a type label.
var newsSources = [
    {
    name: "BG Leaks",
    type: "Breach tracker",
    url: "https://bg-leaks.xyz/",
    description: "Searchable archive of publicly disclosed data leaks tied to Bulgarian organizations, with a live ransomware feed filtered to Bulgaria. Entries are third-party claims, so verify them at the original source."
  },
    {
    name: "Have I Been Pwned",
    type: "Breach checker",
    url: "https://haveibeenpwned.com/",
    description: "Free service by security researcher Troy Hunt to check whether your email address or phone number appeared in a known data breach, with a searchable list of breached sites."
  },
  {
    name: "BleepingComputer",
    type: "News site",
    url: "https://www.bleepingcomputer.com",
    description: "Daily news on malware, data breaches and vulnerabilities, with practical help for removing threats."
  },
  {
    name: "The Hacker News",
    type: "News site",
    url: "https://thehackernews.com",
    description: "Fast coverage of cyberattacks, new vulnerabilities and security research."
  },
  {
    name: "Krebs on Security",
    type: "Investigative blog",
    url: "https://krebsonsecurity.com",
    description: "In-depth investigations into cybercrime from journalist Brian Krebs."
  },
  {
    name: "The Record",
    type: "News site",
    url: "https://therecord.media",
    description: "Reporting on cybercrime, nation-state activity and cyber policy."
  },
  {
    name: "CISA Advisories",
    type: "Official advisories",
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories",
    description: "Official US government alerts and guidance on active threats and vulnerabilities."
  },
   {
    name: "The DFIR Report",
    type: "Official advisories",
    url: "https://thedfirreport.com/",
    description: "Official US government alerts and guidance on active threats and vulnerabilities."
  },
    {
    name: "Dark Reading",
    type: "News site",
    url: "https://www.darkreading.com/",
    description: "News and analysis for security professionals on threats, vulnerabilities, cloud security and data breaches."
  },
  {
    name: "GDPR Enforcement Tracker",
    type: "Tracker",
    url: "https://www.enforcementtracker.com/",
    description: "Tracking official GDPR fines, regulatory penalties, and legal consequences stemming from security breaches and privacy violations"
  }
  
];;
