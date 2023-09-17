const DownloadTheApp = () => {
    return ( 
        <div className="flex flex-col items-center justify-center mb-[80px] z-10 w-full overflow-hidden">
        <img src="/images/download-app-mobile.png" alt="" className="w-full -mr-[95px] mb-10"/>
        <h1 className="text-[32px] font-bold text-center mb-[12px]">Download the app</h1>
        <p className="text-[16px] font-light text-center mb-[12px]">Order anything and track it in real time with the Glovo app.</p>
        <div className="flex gap-[16px] my-[24px]">
          <img src="/images/glovo-app-store.svg" alt="" />
          <img src="/images/google-play-glovo.svg" alt="" />
        </div>
      </div>
     );
}
 
export default DownloadTheApp;