import PropTypes from "prop-types";
import { Card } from "./Card";

export const Gallery = ({cardsData}) => {

    const cardList = cardsData.map((card) => (
        <Card key={card.uid} title={card.name} image="https://blocks.astratic.com/img/general-img-landscape.png"/>
    ))

    return(
        <div>
            {cardList}
        </div>
    )
}