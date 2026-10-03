export interface GameStation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
  popularGames: string[];
  hourlyRate: number;
  highlight: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'tandoori' | 'shakes' | 'drinks';
  price: number;
  description: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isSpecial?: boolean;
  calories?: string;
  badge?: string;
}

export interface PricingPass {
  id: string;
  title: string;
  tier: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  stationType: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  tag: 'Birthday Parties' | 'Racing Sim' | 'PC Gaming' | 'Food & Ambience';
  comment: string;
  avatarText: string;
  badge?: string;
}

export const GAME_STATIONS = (
  racingImg: string,
  arcadeImg: string,
  storyImg: string,
  storefrontImg: string
): GameStation[] => [
  {
    id: 'racing-sim',
    title: 'Motion Racing Simulators',
    subtitle: 'Dual Custom Cockpits & Direct-Drive Wheels',
    description:
      'Strap into our authentic dual red & black simulator cockpits with direct-drive force-feedback steering, load-cell pedals, and glowing illuminated SPACEBAR marquees.',
    image: racingImg,
    specs: [
      'Direct Drive Force-Feedback Wheel Base',
      'Hydraulic Load-Cell Pedal Setup',
      'Dual Head-to-Head Multiplayer Rigs',
      'Tactile Bass Shakers for Curb Feel',
    ],
    popularGames: ['F1 24', 'Assetto Corsa Competizione', 'Forza Horizon 5', 'Dirt Rally 2.0', 'Gran Turismo 7'],
    hourlyRate: 350,
    highlight: 'Real Sim Cockpits in Ludhiana',
  },
  {
    id: 'console-lounge',
    title: 'Custom Arcade & Console Pods',
    subtitle: 'PS5 & Fighting Game Arcades with Stools',
    description:
      'Authentic custom-built SPACEBAR arcade cabinets running PS5 hardware. Equipped with high-definition screens, arcade buttons, comfortable bar stools, and iconic gaming decor.',
    image: arcadeImg,
    specs: [
      'PlayStation 5 Custom Arcade Pods',
      'High-Definition Crisp Gaming Panels',
      'DualSense + Arcade Controller Support',
      'Curated Slatted Wall Game Art Gallery',
    ],
    popularGames: ['Mortal Kombat 1', 'Tekken 8', 'EA Sports FC 25', 'GTA V / Online', 'Sonic The Hedgehog', 'Spider-Man 2'],
    hourlyRate: 250,
    highlight: 'Custom Arcade Pods',
  },
  {
    id: 'pc-battlestations',
    title: 'Story & Competitive Battle-Stations',
    subtitle: 'Complete Ur Favourite Stories & Ranked Matches',
    description:
      'Immerse yourself into legendary gaming campaigns and intense multiplayer tournaments. From God of War and Tekken to Red Dead Redemption and Metal Gear Solid.',
    image: storyImg,
    specs: [
      'Top-Tier High Performance Hardware',
      'High-Refresh Low-Latency Displays',
      'Full Story Campaigns & RPG Library',
      'Dedicated Low-Latency Fibre Connection',
    ],
    popularGames: ['God of War', 'Red Dead Redemption 2', 'Tekken 8', 'Metal Gear Solid', 'Valorant', 'CS2'],
    hourlyRate: 180,
    highlight: 'Iconic Story Campaigns',
  },
  {
    id: 'vip-party-zone',
    title: 'Flagship Lounge & Squad Party Venue',
    subtitle: 'Sarabha Nagar Flagship Entrance & Event Area',
    description:
      'Our iconic Sarabha Nagar flagship venue featuring comic art glass facades, private group zones, birthday celebrations, and gourmet cafe catering straight to your desk.',
    image: storefrontImg,
    specs: [
      'Flagship Sarabha Nagar Entrance & Hub',
      'Simultaneous Console + Sim Station Access',
      'Dedicated Crew & Table Food Delivery',
      'Birthday & Squad Tournament Packages',
    ],
    popularGames: ['Custom Party Tournaments', 'EA FC 25 Squad Cup', 'Mario Kart', 'Fighting Game Brackets'],
    hourlyRate: 1499,
    highlight: 'Custom Party Decor Included',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'Spacebar Double Smashed Beast',
    category: 'burgers',
    price: 289,
    description: 'Two smashed crispy chicken patties, molten Wisconsin cheddar, caramelized onions, smoked chipotle glaze on toasted brioche.',
    isVeg: false,
    isSpecial: true,
    calories: '680 kcal',
    badge: 'Chef Signature',
  },
  {
    id: 'b2',
    name: 'Cyber Crunch Paneer Supreme',
    category: 'burgers',
    price: 249,
    description: 'Crispy fried cottage cheese steak coated with panko herbs, spicy garlic aioli, jalapeno slaw, and cheddar melt.',
    isVeg: true,
    isSpecial: false,
    calories: '590 kcal',
  },
  {
    id: 'b3',
    name: 'Truffle Shroom & Cheese Melt',
    category: 'burgers',
    price: 269,
    description: 'Herb-grilled button mushrooms with roasted garlic truffle butter, double mozzarella slice, rocket leaves on sesame bun.',
    isVeg: true,
    isSpecial: true,
    calories: '540 kcal',
  },
  {
    id: 'b4',
    name: 'Fiery Peri-Peri Chicken Burger',
    category: 'burgers',
    price: 269,
    description: 'Buttermilk fried chicken breast rolled in African bird’s eye chili dust, crunchy iceberg lettuce, house ranch.',
    isVeg: false,
    isSpicy: true,
    calories: '610 kcal',
  },

  // Tandoori & Hot Starters
  {
    id: 't1',
    name: 'Smoked Tandoori Chicken Tikka',
    category: 'tandoori',
    price: 320,
    description: 'Boneless chicken chunks marinated in mustard oil, roasted cumin, and Punjabi spices, charred over tandoor with mint chutney.',
    isVeg: false,
    isSpicy: true,
    isSpecial: true,
    badge: 'Ludhiana Special',
  },
  {
    id: 't2',
    name: 'Malai Paneer Angara Chaap',
    category: 'tandoori',
    price: 280,
    description: 'Creamy cashew and cardamom marinated paneer cubes smoked to perfection with bell peppers and pickled onions.',
    isVeg: true,
    isSpecial: false,
  },
  {
    id: 't3',
    name: 'Spicy Loaded Arcade Nachos',
    category: 'tandoori',
    price: 230,
    description: 'Crisp corn tortilla chips smothered in warm cheese sauce, refried beans, pico de gallo, pickled jalapeños, and sour cream.',
    isVeg: true,
    isSpecial: false,
  },
  {
    id: 't4',
    name: 'Crispy Peri-Peri Chicken Wings',
    category: 'tandoori',
    price: 299,
    description: 'Six double-fried jumbo chicken wings tossed in tangy house hot sauce with garlic herb dip on the side.',
    isVeg: false,
    isSpicy: true,
  },

  // Shakes & Cold Brews
  {
    id: 's1',
    name: 'Galaxy Nutella Brownie Blast',
    category: 'shakes',
    price: 219,
    description: 'Velvety chocolate hazelnut shake loaded with warm fudge brownie chunks, whipped cream, and chocolate drizzle.',
    isVeg: true,
    isSpecial: true,
    badge: 'Customer Favorite',
  },
  {
    id: 's2',
    name: 'Lotus Biscoff Crunch Shake',
    category: 'shakes',
    price: 229,
    description: 'Belgian speculoos cookie butter blended with vanilla bean ice cream and topped with crushed biscuit crumbs.',
    isVeg: true,
    isSpecial: true,
  },
  {
    id: 's3',
    name: 'Classic Dark Roast Cold Coffee',
    category: 'shakes',
    price: 169,
    description: 'Double shot of Arabica espresso blended with chilled milk, raw cane syrup, and a scoop of vanilla ice cream.',
    isVeg: true,
    isSpecial: false,
  },
  {
    id: 's4',
    name: 'Cookies & Cream Oreo Monster',
    category: 'shakes',
    price: 199,
    description: 'Crushed dark cocoa Oreos spun in thick vanilla cream with dark chocolate rim and mini Oreos.',
    isVeg: true,
    isSpecial: false,
  },

  // Drinks & Coolers
  {
    id: 'd1',
    name: 'Neon Blue Lagoon Cooler',
    category: 'drinks',
    price: 169,
    description: 'Electric blue curacao syrup shaken with fresh lime juice, mint leaves, sprite, and crushed glacier ice.',
    isVeg: true,
    isSpecial: true,
    badge: 'Arcade Glow',
  },
  {
    id: 'd2',
    name: 'Passionfruit Mint Mojito',
    category: 'drinks',
    price: 179,
    description: 'Zesty crushed Persian limes, muddled garden mint, tropical passionfruit puree topped with bubbling club soda.',
    isVeg: true,
    isSpecial: false,
  },
  {
    id: 'd3',
    name: 'Berry Electric Iced Tea',
    category: 'drinks',
    price: 159,
    description: 'Slow-steeped Assam black tea infused with wild blueberry, raspberry cordial, and lemon wedges.',
    isVeg: true,
    isSpecial: false,
  },
  {
    id: 'd4',
    name: 'Fresh Valencia Orange Splash',
    category: 'drinks',
    price: 189,
    description: 'Freshly squeezed sweet oranges served over chilled rock ice with a pinch of black salt and mint.',
    isVeg: true,
    isSpecial: false,
  },
];

