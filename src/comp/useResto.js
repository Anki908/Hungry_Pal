import { useEffect, useState } from "react"

const useResto = (resId) => {
    const[resto , setResto] = useState(null);
    useEffect(() => {
        getRestoinfo();
    } , [])

    async function getRestoinfo(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.614684&lng=77.060606&restaurantId=" + resId
        );
        const json = await data.json();
        // console.log(json);
        setResto(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)

    }
    return resto;
}

export default useResto;