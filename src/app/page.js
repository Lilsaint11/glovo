"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Signin from "./components/auth";

export default function Home() {
  const [pageScrolled,setPageScrolled] = useState(false)
  const [addressState,setAddressState] = useState(false)
  const [divDistance,setDivDistance] = useState()
  const [authModalOpen,setAuthModalOpen] = useState(false)
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


  return (
    <main className='relative'>
      <div className={`flex justify-between bg-[#FFC244FF] pt-[9px] pb-[13px] px-4 fixed z-50 top-0 w-full ${pageScrolled && !addressState && "shadow-md"}`}>
        <img src="/images/logo.svg" alt="" className='max-w-[78px]'/>
        <button className='text-[14px] font-bold rounded-full text-white bg-[#00A082FF]  min-w-[128px] h-[38px] outline-none max-w-[548px] cursor-pointer' onClick={()=> setAuthModalOpen(true)}>Get Started</button>
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
           <video data-test-id="animation-video" autoPlay="autoplay" loop="loop" muted="muted"  width="281" height="252" className="w-full max-w-[452px]" data-v-f4daae2a=""><source src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm" preload="auto" type="video/webm" data-v-f4daae2a=""/></video>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-[36px] font-bold text-center leading-[40px] py-[16px]'>Food delievery and more</h3>
          <p className='text-[16px] font-normal mb-[8px]'>Groceries, shops, pharmacies, anything!</p>
          <div className='flex justify-center w-full h-[50px]  rounded-xl my-[16px]'>
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
      {authModalOpen && <Signin authModalOpen = {authModalOpen}/>}
      <div className="flex flex-col items-center justify-center  px-4 py-[48px] bg-[#FFC244FF] address-open top-restaurants">
        <h2 className="py-[32px] text-[32px] font-extrabold text-center leading-[1.2] "><span className="">Top restaurants and more </span>in Glovo</h2>
      <div className="scroll flex w-full max-w-[1500px] overflow-y-auto overflow-x-auto box-border ">
        <div classname="flex flex-col items-center justify-center w-40">
          <img src="/images/mcd.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">McDonald's</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center w-[100px]">
          <img src="/images/kfc.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] px-2 bg-white rounded-lg flex justify-center items-center -translate-y-5">KFC</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center">
          <img src="/images/bgk.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">BurgerKing</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center ">
          <img src="/images/cfr.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">Carrefour</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center">
          <img src="/images/pizzahut.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">PizzaHut</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center">
          <img src="/images/pjn.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">PapaJohn's</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center">
          <img src="/images/sby.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">Subway</h2>
          </span>
        </div>
        <div classname="flex flex-col items-center justify-center">
          <img src="/images/tcb.webp" alt="" className="w-32 rest-img"/>
          <span className="w-36 flex items-center justify-center">
            <h2 className="font-bold text-[16px] p-[4px] bg-white rounded-lg flex justify-center items-center -translate-y-5 px-2">TacoBell</h2>
          </span>
        </div>
      </div>
      </div>
     
      <div className="flex flex-col items-center justify-center gap-[75px] px-4 -mt-[48px]">
        <div className="flex flex-col justify-center items-center">
          <img src="/images/restaurants.svg" alt="" className="mb-[24px]"/>
          <h3 className="text-[20px] font-bold text-center mb-[8px]"> Your city's top restaurants</h3>
          <h5 className="text-[16px] font-light text-center max-w-[317px] mb-[24px]">With a great variety of restaurants you can order your favourite food or <span className="bg-[#FFC244FF] rounded-full box-decoration-clone px-[4px] py-0">explore new restaurants nearby!</span> </h5>
          <button className="min-w-[308px] h-[40px] text-white text-[16px] font-bold bg-[#00A082FF] rounded-full">Explore stores around you</button>
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
         <h1 className="font-bold text-[32px] my-[16px]">Countries where we deliver</h1>
         <div className="flex flex-wrap items-center justify-center gap-3 p-2 text-[18px] font-normal">
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Spain</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Italy</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Ukraine</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Romania</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Georgia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Portugal</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Poland</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Morocco</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Kazakhstan</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Croatia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Kenya</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Côte D'Ivoire</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Serbia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Moldova</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Uganda</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Kyrgyzstan</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Bosnia and Herzegovina</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Bulgaria</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Ghana</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Montenegro</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Slovenia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Nigeria</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Armenia</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Andorra</h3>
           <h3 className="bg-[#FFF3DAFF] py-2 px-6 text-[18px] font-normal rounded-full">Tunisia</h3>
         </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-[80px] z-10 w-full overflow-hidden">
        <img src="/images/download-app-mobile.png" alt="" className="w-full -mr-[95px] mb-10"/>
        <h1 className="text-[32px] font-bold text-center mb-[12px]">Download the app</h1>
        <p className="text-[16px] font-light text-center mb-[12px]">Order anything and track it in real time with the Glovo app.</p>
        <div className="flex gap-[16px] my-[24px]">
          <img src="/images/glovo-app-store.svg" alt="" />
          <img src="/images/google-play-glovo.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[48px] bg-[#E9F8F5FF] do-it-together -mb-[70px]">
        <div className="flex flex-col items-center justify-center gap-[48px]  -translate-y-28">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/together.svg" alt="" />
            <h2 className="text-[32px] font-bold text-center mb-[24px]">Let’s do it together</h2>
          </div>
          <div className="flex flex-col items-center justify-center mb-[50px]">
            <img src="/images/rider-image.png" alt="" className="w-72"/>
            <h3 className="my-[12px] font-bold text-[24px]">Become a rider</h3>
            <p className="mb-[12px] font-light text-[16px] text-center max-w-[350px]">Enjoy flexibility, freedom and competitive earnings by delivering through Glovo.</p>
            <button className="font-bold text-[18px] h-[48px] w-[180px] rounded-full bg-[#00A082FF] text-white">Register here</button>
          </div>
          <div className="flex flex-col items-center justify-center  mb-[50px]">
            <img src="/images/partners-image.png" alt="" className="w-72"/>
            <h3  className="my-[12px] font-bold text-[24px]">Become a partner</h3>
            <p  className="mb-[12px] font-light text-[16px] text-center max-w-[350px]">Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!</p>
            <button className="font-bold text-[18px] h-[48px] w-[180px] rounded-full bg-[#00A082FF] text-white">Register here</button>
          </div>
          <div className="flex flex-col items-center justify-center  mb-[50px]">
            <img src="/images/careers-image.png" alt="" className="w-72"/>
            <h3  className="my-[12px] font-bold text-[24px]">Careers</h3>
            <p  className="mb-[12px] font-light text-[16px] text-center max-w-[350px]">Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!</p>
            <button className="font-bold text-[18px] h-[48px] w-[180px] rounded-full bg-[#00A082FF] text-white">Register here</button>
          </div>
        </div>
      </div>
      <footer className="box bg-[#1D1D1DFF] text-white px-[32px] pt-[24px] footer">
        <img src="/images/glovo-white.svg" alt="" className="py-[16px] w-[115px]"/>
        <div className="mb-[48px]">
          <h2 className="text-[20px] font-bold mb-[16px]">Let’s do it together</h2>
          <ul>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Careers</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Glovo for Partners</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Couriers</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Glovo Business</li>
          </ul>
        </div>
        <div className="mb-[48px]">
          <h2 className="text-[20px] font-bold mb-[16px]">Links of interest</h2>
          <ul>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">About us</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">FAQ</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Glovo Prime</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Blog</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Contact us</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Security</li>
          </ul>
        </div>
        <div className="mb-[48px]">
          <h2 className="text-[20px] font-bold mb-[16px]">Follow us</h2>
          <ul>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Facebook</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Twitter</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">Instagram</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-[32px]">
          <img src="/images/glovo-app-store.svg" alt="" className="mb-[48px] w-[105px]"/>
          <img src="/images/footer-google.svg" alt="" className="mb-[48px] w-[105px]"/>
        </div>
        <div className="mb-[32px]">
          <ul>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">TERMS AND CONDITIONS</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">PRIVACY POLICY</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">COOKIES POLICY</li>
            <li className="mb-[16px] mt-[4px] text-[14px] font-light">COMPLIANCE</li>
          </ul>
        </div>
        <div className="flex justify-center items-center pb-[48px] bg-[#1D1D1DFF]">
          <select defaultValue="English" className="bg-[#292929FF] border border-white text-[16px] font-normal h-[46px] w-[245px] px-3 ">
            <option value="Parent 1"> English</option>
            <option value="Parent 2"> Yoruba</option>
            <option value="Parent 3"> Pidgen</option>
          </select>
        </div>
      </footer>
    </main>
  )
}
