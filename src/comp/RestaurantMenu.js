import { useEffect , useState} from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN } from "../contants";
import Shimmer from "./Shim";
import useRestaurant from "./useRestaurant";
import useResto from "./useResto";
import { addItem } from "./CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    const resto = useResto(resId);

    const dispatch = useDispatch();

    const handleItem = (item) => {
        dispatch(addItem(item));
    }

    return (!restaurant) ? < Shimmer /> : (
        <div className="flex bg-gray-300">
        <div className="p-4 m-4">
            <h1 className="p-1">Restaurant id: {resId}</h1>
            <h2 className="font-bold text-4xl p-1">{restaurant.name}</h2>
            <img className= "rounded-md"src = {IMG_CDN + restaurant.cloudinaryImageId}/>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h3>{restaurant.avgRating} stars</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
        </div>
        <div className="p-6 m-6">
            <h1 className="font-bold text-2xl">Menu</h1>
            <ul>
                {resto?.itemCards?.map((item) => (
                    <li key = {item.card.info.id}>
                        {item.card.info.name} - {" "}
                        <button className = "p-2 m-2 text-sm bg-green-500 hover:bg-green-900 text-white rounded-md border-black shadow-md transition duration-500 hover:scale-95"onClick = {() => handleItem(item.card.info)} >ADD+</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default RestaurantMenu;