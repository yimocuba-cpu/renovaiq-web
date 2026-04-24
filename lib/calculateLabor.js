// lib/calculateLabor.js

import laborBaseRates from "../data/laborBaseRates";
import { getZipMultiplier } from "./zipMultiplier";

const RANGE_BUFFER = 2700;

export function calculateLabor(bathType, selectedTaskIds, zipCode) {
  // 1. Validar y obtener multiplicador ZIP
  const multiplier = getZipMultiplier(zipCode);
  if (multiplier === null) {
    return { error: "Please enter a valid 5-digit ZIP code." };
  }

  // 2. Obtener tareas del tipo de baño seleccionado
  const bathData = laborBaseRates[bathType];
  if (!bathData) {
    return { error: "Invalid bathroom type." };
  }

  // 3. Filtrar solo las tareas seleccionadas y sumar costos
  const baseTotal = bathData.tasks
    .filter((task) => selectedTaskIds.includes(task.id))
    .reduce((sum, task) => sum + task.cost, 0);

  if (baseTotal === 0) {
    return { error: "Please select at least one task." };
  }

  // 4. Aplicar multiplicador ZIP a ambos valores del rango
  const laborLow = Math.round(baseTotal * multiplier);
  const laborHigh = Math.round((baseTotal + RANGE_BUFFER) * multiplier);

  return {
    laborLow,
    laborHigh,
    multiplierApplied: multiplier,
    zipFirstDigit: zipCode.charAt(0),
  };
}