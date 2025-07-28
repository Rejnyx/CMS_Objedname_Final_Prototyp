import type { Category } from '../types';

export const mockCategories: Category[] = [
  {
    id: 'predkrmy',
    name: 'Předkrmy & Malá jídla',
    icon: 'Croissant',
    items: [
      {
        id: 'tatarak',
        name: 'Hovězí tatarák (100g)',
        description: 'Jemně namletý z pravé svíčkové, podávaný s topinkami s česnekem, lanýžovým olejem a křepelčím vejcem.',
        imageUrl: '/Hovězí tatarák (100g).jpeg',
        baseIngredients: ['Hovězí svíčková', 'Topinky', 'Česnek', 'Křepelčí vejce'],
        variants: [{ id: 'v1', name: '100g', price: 215 }],
        status: 'AVAILABLE',
        tags: ['specialita', 'alergen:1', 'alergen:3', 'alergen:10'],
      },
      {
        id: 'bruschetta',
        name: 'Bruschetta s rajčaty',
        description: 'Opečený italský chléb s čerstvými rajčaty, bazalkou, česnekem a olivovým olejem.',
        imageUrl: '/Bruschetta s rajčaty.jpg',
        baseIngredients: ['Italský chléb', 'Rajčata', 'Bazalka', 'Česnek'],
        variants: [{ id: 'v1', name: '2ks', price: 125 }],
        status: 'AVAILABLE',
        tags: ['vegetariánské', 'alergen:1'],
      },
    ],
  },
  {
    id: 'polevky',
    name: 'Polévky',
    icon: 'Soup',
    items: [
        {
            id: 'kulajda',
            name: 'Jihočeská kulajda',
            description: 'Tradiční krémová polévka s houbami, koprem, bramborami a zastřeným vejcem.',
            imageUrl: '/Johoceska kulajda.jpg',
            baseIngredients: ['Houby', 'Kopr', 'Smetana', 'Vejce'],
            variants: [{ id: 'v1', name: '0.3l', price: 89 }],
            status: 'AVAILABLE',
            tags: ['česká kuchyně', 'alergen:1', 'alergen:3', 'alergen:7'],
        },
        {
            id: 'dlabajova',
            name: 'Dýňová polévka',
            description: 'Jemný dýňový krém se zázvorem, zjemněný kokosovým mlékem a ozdobený praženými dýňovými semínky.',
            imageUrl: '/dynova polevka.jpg',
            baseIngredients: ['Dýně Hokaido', 'Zázvor', 'Kokosové mléko'],
            variants: [{ id: 'v1', name: '0.3l', price: 95 }],
            status: 'AVAILABLE',
            tags: ['veganské', 'bezlepkové'],
        }
    ],
  },
  {
    id: 'hlavni-jidla',
    name: 'Hlavní jídla',
    icon: 'Utensils',
    items: [],
    subcategories: [
        {
            id: 'ceska-kuchyne',
            name: 'Česká kuchyně',
            icon: 'CookingPot',
            items: [
                {
                    id: 'svickova',
                    name: 'Svíčková na smetaně',
                    description: 'Hovězí pečeně na smetaně s houskovým knedlíkem, brusinkami a šlehačkou.',
                    imageUrl: '/svickova.webp',
                    baseIngredients: ['Hovězí maso', 'Smetana', 'Kořenová zelenina'],
                    variants: [{ id: 'v1', name: '150g', price: 285 }],
                    status: 'AVAILABLE',
                    tags: ['tradiční', 'alergen:1', 'alergen:7', 'alergen:9', 'alergen:10'],
                },
                {
                    id: 'gulas',
                    name: 'Hovězí guláš',
                    description: 'Poctivý hovězí guláš s cibulí a paprikou, podávaný s bramboráčky.',
                    imageUrl: '/hovezi gulas.jpg',
                    baseIngredients: ['Hovězí kližka', 'Cibule', 'Paprika'],
                    variants: [{ id: 'v1', name: '150g', price: 265 }],
                    status: 'SOLD_OUT',
                    tags: ['tradiční', 'alergen:1'],
                }
            ]
        },
        {
            id: 'bezmase-jidla',
            name: 'Bezmasá jídla',
            icon: 'Carrot',
            items: [
                {
                    id: 'smazeny-syr',
                    name: 'Smažený sýr',
                    description: 'Smažený eidam s vařeným bramborem a naší tatarskou omáčkou.',
                    imageUrl: '/Smažený sýr.webp',
                    baseIngredients: ['Eidam', 'Brambory', 'Tatarská omáčka'],
                    variants: [{ id: 'v1', name: '150g', price: 210 }],
                    status: 'AVAILABLE',
                    tags: ['vegetariánské', 'alergen:1', 'alergen:3', 'alergen:7'],
                }
            ]
        },
        {
            id: 'steaky',
            name: 'Steaky',
            icon: 'Utensils', // Placeholder icon
            items: [],
        },
        {
            id: 'testoviny',
            name: 'Těstoviny',
            icon: 'Utensils', // Placeholder icon
            items: [],
        }
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: 'Pizza',
    items: [
        {
            id: 'margherita',
            name: 'Margherita',
            description: 'Klasická pizza s rajčatovým základem, mozzarellou a čerstvou bazalkou.',
            imageUrl: '/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.webp',
            baseIngredients: ['Rajčata', 'Mozzarella', 'Bazalka'],
            variants: [{ id: 'v1', name: '32cm', price: 195 }],
            status: 'AVAILABLE',
            tags: ['vegetariánské', 'alergen:1', 'alergen:7'],
        },
        {
            id: 'quattro-formaggi',
            name: 'Quattro Formaggi',
            description: 'Smetanový základ a čtyři druhy sýra: mozzarella, gorgonzola, parmazán, eidam.',
            imageUrl: '/Quattro Formaggi.jpg',
            baseIngredients: ['Mozzarella', 'Gorgonzola', 'Parmazán', 'Eidam'],
            variants: [{ id: 'v1', name: '32cm', price: 245 }],
            status: 'AVAILABLE',
            tags: ['vegetariánské', 'alergen:1', 'alergen:7'],
        }
    ]
  },
  {
    id: 'salaty',
    name: 'Saláty',
    icon: 'Salad',
    items: [
        {
            id: 'caesar',
            name: 'Caesar salát',
            description: 'Římský salát s kuřecím masem, krutony, parmazánem a originálním dresinkem.',
            imageUrl: '/Caesar salát.jpg',
            baseIngredients: ['Kuřecí prsa', 'Římský salát', 'Krutony', 'Parmazán'],
            variants: [{ id: 'v1', name: '300g', price: 235 }],
            status: 'AVAILABLE',
            tags: ['alergen:1', 'alergen:3', 'alergen:4', 'alergen:7', 'alergen:10'],
        }
    ]
  },
  {
    id: 'dezerty',
    name: 'Dezerty',
    icon: 'Cake',
    items: [],
  },
  {
    id: 'napoje',
    name: 'Nápoje',
    icon: 'CupSoda',
    items: [],
  }
];
