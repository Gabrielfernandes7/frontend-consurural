import "./CardRecomendations.css";

const CardRecomendations = () => {
    return (
        <div 
            className="container-recomendations">
            <h1 className="name-nav-point">RECOMENDAÇÕES</h1>
            <div className="text-recomendations">
                Quisque posuere, 
                purus ut egestas vehicula, 
                nisl ante aliquet neque, 
                vitae consectetur nisi erat vitae massa.
            </div>

            <img 
                src="src/assets/icons/icon-happy.png" 
                alt="icon-happy"
                className="icon-recomendations"
            />
        </div>
    )
}

export default CardRecomendations;
