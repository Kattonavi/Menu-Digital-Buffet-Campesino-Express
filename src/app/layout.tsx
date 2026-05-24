import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buffet Campesino Express | Menú digital",
  description:
    "Menú digital responsive de Buffet Campesino Express: arroces personales, familiares, pizzas, adicionales, bebidas, chorizos, paletas y hielo con pedidos por WhatsApp.",
  keywords: [
    "Buffet Campesino Express",
    "menú digital",
    "arroces",
    "domicilios",
    "comida casera",
    "pizzas",
  ],
  openGraph: {
    title: "Buffet Campesino Express",
    description:
      "Comida casera abundante, precios claros y pedidos rápidos por WhatsApp.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C62828",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
