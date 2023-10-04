"use client"
import { useParams, useRouter } from "next/navigation";
import {BsPersonCircle } from 'react-icons/bs';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { HiOutlineThumbUp } from 'react-icons/hi';
import {IoIosArrowForward } from 'react-icons/io';
import {RxDashboard } from 'react-icons/rx';
import {FcTodoList } from 'react-icons/fc';
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/app/auth/supabase";
import RestaurantMealCard from "@/app/components/restaurantMealCard";
import SidesModal from "@/app/components/sidesModal";
import { useStore } from "@/app/store/zustand";


const Restaurant = () => {
    const router = useRouter();
    const {restaurantId} = useParams();
    const[restaurantMeals,setRestaurantMeals] = useState()
    const [restaurantData, setRestaurantData] = useState({ });
    const [cart,setCart] =  useState([])
    const [cart2,setCart2] =  useState([])
    const [num,setNum] =  useState()

    const sidesModalState = useStore(state => state.sidesModalState)
    useEffect(()=>{
        const fetchItems = async () => {
            const {data, error} = await supabase
            .from('restaurants')
            .select()
            .eq('id', restaurantId)
            .single()

            if(error){
                router.push("/home", {replace:true})
            }
            if(data){
                setRestaurantData(data)
                console.log(data)
            }
        }
        fetchItems();
        router.refresh()
        console.log(restaurantMeals)
    },[])
    useEffect(()=>{
        const fetchRes = async () => {
            if(restaurantData){
                console.log(restaurantData.name)
                const {data, error} = await supabase
                .from(restaurantData.name)
                .select()

                if(error){
                    setRestaurantMeals(null)
                    console.log(error)
                }
                if(data){
                    setTimeout(()=>{
                    setRestaurantMeals(data)
                },[2000])
                console.log(data)
            }
            }
        }
        fetchRes();
    },[restaurantData])

    const getCart = () => {
        if(typeof localStorage !== "undefined") {
             setCart(JSON.parse(localStorage.getItem('cart'))) || []
        }
        return;
    }

    useEffect(()=>{   
        getCart()
        return;
    },[])

  
    function increaseItem(item){
        
    }
  
    function decreaseItem(){
       
     }
    

    return ( 
        <div>
            {sidesModalState && <SidesModal />}
            <div className="w-full relative">
                <img src={restaurantData.image} alt="" className="w-full h-64 object-cover blur-sm"/>
                <div className="p-10 absolute w-full top-0 flex flex-col gap-16 h-full">
                    <div className="flex justify-between">
                        <img src="/images/glovo-white.svg" alt="" className='w-[128px]'/>
                        <div className="flex items-center gap-5">
                            <img src="/images/profile-icon_new.svg" alt="" className="cursor-pointer w-10"/>
                            <img src="/images/orders-icon_new.svg" alt="" className="w-10 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex items-center text-white gap-2 text-[12px]">
                        <Link href="/home"><p className="relative z-40">Home</p></Link>
                        <IoIosArrowForward />
                        <p className="font-bold">{restaurantData.name}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 h-screen p-10 -mt-28 relative">
               <div className="w-full flex flex-col gap-10">
                   <div className="flex flex-col gap-5 bg-white rounded-md shadow-md shadow-slate-200 w-full p-10">
                       <h1 className="text-[48px] font-bold">{restaurantData.name}</h1>
                       <div className="flex items-center gap-2">
                        {restaurantData.delivery ? 
                        <div className="flex items-center gap-1">
                            <MdOutlineDeliveryDining className="text-[27px]"/>
                            <p>N{restaurantData.delivery}</p>
                        </div> :
                         <div className="bg-[#FFC244FF] px-1 rounded-md flex items-center gap-1">
                         <MdOutlineDeliveryDining className="text-[20px]"/>
                         <p className="text-[14px] font-bold">Free</p>
                     </div>
                        }
                        <div className="flex items-center gap-1">
                            <HiOutlineThumbUp className="text-[22px]"/>
                            <p>{restaurantData.rating}%</p>
                        </div>
                        <p className="bg-[#6ad5cb] text-white text-[12px] px-1 rounded-md font-bold">Very Gcod</p>
                       </div>
                   </div>
                   <div className="flex">
                        <div className="overflow-auto sticky left-0 top-6 w-72 h-screen scroll-bar">
                            <div className="flex items-center  gap-1 mx-[16px]">
                                <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/svg/sections-square.svg" alt="" />
                                <h3 className="text-[14px] font-bold text-[#00A082FF]">Sections</h3>
                            </div>
                            <div className="mt-8 flex flex-col gap-5 cursor-pointer">
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Top sellers</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Coca cola Treat Night</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">What's New</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Everyday Affordable Value Meals</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Soulfully Spiced Fried Chicken</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Rotisserie Chicken</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Burgers and Sandwiches</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Family Value Meals</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Tasty Sides</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Packaging</p>
                                </div>
                                <div className="border-b border-slate-200 w-[171px]">
                                    <p className="pl-5 pb-4">Drinks</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <img src="/images/cup.webp" alt="" className="w-9"/>
                                <h1 className="text-[20px] font-bold">Top sellers</h1>
                            </div>
                            <div className="flex flex-col gap-5">
                            {restaurantMeals ? restaurantMeals.map(restaurantMeal => (
                               <RestaurantMealCard restaurantMeal={restaurantMeal} key={restaurantMeal.id}/>
                            )) : <h1>Nothing to see from this store yet...</h1>}
                            </div>
                        </div>
                   </div>
               </div>
               <div className="sticky top-6 h-[15rem]">
                   <div className="flex flex-col items-center gap-5 bg-white rounded-md shadow-md shadow-slate-200 w-[322px] px-5 pt-10 pb-5">
                        <h1 className="font-bold text-[28px]">Your Glovo</h1>
                        {cart? 
                        <div className="flex flex-col gap-5">
                            {cart.map((ct)=>(
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between gap-5">
                                        <h1 className="font-bold">{ct.itemAmt}x</h1>
                                        <h2 className="max-w-[150px] text-[14px]">{ct.name}</h2>
                                        <h3 className="text-[14px]">NGN {ct.price}</h3>
                                    </div>
                                    <div className="flex items-center justify-between gap-5 font-bold text-[20px]">
                                        <h1 className="w-[24px] h-[24px] text-[24px] font-semibold rounded-full  text-[#00A082FF] bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer pb-1"  onClick={decreaseItem}>-</h1>
                                        <h1 className="text-[#00A082FF] w-[24px] h-[24px] text-[24px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h1>
                                    </div>
                                </div>
                            ))}
                            
                        </div> :
                        <>
                        <img src="/images/astronaut-grey-scale.svg" alt="" />
                        <p className="text-center text-[16px] w-[240px]">You've not added any products yet. When you do, you'll see them here!</p>
                        </>
                        }
                   </div>
               </div>
            </div>
        </div>
     );
}
export default Restaurant;