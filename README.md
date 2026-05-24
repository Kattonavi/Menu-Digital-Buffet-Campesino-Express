# Menú Digital Buffet Campesino Express

Menú digital responsive para Buffet Campesino Express, enfocado en mostrar arroces, familiares, pizzas, adicionales, bebidas, chorizos, paletas, hielo y contacto por WhatsApp.

## Stack Actual

- Next.js `16.2.6` con App Router
- React `19.2.6`
- React DOM `19.2.6`
- TypeScript `6.0.3`
- Tailwind CSS `4.3.0`
- `@tailwindcss/postcss` `4.3.0`
- Lucide React `1.16.0`
- Framer Motion `12.40.0`
- ESLint `9.39.4` con `eslint-config-next` `16.2.6`
- PostCSS `8.5.15`
- shadcn/ui: no está configurado en este proyecto

## Requisitos

- Node.js `>=22.0.0`
- npm `>=10.0.0`

El proyecto incluye `.nvmrc` con Node `22` y `nixpacks.toml` para que Railway use Node.js 22 durante el build.

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy en Railway

El proyecto está preparado para Railway con Nixpacks. La configuración usa Node.js 22, instala con `npm ci`, compila con `npm run build` y arranca con `npm run start`.

Archivos relacionados:

```text
railway.toml
nixpacks.toml
.nvmrc
```

## Estructura del Proyecto

```text
src/app
```

Contiene la página principal, metadata, layout global y estilos base.

```text
src/components
```

Contiene los componentes visuales reutilizables: hero, secciones del menú, cards de productos, botones de WhatsApp, botón flotante y footer.

```text
src/data
```

Contiene los datos locales del menú: categorías, productos, precios, descripciones, badges y teléfonos especiales.

```text
src/lib
```

Contiene utilidades compartidas, incluyendo la generación de enlaces y mensajes prellenados de WhatsApp.

```text
public
```

Contiene assets públicos como la imagen principal del hero.

## Edición del Menú

Productos, precios, categorías, badges y textos comerciales del menú se editan en:

```text
src/data/menu.ts
```

Teléfonos, nombre del negocio y mensajes base de WhatsApp se editan en:

```text
src/lib/whatsapp.ts
```

Los tokens visuales de Tailwind CSS 4 están en:

```text
src/app/globals.css
```

## Notas Importantes

- No usa base de datos.
- No usa login.
- No usa panel administrativo.
- Los datos del menú están definidos en archivos locales.
- Cada botón de WhatsApp genera un mensaje prellenado según el producto o sección.
- La sección de hielo usa una línea de WhatsApp diferente a la línea principal del negocio.
