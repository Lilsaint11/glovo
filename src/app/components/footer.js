const Footer = () => {
    return ( 
        <footer className="box bg-[#1D1D1DFF] text-white px-[32px] pt-[24px] footer">
        <img src="/images/glovo-white.svg" alt="" className="py-[16px] w-[115px]"/>
        <div className="md:flex md:justify-between">
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
          <div className="md:flex md:flex-col">
          <div className="flex justify-center items-center gap-[32px]">
            <img src="/images/glovo-app-store.svg" alt="" className="mb-[48px] w-[105px]"/>
            <img src="/images/footer-google.svg" alt="" className="mb-[48px] w-[105px]"/>
          </div>
            <div className="mb-[32px]">
            </div>
              <ul>
                <li className="mb-[16px] mt-[4px] text-[14px] font-light">TERMS AND CONDITIONS</li>
                <li className="mb-[16px] mt-[4px] text-[14px] font-light">PRIVACY POLICY</li>
                <li className="mb-[16px] mt-[4px] text-[14px] font-light">COOKIES POLICY</li>
                <li className="mb-[16px] mt-[4px] text-[14px] font-light">COMPLIANCE</li>
              </ul>
          </div>
        </div>
        <div className="flex justify-center items-center pb-[48px] bg-[#1D1D1DFF]">
          <select defaultValue="English" className="bg-[#292929FF] border border-white text-[16px] font-normal h-[46px] w-[245px] px-3 ">
            <option value="Parent 1"> English</option>
            <option value="Parent 2"> Yoruba</option>
            <option value="Parent 3"> Pidgen</option>
          </select>
        </div>
      </footer>
     );
}
 
export default Footer;