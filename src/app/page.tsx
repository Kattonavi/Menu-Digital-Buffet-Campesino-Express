import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { menuSections } from "@/data/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative bg-paper-soft">
        <div className="absolute inset-0 opacity-[0.45] mix-blend-multiply [background-image:linear-gradient(90deg,rgba(90,50,24,0.05)_1px,transparent_1px),linear-gradient(rgba(90,50,24,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative">
          {menuSections.map((section, index) => (
            <div
              key={section.id}
              className={index % 2 === 0 ? "bg-transparent" : "bg-white/40"}
            >
              <MenuSection section={section} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
