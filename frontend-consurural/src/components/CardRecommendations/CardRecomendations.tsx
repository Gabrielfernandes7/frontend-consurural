import "./CardRecomendations.css";

export interface RecomendationCard {
    description: string,
    image_card_recomendation: string
}

const CardRecomendations = ({ description, image_card_recomendation }: RecomendationCard) => {
    return (
        <div className="container-recomendations">

            <h1 className="name-nav-point">RECOMENDAÇÕES</h1>

            <div className="card-recomendations">
                <div className="text-recomendations">
                    { description }
                </div>
                <img
                    src={image_card_recomendation}
                    alt="icon-happy"
                    className="icon-recomendations"
                />
            </div>
        </div>
    )
}

export default CardRecomendations;
