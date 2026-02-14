import IT from "../assets/IT.jpg";
import Interior from "../assets/Interior.jpg";
import Fruits from "../assets/Fruits.jpg";
import Spices from "../assets/Img3.jpg";
import Snacks from "../assets/Snacks.webp";
import Nuts from "../assets/Nuts.jpg";
import Diwali from "../assets/diwali.jpg";
import Spices1 from "../assets/Spices/whole.png";
import Spices2 from "../assets/Spices/blended.png";
import Spices3 from "../assets/Spices/seasoning.png";
import Spices4 from "../assets/Spices/herbal.png";
import Snacks1 from "../assets/Dry Snacks/salted.png";
import Snacks2 from "../assets/Dry Snacks/peri.png";
import Snacks3 from "../assets/Dry Snacks/pudhina.png";
import Snacks4 from "../assets/Dry Snacks/masala.png";
import interior1 from "../assets/Interior/gold.png";
import interior2 from "../assets/Interior/silver.png";
import interior3 from "../assets/Interior/copper.png";
import interior4 from "../assets/Interior/champagne.png";
import it1 from "../assets/IT/it1.png";
import it2 from "../assets/IT/it2.png";
import it3 from "../assets/IT/it3.png";
import it4 from "../assets/IT/it4.png";
import df1 from "../assets/Dry Fruit/df1.jpg";
import df2 from "../assets/Dry Fruit/df2.jpg";
import df3 from "../assets/Dry Fruit/df3.jpg";
import df4 from "../assets/Dry Fruit/df4.jpg";
import d1 from "../assets/Diwali/d1.png";
import d2 from "../assets/Diwali/d2.png";
import d3 from "../assets/Diwali/d3.png";
import d4 from "../assets/Diwali/d4.png";
import d5 from "../assets/Diwali/d5.png";
import r1 from "../assets/Ready to Eat/r1.png";
import r2 from "../assets/Ready to Eat/r2.png";
import r3 from "../assets/Ready to Eat/r3.png";
import r4 from "../assets/Ready to Eat/r4.png";
import r5 from "../assets/Ready to Eat/r5.png";
import r6 from "../assets/Ready to Eat/r6.png";
import f1 from "../assets/Fruits and Vegetables/f1.png";
import f2 from "../assets/Fruits and Vegetables/f2.png";
import f3 from "../assets/Fruits and Vegetables/f3.png";
import f4 from "../assets/Fruits and Vegetables/f4.png";
import f5 from "../assets/Fruits and Vegetables/f5.png";
import f6 from "../assets/Fruits and Vegetables/f6.png";
import f7 from "../assets/Fruits and Vegetables/f7.png";
import f8 from "../assets/Fruits and Vegetables/f8.png";
import f9 from "../assets/Fruits and Vegetables/f9.png";



export interface GalleryItem {
  image: ImageMetadata;
  name: string;
}

