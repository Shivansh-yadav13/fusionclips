import Banner from '../components/web/Banner';
import SupabaseProvider from "./supabase/supabase-provider";
import Footer from '../components/web/Footer';
import Navbar from '../components/web/Navbar';
import '../styles/global.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusionclips.pro"),
  title: {
    default: 'FusionClips AI',
    template: `%s | FusionClips AI`,
  },
  description: 'Convert Booring 😪 Live Streams or Videos to Attention 👀 Grabbing Clips.',
  verification: {
    google: "google-site-verification=Qo7kzugZ6Qh4lkWhT-LxDdoxgxrDUc2KmRevHHURVaU"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <SupabaseProvider>
          <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            {/* <Banner /> */}
            {children}
            <Footer />
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}
