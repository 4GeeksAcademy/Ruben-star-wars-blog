import PropTypes from "prop-types";

export const Card = ({title, image, id, dataType}) => {
    return (
        <div className="card text-white bg-dark mb-3" >
            <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={`/detail/${dataType}/${id}`} className="btn btn-primary">Más detalles</a>
                </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    dataType: PropTypes.string.isRequired
}

Card.defaultProps = {
  image: "https://blocks.astratic.com/img/general-img-landscape.png",
};