export interface GallerySection {
  heading: string;
  items: GalleryItem[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cardDescription: string;
  heroImage: ImageMetadata;
  gallery?: GalleryItem[];
  gallerySections?: GallerySection[];
}

export const services: Service[] = [
  {
    slug: "it-services",
    title: "IT Solutions",
    tagline: "Smart, user-focused digital products",
    description:
      "We provide IT solutions to elevate your digital presence, including web design, website and web app development, Agentic AI applications, chatbots, and voice agents. From startups to enterprises, we deliver smart, user-focused products that drive engagement and streamline workflows.",
    cardDescription:
      "Web design, web app development, Agentic AI applications, chatbots, and voice agents.",
    heroImage: IT,
    gallery: [
      { image: it1, name: "Web Designing" },
      { image: it2, name: "Web Development" },
      { image: it3, name: "Agentic AI Applications" },
      { image: it4, name: "Chatbot & Voice Agents" },
    ],
  },
  {
    slug: "interior-designing",
    title: "Interior Designing",
    tagline: "Creative Impressions",
    description:
      "A creative space specializing in metal leafing. We offer services in gold, silver, and antique leafing, blending craftsmanship with advanced techniques. Backed by skilled artisans, we deliver timeless finishes for every project.",
    cardDescription:
      "Specializing in metal leafing — gold, silver, copper, and champagne finishes for every project.",
    heroImage: Interior,
    gallery: [
      { image: interior1, name: "Gold Leafing" },
      { image: interior2, name: "Silver Leafing" },
      { image: interior3, name: "Copper Leafing" },
      { image: interior4, name: "Champagne Leafing" },
    ],
  },
  {
    slug: "fruits-and-vegetables",
    title: "Fruits And Vegetables",
    tagline: "Elevating Kitchens Worldwide",
    description:
      "We bring you premium fruit powders, agro products, and fresh produce made with care and purity. From lemon and kiwi to strawberry, our ingredients are sourced, processed, and packaged to preserve natural flavor and nutrition. We're committed to quality, sustainability, and delivering clean, flavorful solutions for kitchens and industries alike.",
    cardDescription:
      "Premium fruit powders, dehydrated flakes, and fresh produce made with care and purity.",
    heroImage: Fruits,
    gallerySections: [
      {
        heading: "Fresh Fruits and Vegetable",
        items: [
          { image: f7, name: "Fruits" },
          { image: f8, name: "Vegetables" },
          { image: f9, name: "Berries" },
        ],
      },
      {
        heading: "Fruits and Vegetable Powder",
        items: [
          { image: f1, name: "Orange Powder" },
          { image: f2, name: "Lemon Powder" },
          { image: f3, name: "Strawberry Powder" },
          { image: f4, name: "Kiwi Powder" },
        ],
      },
      {
        heading: "Dehydrated Fruits and Vegetable Flakes",
        items: [
          { image: f5, name: "Vegetable Flakes" },
          { image: f6, name: "Fruit Flakes" },
        ],
      },

    ],
  },
  {
    slug: "spices",
    title: "Spices",
    tagline: "Elevating Kitchens Worldwide",
    description:
      "We source the finest spices from authentic farms across the globe. Our goal is to deliver bold, pure flavors rooted in tradition and backed by quality and sustainability. From turmeric's warmth to pepper's punch, each spice is carefully selected and packaged to preserve its natural richness — perfect for home cooks and chefs alike.",
    cardDescription:
      "Finest spices from authentic farms — whole, blended, seasoning, and herbal powders.",
    heroImage: Spices,
    gallery: [
      { image: Spices1, name: "Whole Spices" },
      { image: Spices2, name: "Blended Spices" },
      { image: Spices3, name: "Seasoning Spices" },
      { image: Spices4, name: "Herbal Powder" },
    ],
  },
  {
    slug: "dry-snacks",
    title: "Dry Snacks",
    tagline: "Traditional, hygienic snacks for every occasion",
    description:
      "From traditional Indian namkeen to contemporary snack mixes, our dry snacks range offers something for every palate. Each product is crafted with quality ingredients and packed to retain freshness, making them perfect for retail shelves, hospitality, or direct consumption across international markets.",
    cardDescription:
      "Traditional hygienic snacks including Makhana varieties — perfect for every occasion.",
    heroImage: Snacks,
    gallery: [
      { image: Snacks1, name: "Salted Makhana" },
      { image: Snacks2, name: "Peri-Peri Makhana" },
      { image: Snacks3, name: "Pudhina Makhana" },
      { image: Snacks4, name: "Masala Makhana" },
    ],
  },
  {
    slug: "ready-to-eat",
    title: "Ready to Eat and Cook",
    tagline: "Quick, tasty meals for busy lifestyles",
    description:
      "Our Ready-to-Cook products simplify cooking without compromising on taste or nutrition. Made from quality ingredients and minimally processed, each hygienically packed, preservative-free item delivers quick, tasty meals for busy lifestyles.",
    cardDescription:
      "Quick, tasty meals — hygienically packed, preservative-free, and ready for busy lifestyles.",
    heroImage: r3,
    gallery: [
      { image: r1, name: "Noodles" },
      { image: r2, name: "Curry" },
      { image: r3, name: "Biryani" },
      { image: r4, name: "Panner Tikka" },
      { image: r5, name: "Pizza" },
      { image: r6, name: "Breakfast" },
    ],
  },
  {
    slug: "diwali-snacks",
    title: "Diwali Snacks",
    tagline: "Traditional, hygienic snacks for festive joy",
    description:
      "Celebrate Diwali with our traditional, hygienic snacks — perfect for gifting, sharing, and festive joy.",
    cardDescription:
      "Traditional, hygienic snacks — perfect for gifting, sharing, and festive joy.",
    heroImage: Diwali,
    gallery: [
      { image: d1, name: "Chivda" },
      { image: d2, name: "Chakli" },
      { image: d3, name: "Karanji" },
      { image: d4, name: "Shankarpali" },
      { image: d5, name: "Laddos" },
    ],
  },
  {
    slug: "dry-fruits",
    title: "Dry Fruits",
    tagline: "Premium dried fruits for snacking and culinary use",
    description:
      "We supply premium quality dried fruits sourced from the finest orchards. Our range includes raisins, apricots, dates, cashews, and more — carefully graded, hygienically processed, and packaged to ensure maximum freshness. Ideal for snacking, baking, cooking, or gifting, our dry fruits meet the highest export standards.",
    cardDescription:
      "Premium dried fruits, including raisins, apricots, and dates, ideal for snacking or cooking.",
    heroImage: Nuts,
    gallery: [
      { image: df1, name: "Raisins" },
      { image: df2, name: "Almonds" },
      { image: df3, name: "Apricots" },
      { image: df4, name: "Dates" },
    ],
  },
];
