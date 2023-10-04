"use client";
import { supabase } from "@/app/auth/supabase";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Update = () => {
    const {id} = useParams();
    const router = useRouter()
    const [itemData, setItemData] = useState({
        title: "",
        method:"",
        rating: "",
    });
    const [formErr,setFormErr] = useState(null);
    const {title,method,rating} = itemData;
    function onChange(e){
        setItemData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    useEffect(()=>{
        const fetchItems = async () => {
            const {data, error} = await supabase
            .from('items')
            .select()
            .eq('id', id)
            .single()

            if(error){
                router.push("/database", {replace:true})
            }
            if(data){
                setItemData(data)
                console.log(data)
            }
        }
        fetchItems();
        console.log(itemData)
    },[])

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!itemData){
            setFormErr('fill in all field sir')
            return
        }

        const {data, error} = await supabase
        .from('items')
        .update({title,method,rating})
        .eq('id', id)
        .select()

        if(error){
            console.log(error)
            setFormErr('fill in all field sir')
        }
        if(data){
            console.log(data)
            setFormErr(null)
            router.push('/database')
        }
    }
    return ( 
        <div>
             {itemData && (
             <form action="" className="flex flex-col gap-5 justify-center items-center p-5" onSubmit={onSubmit}>      
             <input type="text" placeholder="title" id="title" value={title} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
         
             <input type="text" placeholder="method" id="method" value={method} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
         
             <input type="text" placeholder="rating" id="rating" value={rating} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
           
             <button  className="w-[172px] sm:w-full h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px] cursor-pointer">update</button>
             {formErr && <h1>{formErr}</h1>}
         </form>
            )}
          
        </div>
     );
}
 
export default Update;