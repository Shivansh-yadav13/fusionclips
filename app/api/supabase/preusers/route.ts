import { createServerSupabaseClient } from "../../../supabase/supabase-server";

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed")
  }
  const reqdata = await request.json();
  const { email } = reqdata;
  const supabase = createServerSupabaseClient();

  const { error } = await supabase
    .from('emaillist')
    .insert({ email:  email});
  if (error)  {
    console.log(error);
    return new Response("Internal Server Error.");
  } 
  return new Response("Successful");
}