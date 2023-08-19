import Banner from '../components/web/Banner';
import SupabaseProvider from "./supabase/supabase-provider";
import Footer from '../components/web/Footer';
import Navbar from '../components/web/Navbar';
import '../styles/global.css'

export const metadata = {
  title: 'FusionClips AI',
  description: 'Convert Booring 😪 Live Streams or Videos to Attention 👀 Grabbing Clips.'
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
          <Navbar />
          {/* <Banner /> */}
          {children}
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  )
}
