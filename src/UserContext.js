import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Ankit Saini",
        email: "ankitsainias121@gmail.com"
    },
})

export default UserContext;