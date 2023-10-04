import Link from "next/link";
import { supabase } from "../auth/supabase";

const ItemCard = ({item, onDelete}) => {
    const handleDelete = async() =>{
        const {data, error} = await supabase
        .from('items')
        .delete()
        .eq('id',item.id)
        .select()

        if(error){
            console.log(error)
        }

        if(data){
            console.log(data)
            onDelete(item.id)
        }
    }
    return ( 
        <div>
            <h3>{item.title}</h3>
            <h3>{item.method}</h3>
            <h3>{item.rating}</h3>
            <Link href={'/update/' + item.id}><h1 className="bg-blue-500 rounded-full w-16">update</h1></Link>
            <h1 className="bg-red-500 rounded-full w-16 cursor-pointer" onClick={handleDelete}>delete</h1>
        </div>
     );
}
 
export default ItemCard;