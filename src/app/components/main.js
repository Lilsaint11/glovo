"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Signin from "./auth";
import MapModal from "./mapModal";
import { useStore } from "../store/zustand";

const Main = () => {
    const [pageScrolled,setPageScrolled] = useState(false)
    const [addressState,setAddressState] = useState(false)
    const [divDistance,setDivDistance] = useState()
    window.addEventListener("scroll", () =>{ 
      if(window.pageYOffset >= 15){
         setPageScrolled(true)
      }else{
        setPageScrolled(false)
      }
      var addressDiv = document.querySelector('.address-open');
      var distanceToTop = addressDiv.getBoundingClientRect().top;
      setDivDistance(distanceToTop)
    });
  useEffect(()=>{
    if(divDistance <= -24){
      setAddressState(true)
    }else{
      setAddressState(false)
    }
  },[divDistance])
  
    const authModalState = useStore(state => state. authModalState)
    const mapModalState =  useStore(state => state.mapModalState) 
    const openAuthModal =  useStore(state => state.openAuthModal)
    const openMapModal =  useStore(state => state.openMapModal)
    return ( 
        <div>
             <div className={`flex justify-between bg-[#FFC244FF] pt-[9px] pb-[13px] px-4 fixed z-50 top-0 w-full ${pageScrolled && !addressState && "shadow-md"}`}>
        <img src="/images/logo.svg" alt="" className='max-w-[78px]'/>
        <button className='text-[14px] font-bold rounded-full text-white bg-[#00A082FF]  min-w-[128px] h-[38px] outline-none max-w-[548px] cursor-pointer' onClick={openAuthModal}>Get Started</button>
      </div>
      <div className={`flex flex-col items-center justify-center bg-[#FFC244FF]  pb-[13px] px-4 fixed -top-16 z-40 w-full transition duration-500  ${addressState && "translate-y-[120px]"}`}>
         <h3 className="text-[18px] font-bold mt-[8px] mb-[16px]">Enter your address to know <span className="bg-white rounded-full box-decoration-clone px-[4px] py-0"> what’s near you</span></h3>
         <div className='flex justify-center w-full h-[40px]  rounded-xl mb-[12px]'>
            <div className='flex items-center justify-center bg-[#00A082FF] w-[60px] rounded-tl-[10px] rounded-bl-[10px] '>
              <img src="/images/flag--white.svg" alt="" className='w-[18px]'/>
            </div>
            <form action="" className='w-full max-w-[550px]'>
              <input type="text" placeholder="What's your address?" className='text-[15px] font-light w-full h-full pl-5 rounded-tr-[10px] rounded-br-[10px] outline-none'/>
            </form>
          </div>
      </div>
      <div className='flex flex-col justify-center align-center bg-[#FFC244FF]  px-4 pt-[108px] pb-[24px]'>
        <div className='flex items-center justify-center'>
           <video data-test-id="animation-video" autoPlay="autoplay" loop="loop" muted="muted"  width="281" height="252" className="w-full max-w-[452px]" data-v-f4daae2a="" playsInline  muted><source src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm" preload="auto" type="video/mp4" data-v-f4daae2a=""/>
           <img src="https://res.cloudinary.com/glovoapp/image/fetch/q_…ps://glovoapp.com/images/landing/video-burger.png" alt="" />
           Could not play video
           </video>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-[36px] font-bold text-center leading-[40px] py-[16px]'>Food delievery and more</h3>
          <p className='text-[16px] font-normal mb-[8px]'>Groceries, shops, pharmacies, anything!</p>
          <div className='flex justify-center w-full h-[50px]  rounded-xl my-[16px]' onClick={openMapModal}>
            <div className='flex items-center justify-center bg-[#00A082FF] w-[60px] rounded-tl-[10px] rounded-bl-[10px] '>
              <img src="/images/flag--white.svg" alt="" className='w-[24px]'/>
            </div>
            <form action="" className='w-full max-w-[550px]'>
              <input type="text" placeholder="What's your address?" className='text-[17px] w-full h-full pl-5 rounded-tr-[10px] rounded-br-[10px] outline-none'/>
            </form>
          </div>
          <p className='text-[14px] text-[#00A082FF] font-semibold'>Use current location</p>
        </div>
      </div>
      {authModalState && <Signin />}
      {mapModalState && <MapModal /> }
      <div className="flex flex-col items-center justify-center w-full px-4 py-[48px] bg-[#FFC244FF] address-open top-restaurants">
        <h2 className="py-[32px] text-[32px] font-extrabold text-center leading-[1.2] "><span className="">Top restaurants and more </span>in Glovo</h2>
      <div className="scroll flex w-full max-w-[1500px] overflow-y-auto overflow-x-auto box-border ">
        <div className="flex flex-col items-center justify-center w-40" onClick={openMapModal}>
          <img src="/images/mcd.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">McDonald's</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/kfc.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] px-2 bg-white rounded-lg flex justify-center items-center -translate-y-5">KFC</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/bgk.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">BurgerKing</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center " onClick={openMapModal}>
          <img src="/images/cfr.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">Carrefour</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/pizzahut.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">PizzaHut</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/pjn.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">PapaJohn's</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/sby.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">Subway</h2>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center" onClick={openMapModal}>
          <img src="/images/tcb.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">TacoBell</h2>
          </span>
        </div>
      </div>
      </div>
     
      <div className="flex flex-col items-center justify-center gap-[75px] px-4 -mt-[48px] bg-white">
        <div className="flex flex-col justify-center items-center">
          <img src="/images/restaurants.svg" alt="" className="mb-[24px]"/>
          <h3 className="text-[20px] font-bold text-center mb-[8px]"> Your city's top restaurants</h3>
          <h5 className="text-[16px] font-light text-center max-w-[317px] mb-[24px]">With a great variety of restaurants you can order your favourite food or <span className="bg-[#FFC244FF] rounded-full box-decoration-clone px-[4px] py-0">explore new restaurants nearby!</span> </h5>
          <button className="min-w-[308px] h-[40px] text-white text-[16px] font-bold bg-[#00A082FF] rounded-full" onClick={openMapModal}>Explore stores around you</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/images/delivery.svg" alt=""  className="mb-[24px]"/>
          <h3 className="text-[20px] font-bold text-center mb-[8px]"> Fast delivery</h3>
          <h5  className="text-[16px] font-light text-center max-w-[353.44px]">Like a flash! Order or send anything in your city and  <span className="bg-[#FFC244FF] rounded-full box-decoration-clone px-[4px] py-0">receive it in minutes</span> </h5>
        </div> 
        <div className="flex flex-col justify-center items-center">
          <img src="/images/groceries.svg" alt=""  className="mb-[24px]"/>
          <h3 className="text-[20px] font-bold text-center mb-[8px]"> Groceries delivery and more</h3>
          <h5 className="text-[16px] font-light text-center max-w-[330px]">Find anything you need! From  <span className="bg-[#FFC244FF] rounded-full box-decoration-clone px-[4px] py-0">supermarkets to shops, pharmacies to florists</span> — if it's in your city order it and receive it.</h5>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFC244FF]  px-3 pt-[80px]  pb-[64px] mt-[24px] -mb-[195px] countries relative">
         <img src="/images/countries.svg" alt="" />
         <h1 className="font-bold text-[32px] my-[16px] text-center">Countries where we deliver</h1>
         <div className="flex flex-wrap items-center justify-center gap-3 p-2 text-[18px] font-normal">
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Spain</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Italy</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Ukraine</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Romania</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Georgia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Portugal</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Poland</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Morocco</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Kazakhstan</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Croatia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Kenya</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Côte D'Ivoire</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Serbia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Moldova</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Uganda</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Kyrgyzstan</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Bosnia and Herzegovina</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Bulgaria</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Ghana</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Montenegro</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Slovenia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Nigeria</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Armenia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Andorra</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full cursor-pointer hover:bg-[#FFC244FF] transition duration-200">Tunisia</h3>
         </div>
      </div>
        </div>
     );
}
 
export default Main;