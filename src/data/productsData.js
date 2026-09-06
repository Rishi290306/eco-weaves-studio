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
    desc: 'Customized bio-washed 100% combed cotton t-shirt with high-definition graphic printing. Share your custom artwork or logo to bring your personal fashion vision to life.',
    specs: ['100% Bio-Washed Combed Cotton', 'HD Graphic Screen & Vinyl Print', 'Zero Pill & Zero Shrinkage', 'Available in 50+ Custom Colors']
  },
  {
    id: 2,
    name: 'Group & Event Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Popular',
    img: prod2,
    fabric: 'Soft Bio-Washed Poly-Cotton',
    desc: 'Customized group and event t-shirts designed for college fests, corporate gatherings, family reunions, and awareness rallies. Features consistent squad color matching and durable prints.',
    specs: ['Soft Bio-Washed Poly-Cotton Blend', 'Matching Squad Colorways', 'Fast Production Lead Times', 'Direct Factory Bulk Pricing']
  },
  {
    id: 3,
    name: 'Sports Dry-Fit Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Dry-Fit',
    img: prod3,
    fabric: 'Micro-Pique Dry-Fit Mesh',
    desc: 'High-performance micro-pique dry-fit sports t-shirt. Engineered with sweat-wicking technology and anti-bacterial eco dyes for intense gym workouts and athletic training.',
    specs: ['Micro-Pique Moisture-Wicking Mesh', 'UPF 50+ UV Sun Protection', 'Anti-Odor & Skin-Safe Dyes', 'Custom Team Logos & Graphics']
  },
  {
    id: 4,
    name: 'Staff & Uniform Polo T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Corporate Grade',
    img: prod4,
    fabric: 'Cotton Pique Matty',
    desc: 'Professional corporate staff polo t-shirt crafted with durable cotton pique matty weave. Designed with reinforced collar stitching and precision company logo embroidery.',
    specs: ['Stain-Resistant Cotton Pique Matty', 'Precision Corporate Logo Embroidery', 'Colorfast Multi-Wash Guarantee', 'Men & Women Executive Fits']
  },
  {
    id: 5,
    name: 'Sublimated Sports Jersey T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: '360° Sublimated',
    img: prod5,
    fabric: 'Sublimated Cool Mesh',
    desc: 'Full 360-degree sublimated sports jersey for cricket, football, and athletic teams. Customized with permanent non-fade inks, player names, squad numbers, and sponsor graphics.',
    specs: ['Full 360° All-Over Sublimation', 'Cool-Mesh Breathable Sports Fabric', 'Custom Player Names & Numbers', 'Permanent Fade-Proof Printing']
  },
  {
    id: 6,
    name: 'Marathon & Athletics T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Ultra Light',
    img: prod6,
    fabric: 'Featherlight Tech Mesh',
    desc: 'Featherlight marathon running t-shirt engineered for long-distance endurance athletes. Features ultra-breathable ventilation mesh and reflective safety elements.',
    specs: ['Featherlight Ventilation Tech Mesh', 'Reflective Trim Safety Option', 'Zero Chafing Flatlock Seams', 'Pan-India Bulk Event Supply']
  },
  {
    id: 7,
    name: 'Biker & Riding Club T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Biker Special',
    img: prod7,
    fabric: 'UV-Protected Stretch Poly',
    desc: 'Customized biker club and car enthusiast riding t-shirt built with windproof stretch poly fabric and UPF 50+ sun protection for long highway rides.',
    specs: ['UPF 50+ Highway Sun Shield', 'Wind-Resistant Stretch Poly', 'Custom Club Emblem Customization', 'High-Impact Vibrant Graphics']
  },
  {
    id: 8,
    name: 'Advertising & Campaign T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Promo Bulk',
    img: prod8,
    fabric: 'Poly-Cotton Promo Knit',
    desc: 'High-volume promotional advertising t-shirts tailored for brand product launches, marketing campaigns, trade shows, and political rallies.',
    specs: ['Maximum Bulk Cost Efficiency', 'Bold High-Visibility Brand Printing', 'Swift Production Lead Times', 'Vibrant Color Selections']
  },
  {
    id: 9,
    name: 'Sleeveless Gym Sando T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Max Cooling',
    img: prod9,
    fabric: 'Mesh Ventilation Knit',
    desc: 'Sleeveless athletic gym sando t-shirt cut with deep armholes for uninhibited upper body movement during bodybuilding and summer training.',
    specs: ['Deep Armhole Athletic Cut', 'Quick-Dry Breathable Stretch Knit', 'Skin-Safe Non-Allergic Fabric', 'Odor-Free Micro Finish']
  },
  {
    id: 11,
    name: 'Custom Fashion Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Fashion Trend',
    img: prod11,
    fabric: '100% Bio-Washed Cotton',
    desc: 'Trendy custom printed fashion t-shirt tailored with premium combed cotton. Perfect for personal streetwear, custom merchandise lines, and gift wearables.',
    specs: ['100% Bio-Washed Organic Cotton', 'Soft-Touch Non-Cracking Inks', 'Pre-Shrunk Premium Fit', 'Custom Single & Bulk Orders']
  },
  {
    id: 13,
    name: 'Corporate Brand Promo T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Corporate Merch',
    img: prod13,
    fabric: 'Premium Poly-Cotton Blend',
    desc: 'Custom branded promotional t-shirt crafted for corporate staff gifts, company retreats, and brand ambassador merchandise with crisp logo placement.',
    specs: ['Premium Poly-Cotton Blend', 'Precision Brand Logo Print', 'Stain & Dirt Resistant Finish', 'Pan-India Express Shipping']
  },
  {
    id: 14,
    name: 'Executive Custom Printed T-Shirt',
    category: 'tshirts',
    categoryName: 'Printed T-Shirts',
    badge: 'Executive',
    img: prod14,
    fabric: 'Heavy GSM Combed Cotton',
    desc: 'Executive grade printed t-shirt engineered with heavy GSM combed cotton. Built with double-stitched hems and eco-friendly skin-safe color dyes.',
    specs: ['Heavy GSM Combed Cotton Knit', 'Double-Stitch Collar & Hems', 'Non-Toxic Eco Color Dyes', 'Direct Factory Guaranteed Supply']
  },

  // --- CATEGORY 2: CUSHIONS (IMAGES 10 & 12) ---
  {
    id: 10,
    name: 'Custom Printed Cushion Cover',
    category: 'cushions',
    categoryName: 'Cushions',
    badge: 'Top Home Decor',
    img: prod10,
    fabric: 'Jacquard & Heavy Cotton Canvas',
    desc: 'Custom printed decorative cushion cover woven with heavy-duty cotton canvas and Jacquard weaves. Tailored with concealed zipper closures and vibrant eco inks.',
    specs: ['Heavy-Duty Canvas & Jacquard Weave', 'Concealed Zipper Enclosure', '100% Eco-Friendly Non-Fade Inks', 'Custom Square & Rectangular Sizes']
  },
  {
    id: 12,
    name: 'Self-Photo & Graphic Cushion',
    category: 'cushions',
    categoryName: 'Cushions',
    badge: 'HD Photo Print',
    img: prod12,
    fabric: 'Poly-Cotton Soft Canvas',
    desc: 'Customized self-photo and artistic graphic cushion cover. Turn your favorite memories, family portraits, or brand graphics into high-definition printed home decor.',
    specs: ['HD Photo Sublimation Printing', 'Zero-Crack Print Guarantee', 'Washable Soft Satin Canvas', 'Ideal for Personalized Gifting']
  }
];
