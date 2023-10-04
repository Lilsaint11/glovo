import { TbCurrencyNaira } from 'react-icons/tb';
import { useStore } from '../store/zustand';

const RestaurantMealCard = ({restaurantMeal}) => {
    const openSidesModal =  useStore(state => state.openSidesModal)
    const setSideMenu =  useStore(state => state.setSideMenu)
    function sides(e){
        e.preventDefault()
        openSidesModal()
        setSideMenu(restaurantMeal)
    }
    return (  
        <div className="flex flex-col gap-5 cursor-pointer border rounded-md p-5 hover:scale-[1.02] transition duration-200 w-full" onClick={sides}>
        <div className="flex gap-3">
            <img src={restaurantMeal.image} alt="" className="w-[60px] h-[60px] rounded-[8px]"/>                       
            <div className="w-auto">
                <h2 className="text-[16px]">{restaurantMeal.name}</h2>
                <p className="text-[14px] text-[#6E6E6EFF]  w-full line-clamp-2">{restaurantMeal.desc}</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <h3 className="text-[18px] flex items-center"><TbCurrencyNaira />{restaurantMeal.price}</h3>
                {restaurantMeal.oldPrice && <h4 className="text-[14px] text-[#6E6E6EFF] line-through flex items-center"><TbCurrencyNaira />{restaurantMeal.oldPrice}</h4>}
            </div>
            <h3 className="text-[#00A082FF] w-[24px] h-[24px] text-[20px] font-semibold rounded-full bg-[#E9F8F5FF] flex justify-center items-center cursor-pointer">+</h3>
        </div>
    </div>
     );
}
 
export default RestaurantMealCard;