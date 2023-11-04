import "./NavbarHome.css";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

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

  const start = <div></div>;
  const end = (
    <div className="p-menu-list">
      {items.map((e) => (
        <button className="">{e.label} | </button>
      ))}
    </div>
  );

  interface items {
    label: string;
    icon: string;
  }

  /* function EndMenu({ items }: { items: items[] }) {
    return (
      <div className="p-menubar">
        {items.map((item, index) => (
          <li key={index}>
            <a
              style={{
                color: "black",
              }}
              role="menuitem"
              className="p-menuitem-link"
            >
              {item.label}
            </a>
          </li>
        ))}
        <button className="button-consulting rounded">CONSULTORIA</button>
      </div>
    );
  } */

  return (
    <div className="card">
      <Menubar
        model={items}
        start={
          <img
            src="/src/assets/icons/icon.png"
            className="nav-icon w-12 md:w-16"
            style={
              {
                //   height: 100,
                //   maxWidth: "40px !important",
              }
            }
          />
        }
        end={<button className="button-consulting rounded">CONSULTORIA</button>}
      />
    </div>

    // <div>
    //   <nav className="nav">
    //     <ul className="navbar-items">
    //       <li>Inicio</li>
    //       <li>Orçamentos</li>
    //       <li>Depoimentos</li>
    //       <li>Recomendações</li>

    //       <button className="button-consulting rounded">CONSULTORIA</button>
    //     </ul>
    //     <img
    //       src="/src/assets/icons/icon.png"
    //       className="nav-icon w-12 md:w-16"
    //     />
    //   </nav>
    // </div>
  );
};

export default NavbarHome;
