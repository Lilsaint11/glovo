"use client";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose,AiOutlineLock,AiFillCloseCircle } from 'react-icons/ai';
import { useStore } from "../store/zustand";

export default function SidesModal() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const sidesModalState = useStore(state => state. sidesModalState)
  const closeSidesModal =  useStore(state => state.closeSidesModal)
  const cart =  useStore(state => state.cart)
  const setCart =  useStore((state) => state.setCart)
  const sideMenu =  useStore(state => state.sideMenu)
  const [itemPrice,setItemPrice] = useState(sideMenu.price)
  const [itemAmt,setItemAmt] = useState(1)
  const [totalPrice,setTotalPrice] = useState(itemPrice)
  const [sidesState,setSidesState] = useState(true)
  //const [totalCount,setTotalCount] = useState(0)
  //const setTotalCount= useStore(state => state.setTotalCount)
  //const totalCount= useStore(state => state.totalCount)

  useEffect(()=>{
    if(!sideMenu.drinks && ! sideMenu.size && !sideMenu.chicken_choice){
        setSidesState(false)
    }
  },[sidesState])

  function increaseItem(){
      setItemAmt(Number(itemAmt) + 1)
  }

  function decreaseItem(){
      if(itemAmt > 1){
        setItemAmt(Number(itemAmt) - 1)
      }
   }
   let totalCount = 0;
   let totalCartPrice = 0
    function addToCart(){
        let carti = []
        
       // cart = {...sideMenu,price:totalPrice}
        if(typeof localStorage !== "undefined") {
            carti = (JSON.parse(localStorage.getItem('cart'))) || []
            totalCount = (JSON.parse(localStorage.getItem('totalCount'))) || 0
            totalCartPrice = (JSON.parse(localStorage.getItem('totalCartPrice'))) || 0
        }
        carti.push({...sideMenu, price:totalPrice,itemAmt:itemAmt})
        totalCount += itemAmt
        totalCartPrice += totalPrice
        console.log(totalCount,"asdfgh")
        setCart(carti)
        localStorage.setItem('cart', JSON.stringify(carti))
        localStorage.setItem('totalCount', JSON.stringify(totalCount))
        localStorage.setItem('totalCartPrice', JSON.stringify(totalCartPrice))
        closeSidesModal()
    }
   
useEffect(()=>{
    setTotalPrice(itemPrice * itemAmt)
},[itemAmt])

  return (
    <div className="">
        <Modal
          isOpen={sidesModalState}
          onRequestClose={closeSidesModal}
          className="w-[900px]  absolute top-10 left-[50%] translate-x-[-50%] bg-white rounded-xl shadow-md z-40"
        >
        <div className="p-10 w-full">
            <div className="flex w-full justify-end mb-5 cursor-pointer" onClick={closeSidesModal}>
                < AiOutlineClose />
            </div>
            <div className="flex gap-10 w-full">
                {sidesState && <div className={`w-[60%] h-[350px] overflow-scroll flex flex-col gap-5`}>
                {sideMenu.size &&
                 <div>
                    <h1 className="font-bold text-[20px]">Select size?</h1>
                    <h3 className="text-[14px] text-[#6E6E6EFF] mb-5">Choose one . <span className="bg-[#FFF3DAFF] px-1 text-[12px]">Required</span></h3>
                    <div className="flex flex-col gap-3">
                        {sideMenu.size.map(sz=> (
                            <div className="flex w-full justify-between border border-slate-500 p-3 rounded-lg cursor-pointer">
                                <h2 className="text-[#6E6E6EFF]">{sz}</h2>
                                <h3 className="text-[#00A082FF] w-[24px] h-[24px] text-[20px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h3>
                            </div>
                        ))}
                    </div>
                </div>
                }
                   
                {sideMenu.drinks && 
                    <div>
                    <h1 className="font-bold text-[20px]">Select your drink</h1>
                    <h3 className="text-[14px] text-[#6E6E6EFF] mb-5">Choose one . <span className="bg-[#FFF3DAFF] px-1 text-[12px]">Required</span></h3>
                    <div className="flex flex-col gap-3">
                        {sideMenu.drinks.map(drink=> (
                            <div className="flex w-full justify-between border border-slate-500 p-3 rounded-lg cursor-pointer">
                                <h2 className="text-[#6E6E6EFF]">{drink}</h2>
                                <h3 className="text-[#00A082FF] w-[24px] h-[24px] text-[20px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h3>
                            </div>
                        ))}
                    </div>
                </div>
                }

                {sideMenu.chicken_choice && 
                    <div>
                    <h1 className="font-bold text-[20px]">Select your choice of chicken </h1>
                    <h3 className="text-[14px] text-[#6E6E6EFF] mb-5">Choose one . <span className="bg-[#FFF3DAFF] px-1 text-[12px]">Required</span></h3>
                    <div className="flex flex-col gap-3">
                        {sideMenu.chicken_choice.map(chicken=> (
                            <div className="flex w-full justify-between border border-slate-500 p-3 rounded-lg cursor-pointer">
                                <h2 className="text-[#6E6E6EFF]">{chicken}</h2>
                                <h3 className="text-[#00A082FF] w-[24px] h-[24px] text-[20px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h3>
                            </div>
                        ))}
                    </div>
                </div>
                }
                   
                </div>}
                <div className={`${sidesState && "w-[40%]"} w-full flex flex-col gap-2`}>
                    <div className="flex items-center justify-center">
                        <img src={sideMenu.image} alt="" className={`${!sidesState && "w-64 h-96"}w-40 h-40 object-cover`}/>
                    </div>
                    <h1 className={`${!sidesState && "text-[28px]"} font-bold text-[20px]`}>{sideMenu.name}</h1>
                    <h3 className={`${!sidesState && "text-[24px]"} font-medium text-[18px]`}>₦{sideMenu.price}</h3>
                    <p className={`${!sidesState && "text-[18px]"} font-medium text-[14px] text-[#6E6E6EFF]`}>{sideMenu.desc}</p>
                    <div className="flex items-center justify-center gap-5 font-bold text-[20px]">
                        <h1 className={` w-[32px] h-[32px] text-[24px] font-semibold rounded-full bg-[#C1C1C1FF] flex justify-center items-center cursor-pointer pb-1 ${(itemAmt > 1) ? " text-[#00A082FF] bg-[#E9F8F5FF]" : "text-slate-500"}`}  onClick={decreaseItem}>-</h1>
                        <h1>{itemAmt}</h1>
                        <h1 className="text-[#00A082FF] w-[32px] h-[32px] text-[24px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer" onClick={increaseItem}>+</h1>
                    </div>
                    <button className={`text-white w-full h-12 rounded-full font-semibold bg-[#00A082FF]`} onClick={ addToCart}>Add 1 for NGN{totalPrice}</button>
                </div>
            </div>
        </div>
        </Modal>
    </div>
  );
}