export interface Benefit {
  icon: string;
  label: string;
  size?: string;
}

export interface CoilCount {
  twin?: number;
  full?: number;
  queen?: number;
  king?: number;
}

export interface MattressSpecs {
  height?: string;
  warranty?: string;
  flippable?: string;
}

export interface ModelDetails {
  subtitle?: string;
  firmModelAvailable?: boolean;
  alsoAvailable?: string;
  comfortLevel?: string;
  quiltLayer?: string;
  coverFabric?: string;
  supportSystem?: string;
  design?: string;
  coilCount?: CoilCount;
  specs?: MattressSpecs;
  performance?: string[];
  certifications?: string[];
  idealFor?: string[];
  iconsImage?: string;
}

export interface Model {
  name: string;
  details: string;
  image?: string;
  diagram?: string;
  benefits?: Benefit[];
  mattressImage?: string;
  modelDetails?: ModelDetails;
}

export interface SubCollection {
  name: string;
  models: Model[];
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  warranty: string;
  features: string;
  image?: string;
  heroColor?: string;
  heroImage?: string;
  modelBoxColor?: string;
  models?: Model[];
  subCollections?: SubCollection[];
}

export const collections: Collection[] = [
  {
    slug: "comfort",
    name: "Comfort",
    description: "Classic comfort with reliable support for a restful night's sleep.",
    modelBoxColor: "#6b8494",
    warranty: "10-year non-prorated warranty",
    features: "Alternating coil spring system, two-sided construction, high-density foam with edge support.",
    image: "/collections/comfort/comfort-card.png",
    heroColor: "#3d4356",
    heroImage: "/collections/comfort/comfort-hero.png",
    models: [
      { name: "Winfield", details: "Available in Firm and Cushion Firm. Features 1\" Insulator Pad.", image: "/collections/comfort/comfort-winfield.png", mattressImage: "/collections/comfort/winfield.png", modelDetails: {
        subtitle: "Luxury Firm",
        firmModelAvailable: true,
        comfortLevel: "Luxury Firm",
        quiltLayer: "2\" Quilt Foam",
        coverFabric: "Aloe Vera Fabric",
        supportSystem: "312 Spring Unit",
        design: "Open coil construction for durability and consistent support",
        specs: { height: "11.5 inches", warranty: "10-Year Warranty", flippable: "Yes (Two-Sided Design)" },
        performance: [
          "Durable, long-lasting open coil design that remains stable throughout the life of the mattress",
          "Long-lasting sleep surface that springs back to its original shape after each use",
          "Balanced support and comfort for everyday sleepers",
          "Firm feel with responsive comfort layers",
        ],
        certifications: [
          "Two-Sided / Flippable Design – extends mattress lifespan",
          "Comfort Support System – balanced firmness and pressure relief",
          "CertiPUR-US® Foams – made without harmful chemicals and low VOC emissions",
        ],
        iconsImage: "/collections/comfort/winfield-icons.png",
      } },
      { name: "Crestview", details: "Pillow top design for added comfort.", image: "/collections/comfort/comfort-crestview.png", mattressImage: "/collections/comfort/crestview.png", modelDetails: {
        subtitle: "Pillow Top",
        comfortLevel: "Pillow Top",
        coverFabric: "Aloe Vera Fabric",
        design: "Open coil construction for long-lasting durability and stability",
        specs: { height: "13 inches", warranty: "10-Year Warranty", flippable: "Yes (Two-Sided Design)" },
        performance: [
          "Durable, long-lasting open coil design that remains stable throughout the life of the mattress",
          "Long-lasting sleep surface that springs back to its original shape after each use",
          "Plush pillow-top feel combined with reliable underlying support",
          "Designed for comfort without sacrificing durability",
        ],
        iconsImage: "/collections/comfort/winfield-icons.png",
      } },
    ],
  },
  {
    slug: "comfort-response",
    name: "Comfort Response",
    description: "Responsive cushioning that adapts to your body for personalized comfort.",
    modelBoxColor: "#323f55",
    warranty: "15-year non-prorated warranty",
    features: "Dutch Craft exclusive 768 pocketed coil system with foam encasement.",
    image: "/collections/comfort-response/comfort-response-card.png",
    heroColor: "#3d4356",
    heroImage: "/collections/comfort-response/comfort-response-hero.png",
    models: [
      { name: "Kinsley", details: "Available in Firm or Plush.", image: "/collections/comfort-response/comfort-response-kinsley.png", mattressImage: "/collections/comfort-response/kinsley.png", modelDetails: {
        subtitle: "Plush",
        firmModelAvailable: true,
        comfortLevel: "Plush",
        coverFabric: "Individually wrapped coils with foam encasement",
        design: "Individually wrapped coils encased in high-density foam enclosure providing firm 360-degree durable and comfortable border",
        specs: { height: "12.5 inches", warranty: "15-Year Warranty" },
        performance: [
          "Enhanced edge-to-edge support for a more usable sleep surface",
          "Plush comfort feel with strong underlying support",
          "Designed for durability, comfort, and long-term performance",
        ],
        iconsImage: "/collections/comfort-response/comfort-response-icon.png",
      } },
      { name: "Olivia", details: "Available in Firm, Plush, or Pillow Top. Features 1\" gel infused memory foam.", image: "/collections/comfort-response/comfort-response-olivia.png", mattressImage: "/collections/comfort-response/olivia.png", modelDetails: {
        subtitle: "Firm",
        alsoAvailable: "Plush & Pillow Top Models Available",
        comfortLevel: "Firm",
        coverFabric: "Individually wrapped coils with high-density foam encasement",
        design: "Individually wrapped coils encased in high-density foam enclosure with firm 360-degree border for durability and edge stability",
        specs: { height: "14 inches", warranty: "15-Year Warranty" },
        performance: [
          "Enhanced edge-to-edge support for maximum usable sleep surface",
          "Cooling gel memory foam helps regulate temperature",
          "Firm support feel with responsive comfort layers",
        ],
        iconsImage: "/collections/comfort-response/olivia-icon.png",
      } },
      { name: "Alaina", details: "Features 2\" High Density Gel Flex.", image: "/collections/comfort-response/comfort-response-alaina.png", mattressImage: "/collections/comfort-response/alaina.png", modelDetails: {
        subtitle: "Hybrid",
        comfortLevel: "Hybrid (balanced comfort and support)",
        coverFabric: "Individually wrapped coils with high-density foam encasement",
        design: "Hybrid construction combines pressure relief with responsive support",
        specs: { height: "13.5 inches", warranty: "15-Year Warranty" },
        performance: [
          "Firm 360-degree border for durability and enhanced edge support",
          "Gel flex foam promotes comfort and temperature regulation",
          "Designed for long-term durability and consistent performance",
        ],
        iconsImage: "/collections/comfort-response/alaina-icon.png",
      } },
      { name: "Sophia", details: "Incorporates 2\" High Density Cool Gel.", image: "/collections/comfort-response/comfort-response-sophia.png", mattressImage: "/collections/comfort-response/sophia.png", modelDetails: {
        subtitle: "Pillow Top",
        comfortLevel: "Pillow Top",
        coverFabric: "Individually wrapped coils with high-density foam encasement",
        design: "Deep pillow-top comfort with enhanced pressure relief",
        specs: { height: "16 inches", warranty: "15-Year Warranty" },
        performance: [
          "Firm 360-degree border provides durable, edge-to-edge support",
          "Gel flex foam helps regulate temperature while maintaining plush feel",
          "Designed for long-term durability and consistent comfort",
        ],
        iconsImage: "/collections/comfort-response/comfort-response-icon.png",
      } },
      { name: "Julianna", details: "Equipped with 4\" High Density Gel Flex.", image: "/collections/comfort-response/comfort-response-julianna.png", mattressImage: "/collections/comfort-response/julianna.png", modelDetails: {
        subtitle: "Hybrid",
        comfortLevel: "Hybrid",
        coverFabric: "Individually wrapped coils with high-density foam encasement",
        design: "Hybrid construction delivers pressure relief with responsive support",
        specs: { height: "13.5 inches", warranty: "15-Year Warranty" },
        performance: [
          "Firm 360-degree border for durable, edge-to-edge support",
          "Gel flex foam enhances comfort and helps regulate temperature",
          "Designed for long-term durability and consistent performance",
        ],
        iconsImage: "/collections/comfort-response/alaina-icon.png",
      } },
      { name: "Makayla", details: "Hybrid Pillow Top with 2\" Energex and Joma Wool.", image: "/collections/comfort-response/comfort-response-makayla.png", mattressImage: "/collections/comfort-response/makayla.png", modelDetails: {
        subtitle: "Pillow Top",
        comfortLevel: "Pillow Top",
        coverFabric: "Individually wrapped coils with high-density foam encasement",
        design: "Reduces motion transfer while maintaining a plush, responsive feel",
        specs: { height: "16 inches", warranty: "15-Year Warranty" },
        performance: [
          "Avena\u00ae foam provides cushioning support with greater bounce, durability, and breathability",
          "Firm 360-degree border delivers durable edge-to-edge support",
          "Designed for long-term comfort and structural integrity",
        ],
        iconsImage: "/collections/comfort-response/comfort-response-icon.png",
      } },
    ],
  },
  {
    slug: "heirloom",
    name: "Heirloom",
    description: "Premium handcrafted construction built to last for generations.",
    modelBoxColor: "#6b8494",
    warranty: "12-year non-prorated warranty",
    features: "Dutch Craft exclusive 805 Prodigy alternating coil system with two-sided construction.",
    image: "/collections/heirloom/heirloom-card.png",
    heroColor: "#3d4356",
    models: [
      { name: "Jade", details: "Available in Pillow Top and Plush.", modelDetails: {
        subtitle: "Pillow Top",
        alsoAvailable: "Plush Model Available",
        comfortLevel: "Pillow Top",
        coverFabric: "Quilted to 1½\" Poly Foam",
        supportSystem: "Continuous Coil System with Double Edge Support",
        design: "Quilted 1½\" poly foam with 1¾\" HD plush foam, breathable cotton insulator pad, and continuous coil system with double edge support in a two-sided flippable construction",
        specs: { flippable: "Yes (Two-Sided Design)" },
        performance: [
          "Plush, quilted surface for added cushioning",
          "Two-sided flippable design for extended mattress life",
          "Double edge support for consistent edge-to-edge stability",
          "High-density foam construction for lasting durability",
        ],
      } },
      { name: "Opal", details: "Available in Firm and Plush.", modelDetails: {
        subtitle: "Firm",
        alsoAvailable: "Plush Model Available",
        comfortLevel: "Firm",
        coverFabric: "Quilted to ¾\" Poly Foam",
        supportSystem: "Continuous Coil System with Double Edge Support",
        design: "Quilted ¾\" poly foam with 1½\" HD support foam, breathable cotton insulator pad, and continuous coil system with double edge support in a two-sided flippable construction",
        specs: { flippable: "Yes (Two-Sided Design)" },
        performance: [
          "Firm, supportive feel with minimal sink",
          "Two-sided flippable design for extended mattress life",
          "Double edge support for consistent edge-to-edge stability",
          "High-density foam construction for lasting durability",
        ],
      } },
    ],
  },
  {
    slug: "nightfall",
    name: "Nightfall",
    description: "Plush layers designed for deep, uninterrupted sleep.",
    modelBoxColor: "#3d4356",
    warranty: "15-year non-prorated warranty",
    features: "Dutch Craft exclusive 1057 Pocket Coil system with premium Phase Change Material fabrics.",
    image: "/collections/nightfall/nightfall-card.png",
    heroColor: "#3d4356",
    heroImage: "/collections/nightfall/nightfall-hero.png",
    subCollections: [
      {
        name: "Nightfall",
        models: [
          { name: "Grace", details: "Euro top with balanced comfort and edge support.", image: "/collections/nightfall/grace.png", mattressImage: "/collections/nightfall/grace-mattress.png", modelDetails: {
            subtitle: "Euro Top",
            alsoAvailable: "Firm and Plush Models Available",
            comfortLevel: "Euro Top",
            coverFabric: "2\" HD Comfort Foam",
            supportSystem: "8\" Caliber Edge® Coil Unit",
            design: "2\" HD comfort foam with 1\" HD support base and 8\" Caliber Edge® coil unit",
            specs: { height: "12 inches", warranty: "10-Year Warranty" },
            performance: [
              "Balanced comfort and support",
              "Improved edge-to-edge stability",
              "Reduced feeling of roll-off",
              "Consistent sleep surface",
            ],
            iconsImage: "/collections/nightfall/grace-icons.png",
          } },
          { name: "Hope", details: "Pillow top with graphite memory foam and edge support.", image: "/collections/nightfall/nightfall-hope.png", mattressImage: "/collections/nightfall/hope.png", modelDetails: {
            subtitle: "Pillow Top",
            alsoAvailable: "Firm and Plush Models Available",
            comfortLevel: "Pillow Top",
            coverFabric: "1\" Graphite Memory Foam",
            supportSystem: "8\" Caliber Edge® Coil Unit",
            design: "1\" graphite memory foam with 2\" HD comfort foam, 1\" HD support base, and 8\" Caliber Edge® coil unit",
            specs: { height: "13 inches", warranty: "10-Year Warranty" },
            performance: [
              "Plush surface comfort with stable support",
              "Improved edge durability",
              "Consistent sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/grace-icons.png",
          } },
          { name: "Zion", details: "Available in Firm and Plush.", image: "/collections/nightfall/nightfall-zion.png", mattressImage: "/collections/nightfall/zion.png", modelDetails: {
            subtitle: "Firm",
            alsoAvailable: "Plush Model Available",
            comfortLevel: "Firm",
            coverFabric: "Bronze PCM Cooling Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Bronze PCM cooling fabric with 1½\" HD firm poly foam and 8\" elite pocket coil unit for consistent support and cooling",
            specs: { height: "12 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Maximized usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/zion-icons.png",
          } },
          { name: "Solace", details: "Available in Plush and Firm.", image: "/collections/nightfall/nightfall-solace.png", mattressImage: "/collections/nightfall/solace.png", modelDetails: {
            subtitle: "Plush",
            firmModelAvailable: true,
            comfortLevel: "Plush",
            coverFabric: "Bronze PCM Cooling Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Bronze PCM cooling fabric with 1\" graphite memory foam, 2\" HD firm poly foam, and 8\" elite pocket coil unit",
            specs: { height: "13.5 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Increased usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/zion-icons.png",
          } },
          { name: "Essence", details: "Available in Plush and Firm.", image: "/collections/nightfall/nightfall-essence.png", mattressImage: "/collections/nightfall/essence.png", modelDetails: {
            subtitle: "Plush",
            firmModelAvailable: true,
            comfortLevel: "Plush",
            coverFabric: "Cool Touch Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Cool touch fabric with 2\" HD foam & Joma wool, 2\" natural latex, and 8\" elite pocket coil unit",
            specs: { height: "13 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Increased usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/essence-icons.png",
          } },
          { name: "Serenity", details: "Pillow top with NanoCoil® layer and cooling fabric.", image: "/collections/nightfall/nightfall-serenity.png", mattressImage: "/collections/nightfall/serenity.png", modelDetails: {
            subtitle: "Pillow Top",
            alsoAvailable: "Firm and Plush Models Available",
            comfortLevel: "Pillow Top",
            coverFabric: "Gold PCM Cold Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Gold PCM cold fabric with 1\" graphite-infused gel foam, NanoCoil® layer, and 8\" elite pocket coil unit",
            specs: { height: "16 inches", warranty: "15-Year Warranty" },
            performance: [
              "Enhanced pressure relief",
              "Responsive, adaptive support",
              "Improved edge stability",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/serenity-icons.png",
          } },
          { name: "Ascend", details: "Pillow top with natural latex and HD plush foam.", image: "/collections/nightfall/nightfall-ascend.png", mattressImage: "/collections/nightfall/ascend.png", modelDetails: {
            subtitle: "Pillow Top",
            comfortLevel: "Pillow Top",
            coverFabric: "Gold PCM Cold Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Gold PCM cold fabric with 2\" natural latex, 3\" HD plush foam, and 8\" elite pocket coil unit",
            specs: { height: "16 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Increased usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/essence-icons.png",
          } },
          { name: "Peace", details: "Hybrid design with graphite memory foam and cooling fabric.", image: "/collections/nightfall/nightfall-peace.png", mattressImage: "/collections/nightfall/peace.png", modelDetails: {
            subtitle: "Hybrid",
            comfortLevel: "Hybrid",
            coverFabric: "Gold PCM Cold Fabric with Removable Zippered Cover",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Gold PCM cold fabric with removable zippered cover, 2\" graphite memory foam, and 8\" elite pocket coil unit",
            specs: { height: "13 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Increased usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/zion-icons.png",
          } },
          { name: "Patience", details: "Hybrid with graphite memory foam and cooling fabric.", image: "/collections/nightfall/nightfall-patience.png", mattressImage: "/collections/nightfall/patience.png", modelDetails: {
            subtitle: "Hybrid",
            comfortLevel: "Hybrid",
            coverFabric: "Gold PCM Cold Fabric with Removable Zippered Cover",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Gold PCM cold fabric with removable zippered cover, 2\" graphite memory foam, and 8\" elite pocket coil unit",
            specs: { height: "13 inches", warranty: "15-Year Warranty" },
            performance: [
              "Consistent support from center to edge",
              "Enhanced edge stability",
              "Increased usable sleep surface",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/zion-icons.png",
          } },
        ],
      },
      {
        name: "Nightfall Two-Sided Flippable",
        models: [
          { name: "Bliss", details: "Hand tufted pillow top with cooling fabric.", image: "/collections/nightfall/nightfall-bliss.png", mattressImage: "/collections/nightfall/bliss.png", modelDetails: {
            subtitle: "Pillow Top",
            alsoAvailable: "Firm and Plush Models Available",
            comfortLevel: "Pillow Top",
            coverFabric: "Gold PCM Cold Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "Hand tufted construction with Gold PCM cold fabric, 1¾\" HD plush poly foam, and 8\" elite pocket coil unit",
            specs: { height: "16 inches", warranty: "15-Year Warranty" },
            performance: [
              "Even support from center to edge",
              "Enhanced edge stability",
              "Reduced motion transfer",
              "Durable, long-lasting comfort",
            ],
            iconsImage: "/collections/nightfall/cambridge-icons.png",
          } },
          { name: "Cambridge", details: "Two-sided flippable pillow top.", image: "/collections/nightfall/nightfall-cambridge.png", mattressImage: "/collections/nightfall/cambridge.png", modelDetails: {
            subtitle: "Pillow Top",
            alsoAvailable: "Firm and Plush Models Available",
            comfortLevel: "Pillow Top",
            coverFabric: "PCM Cool Fabric",
            supportSystem: "8\" Elite Pocket Coil Unit",
            design: "PCM cool fabric with 1¾\" plush poly foam, 1\" HD support foam, and 8\" elite pocket coil unit in a two-sided flippable construction",
            specs: { height: "16 inches", warranty: "15-Year Warranty", flippable: "Yes (Two-Sided Design)" },
            performance: [
              "Flippable construction for extended durability",
              "Consistent support across the sleep surface",
              "Reduced edge roll-off",
              "Balanced comfort and stability",
            ],
            iconsImage: "/collections/nightfall/cambridge-icons.png",
          } },
          { name: "Allure", details: "Two-sided flippable pillow top.", image: "/collections/nightfall/nightfall-allure.png", mattressImage: "/collections/nightfall/allure.png", modelDetails: {
            subtitle: "Pillow Top",
            comfortLevel: "Pillow Top",
            coverFabric: "1¾\" Plush Poly Foam",
            supportSystem: "8\" Caliber Edge® Coil Unit",
            design: "1¾\" plush poly foam with 5⁄8\" comfort foam and 8\" Caliber Edge® coil unit in a two-sided flippable construction",
            specs: { height: "16 inches", warranty: "10-Year Warranty", flippable: "Yes (Two-Sided Design)" },
            performance: [
              "Flippable design for longer mattress life",
              "Improved edge stability",
              "Balanced comfort and support",
              "Reduced motion transfer",
            ],
            iconsImage: "/collections/nightfall/allure-icons.png",
          } },
        ],
      },
      {
        name: "Nightfall Resurgence Plus",
        models: [
          { name: "Regena Firm", details: "Resurgence Plus+ with Aarogy wellness technology.", image: "/collections/nightfall/nightfall-resurgence-regena-firm.png", mattressImage: "/collections/nightfall/regena-firm.png", modelDetails: {
            subtitle: "Firm",
            comfortLevel: "Firm",
            coverFabric: "Aarogy Fabric with Joma Wool",
            supportSystem: "8\" Quantum Edge® Coil Unit",
            design: "Aarogy fabric with Joma wool, 1½\" copper memory foam, 3\" firm natural latex, and 8\" Quantum Edge® coil unit",
            specs: { height: "14.5 inches", warranty: "20-Year Warranty" },
            performance: [
              "Strong, stable support",
              "Enhanced edge durability",
              "Reduced motion transfer",
              "Long-term structural integrity",
            ],
            iconsImage: "/collections/nightfall/regena-firm-icons.png",
          } },
          { name: "Regena Plush", details: "Resurgence Plus+ with Aarogy wellness technology.", image: "/collections/nightfall/nightfall-resurgence-regena-plush.png", mattressImage: "/collections/nightfall/regena-plush.png", modelDetails: {
            subtitle: "Plush",
            comfortLevel: "Plush",
            coverFabric: "Aarogy Fabric with Joma Wool",
            supportSystem: "8\" Quantum Edge® Coil Unit",
            design: "Aarogy fabric with Joma wool, 1½\" copper memory foam, 3\" firm natural latex, and 8\" Quantum Edge® coil unit",
            specs: { height: "14.5 inches", warranty: "20-Year Warranty" },
            performance: [
              "Naturally breathable comfort",
              "Enhanced edge stability",
              "Responsive, pressure-relieving support",
              "Reduced partner disturbance",
            ],
            iconsImage: "/collections/nightfall/regena-firm-icons.png",
          } },
        ],
      },
    ],
  },
  {
    slug: "posture-perfect",
    name: "Posture Perfect",
    description: "Targeted support for proper spinal alignment and better posture.",
    modelBoxColor: "#7eb8d0",
    warranty: "10-year non-prorated warranty",
    features: "Exclusive 504 coil system with foam encased edge support.",
    image: "/collections/posture-perfect/posture-perfect-card.png",
    heroColor: "#a3d1e6",
    models: [
      { name: "Pearl", details: "Available in Pillow Top, Plush, and Firm.", modelDetails: {
        subtitle: "Pillow Top",
        alsoAvailable: "Plush and Firm Models Available",
        comfortLevel: "Pillow Top",
        coverFabric: "Quilted to 1½\" Comfort Foam",
        supportSystem: "800 Continuous Coil System with Dual Edge Support",
        design: "Quilted 1½\" comfort foam with 2\" HD comfort foam, 1\" support foam, breathable cotton insulator pad, and 800 continuous coil system with dual edge support",
        specs: { warranty: "10-Year Warranty" },
        performance: [
          "Plush comfort for a gentle, inviting feel",
          "Edge-to-edge stability",
          "Durable bar-tacked handles for easy positioning",
          "CertiPUR-US® certified foams",
        ],
      } },
      { name: "Sapphire", details: "Available in Pillow Top and Firm.", modelDetails: {
        subtitle: "Firm",
        alsoAvailable: "Pillow Top Model Available",
        comfortLevel: "Firm",
        coverFabric: "Quilted to 2\" Comfort Foam",
        supportSystem: "800 Continuous Coil System with Dual Edge Support",
        design: "Quilted 2\" comfort foam with 1\" graphite-infused memory foam, 2\" HD comfort foam, 1\" support foam, breathable cotton insulator pad, and 800 continuous coil system with dual edge support",
        specs: { warranty: "10-Year Warranty" },
        performance: [
          "Cooling comfort for temperature regulation",
          "Firm, stable support with minimal sink",
          "Durable bar-tacked handles for easy positioning",
          "CertiPUR-US® certified foams",
        ],
      } },
      { name: "Diamond", details: "Available in Pillow Top.", modelDetails: {
        subtitle: "Pillow Top",
        comfortLevel: "Pillow Top",
        coverFabric: "Quilted to 2\" Comfort Foam",
        supportSystem: "800 Continuous Coil System with Dual Edge Support",
        design: "Quilted 2\" comfort foam with 2\" Avena foam, 2\" HD comfort foam, 1\" support foam, breathable cotton insulator pad, and 800 continuous coil system with dual edge support",
        specs: { warranty: "10-Year Warranty" },
        performance: [
          "Cooling fabric for temperature regulation",
          "Dual edge support for consistent edge-to-edge stability",
          "Durable bar-tacked handles for easy positioning",
          "CertiPUR-US® certified foams",
        ],
      } },
    ],
  },
  {
    slug: "posture-perfect-gel",
    name: "Posture Perfect Gel",
    modelBoxColor: "#7eb8d0",
    description: "Gel-infused memory foam with posture support for a cooler sleep.",
    warranty: "15-year non-prorated warranty",
    features: "High density gel infused foam with removable zipper covers.",
    image: "/collections/posture-perfect-gel/posture-perfect-gel-card.png",
    heroColor: "#a3d1e6",
    heroImage: "/collections/posture-perfect-gel/posture-perfect-gel-hero.png",
    models: [
      { name: "Silverthorne", details: "", image: "/collections/posture-perfect-gel/posture-perfect-gel-silverthorne.png", mattressImage: "/collections/posture-perfect-gel/silverthorne.png", modelDetails: {
        subtitle: "Plush",
        firmModelAvailable: true,
        comfortLevel: "Plush",
        coverFabric: "Cool Touch Cover",
        design: "All-foam construction delivers consistent comfort and motion isolation",
        specs: { height: "10 inches", warranty: "12-Year Warranty" },
        performance: [
          "Cool touch cover helps regulate surface temperature",
          "Graphite-infused memory foam assists with heat dissipation and pressure relief",
          "Compatible with adjustable bases",
          "Designed for durability with a balanced plush feel",
        ],
        iconsImage: "/collections/posture-perfect-gel/aurora-icon.png",
      } },
      { name: "Aurora", details: "", image: "/collections/posture-perfect-gel/posture-perfect-gel-aurora.png", mattressImage: "/collections/posture-perfect-gel/aurora.png", modelDetails: {
        subtitle: "Plush",
        firmModelAvailable: true,
        comfortLevel: "Plush",
        coverFabric: "Cool Touch Cover",
        design: "All-foam construction provides excellent motion isolation",
        specs: { height: "12 inches", warranty: "12-Year Warranty" },
        performance: [
          "Cool touch cover helps regulate surface temperature",
          "Graphite-infused memory foam promotes heat dissipation and pressure relief",
          "Compatible with adjustable bases",
          "Plush, contouring feel with reliable underlying support",
        ],
        iconsImage: "/collections/posture-perfect-gel/aurora-icon.png",
      } },
      { name: "Glenwood Springs", details: "", image: "/collections/posture-perfect-gel/posture-perfect-gel-glenwood-springs.png", mattressImage: "/collections/posture-perfect-gel/glenwood-springs.png", modelDetails: {
        subtitle: "Plush",
        comfortLevel: "Plush",
        coverFabric: "Cool Touch Cover",
        design: "Individually encased coils with Quantum Edge\u00ae design for edge-to-edge support",
        specs: { height: "12.5 inches", warranty: "12-Year Warranty" },
        performance: [
          "Cool touch cover helps regulate surface temperature",
          "Graphite-infused memory foam assists with heat dissipation and pressure relief",
          "Individually encased coil system minimizes motion transfer",
          "Quantum Edge\u00ae design enhances edge-to-edge support and reduces roll-off",
          "Plush feel with balanced underlying support",
        ],
        iconsImage: "/collections/posture-perfect-gel/estes-park-icon.png",
      } },
      { name: "Estes Park", details: "", image: "/collections/posture-perfect-gel/posture-perfect-gel-estes-park.png", mattressImage: "/collections/posture-perfect-gel/estes-park.png", modelDetails: {
        subtitle: "Plush",
        comfortLevel: "Plush",
        coverFabric: "Cool Touch Cover",
        design: "Individually encased coils with Quantum Edge\u00ae coil system for edge-to-edge support",
        specs: { height: "13.5 inches", warranty: "12-Year Warranty" },
        performance: [
          "Cool touch cover helps regulate surface temperature",
          "Graphite-infused memory foam aids in heat dissipation and pressure relief",
          "Individually encased coils minimize motion transfer",
          "Reduces the feeling of roll-off while maximizing usable sleep surface",
        ],
        iconsImage: "/collections/posture-perfect-gel/estes-park-icon.png",
      } },
    ],
  },
  {
    slug: "posture-perfect-ice",
    name: "Posture Perfect ICE",
    description: "Advanced cooling technology paired with superior posture support.",
    modelBoxColor: "#7eb8d0",
    warranty: "15-year non-prorated warranty",
    features: "Bio based foam core with high density gel infused foam and removable zipper covers.",
    heroColor: "#a3d1e6",
    subCollections: [
      {
        name: "Hybrid",
        models: [
          { name: "Hybrid Firm", details: "Firm hybrid with LURACOR® foam and Quantum Edge® coils.", modelDetails: {
            subtitle: "Firm",
            comfortLevel: "Firm",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "8\" Quantum Edge® Pocket Coil Unit",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® firm foam, 8\" Quantum Edge® pocket coil unit, and 1½\" base foam",
            specs: { height: "13.5 inches", warranty: "12-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "LURACOR® foam delivers deep, responsive support for proper alignment",
              "Quantum Edge® pocket coils provide enhanced edge-to-edge support",
            ],
            iconsImage: "/collections/posture-perfect-ice/hybrid-hd-firm-icons.png",
          } },
          { name: "Hybrid Medium", details: "Medium hybrid with balanced comfort and responsive support.", modelDetails: {
            subtitle: "Medium",
            comfortLevel: "Medium",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "8\" Quantum Edge® Pocket Coil Unit",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® soft foam, 8\" Quantum Edge® pocket coil unit, and 1½\" base foam",
            specs: { height: "13.5 inches", warranty: "12-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "LURACOR® soft foam provides adaptive support with gentle responsiveness",
              "Quantum Edge® pocket coils provide enhanced edge-to-edge support",
            ],
            iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
          } },
          { name: "Hybrid Plush", details: "Plush hybrid with graphite memory foam and deep pressure relief.", modelDetails: {
            subtitle: "Plush",
            comfortLevel: "Plush",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "8\" Quantum Edge® Pocket Coil Unit",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" graphite-infused memory foam, 2\" 4 lb memory foam, 8\" Quantum Edge® pocket coil unit, and 1½\" base foam",
            specs: { height: "13.5 inches", warranty: "12-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "Graphite-infused memory foam helps dissipate heat while providing pressure relief",
              "Quantum Edge® pocket coils provide enhanced edge-to-edge support",
            ],
            iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
          } },
        ],
      },
      {
        name: "Foam HD",
        models: [
          { name: "Foam HD Firm", details: "All-foam firm with LURACOR® foam and HD foam core.", modelDetails: {
            subtitle: "Firm",
            comfortLevel: "Firm",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "8\" High-Density Foam Core",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® firm foam, 8\" high-density foam core, and 1½\" base foam",
            specs: { height: "12 inches", warranty: "15-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "LURACOR® foam delivers deep, responsive support for proper alignment",
              "All-foam construction for strong, stable support without coils",
            ],
            iconsImage: "/collections/posture-perfect-ice/hybrid-hd-firm-icons.png",
          } },
          { name: "Foam HD Medium", details: "All-foam medium with balanced contouring and cooling.", modelDetails: {
            subtitle: "Medium",
            comfortLevel: "Medium",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "8\" High-Density Foam Core",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® soft foam, 8\" high-density foam core, and 1½\" base foam",
            specs: { height: "12 inches", warranty: "15-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "LURACOR® soft foam provides adaptive support with gentle responsiveness",
              "All-foam construction for consistent comfort and motion isolation",
            ],
            iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
          } },
          { name: "Foam HD Plush", details: "All-foam plush with graphite memory foam and Avena foam.", modelDetails: {
            subtitle: "Plush",
            comfortLevel: "Plush",
            coverFabric: "SNŌ Zipper Cover",
            supportSystem: "6\" High-Density Foam Core",
            design: "SNŌ zipper cover with inner-cool PCM layer, 2\" graphite-infused memory foam, 2\" 4 lb memory foam, 2\" Avena soft foam, 6\" high-density foam core, and 1½\" base foam",
            specs: { height: "12 inches", warranty: "15-Year Warranty" },
            performance: [
              "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
              "Inner-cool phase change material regulates temperature throughout the night",
              "Graphite-infused memory foam helps dissipate heat while providing pressure relief",
              "Avena foam provides a buoyant, responsive feel with reduced sink",
            ],
            iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
          } },
        ],
      },
    ],
  },
];
