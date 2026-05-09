export const SITE = {
  name: "Shella & Tony Chan Real Estate Team",
  short: "Chan Real Estate Team",
  brokerage: "RE/MAX Crest Realty",
  phone: "604-433-2211",
  phoneAlt: "604-649-8888",
  tollFree: "1-866-433-2211",
  address: "#1 - 5050 Kingsway, Burnaby, BC V5H 4C2",
  email: "info@chanrealestate.com",
  area: "Greater Vancouver",
  languages: ["English", "Cantonese", "Mandarin"],
  rating: { score: 4.92, count: 23 },
};

// Official RE/MAX brand mark (publicly hosted on Wikimedia Commons)
// Logo is now rendered as a self-contained CSS badge in <RemaxLogo />.
// Kept exported for backwards compatibility if referenced elsewhere.
export const REMAX_LOGO = "";

export type Listing = {
  id: string;
  slug: string;
  status: "active" | "sold";
  price: string;
  address: string;
  city: string;
  area?: string;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  mlsNumber?: string;
  description: string;
  highlights: string[];
  images: string[];
  listingUrl?: string;
};

// Real listings sourced from rew.ca / chanrealestate.com / realtylink.org
export const FEATURED_LISTINGS: Listing[] = [
  {
    id: "8022-lakefield",
    slug: "8022-lakefield-drive",
    status: "active",
    price: "$2,080,000",
    address: "8022 Lakefield Drive",
    city: "Burnaby",
    area: "Burnaby Lake",
    beds: 6,
    baths: 5,
    sqft: 4786,
    propertyType: "House",
    description:
      "A spacious 6-bedroom, 5-bathroom family home in the desirable Burnaby Lake area. Generous living areas and a flexible floor plan make this property ideal for multi-generational families.",
    highlights: [
      "4,786 sq ft of family living space",
      "Quiet Burnaby Lake neighbourhood",
      "Close to schools, parks and transit",
      "Multi-generational layout",
    ],
    images: [
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263127340/00_5cd727675c145f8735203eef00f471d9.jpeg?auto=format&fit=crop&w=1400&h=900",
    ],
    listingUrl: "https://www.rew.ca/agents/111169/shella-chan/listings",
  },
  {
    id: "305-7260-lindsay",
    slug: "305-7260-lindsay-road",
    status: "active",
    price: "$308,000",
    address: "305 - 7260 Lindsay Road",
    city: "Richmond",
    area: "Granville",
    beds: 3,
    baths: 1,
    sqft: 1068,
    propertyType: "Apartment / Condo",
    description:
      "A bright 3-bedroom condo in Richmond's Granville neighbourhood. A practical layout, central location and easy access to shopping, schools and transit.",
    highlights: [
      "Central Richmond location",
      "1,068 sq ft of comfortable living",
      "Walking distance to amenities",
      "Excellent first-home or rental opportunity",
    ],
    images: [
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263114479/00_6e07153a1b4a6f4498eab6df1c541aae.jpeg?auto=format&fit=crop&w=1400&h=900",
    ],
    listingUrl: "https://www.rew.ca/agents/111169/shella-chan/listings",
  },
  {
    id: "407-6837-station-hill",
    slug: "407-6837-station-hill-drive",
    status: "active",
    price: "$649,000",
    address: "407 - 6837 Station Hill Drive",
    city: "Burnaby",
    area: "South Slope",
    beds: 2,
    baths: 2,
    sqft: 841,
    propertyType: "Apartment / Condo",
    description:
      "A well-appointed 2-bedroom, 2-bathroom condo in Burnaby's South Slope. Steps from Edmonds SkyTrain, shopping and parks — a strong choice for first-time buyers, downsizers or investors.",
    highlights: [
      "Walking distance to Edmonds SkyTrain",
      "841 sq ft well-planned layout",
      "Two full bathrooms",
      "Family-friendly South Slope community",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    ],
    listingUrl: "https://www.realtylink.org/",
  },
];

// No verified sold listings have been confirmed from public sources at this time.
// When real sold transaction data is available, populate this array.
export const SOLD_LISTINGS: Listing[] = [];

// Backwards-compat exports used in earlier components
export const LISTINGS = FEATURED_LISTINGS;
export const SOLD = SOLD_LISTINGS;

