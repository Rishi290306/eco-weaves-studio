export const FABRIC_CATEGORIES = [
  { id: 'all', name: 'All Products & Fabrics' },
  { id: 'custom', name: 'Custom & Group Wear' },
  { id: 'sports', name: 'Sportswear & Activewear' },
  { id: 'uniforms', name: 'Staff & Uniforms' },
  { id: 'advertising', name: 'Advertising & Merchandise' },
  { id: 'fabrics', name: '50+ Fabric Supply' }
];

export const FABRICS_LIST = [
  {
    id: 'f1',
    name: 'Micro-Pique Dry-Fit',
    category: 'sports',
    desc: 'Moisture-wicking, ultra-breathable polyester blend perfect for sports t-shirts, cricket jerseys, and marathon sandos.',
    tag: 'Sports & Athletic',
    specs: ['Moisture-Wicking Tech', '100% Non-Toxic Eco Dyes', 'Anti-Bacterial Finish', 'UV Protection UPF 50+']
  },
  {
    id: 'f2',
    name: 'Organic Combed Cotton',
    category: 'custom',
    desc: '100% natural, hypoallergenic, super soft feel ideal for custom printed T-shirts, group tees, and event apparel.',
    tag: 'Custom Apparel',
    specs: ['100% Bio-Washed Cotton', 'Zero Pill & Zero Shrink', 'Skin-Friendly Non-Allergic', 'Vivid Print Absorption']
  },
  {
    id: 'f3',
    name: '4-Way Stretch Spandex',
    category: 'sports',
    desc: 'High elasticity and shape retention designed for gym wear, track pants, shorts, and riding t-shirts.',
    tag: 'Gym & Activewear',
    specs: ['360-Degree Flexibility', 'Shape Retention Knit', 'Fast Drying Property', 'Reinforced Stretch Seams']
  },
  {
    id: 'f4',
    name: 'Thermal Brushed Fleece',
    category: 'sports',
    desc: 'Insulating, soft-touch cozy fabric engineered for high-performance winter jackets and team hoodies.',
    tag: 'Winterwear',
    specs: ['Thermal Heat Retention', 'Wind-Resistant Weave', 'Ultra Soft Inner Pile', 'Lightweight Warmth']
  },
  {
    id: 'f5',
    name: 'Heavy Duty Canvas & Polyester',
    category: 'advertising',
    desc: 'Durable, weather-resistant woven fabrics for advertising bags, gym bags, and custom promotional flags.',
    tag: 'Advertising & Bags',
    specs: ['Heavy Duty GSM', 'Fade-Proof UV Printing', 'Stain & Water Resistant', 'Customized Sizing']
  }
];

