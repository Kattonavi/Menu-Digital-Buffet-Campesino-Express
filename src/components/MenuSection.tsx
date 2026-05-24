"use client";

import {
  CupSoda,
  Flame,
  Pizza,
  Plus,
  Snowflake,
  Users,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import type { MenuSection as MenuSectionType, SectionIcon } from "@/data/menu";
import { ProductCard } from "./ProductCard";

type MenuSectionProps = {
  section: MenuSectionType;
};

const iconMap: Record<SectionIcon, typeof Utensils> = {
  rice: Utensils,
  family: Users,
  pizza: Pizza,
  extras: Plus,
  drinks: CupSoda,
  sausage: Flame,
  popsicles: Snowflake,
  ice: Snowflake,
};

export function MenuSection({ section }: MenuSectionProps) {
  const Icon = iconMap[section.icon];

  return (
    <motion.section
      id={section.id}
      className="scroll-mt-24 py-10 sm:py-14"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-start gap-3 sm:mb-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rojo text-white shadow-cta">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-black uppercase text-verde">{section.kicker}</p>
            <h2 className="mt-1 text-3xl font-black text-marron sm:text-4xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mt-2 max-w-2xl text-base leading-7 text-tinta/75">
                {section.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {section.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
