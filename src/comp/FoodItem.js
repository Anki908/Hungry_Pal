import { IMG_CDN } from "../contants";

const FoodItem = ({name , price , imageId , description}) => {
    return(
        <div className = "card w-[235px] p-2 m-2 shadow-lg ">
            <img
            src = {IMG_CDN + 
            imageId
            }/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h2>Rupees : ₹{price/100}</h2>

        </div>
    )
}

export default  FoodItem;