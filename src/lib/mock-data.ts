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
  },
  {
    id: "5",
    slug: "conjunto-moletinho-basico",
    name: "Conjunto Moletinho Básico",
    brand: "Malwee",
    price: 59.9,
    shortDescription: "O conjunto perfeito para o dia a dia e para brincar com muito conforto.",
    description: [
      "100% Algodão",
      "Cintura elástica que não aperta",
      "Modelagem larguinha",
      "Fácil de lavar e secar"
    ],
    availability: "Em estoque",
    categorySlug: "meninos",
    categoryName: "Meninos",
    ageGroup: "2 a 10 anos",
    sizes: ["2", "4", "6", "8", "10"],
    images: ["/boys.png"],
    isPopular: true,
  },
  {
    id: "6",
    slug: "vestido-jardim-secreto",
    name: "Vestido Jardim Secreto",
    brand: "Kyly",
    price: 65.9,
    originalPrice: 89.9,
    shortDescription: "Vestidinho leve com estampa floral encantadora para os dias de sol.",
    description: [
      "Algodão leve e respirável",
      "Estampa de alta durabilidade",
      "Laço decorativo nas costas",
      "Costura reforçada"
    ],
    availability: "Últimas unidades",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "1 a 6 anos",
    sizes: ["1", "2", "3", "4", "6"],
    images: ["/girls.png"],
  },
  {
    id: "7",
    slug: "body-gola-polo-bebe",
    name: "Body Gola Polo Bebê",
    brand: "Elian",
    price: 34.9,
    shortDescription: "Estilo e conforto até mesmo nos primeiros meses de vida do seu bebê.",
    description: [
      "Gola polo macia",
      "Botões de pressão reforçados",
      "Tecido hipoalergênico",
      "Malha suedine"
    ],
    availability: "Em estoque",
    categorySlug: "bebes",
    categoryName: "Bebês",
    ageGroup: "0 a 1 ano",
    sizes: ["P", "M", "G"],
    images: ["/babies.png"],
    isNew: true,
  },
  {
    id: "8",
    slug: "jardineira-jeans-infantil",
    name: "Jardineira Jeans Infantil",
    brand: "ReiRex",
    price: 99.9,
    shortDescription: "Um clássico da infância! Jardineira jeans molinha que não trava os movimentos.",
    description: [
      "Jeans com elastano (super confortável)",
      "Alças ajustáveis",
      "Bolsos reais",
      "Lavagem moderna"
    ],
    availability: "Em estoque",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "2 a 8 anos",
    sizes: ["2", "4", "6", "8"],
    images: ["/girls.png"],
    isPopular: true,
  },
  {
    id: "9",
    slug: "camiseta-dino-divertido",
    name: "Camiseta Dino Divertido",
    brand: "Kyly",
    price: 29.9,
    originalPrice: 45.9,
    shortDescription: "Camiseta 100% algodão com estampa lúdica de dinossauro.",
    description: [
      "Estampa não racha",
      "Malha penteada 100% algodão",
      "Gola careca",
      "Ótima durabilidade"
    ],
    availability: "Em estoque",
    categorySlug: "meninos",
    categoryName: "Meninos",
    ageGroup: "2 a 8 anos",
    sizes: ["2", "4", "6", "8"],
    images: ["/boys.png"],
  },
  {
    id: "10",
    slug: "macacao-de-verao-bebe",
    name: "Macacão de Verão Bebê",
    brand: "Malwee",
    price: 45.9,
    shortDescription: "Macacão curtinho para deixar o bebê fresquinho e lindo no calor.",
    description: [
      "Algodão levinho",
      "Abertura entrepernas com botões de pressão",
      "Cores vibrantes",
      "Fácil de vestir"
    ],
    availability: "Últimas unidades",
    categorySlug: "bebes",
    categoryName: "Bebês",
    ageGroup: "0 a 1 ano",
    sizes: ["P", "M", "G"],
    images: ["/babies.png"],
    isPopular: true,
  },
  {
    id: "11",
    slug: "conjunto-floral-primavera",
    name: "Conjunto Floral Primavera",
    brand: "Elian",
    price: 79.9,
    shortDescription: "Blusa manga curta e shorts florido, um conjunto charmoso e completo.",
    description: [
      "Shorts com elástico confortável",
      "Blusa com detalhe em babado",
      "Não desbota",
      "Tecido super macio"
    ],
    availability: "Em estoque",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "4 a 10 anos",
    sizes: ["4", "6", "8", "10"],
    images: ["/girls.png"],
  },
  {
    id: "12",
    slug: "bermuda-sarja-menino",
    name: "Bermuda Sarja Menino",
    brand: "ReiRex",
    price: 69.9,
    shortDescription: "Bermuda arrumadinha para passeios, mas com elasticidade para brincar.",
    description: [
      "Sarja com elastano",
      "Regulagem interna na cintura",
      "Costura reforçada",
      "Bolsos funcionais"
    ],
    availability: "Em estoque",
    categorySlug: "meninos",
    categoryName: "Meninos",
    ageGroup: "2 a 10 anos",
    sizes: ["2", "4", "6", "8", "10"],
    images: ["/boys.png"],
    isNew: true,
  },
  {
    id: "13",
    slug: "casaco-teddy-menina",
    name: "Casaco Teddy Bear",
    brand: "Kyly",
    price: 119.9,
    originalPrice: 149.9,
    shortDescription: "O casaco mais fofinho do momento, imita pelagem de ursinho de pelúcia.",
    description: [
      "Tecido teddy felpudo",
      "Forro interno acetinado",
      "Fechamento por botões",
      "Design super em alta"
    ],
    availability: "Últimas unidades",
    categorySlug: "meninas",
    categoryName: "Meninas",
    ageGroup: "4 a 10 anos",
    sizes: ["4", "6", "8", "10"],
    images: ["/girls.png"],
    isPopular: true,
  },
  {
    id: "14",
    slug: "pijama-brilha-no-escuro",
    name: "Pijama Brilha no Escuro",
    brand: "Malwee",
    price: 55.9,
    shortDescription: "A hora de dormir fica muito mais divertida com a estampa que brilha no escuro!",
    description: [
      "Estampa com tinta luminosa (segura para crianças)",
      "100% Algodão",
      "Calça com punho",
      "Super confortável para dormir"
    ],
    availability: "Em estoque",
    categorySlug: "meninos",
    categoryName: "Meninos",
    ageGroup: "2 a 8 anos",
    sizes: ["2", "4", "6", "8"],
    images: ["/boys.png"],
    isNew: true,
  }
];

