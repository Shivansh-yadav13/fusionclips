import { Composition } from "remotion";
import { MyComposition } from "./MyComp/Composition";
import { VideoOnCanvas } from "./MyComp/VideoOnCanvas";
import {ClipComposition, clipCompositionProps} from "./Render/ClipComposition";
import "../styles/global.css";
import { defaultMyCompProps } from "../types/MyComp";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={ClipComposition}
        durationInFrames={240}
        fps={60}
        width={1080}
        height={1920}
        defaultProps={clipCompositionProps}
      />
    </>
  );
};
