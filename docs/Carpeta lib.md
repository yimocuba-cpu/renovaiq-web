Carpeta lib

Contiene la lógica de cálculo del sistema.

Archivos definidos:

- calculateLabor.js → cálculo de mano de obra
- calculateMaterials.js → cálculo de materiales (pendiente definición)
- calculateTotal.js → suma de labor + materiales
- zipMultiplier.js → ajuste por ubicación (ZIP)
- qualityAdjustments.js → ajustes por calidad
- timelineEstimate.js → estimación de duración del proyecto

Reglas:

- No inventar precios
- No asumir valores si no están definidos
- Si falta información → preguntar
- Mantener separación estricta:
  labor ≠ materiales ≠ total