export const PRODUCTS_LIST = [
  {
    id: 1,
    name: 'Custom Printed T-Shirts',
    category: 'custom',
    categoryName: 'Custom Apparel',
    badge: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    fabric: '100% Bio-Washed Combed Cotton',
    desc: 'You bring your ideas and personal style, we bring them to life with creative craftsmanship. High-definition screen printing, vinyl, or embroidery for unique personal fashion.',
    specs: ['100% Combed Cotton', 'Custom Logo & Graphics', 'Vivid Print Fastness', '50+ Fabric Colors Available']
  },
  {
    id: 2,
    name: 'Group & Event T-Shirts',
    category: 'custom',
    categoryName: 'Custom & Events',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    fabric: 'Soft Cotton-Poly Blend',
    desc: 'Tailored group t-shirts for college fests, family reunions, corporate events, and awareness rallies. Customized with matching colors and group logos.',
    specs: ['Bulk Group Pricing', 'Consistent Squad Colors', 'Fast Event Turnaround', 'Durable Print Quality']
  },
  {
    id: 3,
    name: 'Sportswear & Gym Sandos',
    category: 'sports',
    categoryName: 'Sportswear & Gym Wear',
    badge: 'Cooling Mesh',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    fabric: 'Micro-Pique Dry-Fit Mesh',
    desc: 'Deep armhole athletic gym sandos and sports t-shirts designed for intense bodybuilding, workouts, and running. Sweat-wicking texture keeps you cool.',
    specs: ['Sweat Wicking Mesh', 'Uninhibited Arm Movement', 'Odor-Free Treatment', 'Custom Sublimation Prints']
  },
  {
    id: 4,
    name: 'Shorts & Track Pants',
    category: 'sports',
    categoryName: 'Sportswear & Activewear',
    badge: '4-Way Stretch',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    fabric: '4-Way Stretch Spandex & Lycra',
    desc: 'Ergonomic track pants, joggers, and athletic shorts featuring zipper pockets, elastic waistbands, and reinforced stretch seams for peak agility.',
    specs: ['360° Elasticity', 'Secure Zipper Pockets', 'Anti-Chafing Flatlock Seams', 'Custom Leg Banding']
  },
  {
    id: 5,
    name: 'Cricket Jerseys & Sportswear Kits',
    category: 'sports',
    categoryName: 'Sportswear & Teams',
    badge: '360° Sublimated',
    img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
    fabric: 'Sublimated Cool Mesh',
    desc: 'Full 360-degree sublimated cricket jerseys and team kits with player names, custom squad numbers, team logos, and sponsor graphics.',
    specs: ['Full Sublimation Printing', 'Permanent Non-Fade Inks', 'Custom Player Numbers & Names', 'Breathable Sports Mesh']
  },
  {
    id: 6,
    name: 'Marathon T-Shirts',
    category: 'sports',
    categoryName: 'Sportswear & Running',
    badge: 'Ultra Light',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    fabric: 'Featherlight Tech Mesh',
    desc: 'Ultra-lightweight marathon t-shirts engineered for long-distance runners. Provides maximum airflow, cooling, and reflective safety elements.',
    specs: ['Featherlight Ventilation', 'Reflective Trim Option', 'Bulk Event Supply', 'Skin-Safe Eco Dyes']
  },
  {
    id: 7,
    name: 'Bike & Car Riding T-Shirts',
    category: 'custom',
    categoryName: 'Custom Riding Apparel',
    badge: 'Biker Special',
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    fabric: 'UV-Protected Stretch Poly',
    desc: 'Customized biker club and car enthusiast riding t-shirts. Features wind-resistant stretch fabrics, UV sun protection, and bold graphics.',
    specs: ['UPF 50+ Sun Protection', 'Club Logo Customization', 'Windproof Stretch Knit', 'High Impact Graphics']
  },
  {
    id: 8,
    name: 'Staff & Corporate Uniform T-Shirts',
    category: 'uniforms',
    categoryName: 'Staff & Uniforms',
    badge: 'Corporate Grade',
    img: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?q=80&w=800&auto=format&fit=crop',
    fabric: 'Premium Cotton Pique Matty',
    desc: 'Professional staff polo t-shirts and corporate uniforms. Neat collar stitching, brand logo embroidery, and stain-resistant fabric for daily staff wear.',
    specs: ['Precision Logo Embroidery', 'Stain-Resistant Pique Weave', 'Consistent Brand Color Matching', 'Durable Multi-Wash Fabric']
  },
  {
    id: 9,
    name: 'Advertising T-Shirts',
    category: 'advertising',
    categoryName: 'Advertising & Merchandise',
    badge: 'Promo Bulk',
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    fabric: 'Poly-Cotton Promo Knit',
    desc: 'Cost-effective high-volume advertising t-shirts for brand campaigns, product launches, trade shows, and marketing giveaways.',
    specs: ['High Volume Cost Efficiency', 'Bold Brand Logo Printing', 'Fast Production Lead Times', 'Multiple Colorways']
  },
  {
    id: 10,
    name: 'Advertising Flags & Banners',
    category: 'advertising',
    categoryName: 'Advertising & Flags',
    badge: 'High Visibility',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    fabric: 'Weatherproof Polyester Knit',
    desc: 'Custom outdoor advertising flags, teardrop flags, feather banners, and rally flags in vivid non-fade outdoor inks.',
    specs: ['Weatherproof & Sun-Resistant', 'Double-Sided Print Option', 'Heavy Hardware Mounts', 'Custom Dimensions']
  },
  {
    id: 11,
    name: 'Advertising & Gym Bags',
    category: 'advertising',
    categoryName: 'Advertising & Bags',
    badge: 'Custom Utility',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    fabric: 'Heavy Duty Canvas & Cordura',
    desc: 'Custom printed gym duffel bags, drawstring bags, and promotional advertising bags featuring custom logos and zipper compartments.',
    specs: ['Heavy Canvas & Polyester', 'Water-Resistant Coating', 'Custom Screen & Rubber Prints', 'Durable Carrying Straps']
  },
  {
    id: 12,
    name: 'Corporate & Promotional Merchandise',
    category: 'advertising',
    categoryName: 'Corporate Merchandise',
    badge: 'Exclusive',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
    fabric: 'Custom Eco Textiles',
    desc: 'Complete range of promotional gift merchandise including custom aprons, tote bags, caps, and branded merchandise kits for corporate clients.',
    specs: ['Complete Custom Gifting Solutions', 'Eco-Friendly Materials', 'Premium Gift Packaging', 'Pan-India Bulk Delivery']
  }
];
