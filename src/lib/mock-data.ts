export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  description: string[];
  availability: "Em estoque" | "Últimas unidades" | "Esgotado";
  categorySlug: string;
  categoryName: string;
  ageGroup: string;
  sizes: string[];
  images: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "conjunto-infantil-kyly-verao",
    name: "Conjunto Infantil Kyly Verão",
    brand: "Kyly",
    price: 65.0,
    shortDescription: "Conjunto leve e super confortável para os dias quentes de verão, garantindo a liberdade da sua criança.",
    description: [
      "Tecido 100% algodão super respirável",
      "Ideal para o dia a dia e brincadeiras",
      "Ótima durabilidade após várias lavagens",
      "Modelagem infantil soltinha e confortável"
    ],
    availability: "Em estoque",
    categorySlug: "meninos",
    categoryName: "Meninos",
    ageGroup: "4 a 10 anos",
    sizes: ["4", "6", "8", "10"],
    images: ["/boys.png", "/babies.png"],
    isNew: true,
    isPopular: true,
  },
  {
    id: "2",
    slug: "vestido-floral-primavera",
    name: "Vestido Floral Primavera",
    brand: "Elian",
    price: 49.9,
    originalPrice: 69.9,
    shortDescription: "Vestidinho floral delicado, perfeito para passeios e momentos especiais.",
    description: [
      "Tecido leve e macio",
      "Estampa exclusiva e delicada",
      "Fácil de vestir e super prático",
      "Não aperta e dá liberdade de movimento"
    ],
    availability: "Últimas unidades",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "1 a 4 anos",
    sizes: ["1", "2", "3", "4"],
    images: ["/girls.png", "/babies.png"],
    isNew: true,
  },
  {
    id: "3",
    slug: "macacao-ursinho-baby",
    name: "Macacão Ursinho Baby",
    brand: "Malwee",
    price: 39.9,
    shortDescription: "Macacão super macio para manter seu bebê quentinho e confortável o dia todo.",
    description: [
      "Algodão macio, ideal para pele sensível",
      "Fechamento em botões para fácil troca",
      "Design unissex adorável",
      "Perfeito para os primeiros meses"
    ],
    availability: "Em estoque",
    categorySlug: "bebes",
    categoryName: "Bebês",
    ageGroup: "0 a 1 ano",
    sizes: ["P", "M", "G"],
    images: ["/babies.png"],
    isPopular: true,
  },
  {
    id: "4",
    slug: "vestido-festa-encanto",
    name: "Vestido Festa Encanto",
    brand: "ReiRex",
    price: 89.9,
    shortDescription: "Um vestido cheio de charme para festinhas e comemorações inesquecíveis.",
    description: [
      "Acabamento premium",
      "Detalhes em laço e tule macio",
      "Forro interno 100% algodão",
      "Costuras que não irritam a pele"
    ],
    availability: "Em estoque",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "2 a 8 anos",
    sizes: ["2", "4", "6", "8"],
    images: ["/girls.png"],
  }
];

export const CATEGORIES = [
  { slug: "meninas", name: "Meninas", description: "Roupinhas lindas, confortáveis e acessíveis para o dia a dia da sua princesa.", image: "/girls.png" },
  { slug: "meninos", name: "Meninos", description: "Estilo e muita liberdade de movimento para os pequenos aventureiros.", image: "/boys.png" },
  { slug: "bebes", name: "Bebês", description: "O máximo de conforto e maciez para os primeiros meses do seu bebê.", image: "/babies.png" },
  { slug: "promocoes", name: "Promoções", description: "As melhores oportunidades da semana com preços imperdíveis.", image: "/babies.png" },
];
