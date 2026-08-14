export const FABRIC_CATEGORIES = [
  { id: 'all', name: 'All Varieties' },
  { id: 'dryfit', name: 'Dry-Fit & Mesh' },
  { id: 'cotton', name: 'Combed Cotton' },
  { id: 'spandex', name: '4-Way Stretch Spandex' },
  { id: 'fleece', name: 'Thermal Fleece' },
  { id: 'modal', name: 'Modal Microfiber' },
  { id: 'jacquard', name: 'Jacquard & Canvas' },
];

export const FABRICS_LIST = [
  {
    id: 'f1',
    name: 'Micro-Pique Dry-Fit',
    category: 'dryfit',
    desc: 'Moisture-wicking, ultra-breathable polyester blend perfect for sports t-shirts, cricket uniforms, and marathon sandos.',
    tag: 'Sports & Athletic',
    specs: ['Moisture-Wicking Tech', '100% Non-Toxic Eco Dyes', 'Anti-Bacterial Finish', 'UV Protection UPF 50+']
  },
  {
    id: 'f2',
    name: 'Organic Combed Cotton',
    category: 'cotton',
    desc: '100% natural, hypoallergenic, super soft feel ideal for custom printed T-shirts, daily wear, and self-photo t-shirts.',
    tag: 'Custom Apparel',
    specs: ['100% Bio-Washed Cotton', 'Zero Pill & Zero Shrink', 'Skin-Friendly Non-Allergic', 'Vivid Print Absorption']
  },
  {
    id: 'f3',
    name: '4-Way Stretch Spandex',
    category: 'spandex',
    desc: 'High elasticity and shape retention designed for gym wear, lowers, running leggings, and athletic shorts.',
    tag: 'Gym & Activewear',
    specs: ['360-Degree Flexibility', 'Shape Retention Knit', 'Fast Drying Property', 'Reinforced Stretch Seams']
  },
  {
    id: 'f4',
    name: 'Thermal Brushed Fleece',
    category: 'fleece',
    desc: 'Insulating, soft-touch cozy fabric engineered for high-performance winter jackets for men and women.',
    tag: 'Winterwear',
    specs: ['Thermal Heat Retention', 'Wind-Resistant Weave', 'Ultra Soft Inner Pile', 'Lightweight Warmth']
  },
  {
    id: 'f5',
    name: 'Ultra-Soft Modal Microfiber',
    category: 'modal',
    desc: 'Silky, friction-free skin feel tailored for premium women\'s innerwear, bras, and comfortable undergarments.',
    tag: 'Innerwear',
    specs: ['Silky Smooth Touch', 'Breathable Mesh Microstructure', 'Chafing-Free Comfort', 'Sweat Absorbent']
  },
  {
    id: 'f6',
    name: 'Jacquard & Canvas Weaves',
    category: 'jacquard',
    desc: 'Durable, colorfast heavy fabrics for customized curtains, cushion covers, rally flags, and industrial aprons.',
    tag: 'Home & Corporate',
    specs: ['Heavy Duty GSM', 'Fade-Proof Pigment Dyes', 'Stain & Dirt Resistant', 'Custom Weave Patterns']
  }
];

