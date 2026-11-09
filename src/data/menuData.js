/**
 * ClusTea Menu Dataset
 * 
 * NOTE FOR CLIENT / DEMO:
 * Prices and item listings are extracted from the ClusTea in-store menu photograph dated August 2025.
 * These are provisional demonstration records and can be easily updated or synced with POS/billing.
 */

export const MENU_METADATA = {
  source: 'ClusTea In-Store Menu Board (Dated: August 2025)',
  status: 'Provisional Demo Data',
  currency: '₹',
  lastUpdated: 'August 2025',
  notes: 'Biscuit and add-on charges are awaiting final owner confirmation.'
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'Sparkles', count: 28 },
  { id: 'milk', name: 'Milk Teas', icon: 'Coffee', count: 7, subtitle: 'Rich, creamy and infused with authentic spices' },
  { id: 'black', name: 'Black Teas', icon: 'CupSoda', count: 4, subtitle: 'Crisp, invigorating, and aromatic brews' },
  { id: 'special', name: 'Special Drinks', icon: 'Star', count: 3, subtitle: 'Signature delicacies and traditional cooling elixirs' },
  { id: 'green', name: 'Green & Herbal', icon: 'Leaf', count: 4, subtitle: 'Antioxidant-rich floral and revitalizing teas' },
  { id: 'herbal', name: 'Herbal Busters', icon: 'HeartPulse', count: 3, subtitle: 'Traditional wellness concoctions for immunity and energy' },
  { id: 'snacks', name: 'Bakery & Snacks', icon: 'Cookie', count: 8, subtitle: 'Fresh flaky oven puffs and crispy tea-time biscuits' }
];

