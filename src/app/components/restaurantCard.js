import { useState } from 'react';
import { HiOutlineLocationMarker,HiOutlineThumbUp } from 'react-icons/hi';
import { MdOutlineDeliveryDining } from 'react-icons/md';

const RestaurantCard = ({restaurant}) => {
    return ( 
        <div className="w-full max-w-[260px] cursor-pointer">
            <div className="rounded-lg bg-black relative">
                <div className={' rounded-lg hover:scale-105 transition duration-200'}>
                    {restaurant.discount && <div className="flex bg-[#FFC244FF]  absolute rounded-sm -top-3 right-5">
                        <h4 className="text-[16px] px-2 font-bold flex justify-center items-centertext-black">-{restaurant.discount}%</h4>
                    </div>}
                    <div className='w-full  h-[122px] rounded-lg '>
                        <img src={restaurant.image} alt="" className='w-full h-full rounded-lg object-cover'/>
                    </div>
                    <div className="flex flex-col justify-end h-full p-[8px] absolute bottom-0">
                        <h4 className="bg-[rgba(0,0,0,0.6)]  text-[12px] px-1 font-light flex justify-center items-center text-white rounded-md">{restaurant.category}</h4>
                    </div>
                </div>
            </div>
            <div className="m-2">
                <h2 className="text-[16px] sm:text-[20px] font-bold mb-2">{restaurant.name}</h2>
                <div className="flex gap-2">
                    <p className="text-[16px] font-light flex items-center gap-1"><HiOutlineThumbUp className="text-[18px]"/>{restaurant.rating}% <span className="visible max-sm:hidden text-[#6E6E6EFF]">({restaurant.amt}+)</span></p>
                   {!restaurant.delivery && <div className="bg-[#FFC244FF] px-1 rounded-md flex items-center gap-1">
                        <MdOutlineDeliveryDining className="text-[20px]"/>
                        <p className="text-[14px] font-bold">Promo</p>
                    </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default RestaurantCard;