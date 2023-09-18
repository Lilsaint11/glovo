"use client";
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineAddCard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { useStore } from "../store/zustand";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';


const Profile = () => {
    const supabase = createClientComponentClient();
    const router = useRouter()
    const [orderTab, setOrderTab] = useState(true);
    const closeProfile =  useStore(state => state.closeProfile)
    async function signOut(){
         await supabase.auth.signOut();
         closeProfile()
         router.refresh()
    }
    return ( 
        <div className="w-full h-full bg-white absolute top-0 z-50 py-3 px-5 overflow-scroll">
            <div>
                <div className='p-[4px] mt-[2px] flex justify-end' onClick={closeProfile}>
                    <AiOutlineClose className=' text-[18px] text-[#6E6E6EFF] cursor-pointer'/>
                </div>
                <div className="flex mb-7">
                    <p className={`w-full flex justify-center cursor-pointer ${orderTab  && " border-b-2 border-orange-500"} ${!orderTab && "border-b border-slate-300"}`} onClick={()=> setOrderTab(true)}>Orders</p>
                    <p className={`w-full flex justify-center cursor-pointer ${!orderTab  && " border-b-2 border-orange-500"} ${orderTab && "border-b border-slate-300"}`} onClick={()=> setOrderTab(false)}>Account</p>
                </div>
                {orderTab ? (
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <h3 className='text-[15px] font-bold'>You've not made any orders just yet!</h3>
                    <p className='text-[13px] text-slate-500'>Explore our stores and find everything you've been looking for...</p>
                </div>
                ) : (
                <div>
                    <h1 className="font-bold text-[20px] mb-3">Hello, Stephen Obisesan</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex border-b border-slate-300 w-full pb-5 justify-between">
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <p className='text-[13px] text-slate-600'>Name</p>
                                    <p  className='text-[14px]'>Stephen  Obisesan</p>
                                </div>
                                <div className="">
                                    <p className='text-[13px] text-slate-600'>Email</p>
                                    <p className='text-[14px]'>example@gmail.com</p>
                                </div>
                            </div>
                            <h4 className='text-green-700 font-bold text-[13px] cursor-pointer'>Edit</h4>
                        </div>
                        <div className="flex justify-between border-b border-slate-300 w-full pb-5">
                            <div className='flex flex-col gap-2'>
                                <p className='text-[13px] text-slate-600'>Phone</p>
                                <p className='text-[13px] text-yellow-500'>what is your phone number?</p>
                            </div>
                           
                            <h4 className='text-green-700 font-bold text-[13px] cursor-pointer'>Edit</h4>
                        </div>
                        <div className="flex justify-between border-b border-slate-300 w-full pb-5">
                            <div className='flex flex-col gap-2'>
                                <p className='text-[13px] text-slate-600'>Password</p>
                                <p className='text-[14px]'>Lorem ipsum password</p>
                            </div>
                            <h4 className='text-green-700 font-bold text-[13px] cursor-pointer'>Edit</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-[13px] text-slate-600'>Payment Method</p>
                            <div className='border border-slate-300 rounded-md h-10 flex items-center px-2 justify-between'>
                                <div className='flex items-center gap-2'>
                                    <MdOutlineAddCard className='text-[23px]'/>
                                    <h4 className='text-[12px]'>Add a new card</h4>
                                </div>
                                <IoIosArrowForward/>
                            </div>       
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[13px] text-slate-600'>Manage Preference</h1>
                            <p className='text-[13px]'>We use customer data to improve the experience of our service and show relevant promotions.</p>
                        </div>
                        <p className='rounded-lg bg-gray-100 text-[12px] p-2 text-left'>Glovo may share user data (such as hashed emails, phones, or device identifiers) with Facebook and similar platforms to personalise and measure ads and content and to create audiences. You can always opt out of receiving these kinds of communication by deactivating this toggle
                        </p>
                        <div className='flex  border-b border-slate-300 w-full pb-5 relative justify-between'>
                            <p className='text-[13px]'>Receive special deals and promotions</p>
                            <label className="switch relative w-10">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className='flex justify-between border-b border-slate-300 w-full pb-5'>
                            <p className='text-[13px] text-slate-500'>Promo code</p>
                            <h4 className='text-green-700 font-bold text-[13px] cursor-pointer'>Add</h4>
                        </div>
                        <div className='flex justify-end'>
                            <p className='text-green-700 font-bold text-[13px] cursor-pointer' onClick={signOut}>Log out</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
     );
}
 
export default Profile;