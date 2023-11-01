import "./CardRecomendations.css";

export interface DescriptionCard {
    description: string
}

const CardRecomendations = ({ description }: DescriptionCard) => {
    return (
        <div className="container-recomendations">

            <h1 className="name-nav-point">RECOMENDAÇÕES</h1>

            <div className="card-recomendations">
                <div className="text-recomendations">
                    { description }
                </div>
                <img
                    src="src/assets/icons/icon-happy.png"
                    alt="icon-happy"
                    className="icon-recomendations"
                />
            </div>
        </div>
    )
}

export default CardRecomendations;
