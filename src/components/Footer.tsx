import { MessageCircle, Phone, Truck } from "lucide-react";
import { iceContact, mainContact } from "@/data/menu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer id="contacto" className="bg-marron text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase text-amarillo">Contacto</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Pide tu menú por WhatsApp
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
            Buffet Campesino Express atiende pedidos por WhatsApp. Para hielo,
            usa la línea de Expreso Polar.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              phone={mainContact.phone}
              message={mainContact.message}
              label="WhatsApp principal"
            />
            <WhatsAppButton
              phone={iceContact.phone}
              productName="Hielo polar 1.3 kg"
              businessName={iceContact.businessName}
              label="Pedir hielo"
              variant="outline"
              className="border-amarillo text-amarillo hover:bg-amarillo hover:text-marron"
            />
          </div>
        </div>

        <div className="rounded-lg border border-white/[0.15] bg-white/[0.08] p-5">
          <ul className="space-y-4 text-sm font-bold text-white/80">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amarillo" aria-hidden="true" />
              <a
                href={buildWhatsAppUrl({
                  phone: mainContact.phone,
                  message: mainContact.message,
                })}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amarillo"
              >
                Buffet Campesino Express: {mainContact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-amarillo" aria-hidden="true" />
              <a
                href={buildWhatsAppUrl({
                  phone: iceContact.phone,
                  message: "Hola, quiero pedir Hielo polar 1.3 kg de Expreso Polar.",
                })}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amarillo"
              >
                Expreso Polar: {iceContact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-amarillo" aria-hidden="true" />
              <span>Domicilio gratuito en hielo comprando 3 paquetes o más</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
