import { BUSINESS_NAME, ICE_WHATSAPP, MAIN_WHATSAPP } from "@/lib/whatsapp";

export type ProductOption = {
  name: string;
  price?: string;
  details?: string[];
  badges?: string[];
  orderLabel?: string;
  phone?: string;
  businessName?: string;
};

export type Product = {
  name: string;
  price?: string;
  subtitle?: string;
  description?: string;
  details?: string[];
  badges?: string[];
  options?: ProductOption[];
  phone?: string;
  businessName?: string;
};

export type SectionIcon =
  | "rice"
  | "family"
  | "pizza"
  | "extras"
  | "drinks"
  | "sausage"
  | "popsicles"
  | "ice";

export type MenuSection = {
  id: string;
  title: string;
  kicker: string;
  description?: string;
  icon: SectionIcon;
  products: Product[];
};

const personalRiceDetails = (grams: string, riceName: string) => [
  `${grams} gramos de ${riceName}`,
  "1 porción de papa a la francesa",
  "1 porción de pollo frito, costilla de cerdo o milanesa de pollo",
];

const personalRiceOptions = (name: string, riceName: string): ProductOption[] => [
  {
    name: "Opción A",
    price: "$18.000",
    details: personalRiceDetails("300", riceName),
    orderLabel: `${name} Opción A`,
  },
  {
    name: "Opción B",
    price: "$24.000",
    details: personalRiceDetails("500", riceName),
    orderLabel: `${name} Opción B`,
  },
];

export const menuSections: MenuSection[] = [
  {
    id: "arroces-personales",
    title: "Arroces personales",
    kicker: "Combo personal con papa y proteína",
    icon: "rice",
    products: [
      {
        name: "Arroz Paisa",
        badges: ["Personal", "Con proteína"],
        description:
          "Una porción completa para comer bien, con papa a la francesa y proteína a elección.",
        options: personalRiceOptions("Arroz Paisa", "arroz paisa"),
      },
      {
        name: "Arroz Chino",
        badges: ["Personal", "Con proteína"],
        description:
          "Arroz chino abundante para pedido rápido, servido con papa y proteína.",
        options: personalRiceOptions("Arroz Chino", "arroz chino"),
      },
      {
        name: "Arroz Campesino Ahumado",
        badges: ["Personal", "Ahumado"],
        description:
          "Sabor campesino ahumado, buena porción y acompañamientos completos.",
        options: personalRiceOptions(
          "Arroz Campesino Ahumado",
          "arroz campesino ahumado",
        ),
      },
    ],
  },
  {
    id: "familiares",
    title: "Familiares",
    kicker: "Para compartir en casa",
    description: "Aplica para arroz chino, arroz paisa o arroz campesino ahumado.",
    icon: "family",
    products: [
      {
        name: "Familiar x4 personas",
        price: "$36.000",
        badges: ["Familiar"],
        details: ["1.000 gramos"],
      },
      {
        name: "Familiar x6 personas",
        price: "$54.000",
        badges: ["Familiar"],
        details: ["1.500 gramos"],
      },
      {
        name: "Familiar x8 personas",
        price: "$72.000",
        badges: ["Familiar"],
        details: ["2.000 gramos"],
      },
      {
        name: "Familiar x10 personas",
        price: "$90.000",
        badges: ["Familiar"],
        details: ["2.500 gramos"],
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas Luigi’s",
    kicker: "Todas de 4 porciones",
    description: "Todas las pizzas cuestan $26.000.",
    icon: "pizza",
    products: [
      {
        name: "Hawaiana",
        price: "$26.000",
        badges: ["4 porciones"],
        details: ["Jamón", "Queso mozzarella", "Piña caramelizada artesanal"],
      },
      {
        name: "Furia Latina",
        price: "$26.000",
        badges: ["4 porciones"],
        details: ["Tocineta premium", "Queso mozzarella", "Jalapeños", "Tajín"],
      },
      {
        name: "Ahumada",
        price: "$26.000",
        badges: ["4 porciones", "Ahumada"],
        details: [
          "Tocineta ahumada premium",
          "Queso mozzarella",
          "Chorizo ahumado artesanal",
        ],
      },
    ],
  },
  {
    id: "adicionales",
    title: "Adicionales",
    kicker: "Completa tu pedido",
    icon: "extras",
    products: [
      {
        name: "Proteínas",
        badges: ["Porción adicional"],
        options: [
          { name: "Pollo frito", price: "$5.000" },
          { name: "Costilla de cerdo", price: "$5.000" },
          { name: "Milanesa de pollo", price: "$5.000" },
        ],
      },
      {
        name: "Acompañantes",
        badges: ["Extra"],
        options: [
          { name: "Papa a la francesa", price: "$2.000" },
          { name: "Yuca frita", price: "$2.000" },
          { name: "1 lumpia de vegetales", price: "$3.000" },
        ],
      },
      {
        name: "Salsas",
        badges: ["Sobres"],
        options: [
          { name: "Sobre showy", price: "$500" },
          { name: "Sobre dulce de maíz", price: "$500" },
          { name: "Sobre rosada", price: "$500" },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    kicker: "Para acompañar",
    icon: "drinks",
    products: [
      {
        name: "Coca-Cola 1 litro",
        price: "$5.000",
        badges: ["Bebida"],
      },
    ],
  },
  {
    id: "chorizos-y-salchichon",
    title: "Chorizos y salchichón",
    kicker: "Antojos ahumados",
    icon: "sausage",
    products: [
      {
        name: "Salchichón mediano 480 gramos",
        price: "$26.000",
      },
      {
        name: "Salchichón pequeño 250 gramos",
        price: "$15.000",
      },
      {
        name: "Rodaja de salchichón 40 gramos",
        price: "$3.500",
      },
      {
        name: "Chorizo 13 cm x 5 unidades",
        price: "$15.000",
      },
    ],
  },
  {
    id: "paletas",
    title: "Paletas",
    kicker: "Unidad a $2.000",
    icon: "popsicles",
    products: [
      {
        name: "Leche",
        price: "$2.000",
        badges: ["Unidad"],
        options: [
          "Maní",
          "Coco",
          "Galleta Oreo",
          "Arequipe",
          "Ron pasas",
          "Bocadillo queso",
        ].map((flavor) => ({
          name: flavor,
          price: "$2.000",
          orderLabel: `Paleta de leche sabor ${flavor}`,
        })),
      },
      {
        name: "Agua",
        price: "$2.000",
        badges: ["Unidad"],
        options: ["Maracuyá", "Tamarindo", "Fresa", "Mango biche"].map(
          (flavor) => ({
            name: flavor,
            price: "$2.000",
            orderLabel: `Paleta de agua sabor ${flavor}`,
          }),
        ),
      },
    ],
  },
  {
    id: "hielo",
    title: "Hielo",
    kicker: "Expreso Polar",
    description: "Línea diferente para pedidos de hielo.",
    icon: "ice",
    products: [
      {
        name: "Hielo polar 1.3 kg",
        badges: ["Domicilio gratis"],
        details: ["Domicilio gratuito comprando 3 paquetes o más"],
        phone: ICE_WHATSAPP,
        businessName: "Expreso Polar",
      },
    ],
  },
];

export const mainContact = {
  businessName: BUSINESS_NAME,
  phone: MAIN_WHATSAPP,
  message: "Hola, quiero hacer un pedido en Buffet Campesino Express.",
};

export const iceContact = {
  businessName: "Expreso Polar",
  phone: ICE_WHATSAPP,
};
