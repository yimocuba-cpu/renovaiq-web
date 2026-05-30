const laborBaseRates = {
  master_bathroom: {
    label: "Master Bathroom",
    tasks: [
      {
        id: "demolition",
        label: "Demolition",
        cost: 400,
      },
      {
        id: "debris_removal_disposal",
        label: "Debris Removal & Disposal",
        cost: 200,
      },
      {
        id: "wall_texture_paint",
        label: "Wall Texture & Paint",
        cost: 800,
      },
      {
        id: "vanity_cabinet_installation",
        label: "Vanity Cabinet Installation",
        cost: 700,
      },
      {
        id: "bathtub_installation",
        label: "Bathtub Installation",
        cost: 2000,
      },
      {
        id: "glass_shower_door_installation",
        label: "Glass Shower Door & Installation",
        cost: 1300,
      },
      {
        id: "full_wall_tile_installation",
        label: "Full Wall Tile Installation",
        cost: 4000,
      },
      {
        id: "partial_wall_tile_installation",
        label: "Partial Wall Tile Installation",
        cost: 2500,
      },
      {
        id: "floor_tile_installation_large",
        label: "Floor Tile Installation (Large Bathroom)",
        cost: 720,
      },
      {
        id: "floor_tile_installation_medium",
        label: "Floor Tile Installation (Medium Bathroom)",
        cost: 450,
      },
      {
        id: "pre_1980_wall_preparation",
        label: "Pre-1980 Wall Preparation",
        cost: 800,
        conditional: "pre1980",
        note: "Only include when the home was built before 1980.",
      },
    ],
  },

  guest_bathroom: {
    label: "Guest Bathroom",
    tasks: [
      {
        id: "demolition",
        label: "Demolition",
        cost: 200,
      },
      {
        id: "debris_removal_disposal",
        label: "Debris Removal & Disposal",
        cost: 150,
      },
      {
        id: "wall_texture_paint",
        label: "Wall Texture & Paint",
        cost: 500,
      },
      {
        id: "vanity_cabinet_installation",
        label: "Vanity Cabinet Installation",
        cost: 300,
      },
      {
        id: "bathtub_installation",
        label: "Bathtub Installation",
        cost: 1000,
      },
      {
        id: "glass_shower_door_installation",
        label: "Glass Shower Door & Installation",
        cost: 1300,
      },
      {
        id: "full_wall_tile_installation",
        label: "Full Wall Tile Installation",
        cost: 2200,
      },
      {
        id: "partial_wall_tile_installation",
        label: "Partial Wall Tile Installation",
        cost: 1300,
      },
      {
        id: "floor_tile_installation",
        label: "Floor Tile Installation",
        cost: 200,
      },
      {
        id: "pre_1980_wall_preparation",
        label: "Pre-1980 Wall Preparation",
        cost: 600,
        conditional: "pre1980",
        note: "Only include when the home was built before 1980.",
      },
    ],
  },

  shower_remodel: {
    label: "Shower Remodel",
    tasks: [
      {
        id: "demolition",
        label: "Demolition",
        cost: 400,
      },
      {
        id: "debris_removal_disposal",
        label: "Debris Removal & Disposal",
        cost: 100,
      },
      {
        id: "glass_shower_door_installation",
        label: "Glass Shower Door & Installation",
        cost: 1300,
      },
      {
        id: "wall_tile_installation",
        label: "Wall Tile Installation",
        cost: 1500,
      },
      {
        id: "pre_1980_wall_preparation",
        label: "Pre-1980 Wall Preparation",
        cost: 300,
        conditional: "pre1980",
        note: "Only include when the home was built before 1980.",
      },
    ],
  },
};

export default laborBaseRates;