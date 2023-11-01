export interface DataConsultance {
    id: number,
    consultance_name: string,
    image_consultance: string,
    text_consultance: string,
}

export const ConsultanciesService = {
    getConsultanciesData(): DataConsultance[] {
        return [
            {
                id: 1,
                consultance_name: "Bovinocultura leitera",
                image_consultance: "/src/assets/images/bovinocultura-leiteira.jpg",
                text_consultance: "A consultoria de Bovinocultura leiteira trabalhamos problemas pontuais e também fazemos acompanhamento, onde inclui todo o planejamento forrageiro da propriedade e manejo zootécnico dos animais, gerando uma melhor conversão de lucro com eficiência para o produtor."
            },
            {
                id: 2,
                consultance_name: "Fruticultura",
                image_consultance: "/src/assets/images/fruticultura.jpg",
                text_consultance: "",
            },
            {
                id: 3,
                consultance_name: "Grandes culturas",
                image_consultance: "/src/assets/images/grandes-culturas.jpg",
                text_consultance: "",
            },
            {
                id: 4,
                consultance_name: "Avicultura",
                image_consultance: "/src/assets/images/avicultura.jpg",
                text_consultance: "A consultoria de aves da consurural trabalha tanto problemas pontuais do plantel das aves, como também fazemos consultoria recorrentes, da parte de implantação da estrutura a todo acompanhamento de implantação para o produtor que quer começar do zero, trazendo não só a questão do aumento de lucro, mas também pra realidade do produtor a implantação de uma nova geração de renda.",
            },
            {
                id: 5,
                consultance_name: "Oleiculturas",
                image_consultance: "/src/assets/images/olericultura.jpg",
                text_consultance: "",
            }
        ];
    },
    
    getConsultanciesMini() {
        return Promise.resolve(this.getConsultanciesData().slice(0, 5));
    },

    getConsultanciesSmall(): Promise<DataConsultance[]> {
        return Promise.resolve(this.getConsultanciesData().slice(0, 10));
    },

    getConsultancies() {
        return Promise.resolve(this.getConsultanciesData());
    },
};
