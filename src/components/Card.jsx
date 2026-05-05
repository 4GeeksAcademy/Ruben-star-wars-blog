import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const Card = ({ title, image, id, dataType }) => {

    const { store, dispatch } = useGlobalReducer()
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (!store.favorites) {
            for (let favorite of store.favorites) {
                console.log("useEffect")
                if (favorite.id === id && favorite.type === dataType) {
                    setIsFavorite(true)
                    console.log("useEffect true");

                }
            }
        }
    }, [isFavorite])

    const add_favorite = () => {
        console.log(store.favorites);
        dispatch({
            type: "ADD_FAVORITE",
            payload: { "id": id, "name": title, "type": dataType }
        })
        setIsFavorite(true)
    }

    const remove_favorite = () => {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: { "id": id, "name": title, "type": dataType }
        })
        setIsFavorite(false)
    }

    const favorite_action = () => {
        if(!isFavorite){
            add_favorite()
        }
        if(isFavorite){
            remove_favorite()
        }
    } 

    return (
        <div className="card text-white bg-dark mb-3" >
            <img src={image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex justify-content-between">
                    <a href={`/detail/${dataType}/${id}`} className="btn btn-primary">Más detalles</a>
                    <button className="bg-dark" onClick={() => favorite_action()}>
                        {isFavorite ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart text-danger"></i>}
                    </button>
                </div>
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