import { Composition } from "remotion";
import { HeroPoolLoop } from "./HeroPoolLoop";
import {
  PoolInstallationGuide,
  poolInstallationGuideDuration,
} from "./PoolInstallationGuide";

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="HeroPool"
        component={HeroPoolLoop}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PoolInstallationGuide"
        component={PoolInstallationGuide}
        durationInFrames={poolInstallationGuideDuration}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
}
