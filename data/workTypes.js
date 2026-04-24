import laborBaseRates from "./LaborBaseRates";

const workTypes = Object.fromEntries(
  Object.entries(laborBaseRates).map(([bathTypeId, bathType]) => [
    bathTypeId,
    bathType.tasks.map((task) => ({
      id: task.id,
      label: task.label,
      cost: task.cost,
      conditional: task.conditional || null,
      note: task.note || null,
    })),
  ])
);

export default workTypes;