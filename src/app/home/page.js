import HomeContent from "../components/homeContent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "../auth/supabase";


async function Home () {
  
const { data: { user } } = await supabase.auth.getUser()
supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
})
console.log(user,"ll")
    return ( 
       <HomeContent user={user}/>
     );
}
 
export default Home;