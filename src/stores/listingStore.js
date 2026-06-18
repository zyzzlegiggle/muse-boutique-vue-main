import { defineStore } from 'pinia'
import linentrenchcoatImg from '../assets/linentrenchcoat.png'
import silkknithalterImg from '../assets/silkknithalter.png'
import tailoredwooltrousersImg from '../assets/tailoredwooltrousers.png'
import travertineImg from '../assets/travertine.png'
import decanterImg from '../assets/decanter.png'
import incenseburnerImg from '../assets/incenseburner.png'
import perfumeImg from '../assets/perfume.png'
import santoriniImg from '../assets/santorini.png'
import vetivercandleImg from '../assets/vetivercandle.png'

export const useListingStore = defineStore('listing', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Linen Trench Coat',
        subtitle: 'Oversized tailored trench',
        category: 'Apparel',
        price: 320,
        image: linentrenchcoatImg,
        description: 'An oversized, double-breasted trench coat tailored from pure, heavy-weight European linen. Featuring a relaxed drape and storm flaps.',
        details: 'Crafted with premium European linen, this trench coat is designed to soften with wear. The structure remains relaxed yet sophisticated, making it a perfect layering piece for transitional climates. Features deep welt pockets, adjustable sleeve straps, and a removable self-tie belt.',
        specs: [
          '100% European Linen',
          'Corozo nut buttons',
          'Unlined for a light, breathable drape',
          'Made ethically in Porto, Portugal',
          'Dry clean only'
        ],
        variants: ['XS', 'S', 'M', 'L'],
        variantLabel: 'Size',
        svg: {
          viewBox: '0 0 100 100',
          path: `<path d="M50,15 L35,28 L35,85 L65,85 L65,28 Z" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M35,28 L50,40 L65,28" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M50,15 L50,85" fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-width="1" /><path d="M42,48 L58,48" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M42,56 L58,56" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M47,20 C47,17 53,17 53,20" fill="none" stroke="currentColor" stroke-width="1" />`
        }
      },
      {
        id: 2,
        title: 'Silk Knit Halter',
        subtitle: 'Fine ribbed silk blend',
        category: 'Apparel',
        price: 160,
        image: silkknithalterImg,
        description: 'A fine-gauge ribbed knit top in a luxurious silk-cotton blend. Features a high halter neckline and clean-finished edges.',
        details: 'Designed for a second-skin feel, this top combines the breathability of cotton with the soft sheen and elegant drape of mulberry silk. The halter neckline flatters the shoulders, making it a minimal yet expressive styling option.',
        specs: [
          '55% Silk, 45% Organic Cotton',
          'Ribbed construction for flexible fit',
          'Seamless side details',
          'Spun and knitted in Italy',
          'Hand wash cold and dry flat'
        ],
        variants: ['XS', 'S', 'M', 'L'],
        variantLabel: 'Size',
        svg: {
          viewBox: '0 0 100 100',
          path: `<path d="M38,20 C42,20 46,24 50,30 C54,24 58,20 62,20" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M38,20 L30,42 L32,80 L68,80 L70,42 L62,20" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M30,42 C40,48 60,48 70,42" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" />`
        }
      },
      {
        id: 3,
        title: 'Tailored Wool Trousers',
        subtitle: 'Pleated wide-leg trousers',
        category: 'Apparel',
        price: 240,
        image: tailoredwooltrousersImg,
        description: 'High-waisted tailored trousers drape gracefully in a mid-weight virgin wool crepe. Finished with double front pleats.',
        details: 'These trousers offer a modern, relaxed silhouette with an elevated, high-rise waist and sharp front pleats. Designed to pool slightly over shoes, they combine masculine tailoring with soft feminine lines.',
        specs: [
          '100% Virgin Wool Crepe',
          'Recycled polyester pocket lining',
          'Concealed zip fly and hook closure',
          'Made in Romania by tailoring experts',
          'Dry clean only'
        ],
        variants: ['34', '36', '38', '40', '42'],
        variantLabel: 'Size',
        svg: {
          viewBox: '0 0 100 100',
          path: `<path d="M35,18 L65,18 L68,85 L51,85 L50,40 L49,85 L32,85 Z" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M35,18 L35,28 L65,28 L65,18" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M42,28 L42,85" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3" /><path d="M58,28 L58,85" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3" />`
        }
      },
      {
        id: 4,
        title: 'Travertine Stone Vessel',
        subtitle: 'Solid carved stone dish',
        category: 'Objects',
        price: 110,
        image: travertineImg,
        description: 'A decorative stone bowl, hollowed and shaped from a single block of raw cream-colored Italian Travertine stone.',
        details: 'The Travertine Vessel celebrates the raw beauty of natural stone. Each piece features unique geologic pores, cavities, and shade variations. Perfect as a standalone sculpture on a coffee table or a minimal home for treasured items.',
        specs: [
          'Solid Italian Travertine stone',
          'Unpolished, honed matte finish',
          'Weight: Approx. 1.8 kg',
          'Carved in Tivoli, Italy',
          'Wipe clean with a dry or damp cloth'
        ],
        variants: ['Standard (18cm dia)'],
        variantLabel: 'Diameter',
        svg: {
          viewBox: '0 0 100 100',
          path: `<ellipse cx="50" cy="45" rx="35" ry="10" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M15,45 C15,68 85,68 85,45" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M15,45 C25,48 75,48 85,45" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 2" /><circle cx="35" cy="58" r="1" fill="currentColor" /><circle cx="68" cy="54" r="1.5" fill="currentColor" /><circle cx="50" cy="62" r="0.8" fill="currentColor" />`
        }
      },
      {
        id: 5,
        title: 'Organic Glass Decanter',
        subtitle: 'Hand-blown borosilicate glass',
        category: 'Objects',
        price: 95,
        image: decanterImg,
        description: 'An organically shaped beverage decanter. Features a delicate, hand-pulled spout and a spherical wood cork.',
        details: 'Mouth-blown by glass artisans, this decanter stands as a functional sculpture. The organic, slightly imperfect shape responds beautifully to light, making any liquid within look like art.',
        specs: [
          '100% Borosilicate glass',
          'Includes sustainably harvested oak sphere stopper',
          'Holds up to 1200ml',
          'Dishwasher safe (glass only)',
          'Designed in Copenhagen, Denmark'
        ],
        variants: ['1.2L Capacity'],
        variantLabel: 'Volume',
        svg: {
          viewBox: '0 0 100 100',
          path: `<circle cx="50" cy="22" r="8" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M45,30 L45,45 C45,45 25,50 25,68 C25,82 75,82 75,68 C75,50 55,45 55,45 L55,30 Z" fill="none" stroke="currentColor" stroke-width="1.5" /><ellipse cx="50" cy="30" rx="5" ry="1.5" fill="none" stroke="currentColor" stroke-width="1" />`
        }
      },
      {
        id: 6,
        title: 'Ceramic Incense Dish',
        subtitle: 'Matte black stoneware',
        category: 'Objects',
        price: 45,
        image: incenseburnerImg,
        description: 'A low-profile incense holder, hand-thrown in coarse stoneware and coated in a soft matte metallic black glaze.',
        details: 'The Ceramic Incense Dish features a raw, textured exterior with a glazed interior reservoir to catch ash. Designed to accommodate both stick and cone incense, it rests low on any shelf, promoting calm and focus.',
        specs: [
          'Coarse iron-speckled stoneware',
          'Matte dark metallic finish',
          'Diameter: 12cm',
          'Handcrafted in Kyoto, Japan',
          'Wash with soap and warm water'
        ],
        variants: ['12cm diameter'],
        variantLabel: 'Size',
        svg: {
          viewBox: '0 0 100 100',
          path: `<ellipse cx="50" cy="50" rx="30" ry="6" fill="none" stroke="currentColor" stroke-width="1.5" /><ellipse cx="50" cy="50" rx="8" ry="2" fill="none" stroke="currentColor" stroke-width="1" /><path d="M50,49 L68,25" fill="none" stroke="currentColor" stroke-width="1.2" /><path d="M68,22 C69,20 71,20 72,19" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="1 2" />`
        }
      },
      {
        id: 7,
        title: 'No. 08 Hinoki Eau de Parfum',
        subtitle: 'Woody, clean, mossy',
        category: 'Scents',
        price: 145,
        image: perfumeImg,
        description: 'A clean, grounding perfume featuring rich base notes of Japanese Hinoki cypress, cedarwood, and green moss.',
        details: 'Hinoki captures the scent of rain-soaked wooden temples in the forests of Japan. A dry, woody heart of cedar and cypress is balanced by initial bright citrus notes of yuzu, settling into a damp, grounding moss finish.',
        specs: [
          'Ingredients: Organic grape alcohol, natural oils',
          'Cruelty-free and vegan formulation',
          'Unisex scent profile',
          '50ml amber glass spray bottle',
          'Blended and bottled in Grasse, France'
        ],
        variants: ['50ml Bottle'],
        variantLabel: 'Volume',
        svg: {
          viewBox: '0 0 100 100',
          path: `<rect x="35" y="38" width="30" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="1.5" /><rect x="42" y="26" width="16" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" /><line x1="35" y1="52" x2="65" y2="52" stroke="currentColor" stroke-width="1" /><text x="50" y="65" font-family="var(--font-serif)" font-size="6" text-anchor="middle" letter-spacing="1">HINOKI</text>`
        }
      },
      {
        id: 8,
        title: 'Santorini Botanical Mist',
        subtitle: 'Wild fig, dry soil, sea salt',
        category: 'Scents',
        price: 70,
        image: santoriniImg,
        description: 'An atmospheric room and linen spray capturing the hot, sun-baked landscape of the Cyclades.',
        details: 'A mist that transports you directly to summer afternoons in Greece. Combining the earthy sweetness of wild fig leaves, dry dusty clay paths, and a fresh, crisp mineral splash of Aegean Sea salt spray.',
        specs: [
          'Water-based room and linen mist',
          'Free from synthetic parabens',
          'Safe on most natural fabrics (cotton, linen)',
          '100ml amber bottle with fine mister',
          'Made in small batches in London, UK'
        ],
        variants: ['100ml Bottle'],
        variantLabel: 'Volume',
        svg: {
          viewBox: '0 0 100 100',
          path: `<rect x="36" y="42" width="28" height="38" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M46,42 L46,32 L54,32 L54,42" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M43,32 L57,32" stroke="currentColor" stroke-width="1" /><path d="M47,28 L53,28" stroke="currentColor" stroke-width="1.5" /><line x1="36" y1="56" x2="64" y2="56" stroke="currentColor" stroke-width="1" />`
        }
      },
      {
        id: 9,
        title: 'Smoked Vetiver Candle',
        subtitle: 'Soy wax, smoke, wood, amber',
        category: 'Scents',
        price: 65,
        image: vetivercandleImg,
        description: 'A slow-burning container candle poured with natural soy wax and scented with vetiver root and warm amber.',
        details: 'Pouring warmth and low, ambient light into a space, the Smoked Vetiver Candle opens with dry vetiver root and birch tar smoke, warming into a heart of patchouli, and leaving a lingering trail of sweet vanilla-amber.',
        specs: [
          '100% natural soy wax, cotton wick',
          '45+ hours burn time',
          'Hand-poured in a textured ceramic container',
          'Net weight: 220g / 7.8 oz',
          'Poured in Munich, Germany'
        ],
        variants: ['Standard 220g'],
        variantLabel: 'Size',
        svg: {
          viewBox: '0 0 100 100',
          path: `<rect x="36" y="40" width="28" height="35" rx="1" fill="none" stroke="currentColor" stroke-width="1.5" /><line x1="50" y1="40" x2="50" y2="34" stroke="currentColor" stroke-width="1.5" /><path d="M50,32 C48,27 52,27 50,22 C53,27 49,27 50,32 Z" fill="currentColor" /><line x1="36" y1="48" x2="64" y2="48" stroke="currentColor" stroke-width="0.8" stroke-dasharray="1 1" />`
        }
      }
    ],
    searchQuery: '',
    selectedCategory: 'All',
    maxPrice: 400,
    sortBy: 'default'
  }),
  getters: {
    filteredProducts(state) {
      return state.products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(state.searchQuery.toLowerCase())
        const matchesCategory = state.selectedCategory === 'All' || product.category === state.selectedCategory
        const matchesPrice = product.price <= state.maxPrice
        return matchesSearch && matchesCategory && matchesPrice
      }).sort((a, b) => {
        if (state.sortBy === 'price-asc') {
          return a.price - b.price
        } else if (state.sortBy === 'price-desc') {
          return b.price - a.price
        }
        return 0
      })
    },
    categories(state) {
      return ['All', ...new Set(state.products.map(p => p.category))]
    }
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query
    },
    setSelectedCategory(category) {
      this.selectedCategory = category
    },
    setMaxPrice(price) {
      this.maxPrice = price
    },
    setSortBy(sort) {
      this.sortBy = sort
    }
  }
})
