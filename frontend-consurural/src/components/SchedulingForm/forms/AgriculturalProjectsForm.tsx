const AgriculturalProjectsForm = () => {
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
                    name="Endereço" 
                    id="address" 
                />
                
                <input 
                    type="text" 
                    placeholder="Telefone" 
                    name="Telefone" 
                    id="phone_number" 
                />
                
                <input 
                    type="text" 
                    placeholder="Ramo de atividade" 
                    name="business_sector" 
                    id="business_sector" 
                />

                <textarea 
                    name="project-implement" 
                    id="project-implement" 
                    cols={1} rows={10} 
                    placeholder="Qual projeto deseja implementar">
                </textarea>

                <button className="button-form">
                    Entrar em contato
                </button>
            </form>
        </div>
    );
};

export default AgriculturalProjectsForm;
