import CarouselConsultancies from './components/CarouselConsultancies/CarouselConsultancies';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavbarHome from './components/NavbarHome/NavbarHome';
import SchedulingForm from './components/SchedulingForm/SchedulingForm';

function App() {

  return (
    <div>
      <div className="background-home">
        <NavbarHome />
        <HomeComponent />
      </div>

      <div className="consultancies-carousel">
        <CarouselConsultancies />
      </div>

      <div>
        <SchedulingForm />
      </div>
    </div>
  )
}

export default App;
