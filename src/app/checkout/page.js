"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowLeft } from 'react-icons/fi';

const Checkout = () => {
    const [cart,setCart] =  useState([])
    const [totalCartPrice,setTotalCartPrice] = useState(0)
    const getCart = () => {
        if(typeof localStorage !== "undefined") {
             setCart(JSON.parse(localStorage.getItem('cart'))) || []
        }
        return;
    }

    useEffect(()=>{   
        getCart()
        console.log(cart)
        return;
    },[])

    useEffect(()=>{  
        if(typeof localStorage !== "undefined") {
        setTotalCartPrice(JSON.parse(localStorage.getItem('totalCartPrice'))) || []
        }
    },[])

    let total = totalCartPrice + 50
    return ( 
        <div className="py-10 px-20 max-[780px]:px-10">
            <img src="/images/logo.svg" alt="" className='w-[128px] mb-10'/>
            <div className="mb-5 flex items-center gap-2">
                <Link href="/home"><FiArrowLeft className="text-[20px] cursor-pointer"/></Link>
                <h1 className="font-bold text-[20px]">Order summary</h1>
            </div>
           <div className="flex max-sm:flex-col justify-between w-full gap-20 max-[780px]:gap-5">
               <div className="w-full flex flex-col gap-5">
                {cart.map((ct)=>(
                    <div className="flex flex-col gap-5 bg-white shadow shadow-[0 2px 8px 2px] shadow-slate-400 p-5 rounded-xl">
                        <div className="flex items-center justify-between gap-5">
                            <h1 className="font-bold text-[20px] max-sm:text-[14px]">{ct.itemAmt}x</h1>
                            <h2 className="text-[20px] max-sm:text-[14px]">{ct.name}</h2>
                            <h3 className="text-[20px] max-sm:text-[14px]">NGN {ct.price}</h3>
                        </div>
                        <div className="flex items-center justify-between gap-5 font-bold text-[20px]">
                            <h1 className="w-[24px] h-[24px] text-[24px] font-semibold rounded-full  text-[#00A082FF] bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer pb-1" >-</h1>
                            <h1 className="text-[#00A082FF] w-[24px] h-[24px] text-[24px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h1>
                        </div>
                    </div>
                ))}
               </div>
               <div className="bg-white flex flex-col gap-5 p-5 shadow shadow-[0 2px 8px 2px] shadow-slate-400 w-[600px] max-sm:w-full rounded-xl">
                   <div className="flex  justify-between">
                        <h1 className="font-bold text-[24px]">Summary</h1>
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/svg/food.svg" alt="" />
                   </div>
                   <span className="relative h-[1px] w-full bg-slate-300"></span>
                   <div className="flex items-center justify-between text-[18px]">
                       <h1 className="">Products</h1>
                       <h1>₦{totalCartPrice}</h1>
                   </div>
                   <div className="flex items-center justify-between text-[18px]">
                       <h1 className="">Delivery</h1>
                       <h1>FREE</h1>
                   </div>
                   <div className="flex items-center justify-between text-[18px]">
                       <h1 className="">Services </h1>
                       <h1>₦50.00</h1>
                   </div>
                   <div className="flex items-center justify-between text-[20px] font-bold">
                       <h1 className="">TOTAL</h1>
                       <h1>₦{total}</h1>
                   </div>
                   <div className="flex items-center justify-between gap-3">
                       <input type="checkbox" name="" id="" className="w-5 h-5 cursor-pointer"/>
                       <p className="text-[12px] text-[#6E6E6EFF]">I confirm that i'm of legal age to purchase these products</p>
                   </div>
                   <button className={`text-white w-full h-12 rounded-full font-semibold bg-[#00A082FF]`} >Confirm order</button>
               </div>
           </div>
        </div>
     );
}
 
export default Checkout;