export const MENU_ITEMS = [
  // Milk Tea Category
  {
    id: 'milk-plain',
    name: 'Plain Tea',
    category: 'milk',
    price: 15,
    priceConfirmed: true,
    description: 'Freshly brewed strong Assam tea combined with farm-fresh rich milk and balanced sweetness.',
    badge: 'Classic Everyday',
    popular: true,
    isVeg: true,
    servings: 'Hot / Cutting Tumbler'
  },
  {
    id: 'milk-ginger',
    name: 'Ginger Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'Crushed fresh ginger root slow-steeped with full-bodied milk tea. Perfect for a brisk rejuvenation.',
    badge: 'Customer Favorite',
    popular: true,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'milk-masala',
    name: 'Masala Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'Artisanal spice cluster of cloves, cinnamon, peppercorn, and dried ginger for an authentic aroma.',
    badge: 'House Special',
    popular: true,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'milk-cardamom',
    name: 'Cardamom Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'Fragrant green elaichi freshly cracked into rich simmered tea. Delightfully soothing and sweet.',
    badge: 'Aromatic',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'milk-chocolate',
    name: 'Chocolate Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'A cozy fusion of dark Dutch cocoa notes paired with strong spiced milk chai. A delightful treat.',
    badge: 'Sweet Twist',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'milk-ginger-cardamom',
    name: 'Ginger + Cardamom Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'The ultimate twin-spice balance: fiery zesty ginger harmonized with cooling sweet green cardamom.',
    badge: 'Signature Blend',
    popular: true,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'milk-rose',
    name: 'Rose Tea',
    category: 'milk',
    price: 20,
    priceConfirmed: true,
    description: 'Infused with gentle damask rose petals and floral extracts over velvety hot milk tea.',
    badge: 'Floral Comfort',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },

  // Black Tea Category
  {
    id: 'black-plain',
    name: 'Plain Black Tea',
    category: 'black',
    price: 15,
    priceConfirmed: true,
    description: 'Pure single-origin black tea extract with amber clarity and a clean, refreshing brisk finish.',
    badge: 'Pure & Clean',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'black-lemon',
    name: 'Lemon Tea',
    category: 'black',
    price: 20,
    priceConfirmed: true,
    description: 'Freshly squeezed sun-ripened lemon stirred into aromatic black tea with mild natural sweetness.',
    badge: 'Tangy & Bright',
    popular: true,
    isVeg: true,
    servings: 'Hot / Refreshing'
  },
  {
    id: 'black-ginger',
    name: 'Ginger Black Tea',
    category: 'black',
    price: 20,
    priceConfirmed: true,
    description: 'Potent crushed ginger essence boiled directly into black tea liquor for an invigorating throat-soother.',
    badge: 'Immunity Brew',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'black-ginger-lemon',
    name: 'Ginger + Lemon Black Tea',
    category: 'black',
    price: 20,
    priceConfirmed: true,
    description: 'The golden classic pairing of hot fresh ginger warmth with crisp citrus lemon sharpness.',
    badge: 'Top Pick',
    popular: true,
    isVeg: true,
    servings: 'Hot'
  },

  // Special Category
  {
    id: 'special-badam-milk',
    name: 'Badam Milk',
    category: 'special',
    price: 30,
    priceConfirmed: true,
    description: 'Creamy, luxurious milk enriched with real almond bits, fragrant saffron undertones, and cardamom.',
    badge: 'Premium Classic',
    popular: true,
    isVeg: true,
    servings: 'Warm / Comforting'
  },
  {
    id: 'special-rose-milk',
    name: 'Rose Milk',
    category: 'special',
    price: 30,
    priceConfirmed: true,
    description: 'South India’s timeless nostalgic beverage: chilled whole milk infused with rich aromatic rose essence.',
    badge: 'Chilled Favorite',
    popular: true,
    isVeg: true,
    servings: 'Chilled / Cold'
  },
  {
    id: 'special-somabanam',
    name: 'Somabanam',
    category: 'special',
    price: 20,
    priceConfirmed: true,
    description: 'A traditional ancient Ayurvedic wellness drink crafted with nourishing herbal essences and seeds.',
    badge: 'Traditional Elixir',
    popular: false,
    isVeg: true,
    servings: 'Special Recipe',
    verifiedNote: 'Spelling and recipe verified from August 2025 store menu'
  },

  // Green Tea Category
  {
    id: 'green-plain',
    name: 'Plain Green Tea',
    category: 'green',
    price: 20,
    priceConfirmed: true,
    description: 'Whole leaf steamed green tea offering subtle grassy sweetness, smooth clarity, and clean antioxidants.',
    badge: 'Detox & Calm',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'green-hibiscus',
    name: 'Hibiscus Green Tea',
    category: 'green',
    price: 20,
    priceConfirmed: true,
    description: 'Ruby-red steeped dried hibiscus flowers blended with green tea for a tart, floral, vitamin-C rich cup.',
    badge: 'Antioxidant Rich',
    popular: true,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'green-mint',
    name: 'Mint Green Tea',
    category: 'green',
    price: 20,
    priceConfirmed: true,
    description: 'Invigorating garden mint leaves steeped into light green tea. Leaves your palate delightfully chilled.',
    badge: 'Cooling Digestif',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'green-blue-tea',
    name: 'Blue Tea (Butterfly Pea)',
    category: 'green',
    price: 30,
    priceConfirmed: true,
    description: 'Vibrant indigo infusion made with pure Butterfly Pea flower petals. Naturally caffeine-free and mesmerizing.',
    badge: 'Exotic & Calming',
    popular: true,
    isVeg: true,
    servings: 'Hot / Visual Delight'
  },

  // Herbal Category
  {
    id: 'herbal-buster',
    name: 'Herbal Buster',
    category: 'herbal',
    price: 15,
    priceConfirmed: true,
    description: 'ClusTea’s specialized herbal water decoction made with indigenous herbs to boost stamina and vitality.',
    badge: 'Health Power',
    popular: true,
    isVeg: true,
    servings: 'Hot Decoction'
  },
  {
    id: 'herbal-milk-buster',
    name: 'Herbal Milk Buster',
    category: 'herbal',
    price: 20,
    priceConfirmed: true,
    description: 'The potent Herbal Buster concentrate mellowed with hot farm milk for sustained energy.',
    badge: 'Nourishing Tonic',
    popular: false,
    isVeg: true,
    servings: 'Hot'
  },
  {
    id: 'herbal-plus-buster',
    name: 'Herbal Plus Buster',
    category: 'herbal',
    price: 20,
    priceConfirmed: true,
    description: 'Advanced herbal cluster formulation enriched with rare roots and warming spices for peak immunity.',
    badge: 'Immunity Max',
    popular: true,
    isVeg: true,
    servings: 'Hot Special'
  },

  // Snacks Category
  {
    id: 'snack-mushroom-puff',
    name: 'Mushroom Puff',
    category: 'snacks',
    price: 25,
    priceConfirmed: true,
    description: 'Golden flaky multi-layered pastry stuffed with a savory spiced mushroom and caramelized onion filling.',
    badge: 'Bakery Fresh',
    popular: true,
    isVeg: true,
    servings: 'Oven Warmed'
  },
  {
    id: 'snack-egg-puff',
    name: 'Egg Puff',
    category: 'snacks',
    price: 25,
    priceConfirmed: true,
    description: 'Crisp golden-baked puff pastry enclosing seasoned hard-boiled egg with a spicy pepper-onion masala.',
    badge: 'Tea-time Must Have',
    popular: true,
    isVeg: false,
    servings: 'Oven Warmed'
  },
  {
    id: 'snack-chocolate-biscuits',
    name: 'Chocolate Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Crunchy artisanal bakery cookies baked with rich cocoa chunks. Fresh from the glass display jar.',
    badge: 'Jar Biscuit',
    popular: false,
    isVeg: true,
    servings: 'Per piece / Pack'
  },
  {
    id: 'snack-pineapple-biscuits',
    name: 'Pineapple Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Golden baked shortbread-style biscuits with a fruity pineapple aroma and satisfying crunch.',
    badge: 'Fruity Crunch',
    popular: false,
    isVeg: true,
    servings: 'Per piece / Pack'
  },
  {
    id: 'snack-peanut-biscuits',
    name: 'Peanut Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Crispy roasted peanut biscuits with wholesome nutty crunch in every bite.',
    badge: 'Nutty Crisp',
    popular: false,
    isVeg: true,
    servings: 'Per piece / Pack'
  },
  {
    id: 'snack-coconut-biscuits',
    name: 'Coconut Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Classic bakery favorites baked with toasted desiccated coconut shreds and caramelized edges.',
    badge: 'Customer Love',
    popular: true,
    isVeg: true,
    servings: 'Per piece / Pack'
  },
  {
    id: 'snack-fruit-biscuits',
    name: 'Fruit Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Traditional Karachi-style bakery biscuits studded with colorful candied tutti-frutti pieces.',
    badge: 'Colorful Classic',
    popular: false,
    isVeg: true,
    servings: 'Per piece / Pack'
  },
  {
    id: 'snack-zeera-biscuits',
    name: 'Zeera (Cumin) Biscuits',
    category: 'snacks',
    price: null,
    priceConfirmed: false,
    pricePlaceholder: 'Price on enquiry',
    description: 'Savory-sweet crunchy bakery biscuits sprinkled with roasted cumin seeds. Pairs exceptionally with ginger tea.',
    badge: 'Savory & Sweet',
    popular: true,
    isVeg: true,
    servings: 'Per piece / Pack'
  }
];

export const ADD_ONS = [
  {
    id: 'addon-honey',
    name: 'Pure Honey',
    description: 'Natural mountain honey substitution for sugar',
    priceStatus: 'Confirmation Pending',
    price: 'TBD'
  },
  {
    id: 'addon-jaggery',
    name: 'Organic Jaggery (Nattu Sakkarai)',
    description: 'Traditional unrefined cane sugar for earthy sweetness',
    priceStatus: 'Confirmation Pending',
    price: 'TBD'
  },
  {
    id: 'addon-brown-sugar',
    name: 'Brown Sugar',
    description: 'Rich molasses-infused sweetness',
    priceStatus: 'Confirmation Pending',
    price: 'TBD'
  },
  {
    id: 'addon-sugar-free',
    name: 'Sugar-Free Option',
    description: 'Calorie-free sweetener for health-conscious tea lovers',
    priceStatus: 'Complimentary / TBD',
    price: 'TBD'
  }
];

