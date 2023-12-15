const IrrigationEfficiencyTestsForm = () => {
    return (
        <div>
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
                    id="phone_number" 
                />

                <input 
                    type="text" 
                    placeholder="Ramo de atividade" 
                    name="business_sector" 
                    id="business_sector" 
                />

                <input 
                    type="text" 
                    placeholder="Qual sistema de irrigação ?" 
                    name="irrigation_system" 
                    id="irrigation_system" 
                />

                <button className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
};

export default IrrigationEfficiencyTestsForm;
