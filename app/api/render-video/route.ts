import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import {webpackOverride} from '../../../webpack-override.mjs';

export async function POST(req: Request) {
  if (req.method === 'POST') {

    const compositionId = "MyComp";

    const bundleLocation = await bundle({
      entryPoint: path.resolve("./remotion/index.tsx"),
      webpackOverride: (config) => config,
    });

    const inputProps = {
      videoURL: "https://mzwpeqplxjiupysnwteo.supabase.co/storage/v1/object/public/temp_clip_bucket/fc7a6a6c-bb2b-4e16-9d30-0c3fdc53a65b/clip.mp4?t=2023-08-09T10%3A13%3A05.556Z",
    }

    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
      inputProps,
    });

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation: `out/${compositionId}.mp4`,
      inputProps,
    });
  } else {
    return new Response('Method Not Allowed', {
      headers: { Allow: 'POST' },
      status: 405
    });
  }
}