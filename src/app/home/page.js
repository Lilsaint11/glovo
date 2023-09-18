import HomeContent from "../components/homeContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "../auth/supabase";


async function Home () {
  const {
    data: { user },
  } = await supabase.auth.getUser()

    return ( 
       <HomeContent user={user}/>
     );
}
 
export default Home;