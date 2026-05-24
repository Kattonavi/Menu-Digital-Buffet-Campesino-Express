export const BUSINESS_NAME = "Buffet Campesino Express";
export const MAIN_WHATSAPP = "3123765409";
export const ICE_WHATSAPP = "3222915056";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, quiero hacer un pedido en Buffet Campesino Express.";

type WhatsAppLinkParams = {
  phone?: string;
  message?: string;
};

export function normalizeWhatsAppPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("57")) {
    return digits;
  }

  return `57${digits}`;
}

export function buildOrderMessage(productName: string, businessName = BUSINESS_NAME) {
  return `Hola, quiero pedir ${productName} de ${businessName}.`;
}

export function buildWhatsAppUrl({
  phone = MAIN_WHATSAPP,
  message = DEFAULT_WHATSAPP_MESSAGE,
}: WhatsAppLinkParams = {}) {
  const normalizedPhone = normalizeWhatsAppPhone(phone);
  const text = encodeURIComponent(message);

  return `https://wa.me/${normalizedPhone}?text=${text}`;
}
