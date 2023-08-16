import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import {webpackOverride} from './webpack-override.mjs';
// The composition you want to render
const compositionId = "MyComp";

const bundleLocation = await bundle({
  entryPoint: path.resolve("./remotion/index.tsx"),
  webpackOverride: (config) => config,
});

// Parametrize the video by passing arbitrary props to your component.
const inputProps = {
  videoURL: "https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/fc7a6a6c-bb2b-4e16-9d30-0c3fdc53a65b/clip.mp4?t=2023-08-09T10%3A13%3A05.556Z",
}

// Get the composition you want to render. Pass inputProps if you want to customize the
// duration or other metadata.
const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: compositionId,
  inputProps,
});

// Render the video
await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: "h264",
  outputLocation: `out/${compositionId}.mp4`,
  inputProps,
});

console.log("Render done!");