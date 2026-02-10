export interface Dealer {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat: number;
  lng: number;
}

export const dealers: Dealer[] = [
  // Add your dealers here with lat/lng coordinates for distance search
  // You can find coordinates at https://www.latlong.net/
  { name: "ATL Mattress Outlet", address: "Suite 109", city: "Kennesaw", state: "GA", zip: "30144", phone: "", lat: 34.0234, lng: -84.6155 },
  { name: "Spring View Appliance & Mattresses", address: "", city: "Chambersburg", state: "PA", zip: "17201", phone: "(717) 375-2505", lat: 39.9376, lng: -77.6611 },
];
