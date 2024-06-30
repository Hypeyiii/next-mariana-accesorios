import { BiCart, BiSearchAlt, BiUser } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

const navRoutes = [
  { name: "New", url: "/category/new-arrivals" },
  { name: "Más vendido", url: "/category/best-seller" },
  { name: "Aretes", url: "/category/earrings" },
  { name: "Anillos", url: "/category/rings" },
  { name: "Collares", url: "/category/necklace" },
  { name: "Brazaletes", url: "/category/bracelets" },
];

const navIcons = [
  { icon: <BiSearchAlt />, url: "/search" },
  { icon: <BiUser />, url: "/account/login" },
  { icon: <BiCart />, url: "/cart" },
  { icon: <GrFavorite />, url: "/favorites" },
];

const firstSection = [
  {
    name: "earrings",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722281/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Earrings_DT",
    href: "/category/earrings",
  },
  {
    name: "Brazaletes",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722281/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Bracelets_DT",
    href: "/bracelets",
  },
  {
    name: "Rings",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722281/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Rings_DT",
    href: "/category/rings",
  },
  {
    name: "Collares",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722281/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Necklaces_DT",
    href: "/category/necklaces",
  },
  {
    name: "Hombres",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722280/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Mens_DT",
    href: "/category/mens-jewelry",
  },
  {
    name: "Regalos",
    image:
      "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1704722278/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Gifts_DT",
    href: "/category/gifts",
  },
];

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Press", url: "/press" },
      { name: "Blog", url: "/blog" },
      { name: "Affiliates", url: "/affiliates" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Contact", url: "/contact" },
      { name: "FAQ", url: "/faq" },
      { name: "Shipping & Returns", url: "/shipping-returns" },
      { name: "Jewelry Care", url: "/jewelry-care" },
      { name: "Terms & Conditions", url: "/terms-conditions" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", url: "/instagram" },
      { name: "Facebook", url: "/facebook" },
      { name: "Twitter", url: "/twitter" },
      { name: "Pinterest", url: "/pinterest" },
    ],
  },
  {
    title: "Newsletter",
    links: [
      { name: "Subscribe", url: "/subscribe" },
      { name: "Unsubscribe", url: "/unsubscribe" },
    ],
  },
];

const categoryTitle = [
  {
    title: "NEW ARRIVALS",
    description: "Discover the latest pieces to add to your collection.",
  },
  {
    title: "BEST SELLERS",
    description: "Shop our most popular pieces.",
  },
  {
    title: "EARRINGS",
    description: "From studs to hoops, find your perfect pair.",
  },
  {
    title: "RINGS",
    description: "Discover our collection of rings.",
  },
  {
    title: "NECKLACE",
    description: "Layer up with our collection of necklaces.",
  },
  {
    title: "BRACELETS",
    description: "Add a touch of elegance with our bracelets.",
  },
];

export { navRoutes, navIcons, firstSection, footerData, categoryTitle };
