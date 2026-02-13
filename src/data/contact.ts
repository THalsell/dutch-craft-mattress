export const contact = {
  phone: "(931) 243-4425",
  phoneTel: "931-243-4425",
  address: {
    street: "1012 Mitchell St",
    city: "Celina",
    state: "TN",
    zip: "38551",
  },
  ownerEmail: "eli@twlakes.net",
  applicationsEmail: "alicia@dutchcraftmattress.com",
  facebook: "https://www.facebook.com/DutchCraftMattressCompany",
  shopUrl: "https://www.shopdutchcraft.com",
} as const;

export const fullAddress = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`;
