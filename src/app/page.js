import DoItTogether from "./components/do-it-together";
import Footer from "./components/footer";
import DownloadTheApp from "./components/download-the-app";
import Main from "./components/main";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { supabase } from "./auth/supabase";
export const dynamic = "force-dynamic";
export default async function Home() {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
  })
  return (
    <main className='relative text-black bg-white'>
      <Main />
      <DownloadTheApp />
      <DoItTogether />
      <Footer />
    </main>
  )
}
