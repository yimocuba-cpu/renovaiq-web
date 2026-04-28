// lib/calculateMaterials.js

import materialsRules from "../data/materialsRules";

export function calculateMaterials(bathType, selectedItemIds, tileType, bathroomSize) {
  // 1. Obtener data del baño
  const bathData = materialsRules[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 2. Validar checklist
  if (!selectedItemIds || selectedItemIds.length === 0) {
    return { error: "Please select at least one item." };
  }

  // 3. Validar tile type
  if (!tileType) {
    return { error: "Please select a tile type." };
  }

  // 4. Sumar checklist
  const checklistTotal = bathData.items
    .filter((item) => selectedItemIds.includes(item.id))
    .reduce((sum, item) => sum + item.cost, 0);

  // 5. Calcular costo de azulejos según tipo de baño
  let tileTotal = 0;

  if (bathType === "master_bathroom" || bathType === "guest_bathroom") {
    // Selector1 × Selector2
    if (!bathroomSize) {
      return { error: "Please select a bathroom size." };
    }
    const tileRate = bathData.tileTypes.find((t) => t.id === tileType);
    const sizeOption = bathData.bathroomSizes.find((s) => s.id === bathroomSize);

    if (!tileRate || !sizeOption) {
      return { error: "Invalid tile type or bathroom size." };
    }

    tileTotal = tileRate.pricePerSqft * sizeOption.sqft;

  } else if (bathType === "shower_remodel") {
    // Selector1 precio fijo, no hay Selector2
    const tileRate = bathData.tileTypes.find((t) => t.id === tileType);

    if (!tileRate) {
      return { error: "Invalid tile type." };
    }

    tileTotal = tileRate.cost;
  }

  // 6. Total final
  const materialsTotal = checklistTotal + tileTotal;

  return {
    checklistTotal,
    tileTotal,
    materialsTotal,
  };
}