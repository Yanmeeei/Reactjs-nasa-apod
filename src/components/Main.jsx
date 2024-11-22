export default function Main(props) {
    const {data} = props
    return (
        <div className="image-container">
            <img src={data? data.hdurl : "src/assets/Rose.png"} alt={data?.title} className="bgimage"/>
        </div>
    )
}