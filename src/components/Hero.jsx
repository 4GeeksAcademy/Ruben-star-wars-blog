import PropTypes from "prop-types";

export const Hero = ({title, text}) =>{

    return (
        <div className="py-5 mb-3 hero d-flex justify-content-start">
            <div className="custom-container py-5 ms-5 text-white">
                <h1 className="display-5 fw-bold hero_title">{title}</h1>
                <p className="col-md-8 fs-4">{text}</p>
            </div>
        </div>
    );
}

Hero.prototype = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}