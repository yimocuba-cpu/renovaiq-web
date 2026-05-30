// data/materialsRules.js

const materialsRules = {
  master_bathroom: {
    label: "Master Bathroom",
    items: [
      { id: "toilet", label: "Toilet", cost: 450 },
      { id: "bathtub", label: "Bathtub", cost: 1000 },
      { id: "framing_cement_roughin", label: "Framing, Cement Board & Rough-in Supplies", cost: 1100 },
      { id: "vanity_cabinet", label: "Vanity Cabinet", cost: 2000 },
      { id: "mirror", label: "Mirror", cost: 300 },
      { id: "bathroom_door", label: "Bathroom Door", cost: 250 },
    ],
    tileTypes: [
      { id: "ceramic", label: "Ceramic Tile", pricePerSqft: 5 },
      { id: "porcelain", label: "Porcelain Tile", pricePerSqft: 9 },
      { id: "marble", label: "Marble Tile", pricePerSqft: 25 },
    ],
    bathroomSizes: [
      { id: "large", label: "Large", sqft: 450 },
      { id: "medium", label: "Medium", sqft: 250 },
    ],
  },

  guest_bathroom: {
    label: "Guest Bathroom",
    items: [
      { id: "toilet", label: "Toilet", cost: 450 },
      { id: "bathtub", label: "Bathtub", cost: 600 },
      { id: "framing_cement_roughin", label: "Framing, Cement Board & Rough-in Supplies", cost: 900 },
      { id: "vanity_cabinet", label: "Vanity Cabinet", cost: 600 },
      { id: "mirror", label: "Mirror", cost: 200 },
      { id: "bathroom_door", label: "Bathroom Door", cost: 250 },
    ],
    tileTypes: [
      { id: "ceramic", label: "Ceramic Tile", pricePerSqft: 5 },
      { id: "porcelain", label: "Porcelain Tile", pricePerSqft: 9 },
      { id: "marble", label: "Marble Tile", pricePerSqft: 25 },
    ],
    bathroomSizes: [
      { id: "full", label: "Full Bathroom", sqft: 200 },
      { id: "partial", label: "Partial Bathroom", sqft: 120 },
    ],
  },

  shower_remodel: {
    label: "Shower Remodel",
    items: [
      { id: "toilet", label: "Toilet", cost: 450 },
      { id: "bathtub", label: "Bathtub", cost: 400 },
      { id: "framing_cement_roughin", label: "Framing, Cement Board & Rough-in Supplies", cost: 600 },
    ],
    tileTypes: [
      { id: "ceramic", label: "Ceramic Tile", cost: 550 },
      { id: "porcelain", label: "Porcelain Tile", cost: 1035 },
      { id: "marble", label: "Marble Tile", cost: 2875 },
    ],
  },
};

export default materialsRules;