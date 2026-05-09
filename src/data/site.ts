export const SITE = {
  name: "Shella & Tony Chan Real Estate Team",
  short: "Chan Real Estate Team",
  brokerage: "RE/MAX Crest Realty",
  phone: "604-649-8888",
  phoneAlt: "604-433-2211",
  tollFree: "1-866-433-2211",
  address: "#1 - 5050 Kingsway, Burnaby, BC V5H 4C2",
  email: "info@chanrealestate.com",
  area: "Greater Vancouver",
  languages: ["English", "Cantonese", "Mandarin"],
  rating: { score: 4.92, count: 23 },
};

export type Listing = {
  id: string;
  address: string;
  city: string;
  neighbourhood?: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  lot?: string;
  type: string;
  image: string;
  status: "active" | "sold";
};

// Real listings extracted from rew.ca / chanrealestate.com sources
export const LISTINGS: Listing[] = [
  {
    id: "8022-lakefield",
    address: "8022 Lakefield Drive",
    city: "Burnaby",
    neighbourhood: "Burnaby Lake",
    price: "$2,080,000",
    beds: 6,
    baths: 5,
    sqft: 4786,
    lot: "60 x 126 ft",
    type: "House",
    image:
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263127340/00_5cd727675c145f8735203eef00f471d9.jpeg?auto=format&fit=crop&w=900&h=675",
    status: "active",
  },
  {
    id: "305-7260-lindsay",
    address: "305 - 7260 Lindsay Road",
    city: "Richmond",
    neighbourhood: "Granville",
    price: "$308,000",
    beds: 3,
    baths: 1,
    sqft: 1068,
    type: "Apt/Condo",
    image:
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263114479/00_6e07153a1b4a6f4498eab6df1c541aae.jpeg?auto=format&fit=crop&w=900&h=675",
    status: "active",
  },
];

export const SOLD: Listing[] = [];

export const TESTIMONIALS = [
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

export const COMMUNITIES = [
  { name: "Burnaby", desc: "Family neighbourhoods, top schools and lakeside parks.", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=80&auto=format&fit=crop" },
  { name: "Richmond", desc: "Vibrant multicultural community with riverfront living.", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80&auto=format&fit=crop" },
  { name: "Vancouver", desc: "Iconic urban living surrounded by ocean and mountains.", img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=900&q=80&auto=format&fit=crop" },
  { name: "Coquitlam", desc: "Growing family suburbs with parks, transit and trails.", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=80&auto=format&fit=crop" },
  { name: "New Westminster", desc: "Historic riverside community with character and warmth.", img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=900&q=80&auto=format&fit=crop" },
  { name: "Tri-Cities & Beyond", desc: "Trusted guidance across the Greater Vancouver area.", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&q=80&auto=format&fit=crop" },
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