// PRODUTOS DE OUTONO-INVERNO (Para a landing page sazonal)
export const WINTER_PRODUCTS: Product[] = [
  {
    id: "w1",
    slug: "conjunto-moletom-ursinho",
    name: "Conjunto Moletom Ursinho Peluciado",
    brand: "Malwee",
    price: 119.9,
    originalPrice: 149.9,
    shortDescription: "Conjunto quentinho e peluciado por dentro, perfeito para os dias mais frios de inverno.",
    description: [
      "Tecido 100% algodão peluciado",
      "Não faz bolinha após lavagem",
      "Estampa em relevo fofinho",
      "Calça com elástico confortável"
    ],
    availability: "Em estoque",
    categorySlug: "outono-inverno",
    categoryName: "Outono Inverno",
    ageGroup: "1 a 4 anos",
    sizes: ["1", "2", "3", "4"],
    images: ["/boys.png", "/girls.png"],
    isPopular: true,
  },
  {
    id: "w2",
    slug: "jaqueta-puffer-rosa",
    name: "Jaqueta Puffer Rosa Pastel",
    brand: "Kyly",
    price: 159.9,
    shortDescription: "Jaqueta super leve e extremamente quentinha, repele água e corta vento.",
    description: [
      "Enchimento térmico premium",
      "Forro interno macio",
      "Zíper reforçado com proteção frontal",
      "Capuz removível"
    ],
    availability: "Últimas unidades",
    categorySlug: "outono-inverno",
    categoryName: "Outono Inverno",
    ageGroup: "2 a 8 anos",
    sizes: ["2", "4", "6", "8"],
    images: ["/girls.png"],
    isNew: true,
  },
  {
    id: "w3",
    slug: "conjunto-trico-bebe",
    name: "Conjunto Tricô Premium Bebê",
    brand: "Elian",
    price: 98.9,
    originalPrice: 129.9,
    shortDescription: "Tricô antialérgico super macio para manter seu bebê elegante e protegido.",
    description: [
      "Fio antialérgico macio",
      "Trama fechada para maior proteção térmica",
      "Detalhes artesanais",
      "Gola envelope para fácil troca"
    ],
    availability: "Em estoque",
    categorySlug: "outono-inverno",
    categoryName: "Outono Inverno",
    ageGroup: "0 a 1 ano",
    sizes: ["P", "M", "G"],
    images: ["/babies.png"],
  },
  {
    id: "w4",
    slug: "calca-moletom-jogger",
    name: "Calça Moletom Jogger Básica",
    brand: "ReiRex",
    price: 49.9,
    shortDescription: "A peça mais essencial para o inverno. Super confortável e versátil.",
    description: [
      "Moletom grosso com felpa",
      "Modelagem jogger moderna",
      "Bolsos laterais",
      "Cintura ajustável"
    ],
    availability: "Em estoque",
    categorySlug: "outono-inverno",
    categoryName: "Outono Inverno",
    ageGroup: "4 a 10 anos",
    sizes: ["4", "6", "8", "10"],
    images: ["/boys.png"],
    isPopular: true,
  }
];

export const CATEGORIES = [
  { slug: "meninas", name: "Meninas", description: "Roupinhas lindas, confortáveis e acessíveis para o dia a dia da sua princesa.", image: "/girls.png" },
  { slug: "meninos", name: "Meninos", description: "Estilo e muita liberdade de movimento para os pequenos aventureiros.", image: "/boys.png" },
  { slug: "bebes", name: "Bebês", description: "O máximo de conforto e maciez para os primeiros meses do seu bebê.", image: "/babies.png" },
  { slug: "promocoes", name: "Promoções", description: "As melhores oportunidades da semana com preços imperdíveis.", image: "/babies.png" },
];
