// data/materialsRules.js

const materialsRules = {

  master_bathroom: {
    label: "Master Bathroom",
    items: [
      { id: "toilet",                  label: "Toilet",                cost: 450  },
      { id: "bathtub",                 label: "Bathtub",               cost: 1000 },
      { id: "framing_and_cement_board",label: "Framing & Cement Board",cost: 1100 },
      { id: "vanity_cabinet",          label: "Vanity Cabinet",        cost: 2000 },
      { id: "mirror",                  label: "Mirror",                cost: 300  },
    ],
    tiles: {
      ceramic:  { medium: 450,  extra_large: 720  },
      porcelain: { medium: 810,  extra_large: 1296 },
      marble:   { medium: 2250, extra_large: 3600 },
    },
  },

  guest_bathroom: {
    label: "Guest Bathroom",
    items: [
      { id: "toilet",                  label: "Toilet",                cost: 450 },
      { id: "bathtub",                 label: "Bathtub",               cost: 600 },
      { id: "framing_and_cement_board",label: "Framing & Cement Board",cost: 900 },
      { id: "vanity_cabinet",          label: "Vanity Cabinet",        cost: 600 },
      { id: "mirror",                  label: "Mirror",                cost: 200 },
    ],
    tiles: {
      ceramic:  { full: 125 },
      porcelain: { full: 225 },
      marble:   { full: 625 },
    },
  },

  shower_remodel: {
    label: "Shower Remodel",
    items: [
      { id: "toilet",                  label: "Toilet",                cost: 450 },
      { id: "framing_and_cement_board",label: "Framing & Cement Board",cost: 600 },
    ],
    tiles: {
      ceramic:  { full: 300 },
      porcelain: { full: 300 },
      marble:   { full: 375 },
    },
  },

};

export default materialsRules;