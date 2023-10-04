"use client";
import { useEffect, useState } from "react";
import { supabase } from "../auth/supabase";
import ItemCard from "../components/itemCard";

const Database = () => {
    const [fetchErr, setFetchErr] = useState(null)
    const [items, setItems] = useState(null)
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) =>{
       setItems(prevItems=>{
           return prevItems.filter(item => item.id !== id)
       })
    }

    useEffect(()=>{
        const fetchItems = async () => {
            const {data, error} = await supabase
            .from('items')
            .select()
            .order(orderBy, {ascending:false})

            if(error){
                setFetchErr('could not fetch items')
                setItems(null)
                console.log(error)
            }
            if(data){
                setItems(data)
                setFetchErr(null)
            }
        }
        fetchItems();
    },[orderBy])
    return ( 
        <div>
            {fetchErr && (<h1>{fetchErr}</h1>)}
            {items && (
                <div className="p-10">
                    <div className="mb-10">
                        <h1>order by:</h1>
                        <div className="flex flex-wrap gap-10">
                        <button onClick={()=> setOrderBy('created_at')}>Time created</button>
                        <button onClick={()=> setOrderBy('title')}>Title</button>
                        <button onClick={()=> setOrderBy('rating')}>Rating</button>
                        </div>
                        {orderBy}
                    </div>
                    <div className="flex flex-wrap gap-10">
                        {items.map(item => (
                            <ItemCard  key={item.id} item={item} onDelete={handleDelete}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Database;