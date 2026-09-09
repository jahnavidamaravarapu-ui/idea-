/* =========================================================
   data.js – Startup Ideas Data
   Array of startup idea objects used across all pages
   ========================================================= */

// Central data store – array of startup idea objects
const IDEAS = [
  {
    id: 1,
    title: 'MindBridge AI',
    category: 'Artificial Intelligence',
    description: 'An AI-powered mental health companion that provides 24/7 emotional support, mood tracking, and personalised therapy recommendations using natural language processing.',
    fullDescription: 'MindBridge AI leverages state-of-the-art large language models to offer compassionate, evidence-based mental health support at scale. The platform analyses speech patterns and text sentiment to detect early signs of anxiety and depression, connecting users with licensed therapists when needed. With an ever-growing knowledge base of CBT techniques, the app guides users through structured exercises, progress journaling, and breathing sessions. Privacy-first architecture ensures all conversations are end-to-end encrypted.',
    difficulty: 'Hard',
    targetAudience: 'Young adults, corporate employees, students',
    businessModel: 'Freemium SaaS – premium tier unlocks unlimited sessions and therapist connect',
    tags: ['AI', 'Mental Health', 'NLP', 'B2C', 'SaaS'],
    icon: '🧠',
    featured: true,
  },
  {
    id: 2,
    title: 'SkillPath',
    category: 'Education',
    description: 'Adaptive micro-learning platform that creates personalised 5-minute daily lessons using AI, gamification, and spaced-repetition to master any professional skill.',
    fullDescription: 'SkillPath disrupts traditional e-learning by breaking complex skills into digestible micro-lessons powered by adaptive AI. The engine continuously analyses your learning speed, retention rate, and knowledge gaps to serve the perfect lesson at the perfect time. Leaderboards, streak rewards, and social learning pods keep motivation high. Content partners include top universities and Fortune 500 L&D teams.',
    difficulty: 'Medium',
    targetAudience: 'Working professionals, students, career changers',
    businessModel: 'B2B SaaS for corporate training + B2C subscription',
    tags: ['EdTech', 'AI', 'Gamification', 'Learning'],
    icon: '📚',
    featured: true,
  },
  {
    id: 3,
    title: 'CropSense',
    category: 'Agriculture',
    description: 'IoT sensor network + ML platform that monitors soil health, weather patterns, and crop growth in real time to maximise farm yield while minimising water and pesticide use.',
    fullDescription: 'CropSense deploys a network of affordable solar-powered soil and climate sensors across farmland, streaming data to a cloud ML pipeline. Farmers receive actionable push alerts – "Irrigate Field 3 in 4 hours" or "Aphid risk high in Zone B". The platform also provides regional benchmarking, yield forecasting, and direct integration with commodity futures data to help farmers optimise selling decisions. Available as a mobile-first app with offline capability for low-connectivity rural areas.',
    difficulty: 'Hard',
    targetAudience: 'Small and medium-scale farmers, agri-cooperatives',
    businessModel: 'Hardware-as-a-Service + monthly SaaS subscription',
    tags: ['IoT', 'AgriTech', 'ML', 'Sustainability'],
    icon: '🌾',
    featured: true,
  },
  {
    id: 4,
    title: 'PocketLedger',
    category: 'FinTech',
    description: 'AI-driven personal finance app that automatically categorises spending, forecasts cash flow, and negotiates better rates on bills and subscriptions on your behalf.',
    fullDescription: 'PocketLedger connects to your bank accounts via open-banking APIs to give you a real-time, categorised view of your finances. Its AI agent autonomously identifies saving opportunities, switches you to better tariffs, and cancels unused subscriptions – all with a single tap approval. The cash-flow forecast engine uses ML to predict upcoming shortfalls weeks in advance, offering tailored micro-saving nudges. No ads; revenue comes from referral fees on financial products that genuinely save users money.',
    difficulty: 'Medium',
    targetAudience: 'Millennials, Gen Z, gig economy workers',
    businessModel: 'Freemium + commission-based referrals',
    tags: ['FinTech', 'AI', 'Personal Finance', 'Open Banking'],
    icon: '💳',
    featured: false,
  },
  {
    id: 5,
    title: 'HealthPulse',
    category: 'Health',
    description: 'Wearable-integrated platform that aggregates all your health metrics – heart rate variability, sleep, nutrition – and provides a single daily "health score" with actionable steps.',
    fullDescription: 'HealthPulse solves the fragmented wearable data problem by ingesting data from Fitbit, Apple Watch, Garmin, Oura Ring, and dozens of nutrition apps into a unified health intelligence layer. A proprietary algorithm computes your daily Pulse Score (0-100) weighting sleep quality, recovery, activity, and nutrition. Doctors can access anonymised trend data to flag anomalies early. The platform also includes a social layer where friends can share scores and host wellness challenges.',
    difficulty: 'Hard',
    targetAudience: 'Health-conscious individuals, athletes, preventative healthcare seekers',
    businessModel: 'Monthly subscription + premium clinical integrations for enterprises',
    tags: ['HealthTech', 'Wearables', 'Wellness', 'B2C'],
    icon: '❤️',
    featured: true,
  },
  {
    id: 6,
    title: 'EcoTrack',
    category: 'Sustainability',
    description: 'Carbon footprint tracker that analyses your lifestyle – shopping, travel, diet – and provides a personalised roadmap to net-zero with integrated offset purchasing.',
    fullDescription: 'EcoTrack makes sustainability tangible and achievable by translating everyday choices into CO2 equivalents. When you buy a flight, EcoTrack auto-imports it via email parsing and shows the carbon impact. A personalised net-zero roadmap breaks your journey into weekly actions – from switching to green energy to plant-based meals. Verified carbon offset projects (reforestation, blue-carbon) can be purchased in-app. The community feature lets you join challenges and compare your progress with friends.',
    difficulty: 'Medium',
    targetAudience: 'Eco-conscious consumers, Gen Z, corporates seeking ESG reporting',
    businessModel: 'Freemium + margin on offset purchases + B2B ESG reporting API',
    tags: ['CleanTech', 'Sustainability', 'ESG', 'Carbon'],
    icon: '🌱',
    featured: false,
  },
  {
    id: 7,
    title: 'ShieldNet',
    category: 'Cybersecurity',
    description: 'Zero-trust security platform for SMEs that auto-detects threats, patches vulnerabilities, and trains employees through simulated phishing attacks – all in one dashboard.',
    fullDescription: 'ShieldNet democratises enterprise-grade cybersecurity for small and medium businesses that lack dedicated security teams. The platform continuously scans your attack surface, auto-remediates known CVEs, and enforces zero-trust policies across all devices. The built-in LMS delivers bite-sized security awareness modules, and a realistic phishing simulator trains employees without embarrassing them. Real-time threat alerts are explained in plain English so non-technical owners can act immediately.',
    difficulty: 'Hard',
    targetAudience: 'SME founders, IT admins, compliance teams',
    businessModel: 'Monthly SaaS per seat + incident-response retainer packages',
    tags: ['Cybersecurity', 'Zero-Trust', 'SME', 'SaaS'],
    icon: '🛡️',
    featured: false,
  },
  {
    id: 8,
    title: 'MarketNest',
    category: 'E-Commerce',
    description: 'Hyperlocal social commerce platform enabling neighbourhood artisans and micro-sellers to set up a storefront, process payments, and schedule same-day delivery within 5 km.',
    fullDescription: 'MarketNest bridges the gap between local artisans and buyers who want to shop sustainably and support their community. Sellers onboard in under 10 minutes with no tech knowledge needed. The built-in live-stream selling feature lets sellers showcase handmade goods in real time. AI-powered demand forecasting helps sellers plan production. Delivery is fulfilled via a network of local gig riders, ensuring same-day or scheduled delivery. A community review system and dispute resolution layer build trust between buyers and sellers.',
    difficulty: 'Medium',
    targetAudience: 'Local artisans, micro-entrepreneurs, community shoppers',
    businessModel: '5% transaction commission + premium seller subscription',
    tags: ['E-Commerce', 'Hyperlocal', 'Social Commerce', 'Logistics'],
    icon: '🛍️',
    featured: false,
  },
  {
    id: 9,
    title: 'FocusFlow',
    category: 'Productivity',
    description: 'AI-powered deep-work scheduler that blocks distractions, manages your calendar intelligently, and uses biometric focus data to find your peak productivity windows.',
    fullDescription: 'FocusFlow is the productivity tool for the always-on era. It integrates with your calendar, email, and Slack to protect uninterrupted focus blocks. The AI engine learns your focus patterns from optional HRV wearable data and schedules deep work in your biological prime time. During focus sessions, a smart block layer silences notifications and blocks time-wasting sites. Post-session analytics show your focus score, distraction events, and tasks completed, with weekly trends to continuously improve your workflow.',
    difficulty: 'Easy',
    targetAudience: 'Knowledge workers, freelancers, remote teams',
    businessModel: 'Freemium individual + B2B team licences',
    tags: ['Productivity', 'AI', 'Deep Work', 'Calendar'],
    icon: '⚡',
    featured: true,
  },
  {
    id: 10,
    title: 'LegalEase AI',
    category: 'Artificial Intelligence',
    description: 'AI legal assistant that reviews contracts, flags risky clauses, and explains legal jargon in plain English – making legal advice accessible and affordable for everyone.',
    fullDescription: 'LegalEase AI breaks down the access-to-justice barrier by putting a capable legal reviewer in everyone\'s pocket. Upload any contract (NDA, lease, employment) and within seconds receive a clause-by-clause risk report with severity ratings (green/amber/red) and suggested alternative wording. The AI is trained on millions of commercial contracts and validated by practising solicitors. It never gives binding legal advice but helps users know when they need a lawyer and what to ask. Enterprise plans offer white-labelled integration into legal teams.',
    difficulty: 'Hard',
    targetAudience: 'Freelancers, startups, SMEs, individuals signing leases',
    businessModel: 'Pay-per-review credits + monthly subscription for heavy users',
    tags: ['LegalTech', 'AI', 'Contracts', 'NLP'],
    icon: '⚖️',
    featured: false,
  },
  {
    id: 11,
    title: 'NutriCoach',
    category: 'Health',
    description: 'Personalised AI nutrition coach that scans food photos to log meals, suggests recipes based on your goals, and connects you to a registered dietitian on demand.',
    fullDescription: 'NutriCoach harnesses computer vision to identify food from a single photo, automatically logging macros and micros with 95%+ accuracy. The AI meal planner crafts weekly menus that respect your dietary restrictions, cultural preferences, and budget. A grocery list is generated with one tap and can be sent directly to your preferred delivery app. For complex dietary needs – eating disorders, diabetes management, renal diets – in-app video consultations with accredited dietitians are bookable within the hour.',
    difficulty: 'Medium',
    targetAudience: 'Health-conscious consumers, athletes, people managing chronic conditions',
    businessModel: 'Freemium + dietitian consultation fees + recipe subscription',
    tags: ['HealthTech', 'CV', 'Nutrition', 'B2C'],
    icon: '🥗',
    featured: false,
  },
  {
    id: 12,
    title: 'GridSpark',
    category: 'Sustainability',
    description: 'Peer-to-peer renewable energy trading platform that lets households with solar panels sell surplus electricity to neighbours, bypassing traditional utility companies.',
    fullDescription: 'GridSpark enables solar households to monetise excess generation that would otherwise be exported to the grid at minimal rates. Using blockchain-verified smart meters and a local energy ledger, buyers and sellers transact directly. Dynamic pricing responds to real-time supply and demand on the micro-grid. GridSpark also provides households with AI-driven recommendations on the best times to run high-energy appliances to minimise cost. Regulatory compliance modules handle the complexity of energy retailer licensing in each market.',
    difficulty: 'Hard',
    targetAudience: 'Residential solar owners, eco-conscious energy buyers',
    businessModel: 'Transaction fee (1-2%) on every kWh traded + smart-meter subscription',
    tags: ['CleanTech', 'P2P', 'Blockchain', 'Energy'],
    icon: '⚡',
    featured: false,
  },
  {
    id: 13,
    title: 'RemoteHive',
    category: 'Productivity',
    description: 'Virtual office platform for distributed teams with persistent 3D spaces, async video updates, and a smart "watercooler" AI that facilitates serendipitous team connections.',
    fullDescription: 'RemoteHive reimagines the remote work experience with lightweight, browser-based 3D office spaces where avatars move around and proximity triggers audio conversations – just like a real office. Async video updates replace status meetings: record a 2-minute video update and your team can react, reply, or fork the discussion. The AI watercooler matches team members with shared interests or complementary skills for optional 15-minute coffee chats, fighting the isolation of remote work. Deep analytics surface collaboration bottlenecks for HR and managers.',
    difficulty: 'Medium',
    targetAudience: 'Remote-first companies, distributed engineering teams, HR professionals',
    businessModel: 'Per-seat monthly SaaS + enterprise custom deployment',
    tags: ['Productivity', 'Remote Work', '3D', 'Collaboration'],
    icon: '🏠',
    featured: true,
  },
];

