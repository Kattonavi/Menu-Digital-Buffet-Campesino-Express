"use client";

import { Check, Star } from "lucide-react";
import type { Product, ProductOption } from "@/data/menu";
import { BUSINESS_NAME, MAIN_WHATSAPP } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

type ProductCardProps = {
  product: Product;
};

function BadgeList({ badges }: { badges?: string[] }) {
  if (!badges?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center gap-1 rounded-full bg-verde/10 px-3 py-1 text-xs font-extrabold text-verde"
        >
          <Star className="h-3.5 w-3.5 fill-verde/20" aria-hidden="true" />
          {badge}
        </span>
      ))}
    </div>
  );
}

function DetailList({ details }: { details?: string[] }) {
  if (!details?.length) {
    return null;
  }

  return (
    <ul className="space-y-2 text-sm leading-6 text-tinta/80">
      {details.map((detail) => (
        <li key={detail} className="flex gap-2">
          <Check className="mt-1 h-4 w-4 shrink-0 text-verde" aria-hidden="true" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
}

function Price({ price }: { price?: string }) {
  if (!price) {
    return null;
  }

  return (
    <p className="inline-flex w-fit rounded-lg bg-amarillo px-3 py-1 text-2xl font-black text-marron shadow-sm">
      {price}
    </p>
  );
}

function OptionRow({
  option,
  product,
}: {
  option: ProductOption;
  product: Product;
}) {
  const orderLabel = option.orderLabel ?? option.name;
  const phone = option.phone ?? product.phone ?? MAIN_WHATSAPP;
  const businessName = option.businessName ?? product.businessName ?? BUSINESS_NAME;

  return (
    <div className="grid gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-base font-black text-marron">{option.name}</h4>
          {option.price ? (
            <span className="rounded-md bg-amarillo px-2.5 py-1 text-sm font-black text-marron">
              {option.price}
            </span>
          ) : null}
        </div>
        <BadgeList badges={option.badges} />
        <DetailList details={option.details} />
      </div>
      <WhatsAppButton
        productName={orderLabel}
        phone={phone}
        businessName={businessName}
        label="Pedir"
        variant="compact"
        className="w-full sm:w-auto"
      />
    </div>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const phone = product.phone ?? MAIN_WHATSAPP;
  const businessName = product.businessName ?? BUSINESS_NAME;

  return (
    <article className="flex h-full flex-col rounded-lg border-2 border-marron/10 bg-white/95 p-4 shadow-comida sm:p-5">
      <div className="space-y-3">
        <BadgeList badges={product.badges} />
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-marron">{product.name}</h3>
          {product.subtitle ? (
            <p className="font-bold text-rojo">{product.subtitle}</p>
          ) : null}
          {product.description ? (
            <p className="text-sm leading-6 text-tinta/75">{product.description}</p>
          ) : null}
        </div>
        <Price price={product.price} />
        <DetailList details={product.details} />
      </div>

      {product.options?.length ? (
        <div className="mt-4 divide-y divide-marron/10 border-y border-marron/10">
          {product.options.map((option) => (
            <OptionRow key={option.orderLabel ?? option.name} option={option} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-auto pt-5">
          <WhatsAppButton
            productName={product.name}
            phone={phone}
            businessName={businessName}
            label="Pedir este producto"
            variant="primary"
            className="w-full"
          />
        </div>
      )}
    </article>
  );
}
