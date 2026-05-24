# Buffet Campesino Express - Menú digital

Landing page responsive de una sola página para mostrar el menú de Buffet Campesino Express y recibir pedidos por WhatsApp.

## Stack

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Preparado para deploy en Railway
- Sin base de datos, sin autenticación y sin panel administrativo

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Editar menú

Los productos, precios, categorías, teléfonos y textos de WhatsApp están en:

```text
src/data/menu.ts
src/lib/whatsapp.ts
```

La imagen principal del hero está en:

```text
public/images/hero-comida-campesina.png
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy en Railway

El proyecto incluye `railway.toml` con:

- Build: `npm run build`
- Start: `npm run start`
- Healthcheck: `/`

En Railway crea un nuevo servicio desde el repositorio, confirma que el entorno use Node.js y despliega. Railway inyecta el puerto automáticamente para `next start`.