/* ── Helper: get all unique categories ── */
function getCategories() {
  // Use Set to deduplicate categories
  const unique = [...new Set(IDEAS.map(idea => idea.category))];
  return unique.sort();
}

/* ── Helper: get saved idea IDs from localStorage ── */
function getSavedIds() {
  const user = typeof getCurrentUser === 'function' ? getCurrentUser() : { email: '' };
  if (!user.email) return [];

  try {
    const raw = localStorage.getItem(`savedIdeas:${user.email}`);
    const saved = raw ? JSON.parse(raw) : [];
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveUserSavedIds(saved) {
  const user = getCurrentUser();
  if (user.email) localStorage.setItem(`savedIdeas:${user.email}`, JSON.stringify(saved));
}

/* ── Helper: save an idea ID to localStorage ── */
function saveIdea(id) {
  const saved = getSavedIds();
  if (!saved.includes(id)) {
    saved.push(id);
    saveUserSavedIds(saved);
    return true; // newly saved
  }
  return false; // already saved
}

/* ── Helper: unsave an idea ID from localStorage ── */
function unsaveIdea(id) {
  const saved = getSavedIds().filter(savedId => savedId !== id);
  saveUserSavedIds(saved);
}

/* ── Helper: toggle save state ── */
function toggleSave(id) {
  const saved = getSavedIds();
  if (saved.includes(id)) {
    unsaveIdea(id);
    return false; // now unsaved
  } else {
    saveIdea(id);
    return true; // now saved
  }
}

/* ── Helper: check if idea is saved ── */
function isSaved(id) {
  return getSavedIds().includes(id);
}

/* ── Helper: get featured ideas ── */
function getFeaturedIdeas() {
  return IDEAS.filter(idea => idea.featured);
}

/* ── Helper: search and filter ideas ── */
function searchAndFilter(query, category) {
  return IDEAS.filter(idea => {
    // Category filter
    const categoryMatch = !category || idea.category === category;

    // Search filter – check title, description, and category
    const q = query.toLowerCase().trim();
    const searchMatch = !q ||
      idea.title.toLowerCase().includes(q) ||
      idea.description.toLowerCase().includes(q) ||
      idea.category.toLowerCase().includes(q) ||
      idea.tags.some(tag => tag.toLowerCase().includes(q));

    return categoryMatch && searchMatch;
  });
}

/* ── Helper: find an idea by ID ── */
function findIdeaById(id) {
  return IDEAS.find(idea => idea.id === Number(id));
}

/* ── Helper: get difficulty badge class ── */
function getDifficultyClass(difficulty) {
  const map = { Easy: 'easy', Medium: 'medium', Hard: 'hard' };
  return `badge-difficulty-${map[difficulty] || 'medium'}`;
}
