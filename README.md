# 🛕 Hey Konaseema

A modern React 19 static website celebrating the temples, places, and culture of the Konaseema (Godavari Delta) region of Andhra Pradesh.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂 Project Structure

```
hey-konaseema/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # React 19 entry point
    ├── App.jsx               # Router setup
    ├── index.css             # Global design system & CSS variables
    ├── context/
    │   └── LangContext.jsx   # EN/Telugu bilingual context
    ├── data/
    │   ├── temples.js        # Temple data (6 temples)
    │   ├── places.js         # Places data (6 places)
    │   └── blogs.js          # Blog posts data (6 posts)
    ├── components/
    │   ├── Navbar.jsx / .module.css
    │   └── Footer.jsx / .module.css
    └── pages/
        ├── Home.jsx / .module.css        — Landing page
        ├── TemplesPage.jsx / .module.css — Temples directory
        ├── TempleDetail.jsx / .module.css — Individual temple
        ├── PlacesPage.jsx / .module.css  — Places listing
        ├── PlaceDetail.jsx / .module.css — Individual place
        ├── BlogsPage.jsx / .module.css   — Blog listing
        ├── BlogDetail.jsx / .module.css  — Individual blog post
        └── About.jsx / .module.css       — About page
```

## ✨ Features

- **React 19** with `createRoot`
- **React Router v6** for client-side routing
- **Bilingual** (English / Telugu) via Context API
- **CSS Modules** — no CSS-in-JS dependencies
- **Filterable** temple and blog listings
- **6 Temples** with full detail pages
- **6 Places** with detail pages  
- **6 Blog posts** with full content
- Fully **responsive** mobile design

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, featured temples, places, blogs |
| `/temples` | All temples with filter (Pancharama / Vishnu) |
| `/temples/:id` | Temple detail with visitor info |
| `/places` | All places to explore |
| `/places/:id` | Place detail |
| `/blogs` | Blog listing with category filter |
| `/blogs/:id` | Full blog post |
| `/about` | About the project |

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^6.28.0"
}
```

## 🎨 Design System

The site uses CSS custom properties defined in `index.css`:

- `--gold` / `--gold-light` / `--gold-pale` — Primary accent
- `--teal` / `--teal-light` — Secondary accent (places)
- `--charcoal` / `--dark` — Dark surfaces
- `--cream` / `--white` — Light backgrounds
- `--font-display` — Playfair Display (headings)
- `--font-body` — Outfit (body text)

## 🔧 Extending

To add a new temple, add an entry to `src/data/temples.js`:

```js
{
  id: 'unique-id',
  name: { en: 'English Name', te: 'Telugu Name' },
  deity: { en: 'Lord Shiva', te: 'శివుడు' },
  location: { en: 'Village, District', te: 'గ్రామం, జిల్లా' },
  type: 'pancharama' | 'vishnu',
  era: '9th Century',
  icon: '🛕',
  color: '#hexcolor',
  desc: { en: '...', te: '...' },
  tags: ['Tag1', 'Tag2'],
  coords: '00.00°N, 00.00°E',
  timings: '6:00 AM – 8:00 PM',
  nearestCity: { en: 'City (X km)', te: 'నగరం (X కి.మీ.)' },
}
```

The same pattern applies to `places.js` and `blogs.js`.

## 🚢 Deployment

This is a Vite SPA. For static hosting (Netlify, Vercel, GitHub Pages):

```bash
npm run build
# Deploy the dist/ folder
```

For Netlify/Vercel, add a redirect rule for React Router:
```
/* → /index.html (200)
```
