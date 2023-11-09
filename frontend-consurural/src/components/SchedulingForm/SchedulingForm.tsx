import { useState } from "react";

import DiagnosticSurveyForm from "./forms/DiagnosticSurveyForm";
import ConsultanciesForm from "./forms/ConsultanciesForm";
import AgriculturalProjectsForm from "./forms/AgriculturalProjectsForm";
import IrrigationEfficiencyTestsForm from "./forms/IrrigationEfficiencyTestsForm";

import "./SchedulingForm.css"

const SchedulingForm = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    function renderForm(selectedOption: string) {
        switch (selectedOption) {
            case "1":
                return <DiagnosticSurveyForm />
            case "2":
                return <ConsultanciesForm />
            case "3":
                return <AgriculturalProjectsForm />
            case "4":
                return <IrrigationEfficiencyTestsForm />
        }
    }

    return (
        <div className="container-scheduling-form">
            <div className="container-dropdown rounded-xl">
                <h1 className="py-4">
                    COM O QUE A CONSURURAL PODE TE AJUDAR HOJE ?
                </h1>

                <select
                    className="rounded-md"
                    name="dropdown-consultancies" 
                    id="dropdown-consultancies"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    style={{
                        minWidth: 100
                    }}
                >
                    <option value="" disabled> 
                        Serviços 
                    </option>
                    <option value="1"> 
                        Levantamento de diagnóstico 
                    </option>
                    <option value="2"> 
                        Consultorias 
                    </option>
                    <option value="3"> 
                        Projetos agropecuários 
                    </option>
                    <option value="4"> 
                        Testes de eficiência de irrigação 
                    </option>
                </select> 
            </div>

            <div 
                className="container-forms-services flex flex-col md:flex-row rounded-2xl">
                { selectedOption && (
                    <div>
                        <div className="form-h1">
                            <h1>
                                Formulário
                            </h1>
                        </div>

                        <div className="forms">
                            { renderForm(selectedOption) }
                        </div>
                    </div>
                )}

                <div className="about-consurural-and-logo">
                    <img 
                        className="logo-consurural-about h-32 w-32 md:h-36 md:w-36"
                        src="./assets/images/consurural-logo.jpg"
                        alt="Logo da consurural" 
                    />
                    <h2 className="about">
                        Somos uma empresa 
                        de <b className="highlighted-text">
                            Assistência Técnica e extensão Rural
                        </b> com foco no <b className="highlighted-text">
                            desenvolvimento agropecuário
                        </b> para pequenos, médios e grandes produtores rurais.
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default SchedulingForm;
