"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../auth/supabase";

const Create = () => {
    const router = useRouter()
    const [formErr,setFormErr] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        method:"",
        rating: "",
    });
    const {title,method,rating} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    async function onSubmit(e){
        e.preventDefault()
        if(!title || !method || !rating){
            setFormErr('fill in all field sir')
            return
        }
        const {data, error} = await supabase
        .from('items')
        .insert([{title:title,method:method,rating:rating}])
        .select()

        if (error){
            console.log(error)
            setFormErr('fill in all field sir')
        }
        if(data){
            console.log(data)
            setFormErr(null)
            router.push("/database")
        }
        console.log("data")
    }
    return ( 
        <div>
            <form action="" className="flex flex-col gap-5 justify-center items-center p-5" onSubmit={onSubmit}>      
                <input type="text" placeholder="title" id="title" value={title} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
            
                <input type="text" placeholder="method" id="method" value={method} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
            
                <input type="text" placeholder="rating" id="rating" value={rating} onChange={onChange} className="text-[13px] pl-5 rounded-sm h-[39px] border border-black focus:outline-none bg-transparent w-full" required/>
              
                <button  className="w-[172px] sm:w-full h-[53px] bg-gradient-to-r from-[#FE34B9] to-[#903AFF] rounded-md text-[16px] cursor-pointer">Submit</button>
                {formErr && <h1>{formErr}</h1>}
            </form>
        </div>
     );
}
 
export default Create;