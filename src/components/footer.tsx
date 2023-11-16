import { Logo, Sociais } from "./images"


export function Rodape() {

    return (

        <footer>
            <span><h3>Desenvolvedores</h3>
                <p>Nara...Allan...Marcelo <br />Estudantes de FrontEnd </p>
            </span>
            <p>&copy; {2023}      <p>Nara...Allan...Marcelo</p>  todos os direitos reservados</p>
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