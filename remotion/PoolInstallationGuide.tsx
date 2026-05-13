import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const steps = [
  {
    kicker: "01",
    title: "Prepare o espaço",
    body: "O buraco da piscina deve ter mais 10 cm em cada lado do que as dimensões da piscina.",
    image: "images/fotos-piscinas/IMG-20260501-WA0029.jpg",
  },
  {
    kicker: "02",
    title: "Casa das máquinas",
    body: "Faça o buraco da casa das máquinas a cerca de 2 a 10 metros da piscina.",
    image: "images/fotos-piscinas/IMG-20260501-WA0053.jpg",
  },
  {
    kicker: "03",
    title: "Base nivelada",
    body: "Faça uma laje em cimento com cerca de 10 cm. Depois, aplique 5 a 7 cm de areia e nivele perfeitamente.",
    image: "images/antes-depois/3.jpeg",
  },
  {
    kicker: "04",
    title: "Coloque a piscina",
    body: "Use um nível de bolha ou nível de água nos quatro cantos antes de avançar.",
    image: "images/fotos-piscinas/IMG-20260501-WA0043.jpg",
  },
  {
    kicker: "05",
    title: "Verifique tolerâncias",
    body: "Diferença máxima: 1 cm em piscinas até 6 m e 2,5 cm em piscinas de 9 m.",
    image: "images/antes-depois/6.jpeg",
  },
  {
    kicker: "06",
    title: "Tubagem de 50 mm",
    body: "Após confirmar o nivelamento, prossiga com a instalação dos tubos de 50 mm.",
    image: "images/fotos-piscinas/IMG-20260501-WA0053.jpg",
  },
  {
    kicker: "07",
    title: "Encha e compacte",
    body: "Encha a piscina com água e adicione pó de pedra em incrementos de 30 a 50 cm.",
    image: "images/antes-depois/7.jpeg",
  },
  {
    kicker: "08",
    title: "Alinhe as paredes",
    body: "Repita o processo até a piscina estar cheia, garantindo que as paredes ficam alinhadas.",
    image: "images/antes-depois/8.jpeg",
  },
  {
    kicker: "09",
    title: "Finalização",
    body: "Aguarde 1 dia antes de usar. Instale as pedras de bordadura entre 3 semanas e 1 mês.",
    image: "images/fotos-piscinas/IMG-20260501-WA0052.jpg",
  },
] as const;

const fps = 30;
const sceneDuration = 7 * fps;
export const poolInstallationGuideDuration = steps.length * sceneDuration + 3 * fps;

function StepScene({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const frame = useCurrentFrame();
  const localFrame = frame;

  const imageScale = interpolate(localFrame, [0, sceneDuration], [1.06, 1.13], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const imageX = interpolate(localFrame, [0, sceneDuration], [-18, 18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(localFrame, [4, 24], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const textOpacity = interpolate(localFrame, [4, 22, sceneDuration - 12], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const progress = Math.min(1, Math.max(0, localFrame / sceneDuration));

  return (
    <AbsoluteFill style={{ backgroundColor: "#061426", overflow: "hidden" }}>
      <Img
        src={staticFile(step.image)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translate3d(${imageX}px, 0, 0) scale(${imageScale})`,
          filter: "saturate(1.04) contrast(1.05)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,12,26,0.94) 0%, rgba(3,18,37,0.84) 38%, rgba(3,18,37,0.22) 72%, rgba(3,18,37,0.50) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 78,
          top: 70,
          display: "flex",
          alignItems: "center",
          gap: 18,
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: 18,
            backgroundColor: "#18a7c9",
            color: "#061426",
            display: "grid",
            placeItems: "center",
            fontSize: 26,
          }}
        >
          {step.kicker}
        </div>
        <div style={{ fontSize: 26 }}>Guia de instalação</div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 78,
          bottom: 92,
          width: 800,
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 118,
            height: 5,
            marginBottom: 28,
            borderRadius: 999,
            backgroundColor: "#6ee7ff",
          }}
        />
        <h1
          style={{
            margin: 0,
            maxWidth: 760,
            fontSize: 74,
            lineHeight: 0.94,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          {step.title}
        </h1>
        <p
          style={{
            marginTop: 18,
            maxWidth: 760,
            fontSize: 42,
            lineHeight: 1.12,
            fontWeight: 500,
            color: "rgba(236, 254, 255, 0.92)",
          }}
        >
          {step.body}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: 78,
          right: 78,
          bottom: 42,
          height: 4,
          borderRadius: 999,
          backgroundColor: "rgba(255,255,255,0.22)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            backgroundColor: "#18a7c9",
          }}
        />
      </div>
    </AbsoluteFill>
  );
}

function IntroScene() {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 80], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 28], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#061426", overflow: "hidden" }}>
      <Img
        src={staticFile("images/fotos-piscinas/IMG-20260501-WA0052.jpg")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(1.08) contrast(1.05)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,12,26,0.94), rgba(3,18,37,0.58), rgba(3,18,37,0.34))",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 84,
          top: 110,
          width: 880,
          color: "white",
          opacity,
          transform: `translateY(${y}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#6ee7ff",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Piscinas R Abreu
        </p>
        <h1
          style={{
            margin: "28px 0 0",
            fontSize: 92,
            lineHeight: 0.92,
            fontWeight: 850,
            letterSpacing: -3,
          }}
        >
          Como preparar a instalação da sua piscina
        </h1>
        <p
          style={{
            marginTop: 24,
            maxWidth: 760,
            fontSize: 44,
            lineHeight: 1.12,
            color: "rgba(236,254,255,0.9)",
          }}
        >
          Um guia visual com medidas, nivelamento, tubagem, enchimento e compactação.
        </p>
      </div>
    </AbsoluteFill>
  );
}

export function PoolInstallationGuide() {
  const { fps: configFps } = useVideoConfig();
  const introDuration = 3 * configFps;

  return (
    <AbsoluteFill style={{ backgroundColor: "#061426" }}>
      <Sequence durationInFrames={introDuration}>
        <IntroScene />
      </Sequence>
      {steps.map((step, index) => (
        <Sequence
          key={step.kicker}
          from={introDuration + index * sceneDuration}
          durationInFrames={sceneDuration}
        >
          <StepScene step={step} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}
