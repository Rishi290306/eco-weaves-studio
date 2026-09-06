import prod1 from '../assets/products/product_1.jpg';
import prod2 from '../assets/products/product_2.jpg';
import prod3 from '../assets/products/product_3.jpg';
import prod4 from '../assets/products/product_4.jpg';
import prod5 from '../assets/products/product_5.jpg';
import prod6 from '../assets/products/product_6.jpg';
import prod7 from '../assets/products/product_7.jpg';
import prod8 from '../assets/products/product_8.jpg';
import prod9 from '../assets/products/product_9.jpg';
import prod10 from '../assets/products/product_10.jpg';
import prod11 from '../assets/products/product_11.jpg';
import prod12 from '../assets/products/product_12.jpg';
import prod13 from '../assets/products/product_13.jpg';
import prod14 from '../assets/products/product_14.jpg';

export const FABRIC_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'tshirts', name: 'Printed T-Shirts' },
  { id: 'cushions', name: 'Cushions' }
];

export const FABRICS_LIST = [
  {
    id: 'f1',
    name: 'Organic Combed Cotton',
    category: 'tshirts',
    desc: '100% natural, bio-washed cotton fabric ideal for custom printed T-shirts, group tees, and everyday fashion.',
    tag: 'T-Shirts Fabric',
    specs: ['100% Bio-Washed Cotton', 'Zero Pill & Zero Shrink', 'Skin-Friendly Non-Allergic', 'Vivid Print Absorption']
  },
  {
    id: 'f2',
    name: 'Micro-Pique Dry-Fit Mesh',
    category: 'tshirts',
    desc: 'Moisture-wicking, ultra-breathable mesh blend for sports t-shirts, cricket jerseys, and athletic wear.',
    tag: 'Sports T-Shirts',
    specs: ['Moisture-Wicking Tech', '100% Non-Toxic Eco Dyes', 'Anti-Bacterial Finish', 'UV Protection UPF 50+']
  },
  {
    id: 'f3',
    name: 'Jacquard & Canvas Weaves',
    category: 'cushions',
    desc: 'Heavy-duty woven Jacquard and cotton canvas for custom printed cushion covers and decorative pillows.',
    tag: 'Cushion Fabric',
    specs: ['Heavy Duty GSM', 'Fade-Proof Inks', 'Stain & Dirt Resistant', 'Hidden Zipper Weave']
  }
];

