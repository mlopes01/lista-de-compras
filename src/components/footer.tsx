import { Logo, Sociais } from "./images"


export function Rodape() {

    return (

        <footer>
            <span className='spandev'><h3>Desenvolvedores</h3>
                <p>Nara,Allan,Marcelo <br />Estudantes de FrontEnd </p>
            </span>
            <div className="copydiv">&copy; {2023}<line />NAM<line />todos os direitos reservados</div>
            <div className="Scontato">
                <h3>Sociais</h3>
                <div className="contato">
                    <div className="sociais">Nara<Sociais></Sociais> </div>
                    <div className="sociais">Allan<Sociais></Sociais> </div>
                    <div className="sociais">Marcelo<Sociais></Sociais> </div>
                </div>
            </div>
        </footer>
    )
}