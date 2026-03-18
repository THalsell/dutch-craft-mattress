export type DealerLocation = {
  dealerName: string;
  locationName?: string;
  tier: 'signature' | 'select' | 'authorized';
  address1: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  website?: string;
  latitude: number;
  longitude: number;
};

export const dealers: DealerLocation[] = [
  {
    dealerName: "DT McCalls",
    locationName: "Cookeville",
    tier: "signature",
    address1: "1300 S Jefferson Ave",
    city: "Cookeville",
    state: "TN",
    zip: "38506",
    phone: "931-526-1103",
    website: "https://www.dtmccalls.com/",
    latitude: 36.1628,
    longitude: -85.5016,
  },
  {
    dealerName: "DT McCalls",
    locationName: "Carthage",
    tier: "signature",
    address1: "101 Water St",
    city: "Carthage",
    state: "TN",
    zip: "37030",
    phone: "615-735-0165",
    website: "https://www.dtmccalls.com/",
    latitude: 36.2517,
    longitude: -85.9503,
  },
  {
    dealerName: "DT McCalls",
    locationName: "Lafayette",
    tier: "signature",
    address1: "1220 Scottsville Rd",
    city: "Lafayette",
    state: "TN",
    zip: "37083",
    phone: "615-666-3709",
    website: "https://www.dtmccalls.com/",
    latitude: 36.5218,
    longitude: -86.0267,
  },
  {
    dealerName: "DT McCalls",
    locationName: "Lebanon",
    tier: "signature",
    address1: "1029 W Main St",
    city: "Lebanon",
    state: "TN",
    zip: "37087",
    phone: "615-453-5767",
    website: "https://www.dtmccalls.com/",
    latitude: 36.2081,
    longitude: -86.2911,
  },
  {
    dealerName: "DT McCalls",
    locationName: "Franklin",
    tier: "signature",
    address1: "232 Franklin Rd",
    city: "Franklin",
    state: "TN",
    zip: "37064",
    phone: "615-794-8707",
    website: "https://www.dtmccalls.com/",
    latitude: 35.9251,
    longitude: -86.8689,
  },
  {
    dealerName: "Knoxville Wholesale Furniture",
    locationName: "Callahan Drive",
    tier: "signature",
    address1: "2381 Old Callahan Dr",
    city: "Knoxville",
    state: "TN",
    zip: "37912",
    phone: "865-947-3355",
    website: "https://knoxvillewholesalefurniture.com/",
    latitude: 36.0148,
    longitude: -83.9827,
  },
  {
    dealerName: "Knoxville Wholesale Furniture",
    locationName: "Peters Road",
    tier: "signature",
    address1: "410 Peters Rd",
    city: "Knoxville",
    state: "TN",
    zip: "37922",
    phone: "865-671-5300",
    website: "https://knoxvillewholesalefurniture.com/",
    latitude: 35.9303,
    longitude: -84.0901,
  },
  {
    dealerName: "Knoxville Wholesale Furniture",
    locationName: "Clearance Center",
    tier: "signature",
    address1: "7428 Kingston Pike",
    city: "Knoxville",
    state: "TN",
    zip: "37919",
    phone: "865-212-4050",
    website: "https://knoxvillewholesalefurniture.com/",
    latitude: 35.9432,
    longitude: -84.0171,
  },
];
