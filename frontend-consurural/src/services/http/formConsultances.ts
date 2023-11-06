import api from "../api.ts";

export interface CostumerConsultance {
    name: string,
    address: string,
    phone_number: string,
    business_sector: string,
    project_implement: string,
}

export function costumerConsultance(costumerConsultance: CostumerConsultance) {
    return api.post("/formulario/criar/", costumerConsultance);
}

