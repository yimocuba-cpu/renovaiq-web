// lib/calculateMaterials.js

import materialsRules from "../data/materialsRules";

export function calculateMaterials(bathType, selectedItemIds) {
  // 1. Obtener data del baño
  const bathData = materialsRules[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 2. Validar selección
  if (!selectedItemIds || selectedItemIds.length === 0) {
    return { error: "Please select at least one material." };
  }

  // 3. Sumar materiales seleccionados
  const materialsTotal = bathData.items
    .filter((item) => selectedItemIds.includes(item.id))
    .reduce((sum, item) => sum + item.cost, 0);

  return {
    materialsTotal,
  };
}