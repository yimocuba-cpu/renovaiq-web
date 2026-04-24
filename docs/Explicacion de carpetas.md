RenovaIQ — Explicación de carpetas y lógica del proyecto

Este archivo explica, en lenguaje simple, para qué sirve cada carpeta del proyecto y qué debe ir dentro de cada una.

## 1) app
La carpeta `app` contiene las páginas principales del sitio.

### Qué va aquí
- `page.js` → página principal (HOME)
- `layout.js` → estructura general de toda la web
- `globals.css` → estilos globales
- `favicon.ico` → icono del navegador
- `page-calculadora/page.js` → página de la calculadora

### Lógica de esta carpeta
Todo lo que sea una página visible para el usuario vive aquí.
La carpeta `app` no se usa para guardar reglas ni lógica de precios.
Su función es mostrar la web y conectar una página con otra.

## 2) components
La carpeta `components` contiene piezas reutilizables de la interfaz.

### Qué va aquí
- botones
- tarjetas
- wizard o pasos del formulario
- cajas de resultados
- alertas visuales
- botón de PDF
- formulario final

### Lógica de esta carpeta
Aquí no va la lógica fuerte de negocio.
Aquí solo van piezas visuales o componentes que se repiten en varias páginas.

Ejemplo:
- un botón puede usarse en el HOME y en la calculadora
- una tarjeta de resultado puede mostrarse varias veces

## 3) lib
La carpeta `lib` contiene la lógica del proyecto.

### Qué va aquí
- cálculo de mano de obra
- cálculo de materiales
- multiplicador por ZIP
- ajuste por calidad
- cálculo del total
- estimación de tiempo

### Lógica de esta carpeta
Esta carpeta es el cerebro matemático del proyecto.
Aquí no se diseña nada visual.
Aquí se calculan los valores.

Regla:
- `lib` calcula
- `components` muestra
- `data` guarda la información base

## 4) data
La carpeta `data` contiene los datos y reglas base del negocio.

### Qué va aquí
- tipos de baño
- tipos de trabajo
- niveles de calidad
- zonas ZIP
- costos ocultos
- precios base cuando ya estén definidos
- tablas y configuraciones fijas

### Lógica de esta carpeta
Aquí solo van datos.
No se ponen cálculos complejos.
No se ponen componentes visuales.

Ejemplo:
- `data/qualityLevels.js` puede guardar:
  - Basic
  - Mid-range
  - Premium
  - Luxury

- `data/zipZones.js` puede guardar los multiplicadores por zona

## Cómo se relacionan las carpetas
La lógica correcta es esta:

1. `app` muestra la página
2. `components` construye la interfaz
3. `data` guarda la información base
4. `lib` usa esos datos para calcular

Ejemplo simple:
- el usuario entra al HOME en `app/page.js`
- pulsa un botón
- va a `app/page-calculadora/page.js`
- la calculadora usa `components` para verse bien
- usa `data` para tomar reglas
- usa `lib` para calcular el precio

## Regla principal del proyecto
No mezclar responsabilidades.

- `app` = páginas
- `components` = interfaz
- `data` = datos
- `lib` = cálculos

Si se mezcla todo, el proyecto se vuelve difícil de mantener.
