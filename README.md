# Buffet Campesino Express - Menu digital

Landing page responsive de una sola pagina para mostrar el menu de Buffet Campesino Express y recibir pedidos por WhatsApp.

## Stack actualizado

- Next.js 16 con App Router
- React 19 y React DOM 19
- TypeScript 6
- Tailwind CSS 4 con `@tailwindcss/postcss`
- Lucide React 1
- Framer Motion 12
- ESLint 9 con `eslint-config-next`
- PostCSS 8
- Railway como plataforma pensada para deploy
- Sin base de datos, sin autenticacion y sin panel administrativo

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build

```bash
npm run build
```

Para correr el build de produccion localmente:

```bash
npm run start
```

## Lint

```bash
npm run lint
```

## Editar menu

Los productos, precios, categorias, telefonos y textos de WhatsApp estan en:

```text
src/data/menu.ts
src/lib/whatsapp.ts
```

Los tokens visuales de Tailwind CSS 4 estan en:

```text
src/app/globals.css
```

La imagen principal del hero esta en:

```text
public/images/hero-comida-campesina.png
```

## Deploy en Railway

El proyecto incluye `railway.toml` con:

- Build: `npm run build`
- Start: `npm run start`
- Healthcheck: `/`

En Railway crea un nuevo servicio desde el repositorio, confirma que use Node.js y despliega. Railway inyecta el puerto automaticamente para `next start`.
