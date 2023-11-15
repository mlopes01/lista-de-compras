import { useState } from 'react'
import { FormEvent } from 'react'
import { Input } from './componentsLista/input'
import { Btn } from './componentsLista/btn'

export function Lista() {
    const [tarefa, setTarefa] = useState<string>('')
    const [addTarefa, setAddTarefa] = useState<string[]>([''])
    const [descricao, setDescricao] = useState<string>('')

    //excluirLista = () => {
    //if (window.confirm('Tem certeza que deseja excluir a lista?')) {
    //  this.setState({ itens: [], novoItemTexto: '' });
    //}
    //};

    function handleSetTarefa(e: FormEvent) {
        e.preventDefault()

        if (tarefa === '') return
        setAddTarefa((oldAddTarefa) => [tarefa, descricao, ...oldAddTarefa])
        setTarefa('');
        setDescricao('');
    }
    return (
        <div className='formdiv'>
            <form className='form' onSubmit={handleSetTarefa}>
                <label htmlFor="">Tarefa</label>
                <Input
                    size={50}
                    type="text"
                    placeholder="Insira o nome da tarefa"
                    onChange={(e) => setTarefa(e.target.value)}
                    value={tarefa}
                ></Input>
                <label htmlFor="">Descrição</label>
                <Input
                    size={100}
                    type="text"
                    placeholder="Insira a descrição da tarefa"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao} ></Input>
                <Btn type="submit">Criar</Btn>

            </form>
            <ul className='ul'>Listas Criadas {addTarefa.map((lista) =>
                <li key={lista}>{lista}{descricao} </li>
            )}</ul>
        </div>

    )
} 