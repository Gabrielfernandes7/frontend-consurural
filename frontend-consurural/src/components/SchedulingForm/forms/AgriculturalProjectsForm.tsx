import { AxiosError, AxiosResponse } from "axios";
import { costumerConsultance } from "../../../services/http/formConsultances";
import { ChangeEvent, FormEvent, useState } from 'react';

const AgriculturalProjectsForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone_number: '',
        business_sector: '',
        project_implement: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        costumerConsultance(formData)
          .then((response: AxiosResponse) => {
            return response;
          })
          .catch((error: AxiosError) => {
            return error
          });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    value={formData.address}
                    onChange={handleChange}
                />
                
                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="phone_number" 
                    id="phone_number"
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

                <textarea 
                    name="project_implement" 
                    id="project_implement" 
                    cols={1} rows={10} 
                    placeholder="Qual projeto deseja implementar"
                    value={formData.project_implement}
                    onChange={handleChange}
                >
                </textarea>

                <button type="submit" className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
}

export default AgriculturalProjectsForm;
