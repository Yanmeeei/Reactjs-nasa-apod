export default function Footer(props) {
    const {data, handleToggleModel} = props
    const link = <a href={"https://apod.nasa.gov/apod/archivepixFull.html"}>APOD Project</a>
    return (
        <footer>
            <div className={"bgGradient"}></div>
            <div>
                <h1>
                    {link}
                </h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}