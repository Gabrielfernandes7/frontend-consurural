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
                image_consultance: "./assets/images/bovinocultura-leiteira.jpg",
                text_consultance: "A consultoria de Bovinocultura leiteira trabalhamos problemas pontuais e também fazemos acompanhamento, onde inclui todo o planejamento forrageiro da propriedade e manejo zootécnico dos animais, gerando uma melhor conversão de lucro com eficiência para o produtor."
            },
            {
                id: 2,
                consultance_name: "Fruticultura",
                image_consultance: "./assets/images/fruticultura1.jpg",
                text_consultance: "A ConsuRural oferece consultoria em fruticultura, abordando questões específicas das plantações e proporcionando acompanhamento completo, visando aumentar lucros e impulsionar o sucesso do produtor a longo prazo.",
            },
            {
                id: 3,
                consultance_name: "Grandes culturas",
                image_consultance: "./assets/images/grandes-culturas.jpg",
                text_consultance: "A ConsuRural: consultoria em grandes culturas, atuando em desafios pontuais e no acompanhamento desde o início para uma nova geração de renda e lucratividade.",
            },
            {
                id: 4,
                consultance_name: "Avicultura",
                image_consultance: "./assets/images/avicultura.jpg",
                text_consultance: "A consultoria de aves da ConsuRural resolve problemas pontuais e oferece consultorias recorrentes, da estrutura à geração de renda, para produtores iniciantes, impulsionando lucros.",
            },
            {
                id: 5,
                consultance_name: "Oleiculturas",
                image_consultance: "./assets/images/olericultura.jpg",
                text_consultance: "A consultoria em olericultura da ConsuRural aborda questões específicas de hortaliças e oferece serviços contínuos, do planejamento à colheita, para produtores iniciantes, visando aumento da rentabilidade e nova fonte de renda.",
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
