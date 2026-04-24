// lib/calculateLabor.js

import laborBaseRates from "../data/laborBaseRates";
import { getZipMultiplier } from "./zipMultiplier";

const HIGHER_RANGE_BUFFER = 2700;

export function calculateLabor(bathType, selectedTaskIds, zipCode) {
  // 1. Obtener multiplicador ZIP
  const multiplier = getZipMultiplier(zipCode);

  // 2. Validar selección
  if (!selectedTaskIds || selectedTaskIds.length === 0) {
    return { error: "Please select at least one task." };
  }

  // 3. Obtener data del baño
  const bathData = laborBaseRates[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 4. Sumar costos de tareas seleccionadas
  const baseTotal = bathData.tasks
    .filter((task) => selectedTaskIds.includes(task.id))
    .reduce((sum, task) => sum + task.cost, 0);

  if (baseTotal === 0) {
    return { error: "Please select at least one task." };
  }

  // 5. Aplicar ZIP al resultado base
  const laborLow = Math.round(baseTotal * multiplier);

  // 6. El rango alto = bajo + 2700
  const laborHigh = Math.round(laborLow + HIGHER_RANGE_BUFFER);

  return {
    laborLow,
    laborHigh,
    multiplierApplied: multiplier,
    zipFirstDigit: zipCode?.[0] || "3",
  };
}