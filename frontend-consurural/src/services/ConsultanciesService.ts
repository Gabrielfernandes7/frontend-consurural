export interface DataConsultance {
    id: number,
    consultance_name: string,
    image_consultance: string,
}

export const ConsultanciesService = {
    getConsultanciesData(): DataConsultance[] {
        return [
            {
                id: 1,
                consultance_name: "Bovinocultura leitera",
                image_consultance: "/src/assets/images/pecuaria-leiteira 1.jpg",
            },
            {
                id: 2,
                consultance_name: "Fruticultura",
                image_consultance: "/src/assets/images/pecuaria-leiteira 1.jpg",
            },
            {
                id: 3,
                consultance_name: "Grandes culturas",
                image_consultance: "/src/assets/images/pecuaria-leiteira 1.jpg",
            },
            {
                id: 4,
                consultance_name: "Avicultura",
                image_consultance: "/src/assets/images/pecuaria-leiteira 1.jpg",
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
