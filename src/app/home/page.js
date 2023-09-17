import { redirect } from "next/navigation";
import HomeContent from "../components/homeContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'

async function Home () {
    const supabase = createServerComponentClient({cookies})
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
        return redirect("/")
    }
    return ( 
       <HomeContent />
     );
}
 
export default Home;