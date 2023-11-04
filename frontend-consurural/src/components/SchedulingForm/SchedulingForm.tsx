import { useState } from "react";

import DiagnosticSurveyForm from "./forms/DiagnosticSurveyForm";
import ConsultanciesForm from "./forms/ConsultanciesForm";
import AgriculturalProjectsForm from "./forms/AgriculturalProjectsForm";
import IrrigationEfficiencyTestsForm from "./forms/IrrigationEfficiencyTestsForm";

import { Dropdown } from "primereact/dropdown";
import "./SchedulingForm.css";

const SchedulingForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: any
  ) => {
    setSelectedOption(event.target.value.code);
    console.log(event.target.value.code);
  };

  function renderForm(selectedOption: string) {
    switch (selectedOption) {
      case "1":
        return <DiagnosticSurveyForm />;
      case "2":
        return <ConsultanciesForm />;
      case "3":
        return <AgriculturalProjectsForm />;
      case "4":
        return <IrrigationEfficiencyTestsForm />;
    }
  }

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Levantamento de diagnóstico", code: "1" },
    { name: "Consultorias", code: "2" },
    { name: "Projetos agropecuários", code: "3" },
    { name: "Testes de eficiência de irrigação", code: "4" },
  ];

  return (
    <div className="container-scheduling-form">
      <h1 className="name-nav-point">ORÇAMENTOS</h1>

      <div className="container-dropdown rounded-xl">
        <h1 className="py-4">COM O QUE A CONSURURAL PODE TE AJUDAR HOJE ?</h1>

        <div>
          <Dropdown
            style={{
              backgroundColor: "#272D7B",
            }}
            value={selectedCity}
            onChange={handleDropdownChange}
            options={cities}
            optionLabel="name"
            placeholder="Serviços"
          />
        </div>
      </div>

      <div className="container-forms-services flex flex-col md:flex-row rounded-2xl">
        {selectedOption && (
          <div>
            <div className="form-h1">
              <h1>Formulário</h1>
            </div>

            <div className="forms">{renderForm(selectedOption)}</div>
          </div>
        )}

        <div className="about-consurural-and-logo">
          <img
            className="logo-consurural-about h-32 w-32 md:h-36 md:w-36"
            src="/src/assets/images/consurural-logo.jpg"
            alt="Logo da consurural"
          />
          <h2 className="about">
            Somos uma empresa de{" "}
            <b className="highlighted-text">
              Assistência Técnica e extensão Rural
            </b>{" "}
            com foco no{" "}
            <b className="highlighted-text">desenvolvimento agropecuário</b>{" "}
            para pequenos, médios e grandes produtores rurais.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SchedulingForm;
