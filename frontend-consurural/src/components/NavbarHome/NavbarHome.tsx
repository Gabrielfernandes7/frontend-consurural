import "./NavbarHome.css";
import { Menubar } from "primereact/menubar";

const NavbarHome = () => {
    const items = [
        {
            label: "Inicio",
            icon: "pi pi-fw pi-file",
        },
        {
            label: "Orçamentos",
            icon: "pi pi-fw pi-power-off",
        },
        {
            label: "Depoimentos",
            icon: "pi pi-fw pi-power-off",
        },
        {
            label: "Recomendações",
            icon: "pi pi-fw pi-power-off",
        },
    ];

  interface items {
    label: string;
    icon: string;
  }

  return (
      <div className="card">
          <Menubar
              className="teste"
              model={items}
              start={
                  <img
                      src="./assets/icons/icon.png"
                      className="nav-icon w-12 md:w-16"
                  />
              }
              end={<button className="button-consulting rounded">
                CONSULTORIA
              </button>}
          />
      </div>
  );
};

export default NavbarHome;
