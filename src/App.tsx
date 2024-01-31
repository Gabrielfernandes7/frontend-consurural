import CardRecomendations from 
    "./components/CardRecomendations/CardRecomendations";

import CarouselConsultancies from 
    "./components/CarouselConsultancies/CarouselConsultancies";

import CarouselDepoiments from 
    "./components/CarouselDepoiments/CarouselDepoiments";

import HomeComponent from "./components/HomeComponent/HomeComponent";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import SchedulingForm from "./components/SchedulingForm/SchedulingForm";

function App() {
    return (
        <div> 
            <div className="background-home">
                <NavbarHome />
                <HomeComponent />
            </div>

            <h1 className="name-nav-point">CONSULTORIAS</h1>
            <div
                style={{
                    minWidth: 400,
                }}
                className="consultancies-carousel"
            >
                <CarouselConsultancies />
            </div>

            <h1 className="name-nav-point">ORÇAMENTOS</h1>
            <div
                style={{
                    minWidth: 400,
                }}
            >
                <SchedulingForm />
            </div>
      
            <h1 className="name-nav-point">RECOMENDAÇÕES</h1>
            <div
                style={{
                    minWidth: 400,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                <CardRecomendations 
                    description="
                      Quisque posuere, 
                      purus ut egestas vehicula, 
                      nisl ante aliquet neque, 
                      vitae consectetur nisi erat vitae massa."
                    image_card_recomendation="./assets/icons/icon-happy.png"
                    alt_img_card_recomendation="ícone feliz"
                />

                <CardRecomendations 
                    description="
                      Quisque posuere, 
                      purus ut egestas vehicula, 
                      nisl ante aliquet neque, 
                      vitae consectetur nisi erat vitae massa."
                    image_card_recomendation="./assets/icons/security.png"
                    alt_img_card_recomendation="ícone security"
                />
            </div>

            <h1 className="name-nav-point">DEPOIMENTOS</h1>
            <div
                style={{ 
                    minWidth: 400
                }}>
                <CarouselDepoiments  />
            </div>

        </div>
    );
}

export default App;
