import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Detail = () => {

    const { dataType, id } = useParams()
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const res = await fetch(`https://swapi.tech/api/${dataType}/${id}`);
                const data = await res.json();

                setDetails(data.result)
            } catch (err) {
                console.log(err)
            }
        };

        getDetails();
    }, [dataType, id])

    useEffect(() => {
        console.log(details);
    }, [details]);

    if (!details) return <p className="text-white">Cargando...</p>;

    const props = details.properties;

    return (
        <div className="container my-5 text-white detail-container">

            {/* TOP */}
            <div className="row g-0 detail-top rounded overflow-hidden">

                {/* Imagen */}
                <div className="col-md-7">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${dataType}/${id}.jpg`}
                        alt={props.name}
                        className="img-fluid detail-image"
                        onError={(e) => e.target.src = "https://blocks.astratic.com/img/general-img-landscape.png"}
                    />
                </div>

                {/* Panel derecho */}
                <div className="col-md-5 detail-panel p-4 d-flex flex-column justify-content-center">
                    <h1 className="detail-title">
                        {props.name?.toUpperCase()}
                    </h1>

                    <p className="detail-description">
                        {details.description || "No description available."}
                    </p>
                </div>
            </div>

            {/* BOTTOM DINÁMICO */}
            <div className="detail-bottom mt-4 p-4">
                <div className="row text-center">

                    {Object.entries(props)
                        .slice(0, 8) // 👈 limita columnas visibles
                        .map(([key, value]) => (
                            <div className="col" key={key}>
                                <h6>{key.replaceAll("_", " ").toUpperCase()}</h6>
                                <p>{value}</p>
                            </div>
                        ))}

                </div>
            </div>

        </div>
    );

}