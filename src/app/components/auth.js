"use client";
import { AiOutlineClose,AiOutlineLock,AiFillCloseCircle } from 'react-icons/ai';
import {MdPersonOutline } from 'react-icons/md';
import { BsEnvelopeAt } from 'react-icons/bs';
import { LiaEyeSolid,LiaEyeSlash } from 'react-icons/lia';
import { useEffect, useState } from 'react';

const Signin = ({authModalOpen}) => {
    const [modalOpen,setModalOpen] = useState(authModalOpen);
    const [showPassword,setShowPassword] = useState(false);
    const [signupTab,setSignupTab] = useState(true);
    const [forgotPasswordPage,setForgotPasswordPage] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const {name,email, password} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: e.target.value
        }))
    }

    function clearInput(e){
        setFormData((prevState) => ({
            ...prevState,[e.target.id]: "nn"
        }))
    }
    
        function modal (){
           
            setModalOpen(false)
        
        }
    
    return ( 
        <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 z-50 flex flex-col items-center w-full h-screen overflow-scroll sm:pt-20">
            <div className="bg-white sm:rounded-xl">
                <div className='p-[16px] mt-[16px] flex justify-end'>
                    <AiOutlineClose className=' text-[28px] text-[#6E6E6EFF] cursor-pointer' onClick={modal}/>
                </div>
                {forgotPasswordPage ? (
                <div className="sm:w-[600px] w-screen flex items-center  flex-col px-[34px] h-screen">
                    <h1 className="text-[20px] font-bold">Forgot your password?</h1>
                    <p className="text-[16px] font-light text-[#6E6E6EFF] mb-[24px] mt-[12px] text-center">Enter your email address to reset your password.</p>
                    <form action="" className='w-full'>
                            <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                                <BsEnvelopeAt className='text-[27px]'/>
                                <input
                                type="email" 
                                placeholder="Email" 
                                className='w-full ml-5 outline-none'
                                id="email" 
                                value={email} 
                                onChange={onChange}  
                                />
                                {email && <AiFillCloseCircle
                                className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                                onClick={()=>{ setFormData((prevState) => ({
                                    ...prevState,email: ""
                                }))}}/>}
                            </div>
                            <button className={`shadow shadow-md shadow-slate-500 cursor-not-allowed w-full bg-[#C1C1C1FF] rounded-full px-[16px] font-bold text-[18px] h-[48px] text-white ${email && "bg-green-700 cursor-pointer"}`}>Reset</button>
                    </form>
                </div>) : (
                <div className="sm:w-[600px] w-screen flex items-center justify-center flex-col px-[34px]">
                    <h1 className="text-[20px] font-bold">{signupTab ? "Sign up":  "Log in"} to Glovo</h1>
                    <p className="text-[14px] font-light text-[#6E6E6EFF] mb-[24px] mt-[12px]">{signupTab ? "Got an account already?" : "New to Glovo?"} <span className="font-bold text-[#00A082FF] cursor-pointer" onClick={()=> setSignupTab(!signupTab)}>{signupTab ?  "Log in":"Sign up"}</span> </p>
                    <div className="flex items-center justify-center w-full border border-[#E4E4E4FF] rounded-full px-[16px] h-[48px] mb-[16px] cursor-pointer">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/icons/social/google.svg" alt="" />
                        <h3 className="w-full flex items-center justify-center text-[#000000F] text-[14px] font-bold">Continue with Google</h3>
                    </div>
                    <div className="flex items-center justify-center w-full border border-[#E4E4E4FF] rounded-full px-[16px] h-[48px] cursor-pointer">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,q_auto:low/https://glovoapp.com/images/icons/social/facebook.svg" alt="" />
                        <h3 className="w-full flex items-center justify-center text-[#000000F] text-[14px] font-bold">Continue with Facebook</h3>
                    </div>
                    <p className="w-full text-[12px] font-light text-[#6E6E6EFF] my-[24px] flex items-center justify-center before:grow before:shrink before:basis-0 before:items-center before:flex before:border-b before:border-[#E4E4E4FF] before:mr-[12px] after:grow after:shrink after:basis-0 after:items-center after:flex after:border-b after:border-[#E4E4E4FF] after:ml-[12px]">or continue with email</p>
                    {signupTab ? (
                         <form action="" className='w-full'>
                         <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                             <MdPersonOutline className='text-[30px]'/>
                             <input
                              type="text" 
                              placeholder="First name" 
                              className='w-full ml-5 outline-none'
                              id="name" 
                              value={name} 
                              onChange={onChange}  
                             />
                             {name && <AiFillCloseCircle
                              className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                              onClick={()=>{ setFormData((prevState) => ({
                                 ...prevState,name: ""
                              }))}}/>}
                         </div>
                         <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                             <BsEnvelopeAt className='text-[27px]'/>
                             <input
                              type="email" 
                              placeholder="Email" 
                              className='w-full ml-5 outline-none'
                              id="email" 
                              value={email} 
                              onChange={onChange}  
                             />
                              {email && <AiFillCloseCircle
                              className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                              onClick={()=>{ setFormData((prevState) => ({
                                 ...prevState,email: ""
                              }))}}/>}
                         </div>
                         <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                             <AiOutlineLock className='text-[30px]'/>
                             <input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password" 
                              className='w-full ml-5 outline-none bg-white'
                              id="password" 
                              value={password} 
                              onChange={onChange}  
                             />
                             {!showPassword ?
                              <LiaEyeSolid
                              className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                              onClick={()=>setShowPassword(!showPassword)}
                             /> : 
                             <LiaEyeSlash
                             className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                             onClick={()=>setShowPassword(!showPassword)}
                            />
                             }
                         </div>
                         <button className={`shadow shadow-md shadow-slate-500 cursor-not-allowed w-full bg-[#C1C1C1FF] rounded-full px-[16px] mb-[32px] font-bold text-[18px] h-[48px] text-white ${name && email && password && "bg-green-700 cursor-pointer"}`}>Sign up with email</button>
                     </form>
                    ) : (
                        <form action="" className='w-full'>
                            <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[32px]'>
                                <BsEnvelopeAt className='text-[27px]'/>
                                <input
                                type="email" 
                                placeholder="Email" 
                                className='w-full ml-5 outline-none'
                                id="email" 
                                value={email} 
                                onChange={onChange}  
                                />
                                {email && <AiFillCloseCircle
                                className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                                onClick={()=>{ setFormData((prevState) => ({
                                    ...prevState,email: ""
                                }))}}/>}
                            </div>
                            <div className='w-full flex items-center justify-center border-b-2 border-[#E4E4E4FF] pb-[6px] mb-[16px]'>
                                <AiOutlineLock className='text-[30px]'/>
                                <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password" 
                                className='w-full ml-5 outline-none bg-white'
                                id="password" 
                                value={password} 
                                onChange={onChange}  
                                />
                                {!showPassword ?
                                <LiaEyeSolid
                                className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                                onClick={()=>setShowPassword(!showPassword)}
                                /> : 
                                <LiaEyeSlash
                                className='text-[28px] text-[#6E6E6EFF] cursor-pointer'
                                onClick={()=>setShowPassword(!showPassword)}
                            />
                                }
                            </div>
                            <h4 className='flex justify-end w-full mb-[32px] text-green-700 cursor-pointer font-bold text-[14px]' onClick={()=> setForgotPasswordPage(!forgotPasswordPage)}>Forgot your password?</h4>
                            <button className={`shadow shadow-md shadow-slate-500 cursor-not-allowed w-full bg-[#C1C1C1FF] rounded-full mb-[40px] px-[16px] font-bold text-[18px] h-[48px] text-white ${email && password && "bg-green-700 cursor-pointer"}`}>Log in with email</button>
                    </form>
                    )}
                    {signupTab && 
                    <p className="text-[#6E6E6EFF] font-light text-[12px] text-center mb-[16px]">By creating an account, you automatically accept our <a href="" className='underline'> Terms of service</a>, <a href="" className='underline'> Privacy Policy</a> and  <a href="" className='underline'>Cookies Policy</a></p>}
                </div>)}
            </div>
        </div>
     );
}
 
export default Signin;