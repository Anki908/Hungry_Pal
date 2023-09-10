import React, { Suspense, lazy , useContext , }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./comp/Header";
import Body from "./comp/Body";
import Footer from "./comp/footer";
import About from "./comp/about";
import Error from "./comp/error";
import Contact from "./comp/contact";
import RestaurantMenu from "./comp/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Shimmer from "./comp/Shim";
import Instamart from "./comp/instamart";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./comp/store";
import Cart from "./comp/cart";

const AppLayout = () => {
  const [user , setUser] = useState({
    name: "Ank Saini",
    email: "ankitsainias121@gmail.com"
  })
    return(
        <Provider store = {store}>
          <Header/>
          <Outlet/>
          <Footer/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: <Instamart />
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);