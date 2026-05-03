import PropTypes from "prop-types";

export const Card = ({title, image, url}) => {
    return (
        <div class="card text-white bg-dark" >
            <img src={image} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <a href={url} class="btn btn-primary">Más detalles</a>
                </div>
        </div>
    )
}

Card.PropTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}