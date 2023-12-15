const DiagnosticSurveyForm = () => {
    return (
        <div className="">
            <form action="" method="post">                    
                <input 
                    type="text" 
                    placeholder="Nome" 
                    name="name"
                    id="name"
                />

                <input 
                    type="text" 
                    placeholder="Endereço" 
                    name="address"
                    id="address"
                />

                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="phone_number" 
                    id="number_fone" 
                />

                <input 
                    type="text" 
                    placeholder="Ramo de atividade" 
                    name="business_sector" 
                    id="business_sector" 
                />

                <button className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
};

export default DiagnosticSurveyForm;
