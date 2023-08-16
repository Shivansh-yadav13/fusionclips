import { createServerSupabaseClient } from "../../../supabase/supabase-server";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed")
  }
  const data = await request.json();
  const { email } = data;
  const supabase = createServerSupabaseClient();
  const { error } = await supabase
    .from('preusers')
    .insert({ email:  email});
  if (error)  {
    console.log(error);
    return new Response("Internal Server Error.");
  } 
  return new Response("Successful");
}