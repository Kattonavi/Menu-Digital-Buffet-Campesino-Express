import { MessageCircle } from "lucide-react";
import {
  BUSINESS_NAME,
  MAIN_WHATSAPP,
  buildOrderMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  productName?: string;
  phone?: string;
  businessName?: string;
  message?: string;
  label?: string;
  variant?: "primary" | "compact" | "outline" | "gold";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-rojo text-white shadow-cta hover:-translate-y-0.5 hover:bg-[#a91f1f] hover:text-white active:translate-y-0 active:bg-[#941b1b] focus-visible:outline-amarillo",
  compact:
    "bg-amarillo text-marron shadow-xs hover:-translate-y-0.5 hover:bg-[#f1b90c] hover:text-marron active:translate-y-0 active:bg-[#dca700] focus-visible:outline-rojo",
  outline:
    "border-2 border-rojo bg-crema text-rojo hover:-translate-y-0.5 hover:bg-rojo hover:text-white active:translate-y-0 active:bg-[#941b1b] active:text-white focus-visible:outline-amarillo",
  gold:
    "border-2 border-amarillo bg-amarillo text-marron shadow-cta hover:-translate-y-0.5 hover:border-[#f1b90c] hover:bg-[#f1b90c] hover:text-marron active:translate-y-0 active:border-[#dca700] active:bg-[#dca700] focus-visible:outline-white",
};

export function WhatsAppButton({
  productName,
  phone = MAIN_WHATSAPP,
  businessName = BUSINESS_NAME,
  message,
  label = "Pedir por WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const finalMessage =
    message ?? (productName ? buildOrderMessage(productName, businessName) : undefined);

  return (
    <a
      href={buildWhatsAppUrl({ phone, message: finalMessage })}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-center text-sm font-extrabold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      ].join(" ")}
      aria-label={productName ? `Pedir ${productName} por WhatsApp` : label}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
