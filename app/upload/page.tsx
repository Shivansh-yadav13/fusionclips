import {
  getSession,
  getUserDetails,
  getSubscription,
  createServerSupabaseClient,
} from '../supabase/supabase-server';
import { redirect } from "next/navigation";
import UploadUI from "./UploadUI";


const UploadPage = async () => {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);
  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }

  return (
    <>
    <UploadUI user={user} />
    </>
  )
};

export default UploadPage;