import { Key, useRef, useState, useEffect } from "react";
import { AbsoluteFill, Audio, Sequence, Video, useCurrentFrame, useVideoConfig } from "remotion";
import { Title } from "../Captions/TheBoldCaptions/Caption";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";

export const clipCompositionProps: { videoURL: string, captions: [object] } = {
  videoURL: "https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/fc7a6a6c-bb2b-4e16-9d30-0c3fdc53a65b/clip.mp4?t=2023-08-09T10%3A13%3A05.556Z",
  captions: [{}]
}

export const ClipComposition = ({ videoURL, captions }: { videoURL: string, captions: [object] }) => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const audioData = useAudioData("https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/fc7a6a6c-bb2b-4e16-9d30-0c3fdc53a65b/clip.mp4?t=2023-08-12T16%3A54%3A31.666Z");
  
  if (!audioData) {
    return null;
  }
  const visualization = visualizeAudio({    
    fps,
    frame,
    audioData,
    numberOfSamples: 16,
  });

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Video
          ref={video}
          style={{ opacity: 1 }}
          src={videoURL}
        />
        {/* <Audio src="https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/fc7a6a6c-bb2b-4e16-9d30-0c3fdc53a65b/clip.mp4?t=2023-08-12T16%3A54%3A31.666Z" /> */}
      </AbsoluteFill>
      <AbsoluteFill>
        {
          captions ?
          captions.map((c: any, k: Key | null | undefined) => {
            return (
              c.words.map((w: any, k: Key) => {
                return (
                  <>
                  <Sequence from={w.start*60} durationInFrames={(w.end*60) - (w.start*60)} key={k}>
                    <Title titleText={w.word} titleColor="white" />
                  </Sequence>
                  </>
                )
              })
            )
          })
          :
          "Loading Captions"
        }
        <canvas ref={canvas} width={1080} height={1920} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};