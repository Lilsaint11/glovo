import DoItTogether from "./components/do-it-together";
import Footer from "./components/footer";
import DownloadTheApp from "./components/download-the-app";
import Main from "./components/main";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {
    data: { session },
  } = await supabase.auth.getSession()
  
if (session) {
    return redirect("/home")
  }
  console.log(session,"all")
  return (
    <main className='relative'>
      <Main />
      <DownloadTheApp />
      <DoItTogether />
      <Footer />
    </main>
  )
}
