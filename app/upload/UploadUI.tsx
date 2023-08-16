"use client";

import { Player } from "@remotion/player";
import { useCallback, useState, useEffect, use } from "react";
import { ClipComposition } from "../../remotion/Render/ClipComposition";

import { User } from "@supabase/supabase-js";
import { uploadVideo, generateCaptions } from "./actions";
import { RenderControls } from "../../components/remotion/RenderControls";
import { Spinner } from "../../components/remotion/Spinner/Spinner";

import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { Audio, useCurrentFrame, useVideoConfig } from "remotion";


const UploadUI = ({ user }: { user: User | undefined }) => {
  const [videoURL, setVideoURL] = useState<string>("");
  const [captions, setCaptions] = useState<[object] | null>(null);
  const [text, setText] = useState<string>("Hello");

  

  const generateCaptions = async (videoUrl: string): Promise<[object]> => {
    const data = await fetch("http://localhost:8000/api/v1/transcribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        video_url: videoUrl
      })
    })
    console.log("Fetching Captions...", data)
    const response = await data.json();
    const captions = response.captions.segments;
    console.log(captions);
    if (captions)
      return captions;
    return [{}];
  }

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files === null) {
        return;
      }
      const file = event.target.files[0];
      // const blobUrl = URL.createObjectURL(file);
      if (user) {
        // const video_url = await uploadVideo(user, file);
        setVideoURL(`https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/${user.id}/clip.mp4`);
        const cap = await generateCaptions(`https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/${user.id}/clip.mp4`);
        setCaptions(cap);
      }
    },
    [user]
  );
  if (captions && user) {
        return (
        <div className="flex flex-row-reverse justify-center gap-20 w-full mx-auto my-10">
          <Player
              style={{width: "20%"}}
              autoPlay={true}
              controls={true}
              alwaysShowControls={true}
              loop
              
              component={ClipComposition}
              inputProps={{ videoURL: videoURL, captions: captions }}
              durationInFrames={2500}
              compositionWidth={1080}
              compositionHeight={1920}
              fps={60}
              />
          <RenderControls
            text={text}
            setText={setText}
            inputProps={captions}
          />
        </div>
      )
  } else {
    return (
      <div className="w-1/5 mx-auto my-10">
        <input type="file" accept="video/mp4" onChange={handleChange} className="block w-auto text-sm bg-prime text-white " />
      </div>
    );
  }
};

export default UploadUI;