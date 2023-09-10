import { IMG_CDN } from "../contants";
import UserContext from "../UserContext";
import { useContext } from "react";

const RestorantCard = ({name , cuisines , cloudinaryImageId , costForTwo , locality , avgRating}) => {
    
    const {user} = useContext(UserContext);
    const avg = {
        backgroundColor: avgRating >= 4 ? "green" : "orange",
    }
    return(
        <div className = " card w-[235px] p-2 m-2 shadow-lg transition duration-500 hover:scale-110  rounded-md">
            <img
            src = {IMG_CDN + 
            cloudinaryImageId
            }/>
            <div className="flex justify-between p-1">
                <div>
                    <h2 className="font-bold text-xl">{name}</h2>
                </div>
                <div style={avg} className="rounded-md flex align-middle justify-around">
                    <div className="text-white m-1 text-sm font-bold text-left">
                        <h2>{avgRating}☆</h2>
                    </div>
                </div>
            </div>
            <h3>{cuisines.join(", ")}</h3>
            <div className="flex justify-between">
               <h3>{costForTwo}</h3>
               <h4>{locality}</h4>
            </div>
        </div>
    )
}

export default  RestorantCard;