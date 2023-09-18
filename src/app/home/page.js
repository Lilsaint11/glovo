import { redirect } from "next/navigation";
import HomeContent from "../components/homeContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useStore } from "zustand";
import { supabase } from "../auth/supabase";


async function Home () {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if(user){
    const closeAuthModal =  useStore(state => state.closeAuthModal)
    closeAuthModal;
  }
    return ( 
       <HomeContent />
     );
}
 
export default Home;