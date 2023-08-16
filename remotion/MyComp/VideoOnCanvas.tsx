import React, { useRef, useCallback, useEffect, useState } from "react";
import { AbsoluteFill, Sequence, Video, useVideoConfig } from "remotion";
import { Title } from "./HelloWorld/Title";

type Caption = {
  word: string
  end: GLfloat
  start: GLfloat
  probability: GLfloat
}
// {captions} : {captions: [Caption]}
export const VideoOnCanvas = () => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = useVideoConfig();
 
  // Process a frame
  const onVideoFrame = useCallback(() => {
    if (!canvas.current || !video.current) {
      return;
    }
    const context = canvas.current.getContext("2d");
 
    if (!context) {
      return;
    }
 
    // context.filter = "grayscale(100%)";
    context.drawImage(video.current, 0, 0, width, height);
  }, [height, width]);
 
  // Synchronize the video with the canvas
  useEffect(() => {
    const { current } = video;
    if (!current?.requestVideoFrameCallback) {
      return;
    }
 
    let handle = 0;
    const callback = () => {
      onVideoFrame();
      handle = current.requestVideoFrameCallback(callback);
    };
 
    callback();
 
    return () => {
      current.cancelVideoFrameCallback(handle);
    };
  }, [onVideoFrame]);

  const captions = [
    "Hello",
    "Guys",
    "Welcome",
    "To",
    "Another",
    "Video"
  ]
 
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Video
          ref={video}
          style={{ opacity: 1 }}
          startFrom={300}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </AbsoluteFill>
      <AbsoluteFill>
        {
          captions.map((c, k) => {
            return (
              <Sequence from={k*20} durationInFrames={20} key={k}>
                <Title titleText={c} titleColor="black" />
              </Sequence>
            )
          })
        }
        <canvas ref={canvas} width={width} height={height} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};