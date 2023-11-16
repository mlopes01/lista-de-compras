import { useState } from 'react'
import { FormEvent } from 'react'
import { Input } from './componentsLista/input'
import { Btn } from './componentsLista/btn'

export function Lista() {
    const [tarefa, setTarefa] = useState<string>('')
    const [addTarefa, setAddTarefa] = useState<string[]>([''])

    function handleSetTarefa(e: FormEvent) {
        e.preventDefault()

        if (tarefa.trim() === '') return;
        setAddTarefa((oldAddTarefa) => [tarefa, ...oldAddTarefa])
        setTarefa('');

    }



    return (
        <div className='formdiv'>
            <h1>Lista de Tarefas</h1>
            <form className='form' onSubmit={handleSetTarefa}>
                <label htmlFor=""><h3>Tarefa</h3></label>
                <Input
                    type="text"
                    placeholder="Insira o nome da tarefa"
                    onChange={(e) => setTarefa(e.target.value)}
                    value={tarefa}
                ></Input>
                <Btn type="submit">Criar</Btn>
            </form>
            <ul className='ul'><h3>Tarefas Criadas </h3>{addTarefa.map((lista) =>
                <li className='li'>{lista}</li>
            )}</ul>
        </div>

    )
} 