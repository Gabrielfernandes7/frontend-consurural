import CardRecomendations from "./components/CardRecommendations/CardRecomendations";
import CarouselConsultancies from "./components/CarouselConsultancies/CarouselConsultancies";
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

      <div
        className="scheduling-form-app"
        style={{
          minWidth: 400,
        }}
      >
        <SchedulingForm />
      </div>

      <h1 className="name-nav-point">RECOMENDAÇÕES</h1>
      <div className="flex card-recomendations-app">
        <CardRecomendations 
          description="
          Quisque posuere, 
          purus ut egestas vehicula, 
          nisl ante aliquet neque, 
          vitae consectetur nisi erat vitae massa."
          image_card_recomendation='src/assets/icons/icon-happy.png'
          alt_img_card_recomendation='ícone feliz'
        />

        <CardRecomendations 
          description="
          Quisque posuere, 
          purus ut egestas vehicula, 
          nisl ante aliquet neque, 
          vitae consectetur nisi erat vitae massa."
          image_card_recomendation='src/assets/icons/security.png'
          alt_img_card_recomendation='ícone security'
        />

<CardRecomendations 
          description="
          Quisque posuere, 
          purus ut egestas vehicula, 
          nisl ante aliquet neque, 
          vitae consectetur nisi erat vitae massa."
          image_card_recomendation='src/assets/icons/security.png'
          alt_img_card_recomendation='ícone sinal legal'
        />
      </div>
    </div>
  );
}

export default App;
