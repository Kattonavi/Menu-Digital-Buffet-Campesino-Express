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
  variant?: "primary" | "compact" | "outline";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-rojo text-white shadow-cta hover:bg-[#a91f1f] focus-visible:outline-rojo",
  compact:
    "bg-amarillo text-marron shadow-xs hover:bg-[#f1b90c] focus-visible:outline-amarillo",
  outline:
    "border-2 border-rojo bg-white text-rojo hover:bg-rojo hover:text-white focus-visible:outline-rojo",
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
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-center text-sm font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
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
