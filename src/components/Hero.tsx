"use client";

import Image from "next/image";
import { ChevronDown, ChefHat, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { mainContact } from "@/data/menu";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { label: "Arroces", href: "#arroces-personales" },
  { label: "Familiares", href: "#familiares" },
  { label: "Pizzas", href: "#pizzas" },
  { label: "Contacto", href: "#contacto" },
];

export function Hero() {
  return (
    <header className="relative min-h-[88svh] overflow-hidden bg-marron text-white">
      <Image
        src="/images/hero-comida-campesina.png"
        alt="Mesa campesina con arroz, papa a la francesa y proteínas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-marron/95 via-marron/80 to-marron/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,201,40,0.24),transparent_25%),linear-gradient(180deg,rgba(24,24,24,0.2),rgba(24,24,24,0.38))]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2 font-black">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amarillo text-marron">
            <ChefHat className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="text-base leading-tight sm:text-lg">
            Buffet Campesino Express
          </span>
        </a>
        <div className="hidden items-center gap-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-amarillo">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-[calc(88svh-72px)] max-w-6xl items-center px-4 pb-16 pt-6"
      >
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-amarillo px-3 py-1 text-sm font-black text-marron">
              <Truck className="h-4 w-4" aria-hidden="true" />
              Domicilios
            </span>
            <span className="inline-flex rounded-full bg-white/[0.15] px-3 py-1 text-sm font-black text-white backdrop-blur">
              Comida casera abundante
            </span>
          </div>

          <h1 className="text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Buffet Campesino Express
          </h1>
          <p className="mt-5 max-w-xl text-xl font-bold leading-8 text-white/90 sm:text-2xl">
            Arroces, pizzas, adicionales y antojos para pedir fácil por WhatsApp.
            Porciones generosas, sabor casero y precios claros.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              phone={mainContact.phone}
              message={mainContact.message}
              label="Pedir ahora"
              className="text-base"
            />
            <a
              href="#arroces-personales"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/70 bg-marron/35 px-4 py-2 text-sm font-extrabold text-white shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-amarillo hover:bg-amarillo hover:text-marron active:translate-y-0 active:bg-[#dca700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amarillo"
            >
              Ver menú
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </section>
    </header>
  );
}