export const PRODUCTS_LIST = [
  {
    id: 1,
    name: 'High-Performance Sports T-Shirts',
    category: 'sports',
    categoryName: 'Sports & Athletic',
    badge: 'Top Seller',
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
    fabric: 'Micro-Pique Dry-Fit Mesh',
    desc: 'Engineered with moisture-wicking dry-fit polyester. Designed specifically for intense workouts, running, and athletic training. Ultra-breathable texture prevents sweat accumulation.',
    specs: [
      'Micro-Pique Moisture Wicking Fabric',
      '100% Non-Toxic Skin-Safe Colors',
      'Odor-Free & Anti-Bacterial Finish',
      'Custom Sublimation & Logo Printing Available'
    ]
  },
  {
    id: 2,
    name: 'Custom Printed T-Shirts',
    category: 'custom',
    categoryName: 'Custom & Teams',
    badge: 'Customized',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    fabric: '100% Combed Cotton',
    desc: 'Premium combed cotton and poly-cotton blend t-shirts customized with high-precision screen printing, embroidery, or vinyl transfer. Ideal for corporate branding and group wear.',
    specs: [
      '100% Combed Organic Cotton',
      'Stitch-Perfect Collar & Hem Finishing',
      'High Color-Fastness Guarantee',
      'Available in 50+ Fabric Colors'
    ]
  },
  {
    id: 3,
    name: 'Self-Photo Printed T-Shirts',
    category: 'custom',
    categoryName: 'Custom & Teams',
    badge: 'HD Printing',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    fabric: 'Poly-Cotton HD Blend',
    desc: 'Turn your favorite memories and artwork into high-definition wearables. Our advanced heat-transfer sublimation ensures picture clarity without fading or cracking.',
    specs: [
      'HD Digital Photo Sublimation',
      'Soft-Touch Poly-Cotton Blend',
      'Zero-Crack Print Guarantee',
      'Customized Single & Bulk Orders'
    ]
  },
  {
    id: 4,
    name: 'Lowers & Gym Wear',
    category: 'outer-gym',
    categoryName: 'Gym & Activewear',
    badge: 'Active Comfort',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    fabric: '4-Way Stretch Spandex',
    desc: 'Flexible, high-durability track pants and gym lowers crafted with 4-way stretch spandex fabrics. Features zipper pockets, elastic waistband, and anti-chafing seams.',
    specs: [
      '4-Way Stretch Elastic Spandex',
      'Reinforced Double Stitching',
      'Moisture-Wicking Interior',
      'Ergonomic Athletic Fit'
    ]
  },
  {
    id: 5,
    name: 'Professional Running Wear',
    category: 'sports',
    categoryName: 'Sports & Athletic',
    badge: 'Breathable',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    fabric: 'Featherlight Tech Knit',
    desc: 'Ultra-lightweight mesh gear designed for long-distance marathon runners and sprinters. Offers maximum body airflow and thermal cooling.',
    specs: [
      'Featherlight Ventilation Mesh',
      'Reflective Safety Trims',
      'Fast-Drying Eco Dyes',
      'Zero Friction Seams'
    ]
  },
  {
    id: 6,
    name: 'School & Player T-Shirts',
    category: 'custom',
    categoryName: 'Custom & Teams',
    badge: 'Bulk Special',
    img: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?q=80&w=800&auto=format&fit=crop',
    fabric: 'High Durability Cotton Blend',
    desc: 'Heavy-duty school sports house uniforms and student team apparel. Stain-resistant, easy to wash, and built to endure daily physical activity.',
    specs: [
      'High-Durability Cotton Blend',
      'Stain-Resistant Finishing',
      'School Badge Embroidery',
      'Affordable Direct Factory Pricing'
    ]
  },
  {
    id: 7,
    name: 'Marathon & Cricket Uniforms',
    category: 'custom',
    categoryName: 'Custom & Teams',
    badge: 'Full Sublimated',
    img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
    fabric: 'Sublimated Cool Mesh',
    desc: 'Complete sublimated sports uniforms featuring individual player names, squad numbers, team logos, and sponsor graphics in permanent non-fade inks.',
    specs: [
      'Full 360-Degree Sublimation',
      'Cool-Mesh Breathable Fabric',
      'Customized Squad Sizing',
      'On-Time Event Delivery'
    ]
  },
  {
    id: 8,
    name: 'Commercial & Chef Aprons',
    category: 'home',
    categoryName: 'Home & Accessories',
    badge: 'Stain Proof',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    fabric: 'Heavy Canvas Weave',
    desc: 'Sturdy canvas and heavy cotton aprons with cross-back adjustable straps and multiple utility pockets. Perfect for kitchens, cafes, and salons.',
    specs: [
      'Heavy Canvas Cotton Weave',
      'Water & Stain Resistant Coating',
      'Adjustable Metal Hardware',
      'Custom Logo Embroidery'
    ]
  },
  {
    id: 9,
    name: 'Cushion Covers & Pillows',
    category: 'home',
    categoryName: 'Home & Accessories',
    badge: 'Decor Grade',
    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
    fabric: 'Velvet & Jacquard',
    desc: 'Luxurious decorative cushion covers and soft pillows. Available in rich velvet, jacquard, and printed designs with hidden zipper closures.',
    specs: [
      'Premium Velvet & Jacquard Weaves',
      'Hidden Zipper Closure',
      '100% Eco-Friendly Non-Fade Inks',
      'Custom Sizes & Prints'
    ]
  },
  {
    id: 10,
    name: 'Flags & Rally T-Shirts',
    category: 'home',
    categoryName: 'Home & Accessories',
    badge: 'Promotional',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    fabric: 'Weatherproof Knit',
    desc: 'Vibrant political and promotional campaign flags along with high-volume rally t-shirts manufactured on short turnaround times.',
    specs: [
      'Weatherproof Knit Fabric',
      'Vivid High-Visibility Colors',
      'Bulk Quantity Discounts',
      'Swift Production Lead Times'
    ]
  },
  {
    id: 11,
    name: 'Customized Curtains',
    category: 'home',
    categoryName: 'Home & Accessories',
    badge: 'Interior Drapes',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    fabric: 'Polyester Jacquard',
    desc: 'Elegantly tailored window and door curtains. Choose from blackout room-darkening fabrics or soft sheer drapes with custom hem lengths.',
    specs: [
      'Custom Window & Door Sizing',
      'UV & Sun-Fading Protection',
      'Grommet or Ring Eyelet Header',
      '50+ Texture Selections'
    ]
  },
  {
    id: 12,
    name: 'Sports Sandos & Sleeveless Tees',
    category: 'sports',
    categoryName: 'Sports & Athletic',
    badge: 'Max Cooling',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    fabric: 'Mesh Ventilation Knit',
    desc: 'Sleeveless gym sandos designed for uninhibited arm movement, bodybuilding, and summer running.',
    specs: [
      'Deep Armhole Athletic Cut',
      'Quick-Dry Stretch Knit',
      'Skin-Safe Non-Allergic Fabric',
      'Anti-Odor Micro Treatment'
    ]
  },
  {
    id: 13,
    name: 'Winter Jackets (Men & Women)',
    category: 'outer-gym',
    categoryName: 'Gym & Outerwear',
    badge: 'Cozy Warmth',
    img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop',
    fabric: 'Thermal Fleece & Shell',
    desc: 'Stylish, thermal insulated bomber and puffer jackets crafted for cold winter protection. Features smooth heavy-duty zippers and fleece lining.',
    specs: [
      'Thermal Fleece & Poly Padding',
      'Windproof Outer Shell',
      'Durable YKK Style Zippers',
      'Men & Women Tailored Fits'
    ]
  },
  {
    id: 14,
    name: 'Premium Innerwear & Bras',
    category: 'innerwear',
    categoryName: 'Innerwear',
    badge: 'Ultra Soft',
    img: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=800&auto=format&fit=crop',
    fabric: 'Modal Microfiber',
    desc: 'Ultra-soft modal and microfiber innerwear line. Engineered with non-binding elastic and seamless stitching for supreme everyday comfort.',
    specs: [
      'Super-Soft Modal Microfiber',
      'Anti-Bacterial & Hypoallergenic',
      'Seamless Skin-Safe Elastic',
      'Breathable Day-Long Comfort'
    ]
  }
];