export type Testimonial = {
  name: string;
  location: string;
  type: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jianhui (Jenny) Wang",
    location: "Burnaby, BC",
    type: "Selling • August 2025",
    quote:
      "I would like to express my sincere appreciation for Shella Chan, who successfully helped me sell my property. Her professionalism and dedication made the entire process smooth and stress-free.",
  },
  {
    name: "Maggie Huang",
    location: "Burnaby, BC",
    type: "Selling • August 2025",
    quote:
      "An excellent experience working with Shella on both selling my previous home and purchasing my new one. She is professional, knowledgeable, and truly cares about her clients. She listened carefully and guided us every step of the way.",
  },
  {
    name: "David Zhang",
    location: "Burnaby, BC",
    type: "Buying • January 2024",
    quote:
      "You never know who is going to cross your path until you meet this kind of professional every home buyer is eager to have. We were lucky enough to be introduced to the extraordinary Ms. Shella Chan.",
  },
  {
    name: "A. Yip",
    location: "Vancouver, BC",
    type: "Buying • September 2023",
    quote:
      "I recommend Shella Chan and her partner Tony Chan as real estate professionals for all your real estate needs. My elderly parents have had the need for Shella's services twice and she handled everything with such care.",
  },
  {
    name: "Olivia Yeung",
    location: "Burnaby, BC",
    type: "Buying & Selling • June 2021",
    quote:
      "Shella helped me with both buying and selling. I sold my apartment higher than expected and bought a new one at a lower price. Best agent I ever met. Highly recommended.",
  },
  {
    name: "Avril Kong",
    location: "Coquitlam, BC",
    type: "Buying & Selling • March 2021",
    quote:
      "Shella is the best real estate agent I have met so far. She is easy to communicate with and put herself in my shoes to solve any problems that came up — not just an agent, but a true friend.",
  },
  {
    name: "Rex Yu",
    location: "Burnaby, BC",
    type: "Selling • June 2021",
    quote:
      "Shella has been extremely professional and transparent throughout the entire process. We felt confident she would work out a great deal for us, and she delivered in a timely manner.",
  },
  {
    name: "Yu Dong",
    location: "Burnaby, BC",
    type: "Buying & Selling • 2017",
    quote:
      "Total trust and respect for the level of service Shella and Tony provided when selling our rental property in Burnaby while we were overseas. Their care and communication made all the difference.",
  },
];

// Communities — using typography/icon cards. No images to avoid inaccurate or
// AI-generated city photos. Real city photography can be added later.
export const COMMUNITIES = [
  { name: "Burnaby", desc: "Family neighbourhoods, top schools and lakeside parks." },
  { name: "Richmond", desc: "Vibrant multicultural community with riverfront living." },
  { name: "Vancouver", desc: "Iconic urban living surrounded by ocean and mountains." },
  { name: "Coquitlam", desc: "Growing family suburbs with parks, transit and trails." },
  { name: "New Westminster", desc: "Historic riverside community with character and warmth." },
  { name: "Tri-Cities & Beyond", desc: "Trusted guidance across the Greater Vancouver area." },
];

export const SERVICES = [
  { title: "Buying", desc: "From first-time buyers to growing families — calm, step-by-step guidance to the right home." },
  { title: "Selling", desc: "Strategic pricing, careful preparation and trusted marketing to maximize your outcome." },
  { title: "Downsizing", desc: "Thoughtful support for families planning the next chapter, with no pressure or rush." },
  { title: "Investment", desc: "Local market insight to help you build a portfolio that aligns with your goals." },
  { title: "Relocation", desc: "Out-of-town and international clients — we handle the details so you can settle in." },
  { title: "Seniors Transition", desc: "Patient, respectful service for seniors and their families through every step." },
];

export const SHELLA_HEADSHOT =
  "https://assets.rew.ca/property-agent/image/111169/2549_Shella_Chan.jpg?auto=format&fit=crop&w=600&h=600";

// TEMPORARY — placeholder initials avatar for Tony. Replace with real headshot
// from the Chan team when available. This is intentionally NOT a generated face.
// Inline SVG data URI — guarantees the placeholder always renders, no CDN dep.
export const TONY_HEADSHOT_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="#003DA5"/><text x="50%" y="54%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="240" fill="#ffffff">TC</text></svg>`
  );
export const TONY_HEADSHOT_IS_PLACEHOLDER = true;

export function findListing(slug: string): Listing | undefined {
  return [...FEATURED_LISTINGS, ...SOLD_LISTINGS].find((l) => l.slug === slug);
}