export const PRODUCTS_LIST = [
  // --- CATEGORY 1: PRINTED T-SHIRTS (12 ITEMS) ---
  {
    id: 1,
    name: 'Custom Graphic Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Best Seller',
    img: prod1,
    fabric: '100% Bio-Washed Combed Cotton',
    desc: 'High-definition graphic printed T-shirt crafted with bio-washed combed cotton. Premium feel and vibrant print fastness.',
    specs: ['100% Combed Cotton', 'Custom Logo & Artwork', 'Vivid Color Fastness', '50+ Fabric Colors']
  },
  {
    id: 2,
    name: 'Group & Event Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Popular',
    img: prod2,
    fabric: 'Soft Cotton-Poly Blend',
    desc: 'Matching group t-shirts for college fests, corporate events, reunions, and awareness rallies.',
    specs: ['Bulk Group Pricing', 'Consistent Squad Colors', 'Fast Event Delivery', 'Durable Print Quality']
  },
  {
    id: 3,
    name: 'Sports Dry-Fit Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Dry-Fit',
    img: prod3,
    fabric: 'Micro-Pique Dry-Fit Mesh',
    desc: 'Breathable moisture-wicking sports t-shirt engineered for intense gym workouts, running, and athletic training.',
    specs: ['Sweat Wicking Mesh', 'Uninhibited Movement', 'Odor-Free Treatment', 'Custom Sublimation Prints']
  },
  {
    id: 4,
    name: 'Staff & Uniform Polo T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Corporate Grade',
    img: prod4,
    fabric: 'Cotton Pique Matty',
    desc: 'Professional corporate staff polo t-shirt with neat collar stitching and company logo printing/embroidery.',
    specs: ['Precision Logo Embroidery', 'Stain-Resistant Pique', 'Brand Color Matching', 'Multi-Wash Durability']
  },
  {
    id: 5,
    name: 'Sublimated Sports Jersey T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: '360° Sublimated',
    img: prod5,
    fabric: 'Sublimated Cool Mesh',
    desc: 'Full 360-degree sublimated cricket & sports jersey featuring custom player names, squad numbers, and team logos.',
    specs: ['Full Sublimation Printing', 'Permanent Non-Fade Inks', 'Custom Player Numbers', 'Breathable Sports Mesh']
  },
  {
    id: 6,
    name: 'Marathon & Athletics T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Ultra Light',
    img: prod6,
    fabric: 'Featherlight Tech Mesh',
    desc: 'Featherlight marathon t-shirt designed for long-distance runners with body airflow ventilation.',
    specs: ['Featherlight Ventilation', 'Reflective Trim Option', 'Bulk Event Supply', 'Skin-Safe Eco Dyes']
  },
  {
    id: 7,
    name: 'Biker & Riding Club T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Biker Special',
    img: prod7,
    fabric: 'UV-Protected Stretch Poly',
    desc: 'Customized biker club and car enthusiast riding t-shirt with windproof stretch fabric and UPF 50+ sun protection.',
    specs: ['UPF 50+ Sun Protection', 'Club Logo Customization', 'Windproof Stretch Knit', 'High Impact Graphics']
  },
  {
    id: 8,
    name: 'Advertising & Campaign T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Promo Bulk',
    img: prod8,
    fabric: 'Poly-Cotton Promo Knit',
    desc: 'Cost-effective high-volume advertising t-shirt for brand marketing campaigns, trade shows, and product giveaways.',
    specs: ['High Volume Cost Efficiency', 'Bold Brand Logo Printing', 'Fast Production Lead Times', 'Multiple Colorways']
  },
  {
    id: 9,
    name: 'Sleeveless Gym Sando T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Max Cooling',
    img: prod9,
    fabric: 'Mesh Ventilation Knit',
    desc: 'Sleeveless gym sando t-shirt designed for bodybuilding, uninhibited arm movement, and summer athletic training.',
    specs: ['Deep Armhole Athletic Cut', 'Quick-Dry Stretch Knit', 'Skin-Safe Non-Allergic', 'Anti-Odor Micro Finish']
  },
  {
    id: 11,
    name: 'Custom Fashion Printed T-Shirt (Design B)',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Fashion Trend',
    img: prod11,
    fabric: '100% Bio-Washed Cotton',
    desc: 'Stylish custom printed fashion t-shirt crafted with premium bio-washed cotton and high-clarity graphics.',
    specs: ['100% Bio-Washed Cotton', 'Soft Touch Print', 'Pre-Shrunk Fabric', 'Modern Tailored Fit']
  },
  {
    id: 13,
    name: 'Corporate & Brand Promo T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Corporate Merch',
    img: prod13,
    fabric: 'Premium Poly-Cotton Blend',
    desc: 'Custom branded promotional t-shirt featuring company logos and brand slogans for corporate teams.',
    specs: ['Precision Brand Logo Print', 'Stain & Dirt Resistant', 'Bulk Corporate Supply', 'Pan-India Delivery']
  },
  {
    id: 14,
    name: 'Executive Custom Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Executive',
    img: prod14,
    fabric: 'Premium Combed Cotton Pique',
    desc: 'Executive style printed t-shirt engineered with soft combed cotton pique for high durability.',
    specs: ['Soft Loft Combed Cotton', 'Durable Collar & Cuff Stitching', 'Fade-Resistant Eco Dyes', 'Pan-India Direct Delivery']
  },

  // --- CATEGORY 2: CUSHIONS (IMAGES 10 & 12) ---
  {
    id: 10,
    name: 'Custom Printed Cushion Cover (Image 10)',
    category: 'cushions',
    categoryName: 'Cushions',
    badge: 'Top Home Decor',
    img: prod10,
    fabric: 'Jacquard & Heavy Cotton Canvas',
    desc: 'Custom printed decorative cushion cover tailored with rich Jacquard and heavy cotton canvas weaves. Available with custom photo prints and patterns.',
    specs: ['High-GSM Heavy Duty Weave', 'Hidden Zipper Enclosure', '100% Eco Non-Fade Inks', 'Custom Square & Rectangular Sizes']
  },
  {
    id: 12,
    name: 'Self-Photo & Graphic Cushion (Image 12)',
    category: 'cushions',
    categoryName: 'Cushions',
    badge: 'HD Photo Print',
    img: prod12,
    fabric: 'Poly-Cotton Soft Canvas',
    desc: 'Turn your favorite memories, family portraits, or artistic graphics into high-definition printed cushions with crisp detail.',
    specs: ['HD Digital Photo Printing', 'Zero-Crack Print Guarantee', 'Washable Soft Covers', 'Gift & Personalized Packing']
  }
];
