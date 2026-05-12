"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck, Waves } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

const heroVideoSrc = "/videos/hero-seedance-20260504.mp4";
const heroPosterSrc = "/images/hero-pool-residential.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#031225] text-white"
    >
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center brightness-[0.82] contrast-[1.04] saturate-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPosterSrc}
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,8,23,0.93)_0%,rgba(3,18,37,0.78)_34%,rgba(3,18,37,0.28)_66%,rgba(3,18,37,0.54)_100%)]" />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_28%_66%,rgba(35,199,232,0.26),transparent_34%),radial-gradient(ellipse_at_74%_24%,rgba(255,255,255,0.12),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-20 h-[38dvh] bg-gradient-to-t from-[#031225] via-[#031225]/78 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 -z-20 w-[52vw] bg-[linear-gradient(90deg,rgba(3,18,37,0.76),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(280px,0.44fr)] lg:px-8 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-5xl"
        >
          <h1
            id="hero-title"
            className="max-w-[17ch] text-[clamp(3.1rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-tight text-white"
          >
            {t.hero.titlePrefix}{" "}
            <span className="text-[#6ee7ff]">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleSuffix}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/82 sm:text-xl">
            {t.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#modelos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#23c7e8] px-6 py-3.5 text-base font-bold text-[#031225] shadow-xl shadow-cyan-950/30 transition hover:bg-[#67e3ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06162b]"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          aria-label={t.hero.asideAria}
          className="hidden rounded-lg border border-white/16 bg-[#031225]/36 p-5 shadow-2xl shadow-cyan-950/24 backdrop-blur-md lg:block"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#23c7e8] text-[#031225]">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">{t.hero.asideTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-cyan-50/82">
                {t.hero.asideText}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/14">
            {t.hero.asideItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-white/14 py-4"
              >
                <Waves className="h-4 w-4 flex-none text-[#6ee7ff]" aria-hidden="true" />
                <span className="text-sm font-medium text-cyan-50/82">{item}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <motion.a
        href="#servicos"
        aria-label={t.hero.scrollAria}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-cyan-50/80 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-white/10 backdrop-blur-md">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;
