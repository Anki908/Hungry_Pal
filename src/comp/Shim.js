const Shimmer = () => {
    return (
        <div className="shimmer-list flex flex-wrap mt-14">
            {Array(10)
            .fill("")
            .map((e , index) => (
                <div key={index} className="shimmercard bg-gray-300 w-[235px] h-60 m-2"></div>
            ))}
        </div>
    )
}
export default Shimmer;