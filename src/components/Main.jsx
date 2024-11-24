export default function Main(props) {
    const {data} = props
    return (
        <div className="media-container">
            {data && data.media_type !== 'video' ? (
                <img
                    src={data ? data.hdurl : "src/assets/Rose.png"}
                    alt={data?.title || "Default image"}
                    className="bgimage"
                />
            ) : data && data.media_type === 'video' ? (
                <div className="iframe-wrapper">
                    <iframe
                        src={data.url}
                        className="ytvideo"
                        loading="lazy"
                        title={data?.title || "Video content"}
                        allowFullScreen
                    />
                </div>
            ) : null}
        </div>

    )
}