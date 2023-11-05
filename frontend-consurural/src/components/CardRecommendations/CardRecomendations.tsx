import "./CardRecomendations.css";

export interface RecomendationCard {
    description: string,
    image_card_recomendation: string,
    alt_img_card_recomendation: string
}

const CardRecomendations = 
    ({ 
        description, 
        image_card_recomendation, 
        alt_img_card_recomendation }: RecomendationCard) => {
    return (
        <div 
            className="
                flex container-recomendations">
            <div className="card-recomendations">
                <div className="text-recomendations">
                    { description }
                </div>
                <img
                    src={image_card_recomendation}
                    alt={alt_img_card_recomendation}
                    className="icon-recomendations"
                />
            </div>
        </div>
    )
}

export default CardRecomendations;
