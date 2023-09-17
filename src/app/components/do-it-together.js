const DoItTogether = () => {
    return ( 
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
     );
}
 
export default DoItTogether;