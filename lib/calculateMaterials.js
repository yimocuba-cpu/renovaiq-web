// lib/calculateMaterials.js

import materialsRules from "../data/materialsRules";

export function calculateMaterials(bathType, selectedItemIds) {
  // 1. Obtener items del tipo de baño seleccionado
  const bathData = materialsRules[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 2. Filtrar solo los items seleccionados y sumar costos
  const materialsTotal = bathData.items
    .filter((item) => selectedItemIds.includes(item.id))
    .reduce((sum, item) => sum + item.cost, 0);

  if (materialsTotal === 0) {
    return { error: "Please select at least one material." };
  }

  return {
    materialsTotal,
  };
}