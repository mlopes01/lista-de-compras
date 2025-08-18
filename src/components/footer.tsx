import { Logo, Sociais } from "./images"


export function Rodape() {

    return (

        <footer className="footer">
            <span className='spandev'>
            </span>
            <div className="copydiv"><line />LISTA DE COMPRAS<line /></div>
            <div className="Scontato">
                <h3>Sociais</h3>
                <div className="contato">
                    <div className="sociais"><Sociais></Sociais> </div>
                </div>
            </div>
        </footer>
    )
}