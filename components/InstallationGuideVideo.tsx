import { PlayCircle } from "lucide-react";

import { SectionEyebrow } from "@/components/SectionEyebrow";

export function InstallationGuideVideo() {
  return (
    <section
      id="guia-instalacao"
      className="relative overflow-hidden bg-[#061426] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(24,167,201,0.24),transparent_32rem),linear-gradient(135deg,rgba(6,20,38,0.96),rgba(7,27,53,0.88))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionEyebrow icon={PlayCircle} variant="dark" className="mb-5">
            Guia de instalação
          </SectionEyebrow>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Veja os passos essenciais antes de preparar a sua piscina.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-cyan-50/78 sm:text-lg">
            Um vídeo prático para compradores que querem compreender medidas,
            nivelamento, tubagem, enchimento e compactação antes da utilização.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.4rem] border border-white/12 bg-white/8 p-2 shadow-[0_36px_100px_-58px_rgba(0,0,0,0.95)]">
          <video
            className="aspect-video w-full rounded-[1rem] bg-slate-950 object-cover"
            controls
            preload="metadata"
            poster="/images/fotos-piscinas/IMG-20260501-WA0052.jpg"
          >
            <source src="/videos/pool-installation-guide.mp4" type="video/mp4" />
            O seu navegador não suporta vídeo HTML5.
          </video>
        </div>
      </div>
    </section>
  );
}

export default InstallationGuideVideo;

