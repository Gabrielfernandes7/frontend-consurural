import { useState } from "react";
import api from "../../../services/api";

const DiagnosticSurveyForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        adress: "",
        phone_number: "",
        business_sector: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await api.post("/formulario/criar", formData);
            console.log("Resposta da requisição:", response.data);
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
        }
    };

    return (
        <div className="">
            <form
                onSubmit={handleSubmit} 
                method="post">                    
                <input 
                    type="text" 
                    placeholder="Nome" 
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    placeholder="Endereço" 
                    name="address"
                    id="address"
                    value={formData.adress}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="phone_number" 
                    id="number_fone"
                    value={formData.phone_number}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    placeholder="Ramo de atividade" 
                    name="business_sector" 
                    id="business_sector" 
                    value={formData.business_sector}
                    onChange={handleChange}
                />

                <button
                    type="submit" 
                    className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
};

export default DiagnosticSurveyForm;
