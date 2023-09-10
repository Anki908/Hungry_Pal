
const EmptyCart = () => {
    return (
        <div className="">
            <h1 className="font-bold text-xl p-2 m-2">Cart Empty</h1>
            <img style = {{height: "500px" , width: "500px" , position: "relative"  , left: "30%"}} src = "https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"/>
        </div>
    )
}

export default EmptyCart;