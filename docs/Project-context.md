— Project Context

## Qué es RenovaIQ
RenovaIQ es una calculadora web para estimar costos de remodelación de baños en USA.

El objetivo es:
- dar una estimación rápida
- mostrar mano de obra y materiales por separado
- ser claro, honesto y fácil de usar
- permitir exportar un PDF gratis
- llevar al usuario desde el HOME hasta la calculadora con un botón

## Público objetivo
Homeowners en USA que quieren saber cuánto puede costar remodelar su baño.

## Restricciones del proyecto
- El proyecto debe ser liviano
- Debe funcionar bien en una PC modesta: Celeron + 8 GB RAM
- No usar TypeScript
- No usar backend propio
- No usar base de datos
- No usar Supabase
- No usar Stripe
- No meter dependencias pesadas innecesarias
- Todo debe correr con `npm run dev`

## Stack permitido
- Next.js 14 con App Router
- JavaScript
- React Hooks
- Tailwind CSS
- jsPDF
- jspdf-autotable
- Formspree

## Estructura real del proyecto

### /app
Contiene la aplicación principal.

- `page.js` o `page.tsx`  
  Página principal HOME.

- `layout.js` o `layout.tsx`  
  Estructura global de la aplicación.

- `globals.css`  
  Estilos globales.

- `favicon.ico`  
  Icono del navegador.

- `/page-calculadora`
  Carpeta de la página de la calculadora.

  - `page.js`  
    Página de la calculadora.

- `/fonts`
  Fuentes del proyecto.

### /components
Contiene componentes reutilizables de interfaz.

Aquí van piezas como:
- botones
- wizard
- cards
- resultados
- PDF button
- formulario final
- alertas visuales

### /lib
Contiene la lógica del negocio y del cálculo.

Aquí va:
- cálculo de mano de obra
- cálculo de materiales
- multiplicadores por ZIP
- ajustes por calidad
- estimación de tiempo
- suma total

### /data
Contiene datos, tablas y reglas del negocio.

Aquí van:
- tipos de baño
- tipos de trabajo
- niveles de calidad
- multiplicadores por ZIP
- costos ocultos
- precios base cuando estén definidos
- reglas estáticas

Regla:
- `data` guarda información
- `lib` calcula
- `components` muestra

### /docs
Contiene la documentación del proyecto para Claude.

Aquí van los archivos `.md` con:
- contexto general
- home
- flujo de la calculadora
- lógica de cálculo
- PDF
- formulario
- mapa de estructura

## Navegación del sitio
- HOME → `/`
- CALCULADORA → `/page-calculadora`

El HOME debe tener un botón visible que lleve a `/page-calculadora`.

## Reglas de trabajo
- Todo el código debe ser en JavaScript
- No usar TypeScript bajo ninguna circunstancia
- Si algo está pendiente, no inventar
- Si algo no está definido, preguntar antes de asumir
- No mezclar lógica con UI
- No mezclar datos con cálculo
- No mezclar resultados con formularios

## Distribución de responsabilidades

### HOME
La página principal debe:
- explicar qué hace RenovaIQ
- generar confianza
- mostrar un botón para ir a la calculadora

### PÁGINA DE CALCULADORA
Debe contener:
- wizard
- resultado de estimación
- breakdown de costos
- alerta de costos ocultos
- botón de exportar PDF
- formulario opcional al final

## Estado actual
- Proyecto creado con Next.js
- Estructura base definida
- Migrado a JavaScript
- Faltan componentes, lógica y contenido final
- La calculadora todavía está en construcción

## Regla final
Claude debe usar este archivo como mapa base del proyecto y no inventar estructura, rutas ni funciones que no estén definidas aquí.
