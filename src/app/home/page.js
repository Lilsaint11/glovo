import { redirect } from "next/navigation";
import HomeContent from "../components/homeContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";


async function Home () {
   
    return ( 
       <HomeContent />
     );
}
 
export default Home;