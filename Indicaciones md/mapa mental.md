# RenovaIQ — Contexto del Proyecto

## Stack (NO CAMBIAR)
- Next.js 14 (App Router)
- JavaScript (NO TypeScript)
- Tailwind CSS
- jsPDF
- Formspree
- Sin backend
- Sin base de datos

---

## Estructura real del proyecto

/app
  page.js → HOME (página principal)
  layout.js → estructura global (html base)
  globals.css → estilos globales
  favicon.ico → icono del navegador

  /page-calculadora
    page.js → página de la calculadora

/components → componentes reutilizables (botones, wizard, cards)
/lib → lógica de cálculo (mano de obra, reglas, etc)
/data → tablas de verdad, constantes, reglas del negocio
/docs → archivos .md del proyecto (contexto, flujos, etc)

---

## Reglas clave (OBLIGATORIAS)

- Todo el código debe ser en JavaScript
- No usar TypeScript bajo ninguna circunstancia
- No crear backend
- No usar base de datos
- Todo debe funcionar con `npm run dev`
- Optimizado para PC de bajos recursos (Celeron, 8GB RAM)

---

## Cómo funciona la navegación

- HOME → /app/page.js
- CALCULADORA → /app/page-calculadora/page.js

Desde el HOME debe existir un botón que lleve a:
"/page-calculadora"

---

## Responsabilidad de cada parte

- page.js (root) → landing (explica + botón a calculadora)
- page-calculadora/page.js → contiene TODO el sistema de cálculo
- layout.js → estructura global (NO modificar sin necesidad)
- globals.css → estilos globales

- components → UI reutilizable
- lib → cálculos y lógica
- data → reglas del negocio (sin lógica)
- docs → contexto para Claude

---

## Estado actual

- Proyecto base creado con Next.js
- Estructura definida
- Sin lógica de cálculo implementada
- Sin UI final implementada

---

## Nota crítica

Si falta información o algo está marcado como pendiente:
NO inventar.
Preguntar primero.

## Carpeta components

Contiene componentes reutilizables de UI.

Archivos definidos:

- Button.js → botones reutilizables
- Wizard.js → lógica de pasos del formulario
- StepCard.js → UI de cada paso del wizard
- ResultCard.js → muestra resultados principales
- CostBreakdown.js → desglose de costos
- HiddenCosts.js → alertas de costos ocultos
- PDFButton.js → exportación a PDF
- CTAForm.js → formulario opcional final

Regla:
Los componentes NO contienen lógica global del negocio.
Solo UI y lógica local.