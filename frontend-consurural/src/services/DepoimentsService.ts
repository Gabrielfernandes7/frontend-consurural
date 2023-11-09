export interface DataDepoiments {
    id: number,
    costumer_author_depoiment: string
    text_depoiment: string,
}

export const DepoimentsService = {
    getDepoimentsData(): DataDepoiments[] {
        return [
            {
                id: 1,
                costumer_author_depoiment: 'Produtora Juliana Mara – Consultoria de Gestão na avicultura',
                text_depoiment: '"Depois da consultoria da consurural teve incremento de 18% nos lucros da produção"',
            },
            {
                id: 2,
                costumer_author_depoiment: 'Produtor Luan de frança – Consultoria Interpretação de análise de solo',
                text_depoiment: '"O técnico resolveu todas as dúvidas que tínhamos"',
            }
        ];
    },
    
    getDepoimentsMini() {
        return Promise.resolve(this.getDepoimentsData().slice(0, 5));
    },

    getDepoimentsSmall(): Promise<DataDepoiments[]> {
        return Promise.resolve(this.getDepoimentsData().slice(0, 10));
    },

    getDepoiments() {
        return Promise.resolve(this.getDepoimentsData());
    },
};