export const PRICING_PASSES: PricingPass[] = [
  {
    id: 'casual-pass',
    title: 'Casual Gamer Pass',
    tier: 'Quick Play',
    price: 180,
    period: 'per hour',
    features: [
      'Access to Esports PC or Console Stations',
      'All Top Games (Valorant, EA FC, GTA V)',
      'High-speed Fiber & Mechanical Keyboards',
      'Complimentary High-Speed Wi-Fi',
      'Order Cafe food straight to your desk',
    ],
    stationType: 'pc-battlestations',
  },
  {
    id: 'pro-pass',
    title: 'Pro 3-Hour Marathon',
    tier: 'Best Value',
    price: 450,
    period: 'for 3 hours',
    popular: true,
    features: [
      '3 full hours across PC or PS5 Stations',
      'Free Cold Coffee or Lemon Iced Tea',
      'Priority seat allocation during rush hours',
      'Includes headset & pro controller config',
      '15% off on all Burgers & Appetizers',
    ],
    stationType: 'console-lounge',
  },
  {
    id: 'racing-hotlap',
    title: 'Sim Racing Hotlap',
    tier: 'Maximum Adrenaline',
    price: 350,
    period: 'per hour',
    features: [
      'Dedicated Motion Sim Cockpit',
      'F1 24, Assetto Corsa, Forza Horizon',
      'Direct Drive Wheel & Load Cell Pedals',
      'Lap Time Leaderboard recording & prizes',
      'Instructor assistance for beginners',
    ],
    stationType: 'racing-sim',
  },
  {
    id: 'squad-party-pass',
    title: 'Squad Birthday & VIP Pass',
    tier: 'Party Package',
    price: 2999,
    period: 'up to 8 players / 2 hrs',
    features: [
      'Private Lounge area reserved exclusively',
      '2x PS5 Consoles + 1x Racing Sim station',
      'Includes 2 Gourmet Platters & Drink Tower',
      'Birthday celebration music & personalized screen graphic',
      'Dedicated gaming host to run mini-tournaments',
    ],
    stationType: 'vip-party-zone',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Celeste Aneja',
    rating: 5,
    date: '2 months ago',
    tag: 'Birthday Parties',
    comment:
      'Celebrated my brother’s birthday here and it was hands down the best experience in Ludhiana! The staff helped us organize an EA FC tournament, and the tandoori tikka and burgers exceeded our expectations. Clean, aesthetic, and super fun.',
    avatarText: 'CA',
    badge: 'Verified Customer',
  },
  {
    id: 'r2',
    author: 'Mohit Dhiman',
    rating: 5,
    date: '3 weeks ago',
    tag: 'Racing Sim',
    comment:
      'The racing simulator here is unmatched in Punjab. Direct drive force feedback with the triple curved screen setup felt genuinely real when playing F1 24. Also, staff is very polite and guides you with settings. Rates are super genuine!',
    avatarText: 'MD',
    badge: 'Verified Customer',
  },
  {
    id: 'r3',
    author: 'Simranpreet Kaur',
    rating: 5,
    date: '1 month ago',
    tag: 'Food & Ambience',
    comment:
      'Very safe, inclusive and aesthetic cafe vibe in Sarabha Nagar. We came with our college group just for coffee and ended up staying 4 hours playing Tekken 8 and PS5. Don’t miss their Nutella Brownie Shake!',
    avatarText: 'SK',
    badge: 'Local Guide',
  },
  {
    id: 'r4',
    author: 'Harshit Verma',
    rating: 5,
    date: 'a week ago',
    tag: 'PC Gaming',
    comment:
      'Competitive Valorant with 5ms ping and 240Hz monitors is pure joy. No lag spikes, mechanical keyboards were spotless, and air conditioning is on point even on hot afternoons. Definitely my regular gaming den now.',
    avatarText: 'HV',
    badge: 'Verified Customer',
  },
  {
    id: 'r5',
    author: 'Navjot Singh Gill',
    rating: 5,
    date: '2 months ago',
    tag: 'Food & Ambience',
    comment:
      'Finally a place in Ludhiana that understands both serious gaming and serious food. The Double Smashed Beast burger was juicy and better than most high-end diners. 10/10 vibe with neon purple ambiance.',
    avatarText: 'NG',
    badge: 'Verified Customer',
  },
  {
    id: 'r6',
    author: 'Jasmeet K.',
    rating: 5,
    date: '3 weeks ago',
    tag: 'Birthday Parties',
    comment:
      'Hosted a surprise squad meetup here. The team arranged everything smoothly, from food service to extra controllers. LGBTQ+ and family friendly vibe was warmly appreciated. Keep it up Spacebar team!',
    avatarText: 'JK',
    badge: 'Local Guide',
  },
];

