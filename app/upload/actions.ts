"use server";

import { User } from "@supabase/supabase-js";
import { createServerSupabaseClient } from "../supabase/supabase-server";


export const uploadVideo = async (user: User, video_file: File) => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
  .storage
  .from("temp_clip_bucket")
  .update(user!.id + "/" + "clip.mp4", video_file)

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

export const generateCaptions = async (videoUrl: string): Promise<[object]> => {
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

export const fetchVideo = async (user: User) => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
  .storage
  .from("temp_clip_bucket")
  .list(user?.id + "/", {
    limit: 10,
    offset: 0,
    sortBy: {
      column: 'name', order:
        'asc'
    }
  });

  if (data) {
    return data;
  }

  return error;
}
