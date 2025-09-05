# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

{
  "site": {
    "name": "Petal Paradise",
    "logo": "Petal Paradise",
    "navigation": [
      "Home",
      "Shop",
      "Store",
      "Products",
      "Services",
      "Blog",
      "Contacts"
    ],
    "buttons": {
      "signIn": "Sign In",
      "shopNow": "Shop Now",
      "learnMore": "Learn More",
      "joinNow": "Join Now",
      "readMore": "Read More"
    }
  },
  "heroSection": {
    "title": "The Ultimate Flower Destination",
    "subtitle": "The Ultimate Flower Destination is a paradise for flower enthusiasts and nature lovers alike.",
    "extra": "Visitors can wander through winding pathways and secret corners, discovering a kaleidoscope of colors, fragrances."
  },
  "features": [
    { "title": "Free Shipping", "desc": "On orders above $100" },
    { "title": "Fresh Flowers", "desc": "Direct from farm" },
    { "title": "100% Positive", "desc": "Customer feedback" },
    { "title": "Occasions", "desc": "Flowers for every moment" }
  ],
  "categories": [
    {
      "name": "Roses",
      "products": [
        { "name": "Blue Rose", "price": 240 },
        { "name": "White Rose (100 pieces)", "price": 220 },
        { "name": "Black Rose", "price": 320 },
        { "name": "Red Rose (120 pieces)", "price": 210 }
      ]
    },
    {
      "name": "Lilies",
      "products": [
        { "name": "White Lily Bouquet", "price": 180 },
        { "name": "Pink Lily Charm", "price": 220 },
        { "name": "Oriental Lily Mix", "price": 250 },
        { "name": "Yellow Lily Sunshine", "price": 200 }
      ]
    },
    {
      "name": "Tulips",
      "products": [
        { "name": "Red Tulip Bouquet", "price": 150 },
        { "name": "Pink Tulip Love", "price": 180 },
        { "name": "Mixed Tulip Arrangement", "price": 210 },
        { "name": "White Tulip Purity", "price": 170 }
      ]
    },
    {
      "name": "Orchids",
      "products": [
        { "name": "Purple Orchid Elegance", "price": 300 },
        { "name": "White Orchid Serenity", "price": 280 },
        { "name": "Blue Orchid Exotic", "price": 320 },
        { "name": "Mixed Orchid Luxury Box", "price": 350 }
      ]
    },
    {
      "name": "Daisies",
      "products": [
        { "name": "White Daisy Fresh", "price": 120 },
        { "name": "Yellow Daisy Delight", "price": 140 },
        { "name": "Pink Daisy Basket", "price": 160 },
        { "name": "Mixed Daisy Bouquet", "price": 180 }
      ]
    },
    {
      "name": "Peonies",
      "products": [
        { "name": "Pink Peony Romance", "price": 250 },
        { "name": "White Peony Classic", "price": 270 },
        { "name": "Red Peony Passion", "price": 300 },
        { "name": "Mixed Peony Arrangement", "price": 320 }
      ]
    }
  ],
  "featuredBouquet": {
    "title": "The Bloom Box Your Source for Stunning Flowers",
    "desc": "From vibrant arrangements to elegant displays, our Bloom Box collection is designed to brighten your special moments."
  },
  "community": {
    "title": "Join Our Flower Lover Community",
    "articles": [
      "Wonderful Beautiful Flowers in Vase",
      "Tips for Growing a Colorful Garden",
      "Join Our Flower Festivals"
    ]
  },
  "footer": {
    "links": {
      "mainMenu": ["Home", "Shop", "Products", "Services", "Blog", "Contacts"],
      "ourPolicy": ["Shipping Policy", "Return Policy", "Privacy Policy", "Terms of Service"],
      "newsletter": "Subscribe to Newsletter"
    },
    "socials": ["Facebook", "Twitter", "Instagram", "Pinterest"],
    "copyright": "© 2025 Petal Paradise. All rights reserved."
  }
}
