UI_COMPONENTS_MAP.md — RenovaIQ

## Propósito de este archivo
Este archivo centraliza la lógica de interfaz del proyecto RenovaIQ.

Su función es dejar claro:
- qué hace cada componente de la carpeta `components`
- cómo se relacionan entre sí
- qué componente usa cada parte de la aplicación
- qué se puede reutilizar y qué no

Este archivo existe para evitar confusiones entre:
- páginas
- componentes visuales
- lógica del negocio
- datos estáticos

---

## Regla general
- `app/` contiene páginas
- `components/` contiene piezas reutilizables de UI
- `lib/` contiene lógica y cálculos
- `data/` contiene datos y reglas
- `docs/` contiene documentación para Claude y el flujo del proyecto

---

## Componentes definidos en `components/`

### 1) Button.js
Componente base para botones reutilizables.

### Función
- Mostrar botones consistentes en todo el proyecto
- Evitar repetir estilos y lógica de botones
- Servir para CTA, navegación y acciones simples

### Uso esperado
- Botón principal del HOME
- Botones del wizard
- Botón de PDF
- Botones secundarios

---

### 2) Wizard.js
Componente principal del flujo de la calculadora.

### Función
- Controlar los pasos de la calculadora
- Guiar al usuario paso por paso
- Reunir la información de entrada
- Coordinar la interacción con los demás componentes

### Uso esperado
- Dentro de la página de la calculadora
- Como núcleo visual del proceso de estimación

---

### 3) StepCard.js
Componente visual para representar cada paso del wizard.

### Función
- Mostrar un paso de forma clara y ordenada
- Presentar pregunta, opciones o selección
- Mantener el diseño consistente entre pasos

### Uso esperado
- Paso de tipo de baño
- Paso de tipo de trabajo
- Paso de calidad
- Cualquier paso visual repetible

---

### 4) ResultCard.js
Componente para mostrar resultados principales.

### Función
- Mostrar el resultado estimado de forma clara
- Separar labor, materiales y total si aplica
- Dar una lectura rápida del cálculo al usuario

### Uso esperado
- Bloque principal de resultados en la calculadora
- Resumen visual final

---

### 5) CostBreakdown.js
Componente para el desglose de costos.

### Función
- Mostrar el detalle de la estimación
- Separar componentes del precio
- Ayudar a que el usuario entienda de dónde sale el total

### Uso esperado
- Detalle de labor
- Detalle de materiales
- Desglose porcentual
- Apoyo visual del resultado

---

### 6) HiddenCosts.js
Componente para mostrar alertas de costos ocultos.

### Función
- Presentar costos que el usuario podría no considerar
- Avisar sobre riesgos o gastos adicionales
- Mostrar información de alerta sin mezclarla con el total principal

### Uso esperado
- Sección visible después del resultado
- Alertas de permisos, demolición, moho, electricidad, etc.

---

### 7) PDFButton.js
Componente para exportar el resultado a PDF.

### Función
- Disparar la generación del PDF
- Permitir descarga gratis
- Conectar con la lógica de exportación sin mezclarla con la UI general

### Uso esperado
- Botón visible en la pantalla de resultados

---

### 8) CTAForm.js
Componente del formulario opcional final.

### Función
- Capturar datos del usuario después de mostrar el resultado
- Servir como cierre de conversión
- Conectar con Formspree

### Uso esperado
- Al final de la experiencia
- Nunca antes del resultado

---

## Relación entre componentes

### HOME
La página principal debe usar principalmente:
- `Button.js`

### PÁGINA DE CALCULADORA
La página de la calculadora debe usar:
- `Wizard.js`
- `StepCard.js`
- `ResultCard.js`
- `CostBreakdown.js`
- `HiddenCosts.js`
- `PDFButton.js`
- `CTAForm.js`
- `Button.js` como pieza base

---

## Jerarquía visual recomendada
1. Botón principal en HOME
2. Wizard como núcleo de la calculadora
3. ResultCard como salida principal
4. CostBreakdown como apoyo
5. HiddenCosts como alerta complementaria
6. PDFButton como acción secundaria útil
7. CTAForm al final

---

## Reglas de uso
- No duplicar UI dentro de páginas si ya existe un componente reusable
- No meter lógica de cálculo dentro de componentes visuales simples
- No meter datos fijos dentro de los componentes si pertenecen a `data`
- No mezclar presentación con reglas del negocio
- Mantener componentes pequeños y fáciles de mantener

---

## Reglas de separación
- Si el componente muestra algo, va en `components`
- Si el componente calcula algo, eso va en `lib`
- Si el componente necesita datos fijos, eso va en `data`
- Si el componente pertenece a una página, se conecta desde `app`

---

## Estado actual
Componentes definidos:
- Button.js
- Wizard.js
- StepCard.js
- ResultCard.js
- CostBreakdown.js
- HiddenCosts.js
- PDFButton.js
- CTAForm.js

---

## Pendientes
- Definir el contenido exacto de cada componente
- Definir qué componentes se usan primero al construir la UI
- Definir el orden real de implementación
- Confirmar si algún componente necesita dividirse en subcomponentes más pequeños

---

## Nota final
Este archivo sirve como mapa central de la interfaz del proyecto.

Si hay duda entre página, componente o lógica:
- página → `app`
- UI reusable → `components`
- cálculo → `lib`
- datos → `data`
