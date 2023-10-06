"use client";
import { useEffect, useState } from "react";
import { HiOutlineLocationMarker,HiOutlineThumbUp } from 'react-icons/hi';
import {BsPersonCircle } from 'react-icons/bs';
import Link from "next/link";
import DoItTogether from "./do-it-together";
import Footer from "./footer";
import Profile from "./profile";
import { useStore } from "../store/zustand";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import RestaurantCard from "./restaurantCard";
const HomeContent = ({user}) => {
    const [pageScrolled,setPageScrolled] = useState(false)
    const [addressState,setAddressState] = useState(false)
    const [restaurants,setRestaurants] = useState(null)
    const [fetchErr, setFetchErr] = useState(null)
    const [divDistance,setDivDistance] = useState()
    const userName = useStore((state) => state.userName)
    const supabase = createClientComponentClient()
    if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>{ 
        if(window.pageYOffset >= 15){
           setPageScrolled(true)
        }else{
          setPageScrolled(false)
        }
      });
    }
    useEffect(()=>{
      if(divDistance <= -24){
        setAddressState(true)
      }else{
        setAddressState(false)
      }
    },[divDistance])

    useEffect(()=>{
        const fetchItems = async () => {
            const {data, error} = await supabase
            .from('restaurants')
            .select()

            if(error){
                setFetchErr('could not fetch items')
                setRestaurants(null)
                console.log(error)
            }
            if(data){
                setRestaurants(data)
                setFetchErr(null)
                console.log(data)
            }
        }
        fetchItems();
    },[])

    const profileState = useStore(state => state.profileState)
    const openProfile =  useStore(state => state.openProfile)
    const setUserName = useStore((state) => state.setUserName)
    const setEmail = useStore((state) => state.setEmail)

    useEffect(()=>{
        const setData = async () =>{
            const { data: { session }, error } = await supabase.auth.getSession();
            if(error) throw error;
            setUserName(session.user.user_metadata.full_name)
            setEmail(session.user.user_metadata.email)
        }
        setData();
    },[])
    return ( 
        <div className="text-black bg-white">
        {profileState && <Profile />}
        <div className={`flex flex-col justify-center items-center bg-[#FFC244FF] fixed z-40 top-0 w-full ${pageScrolled && !addressState && "shadow-md"}`}>
            <div className="flex justify-between items-center gap-5 pt-[9px] pb-[13px] px-4 w-full">
                <Link href="/home"><img src="/images/icon.png" alt="" className='w-[40px]'/></Link>
                <div className="w-full">
                    <input type="search" name="" placeholder="Search Glovo" className="w-full rounded-full h-10 outline-none pl-7 pr-2"/>
                </div>
                <BsPersonCircle className="text-[27px] text-green-700 cursor-pointer" onClick={openProfile}/>
            </div>
            <div className="flex justify-center items-center mb-4">
                <HiOutlineLocationMarker />
                <p className="text-[14px]">Lagos Island</p>
            </div>
        </div>
        <div className="bg-[#FFC244FF] pt-4 mt-[99px] flex flex-col justify-center items-center w-full">
        <h1 className="mb-5 text-[18px]">Delivering to <span className="font-bold">{userName}</span></h1>
            <div className="max-md:h-[400px]  max-md:w-[370px] md:grid md:grid-cols-4 md:gap-5 lg:flex relative px-4 justify-between gap-y-2">
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[120px] h-[125px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute top-[120px] left-[120px] cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/fchiknlbp7i6ujd7sgva" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light w-10">Food</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute bottom-4 left-[130px] cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/axauagpboui8jtksyx7a" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Glovo Bargains</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute bottom-[50px] left-0 cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/CategoryGroups/iteu1doia24conodac8e" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Supermarket and Phamarcies</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500  max-md:absolute top-[100px] left-0 cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/d1895kzyk7jiinhykem2" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Chicken Republic 30% Off</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute top-0 left-[70px] cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/lubnleu9eskm0dslityl" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Package Delivery</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute top-0 right-[60px] cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/ke0kz2c4pq1hzikvvuge" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Shoprite</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute top-[110px] right-0 cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/ykq8cyazxethdnv5qbc9" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Coca-Cola Treats</p>
                </div>
                <div className="bg-white w-[114px] flex flex-col justify-center items-center w-[110px] h-[112px] bubble shadow shadow-3xl shadow-slate-500 max-md:absolute bottom-[50px] right-0 cursor-pointer">
                    <img src="https://res.cloudinary.com/glovoapp/c_fit,f_auto,e_trim,q_auto:best,h_120,w_120/StoreCategories/z5hwcvps81kwipdtilfw" alt="" className="w-[50px] h-[45px]"/>
                    <p className="text-center text-[12px] font-light">Glovomania</p>
                </div>
            </div>
        </div>
        <div className="main-home px-3 sm:px-12 w-full">
            <div className="flex items-center my-8 gap-2">
                <img src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight" alt="" className="w-6"/>
                <h3 className="text-[20px] font-bold">Stores you might like</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2 sm:gap-10 ">
                {restaurants && restaurants.map(restaurant => (
                    <Link href={"/restaurants/" + restaurant.id}><RestaurantCard  key={restaurant.id} restaurant={restaurant} /></Link>
                ))}
            </div>
        </div>
        <div className="px-3 sm:px-12 w-full mt-16">
            <div className="flex items-center my-8 gap-2">
                <img src="https://res.cloudinary.com/glovoapp/f_auto,h_48,w_48,q_auto:best/CX/new_backend_driven_home_screen/bestInCityLight" alt="" className="w-6"/>
                <h3 className="text-[20px] font-bold">Best of Island - Lagos</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2 sm:gap-10 ">
                <div className="w-full max-w-[260px] cursor-pointer">
                    <div className="rounded-lg bg-black">
                        <div className="w-full bg-[url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/rovvz2vyxhg40df9ukqd')] bg-no-repeat h-[122px] bg-cover rounded-lg hover:scale-105 transition duration-200">
                            <div className="flex flex-col justify-end h-full p-[8px]">
                                <h4 className="bg-[rgba(0,0,0,0.6)] w-[54px] text-[12px] font-light flex justify-center items-center text-white rounded-md">Chicken</h4>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h2 className="text-[16px] sm:text-[20px] font-bold mb-2">Chicken Republic</h2>
                        <div className="flex gap-2">
                            <p className="text-[16px] font-light flex items-center gap-1"><HiOutlineThumbUp className="text-[18px]"/>87% <span className="visible max-sm:hidden text-[#6E6E6EFF]">(500+)</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[260px] cursor-pointer">
                    <div className="rounded-lg bg-black">
                        <div className="w-full bg-[url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/v1gsjcn641fk5stuyqqs')] bg-no-repeat h-[122px] bg-cover rounded-lg hover:scale-105 transition duration-200">
                            <div className="flex flex-col justify-end h-full p-[8px]">
                                <h4 className="bg-[rgba(0,0,0,0.6)] w-[54px] text-[12px] font-light flex justify-center items-center text-white rounded-md">Pastries</h4>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h2 className="text-[16px] sm:text-[20px] font-bold mb-2">Mr Bigg's</h2>
                        <div className="flex gap-2">
                            <p className="text-[16px] font-light flex items-center gap-1"><HiOutlineThumbUp className="text-[18px]"/>94% <span className="text-[#6E6E6EFF] visible max-sm:hidden">(500+)</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[260px] cursor-pointer">
                    <div className="rounded-lg bg-black">
                        <div className="w-full bg-[url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/mnyzihdyvmcgoy6agiaf')] bg-no-repeat h-[122px] bg-cover rounded-lg hover:scale-105 transition duration-200">
                            <div className="flex flex-col justify-end h-full p-[8px]">
                                <h4 className="bg-[rgba(0,0,0,0.6)] w-[54px] text-[12px] font-light flex justify-center items-center text-white rounded-md">Healthy</h4>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h2 className="text-[16px] sm:text-[20px] font-bold mb-2">The Foodhub By CWC</h2>
                        <div className="flex gap-2">
                            <p className="text-[16px] font-light flex items-center gap-1"><HiOutlineThumbUp className="text-[18px]"/>88% <span className="text-[#6E6E6EFF] visible max-sm:hidden">(54)</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[260px] cursor-pointer">
                    <div className="rounded-lg bg-black">
                        <div className="w-full bg-[url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,h_250,w_450/Stores/pitgfqk7tiss9gsu8sp5')] bg-no-repeat h-[122px] bg-cover rounded-lg hover:scale-105 transition duration-200">
                            <div className="flex flex-col justify-end h-full p-[8px]">
                                <h4 className="bg-[rgba(0,0,0,0.6)] w-[54px] text-[12px] font-light flex justify-center items-center text-white rounded-md">Alcohol</h4>
                            </div>
                        </div>
                    </div>
                    <div className="m-2">
                        <h2 className="text-[16px] sm:text-[20px] font-bold mb-2">Glovo Drinks</h2>
                        <div className="flex gap-2">
                            <p className="text-[16px] font-light flex items-center gap-1"><HiOutlineThumbUp className="text-[18px]"/>86% <span className="text-[#6E6E6EFF] visible max-sm:hidden">(500+)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center  px-3 pt-[80px]  pb-[64px] mt-[24px] mb-[80px] relative">
            <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low,h_140,w_140/https://glovoapp.com/images/landing/cities.svg" alt="" />
            <h1 className="font-bold text-[24px] sm:text-[32px] my-[16px] text-center">Top Categories in Lagos</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 p-2 text-[18px] font-normal">
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Chicken</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Local food</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Snacks</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Healthy</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Burgers</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Traditional</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Pastries</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Pasta</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Shawarma</h3>
            <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[16px] sm:text-[18px] font-bold rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">International</h3>
            </div>
        </div>
        <DoItTogether />
        <Footer />
    </div>
     );
}
 
export default HomeContent;