export interface DataDepoiments {
  id: number;
  costumer_author_depoiment: string;
  text_depoiment: string;
}

export const DepoimentsService = {
  getDepoimentsData(): DataDepoiments[] {
    return [
      {
        id: 1,
        costumer_author_depoiment:
          "Produtora Juliana Mara – Consultoria de Gestão na avicultura",
        text_depoiment:
          // eslint-disable-next-line max-len
          '"Depois da consultoria da consurural teve incremento de 18% nos lucros da produção"',
      },
      {
        id: 2,
        costumer_author_depoiment:
          // eslint-disable-next-line max-len
          "Produtor Luan de frança – Consultoria Interpretação de análise de solo",
        text_depoiment: '"O técnico resolveu todas as dúvidas que tínhamos"',
      },
      {
        id: 3,
        costumer_author_depoiment:
          "Produtora Juliana Mara – Consultoria de Gestão na Avicultura",
        text_depoiment:
          "Depois da consultoria da Consurural, tivemos um incremento de 18% nos lucros da produção.",
      },
      {
        id: 4,
        costumer_author_depoiment:
          "Produtor Luan de França – Consultoria Interpretação de Análise de Solo",
        text_depoiment: "O técnico resolveu todas as dúvidas que tínhamos.",
      },
      {
        id: 5,
        costumer_author_depoiment:
          "Agricultora Beatriz Oliveira – Consultoria de Gestão na Avicultura",
        text_depoiment:
          "Com a orientação da Consurural, otimizamos o plantio e aumentamos nossa produtividade em 25%.",
      },
      {
        id: 6,
        costumer_author_depoiment:
          "Agropecuarista Ricardo Santos – Consultoria Interpretação de Análise de Solo",
        text_depoiment:
          "A expertise da Consurural no manejo nutricional transformou positivamente nossos resultados, proporcionando uma nutrição balanceada para nosso rebanho.",
      },
      {
        id: 7,
        costumer_author_depoiment:
          "Engenheira Florestal Marina Alves – Consultoria de Gestão na Avicultura",
        text_depoiment:
          "A consultoria da Consurural foi crucial para implementarmos práticas sustentáveis em nosso manejo florestal, contribuindo para a preservação ambiental.",
      },
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
