import PropTypes from 'prop-types';

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

Main.propTypes = {
    data: PropTypes.shape({
        media_type: PropTypes.string.isRequired,
        hdurl: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
    }),
}