export default function SideBar(props) {
    const {data, handleToggleModel} = props
    return (
        <div className={"sideBar"}>
            <div className={"bgOverlay"} onClick={handleToggleModel}></div>
            <div className={"sideBar-content"}>
                <h2>{data?.title}</h2>
                <div className={"description-container"}>
                    <p className={"description-title"}>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModel}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}