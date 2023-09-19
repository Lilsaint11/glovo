"use client";
import { AiOutlineClose,AiOutlineLock,AiFillCloseCircle } from 'react-icons/ai';
import {TbFlag3 } from 'react-icons/tb';
import { LiaEyeSolid,LiaEyeSlash } from 'react-icons/lia';
import { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React from 'react';
import { useStore } from '../store/zustand';


const MapModal = () => {
    const [center,setCenter] = useState({});
    const closeMapModal =  useStore(state => state.closeMapModal)
    const [formData, setFormData] = useState({
        locationSearch: "",
    });
    const {locationSearch} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }
    useEffect(() => { 
        navigator.geolocation.getCurrentPosition(function(location) {
            const center = {
                lat: location.coords.latitude,
                lng: location.coords.longitude
                };
                setCenter(center)
                console.log(location)
        });
     },[location]);

    const containerStyle = {
        width: '230px',
        height: '320px'
      };
      
     
      
      
        const { isLoaded } = useLoadScript({
          googleMapsApiKey: "AIzaSyD80EWd1Boxio10YI2qDFRkeTpK1IkBAVg"
        })

        if(!isLoaded){
            return(
                <></>
            )
        }
      
        
      
       
    return ( 
        <div className="bg-[rgba(0,0,0,0.6)] fixed top-0  z-50 flex flex-col items-center w-full h-screen sm:pt-10">
            <div className="bg-white sm:rounded-xl sm:h-[500px] h-screen">
                <div className='p-[16px] mt-[16px] flex justify-end'>
                    <AiOutlineClose className=' text-[28px] text-[#6E6E6EFF] cursor-pointer' onClick={closeMapModal }/>
                </div>
                <div className="sm:w-[500px] w-screen flex items-center  flex-col px-[34px]">
                    <h1 className="text-[20px] font-bold mb-10 max-[470px]:mb-5">Add Delivery Address</h1>
                    <div className='flex justify-center gap-5 w-full h-full'>
                        <div className='flex flex-col justify-center items-center w-full justify-between'>
                            <div>
                                <form action="" className='w-full'>
                                    <div className='w-full flex items-center r border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                                        <div className='flex  items-center justify-center'>
                                            <TbFlag3 className='text-[30px]'/>
                                            <input
                                            type="text" 
                                            placeholder="Search for streets, cities, districts" 
                                            className='w-full ml-5 outline-none text-sm'
                                            id="locationSearch" 
                                            value={locationSearch} 
                                            onChange={onChange}  
                                            />
                                        </div>
                                    </div>
                                </form>
                                <div className='flex gap-3 max-[470px]:hidden'>
                                    <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/svg/location.svg" alt="" className='w-[35px]'/>
                                    {center ? <h4 className='text-sm text-green-700'> Latitide: {center.lat} <br/> Longitude:<br/>{center.lng}</h4> : <h4 className='text-sm text-green-700'> Use current location...</h4>}
                                </div>
                                <div className='min-[470px]:hidden'>
                                    <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    >
                                    </GoogleMap>
                                </div>
                            </div>
                            <p className='text-sm text-green-700 cursor-pointer max-[470px]:mt-4'>Or use location on the map</p>
                        </div>
                        <div className='h-80 w-1/2 max-[470px]:hidden visible'>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                            >
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MapModal;