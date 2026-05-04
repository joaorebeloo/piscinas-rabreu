import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

function wavePath(offset: number, y: number) {
  return `M ${-220 + offset} ${y} C 20 ${y - 52}, 170 ${y + 62}, 380 ${y} S 740 ${
    y - 48
  }, 960 ${y} S 1320 ${y + 54}, 1540 ${y} S 1900 ${y - 44}, 2140 ${y}`;
}

export function HeroPoolLoop() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = frame / durationInFrames;

  const imageScale = interpolate(
    frame,
    [0, durationInFrames],
    [1.035, 1.085],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const imageX = interpolate(frame, [0, durationInFrames], [0, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shimmerX = interpolate(frame, [0, durationInFrames], [-520, 2300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const waveOffset = Math.sin(progress * Math.PI * 2) * 80;
  const causticOpacity = 0.16 + Math.sin(progress * Math.PI * 2) * 0.05;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06162b", overflow: "hidden" }}>
      <Img
        src={staticFile("images/hero-piscina-generated.png")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translate3d(${imageX}px, 0, 0) scale(${imageScale})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,12,26,0.92) 0%, rgba(3,20,42,0.70) 42%, rgba(3,20,42,0.28) 72%, rgba(3,20,42,0.56) 100%)",
        }}
      />
      <svg
        viewBox="0 0 1920 1080"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: causticOpacity,
          mixBlendMode: "screen",
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={wavePath(waveOffset + index * 24, 430 + index * 44)}
            fill="none"
            stroke="rgba(255,255,255,0.72)"
            strokeWidth={index % 2 === 0 ? 2 : 1}
          />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: "-18% -36%",
          background:
            "linear-gradient(112deg, transparent 38%, rgba(255,255,255,0.20) 49%, transparent 60%)",
          transform: `translate3d(${shimmerX}px, 0, 0) skewX(-12deg)`,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 74% 62%, rgba(24,167,201,0.35), transparent 28%), linear-gradient(180deg, transparent 70%, rgba(6,22,43,0.70) 100%)",
        }}
      />
    </AbsoluteFill>
  );
}
