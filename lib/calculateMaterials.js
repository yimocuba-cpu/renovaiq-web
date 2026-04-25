// lib/calculateMaterials.js

import materialsRules from "../data/materialsRules";

export function calculateMaterials(bathType, selectedItemIds, tileType, bathroomSize) {
  // 1. Obtener data del tipo de baño
  const bathData = materialsRules[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 2. Validar que haya al menos un item o un tile seleccionado
  const hasItems = selectedItemIds && selectedItemIds.length > 0;
  const hasTile = tileType && tileType.length > 0;

  if (!hasItems && !hasTile) {
    return { error: "Please select at least one material or tile type." };
  }

  // 3. Sumar items seleccionados del checklist
  const itemsTotal = hasItems
    ? bathData.items
        .filter((item) => selectedItemIds.includes(item.id))
        .reduce((sum, item) => sum + item.cost, 0)
    : 0;

  // 4. Obtener costo del tile seleccionado
  let tileTotal = 0;

  if (hasTile && bathData.tiles && bathData.tiles[tileType]) {
    const tileSizes = bathData.tiles[tileType];

    if (bathType === "master_bathroom") {
      // Master necesita size: medium o extra_large
      const size = bathroomSize || "medium";
      tileTotal = tileSizes[size] ?? 0;
    } else {
      // Guest y Shower solo tienen full
      tileTotal = tileSizes["full"] ?? 0;
    }
  }

  // 5. Total materiales = items + tile
  const materialsTotal = itemsTotal + tileTotal;

  return {
    materialsTotal,
  };
}