export const FAQS = [
  {
    q: 'Do I need to book in advance or can I walk in?',
    a: 'Walk-ins are always warmly welcomed! However, during peak hours (evenings from 5:00 PM – 11:00 PM and weekends), our racing simulators and PS5 booths fill up fast. We recommend reserving online or calling us at +91 98779 50582.',
  },
  {
    q: 'What kind of racing simulator setup do you have?',
    a: 'We feature aluminum profile rigs with direct-drive steering wheel bases (12Nm torque), hydraulic load-cell pedals, haptic feedback shakers, and panoramic triple 165Hz curved monitors configured for games like F1 24, Assetto Corsa, and Forza Horizon 5.',
  },
  {
    q: 'Can we celebrate birthday parties and group events at SPACEBAR?',
    a: 'Absolutely! We offer custom Birthday & Squad packages that include a private lounge area, simultaneous console and simulator access, customized tournament brackets, and food/beverage platters. You can also bring your own birthday cake.',
  },
  {
    q: 'Is the cafe food freshly prepared on-site?',
    a: 'Yes, everything from our gourmet smashed burgers to authentic tandoori chicken tikka, pasta, and handcrafted shakes is prepared fresh in our kitchen by professional cafe chefs.',
  },
  {
    q: 'Where is SPACEBAR located in Ludhiana?',
    a: 'We are situated at 51, I - Block, Sarabha Nagar, Ludhiana, Punjab 141001 (Plus Code: VRR8+XX). It is easily accessible with ample parking space in the marketplace area.',
  },
];
