import Image from "next/image";
import { Container } from "@/components/Container";
import { LogoIcon } from "@/components/LogoIcon";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="border-b border-[color-mix(in oklch, var(--muted), black 5%)]">
        <Container className="h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="text-base font-medium text-[var(--primary)]">Artivision</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--gray-600)] ml-auto">
            <a href="#gallery" className="hover:text-[var(--primary)]">Gallery</a>
            <a href="#mission" className="hover:text-[var(--primary)]">Our Mission</a>
            <a href="#contact" className="hover:text-[var(--primary)]">Contact</a>
          </nav>
          
        </Container>
      </header>

      <main>
        <section className="py-12">
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium leading-[1.5] text-[var(--gray-900)]">Build remarkable visuals with Artivision</h1>
              <p className="text-base leading-[1.5] text-[var(--gray-600)]">
                Placeholder subheading describing value proposition. Copy will be replaced once final content
                is available.
              </p>
              {/* No hero buttons per request */}
            </div>
            {/* Remove hero image block per request */}
          </Container>
        </section>

        <section id="gallery" className="py-12 bg-[var(--muted)]/60">
          <Container>
            <h2 className="text-2xl font-medium leading-[1.5] text-[var(--gray-900)] mb-6">Gallery</h2>
            <Gallery />
          </Container>
        </section>

        <section id="mission" className="py-12">
          <Container>
            <h2 className="text-2xl font-medium leading-[1.5] text-[var(--gray-900)] mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-base leading-[1.5] text-[var(--gray-700)]">
                  Placeholder mission statement text. Explain the purpose, values, and the impact you aim to create.
                </p>
                <p className="text-base leading-[1.5] text-[var(--gray-700)]">
                  Add more context about programs, community, or goals here. This copy can be replaced later.
                </p>
              </div>
              <div className="placeholder-block aspect-[16/10] w-full" />
            </div>
          </Container>
        </section>

        <section id="contact" className="py-12 bg-[var(--muted)]/60">
          <Container className="space-y-6">
            <h2 className="text-2xl font-medium leading-[1.5] text-[var(--gray-900)]">Contact</h2>
            <div className="text-sm text-[var(--gray-700)]">
              <p className="mb-2">Email: contact@example.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Address: 123 Artivision Way, Creative City, CA</p>
            </div>
          </Container>
        </section>
      </main>

      <footer className="py-8 border-t border-[color-mix(in oklch, var(--muted), black 5%)]">
        <Container className="flex items-center justify-between">
          <span className="text-sm text-[var(--gray-600)]">© {new Date().getFullYear()} Artivision</span>
          <div className="flex items-center gap-4 text-sm text-[var(--gray-600)]">
            <a href="#" className="hover:text-[var(--primary)]">Privacy</a>
            <a href="#" className="hover:text-[var(--primary)]">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
