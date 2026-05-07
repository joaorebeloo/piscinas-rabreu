"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeftRight, SlidersHorizontal } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { SectionEyebrow } from "@/components/SectionEyebrow";

function clamp(value: number) {
  return Math.min(96, Math.max(4, value));
}

export function BeforeAfter() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(Math.round(nextPosition)));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || hasInteracted || isDragging) {
      return;
    }

    const duration = 9000;
    const start = performance.now();
    let frameId = 0;

    const animateSlider = (timestamp: number) => {
      const progress = ((timestamp - start) % duration) / duration;
      const easedProgress = (1 - Math.cos(progress * Math.PI * 2)) / 2;
      setPosition(Math.round(4 + easedProgress * 92));
      frameId = window.requestAnimationFrame(animateSlider);
    };

    frameId = window.requestAnimationFrame(animateSlider);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasInteracted, isDragging, prefersReducedMotion]);

  const updateFromKeyboard = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const smallStep = 2;
      const largeStep = 10;

      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        event.preventDefault();
        setPosition((current) => clamp(current - smallStep));
      }

      if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        event.preventDefault();
        setPosition((current) => clamp(current + smallStep));
      }

      if (event.key === "PageDown") {
        event.preventDefault();
        setPosition((current) => clamp(current - largeStep));
      }

      if (event.key === "PageUp") {
        event.preventDefault();
        setPosition((current) => clamp(current + largeStep));
      }

      if (event.key === "Home") {
        event.preventDefault();
        setPosition(4);
      }

      if (event.key === "End") {
        event.preventDefault();
        setPosition(96);
      }
    },
    [],
  );

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      updateFromClientX(event.clientX);
    };

    const onPointerUp = () => setIsDragging(false);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp, { once: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <section
      id="antes-depois"
      aria-labelledby="before-after-title"
      className="bg-white px-4 py-16 text-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-xl"
        >
          <SectionEyebrow icon={SlidersHorizontal}>
            {t.beforeAfter.eyebrow}
          </SectionEyebrow>
          <h2
            id="before-after-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
          >
            {t.beforeAfter.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {t.beforeAfter.intro}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700">
            {t.beforeAfter.steps.map((step, index) => (
              <div key={step} className="border-t border-slate-200 pt-4">
                <span className="block text-2xl font-semibold tracking-tight text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="relative"
        >
          <div
            ref={frameRef}
            className="relative aspect-[4/3] touch-none overflow-hidden rounded-[8px] bg-slate-100 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]"
            onPointerDown={(event) => {
              if ((event.target as HTMLElement).closest("input")) {
                return;
              }

              setHasInteracted(true);
              updateFromClientX(event.clientX);
              setIsDragging(true);
            }}
          >
            <Image
              src="/images/after-real-pool.png"
              alt={t.beforeAfter.afterAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              aria-hidden="true"
            >
              <Image
                src="/images/before-real-pool.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-lg font-semibold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-slate-950/75 px-4 py-3 text-white backdrop-blur">
                {t.beforeAfter.before}
              </span>
              <span className="rounded-full bg-white/85 px-4 py-3 text-slate-950 backdrop-blur">
                {t.beforeAfter.after}
              </span>
            </div>

            <div
              className="absolute inset-y-0 flex w-12 -translate-x-1/2 cursor-ew-resize touch-none items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/70"
              style={{ left: `${position}%` }}
              role="slider"
              tabIndex={0}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={position}
              aria-valuetext={t.beforeAfter.sliderValue(position)}
              aria-label={t.beforeAfter.sliderAria}
              aria-describedby="pool-comparison-help"
              onKeyDown={updateFromKeyboard}
              onPointerDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setHasInteracted(true);
                setIsDragging(true);
                updateFromClientX(event.clientX);
              }}
            >
              <div className="pointer-events-none h-full w-px bg-white/85 shadow-[0_0_0_1px_rgba(15,23,42,0.12)]" />
              <div
                className={`absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-cyan-900 shadow-lg transition-transform duration-300 ease-[var(--ease-premium)] ${
                  isDragging ? "scale-110" : "hover:scale-105"
                }`}
              >
                <ArrowLeftRight size={21} strokeWidth={1.8} />
              </div>
            </div>

            <p id="pool-comparison-help" className="sr-only">
              {t.beforeAfter.sliderHelp}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BeforeAfter;
