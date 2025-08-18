import { useState, useEffect, FormEvent } from 'react'
import { Input } from './componentsLista/input'
import { Btn } from './componentsLista/btn'
import { v4 as uuidv4 } from "uuid";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartBadge from '@mui/material/Badge';

type Tarefa = {
  id: string;
  name: string;
  preço: string | number;
  qtd: number;
  data: string;
  hora: string;
  checked: boolean;
};



export function Lista1() {
  const [tarefa, setTarefa] = useState<string>('')
  const [addTarefa, setAddTarefa] = useState<Tarefa[]>([])
  const [Preço, setPreço] = useState<string>(parseFloat('0').toFixed(2))
  const [Qtd, setQtd] = useState<number>(1)
  const [dataAtual, setDataAtual] = useState<string>(new Date().toLocaleDateString());
  const [horaAtual, setHoraAtual] = useState<string>(new Date().toLocaleTimeString());
  const [editandoId, setEditandoId] = useState<string | null>(null)
  const [editandoNome, setEditandoNome] = useState<string>('')
  const [editandoPreço, setEditandoPreço] = useState<string>('')
  const [editandoQtd, setEditandoQtd] = useState<number>()
 
  



 
 // Função para adiciona um item na lista
  function handleSetTarefa(e: FormEvent) {
    e.preventDefault()
    if (tarefa.trim() === '') return;

    const agora = new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();

    setAddTarefa((old) => [{
      id: uuidv4(),
      name: tarefa,
      preço: Preço,
      qtd: Qtd,
      data,
      hora,
      checked: false // Inicialmente, o item não está selecionado
    }, ...old])

    setPreço('0')
    setTarefa('')
    setQtd(1)
   
  }

   // Função para escluir um item
  function handleExcluir(id: string) {
    setAddTarefa((old) => old.filter((t) => t.id !== id))
  }

   // Função para editar um item
  function handleEditar(id: string, nomeAtual: string,preçoAtual:string | number,qtdAtual:number) {
    setEditandoId(id)
    setEditandoNome(nomeAtual)
    setEditandoPreço(preçoAtual.toString())
    setEditandoQtd(qtdAtual)
  }

   // Função para salvar a edição de um item
  function handleSalvarEdicao(id: string) {
    setTimeout(() => {
    setAddTarefa((old) =>
      old.map((t) =>
        t.id === id ? { ...t, name: editandoNome , preço : editandoPreço,qtd : Number(editandoQtd)} : t
      )
    )
    setEditandoId(null)
    setEditandoNome('')
    setEditandoPreço('')
    setEditandoQtd(Number())
  },1500)}

   // Função para mostrar a hora e data atual
  useEffect(() => {
    const timer = setInterval(() => {
      const agora = new Date();
      setDataAtual(agora.toLocaleDateString());
      setHoraAtual(agora.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  
// Função para desmarcar todos
const handleChange1 = () => {
  setAddTarefa(prev => prev.map(it => ({ ...it, checked: !it.checked })));
};

  // Função para atualizar valor checked
// alterna um item
  const handleChange2 = (id: string) => {
  setAddTarefa(prev =>
    prev.map(it => it.id === id ? { ...it, checked: !it.checked } : it)
  );
};


  return (
    <div className='formdiv'>
      <h1>CRIE SUA LISTA</h1>
      <form className='form' onSubmit={handleSetTarefa}>
        <div>{dataAtual} {horaAtual}</div>
        <div className='div-inputs'>
          <div>
            <label><h3>ITEM</h3></label>
            <Input
              className='input'
              type="text"
              placeholder="Item"
              onChange={(e) => setTarefa(e.target.value)}
              value={tarefa}
            />
          </div>
          <div>
            <label><h3>QUANTID</h3></label>
            <Input
              className='input-preço'
              type="text"
              placeholder="QTD"
              onChange={(e) => setQtd(Number(e.target.value))}
              value={Qtd}
            />
          </div>
          <div>
            <label><h3>PREÇO</h3></label>
            <Input
              className='input-preço'
              type="text"
              placeholder="Preço"
              onChange={(e) => setPreço(e.target.value)}
              value={Preço}
            />
          </div>
        </div>
        <div className='totaldiv'>
          <Fab type="submit">
  <ShoppingCartIcon fontSize="large"  color="primary"/>
  <CartBadge color="secondary" overlap="circular" />
</Fab>
          <div className='totaisdiv'>
            <div>TOTAL <div className='total'>{addTarefa.reduce((total, e) => total + e.qtd, 0)}</div></div>
            <div>TOTAL <div className='total'>R${addTarefa.reduce((total, e) => total + e.qtd * parseFloat(e.preço.toString()), 0).toFixed(2)}</div></div>
          </div>
        </div>
      </form>

      <ul className='ul'>
        <div className='divheadlista'>
        <h3>LISTA DE ITENS</h3>
         <FormControlLabel
          style={{ width:'2em',height:'em',fontSize: '1.3rem'
        
       }}
        label=""
        control={
          <Checkbox
          
            checked= {addTarefa.length === 3 && !addTarefa.every(item => !item.checked)}
            onChange={handleChange1}
            indeterminate={!addTarefa.every(item => item.checked)  && !addTarefa.every(item => !item.checked)}
          />
        }
      />
  </div>
        {addTarefa.map((e) =>
          <li className='li' key={e.id}>
            <div className='liSpan'>
              {editandoId === e.id ? (
               <> <Input
                  type="text"
                  value={editandoNome}
                  onChange={(ev) => setEditandoNome(ev.target.value)}
                />
                <Input
                  type="text"
                  value={editandoQtd}
                  onChange={(ev) => setEditandoQtd(Number(ev.target.value))}
                />
                <Input
                  type="text"
                  value={editandoPreço}
                  onChange={(ev) => setEditandoPreço(ev.target.value)}
                />
                </>
              ) : (
                <div>{e.name.toUpperCase()}</div>
              )}
              <div>Hora {e.hora}</div>
              <div><Fab>
  <ShoppingCartIcon fontSize="large" color="primary" />
  <CartBadge badgeContent={e.qtd} color="secondary" overlap="circular" />
</Fab></div>
              <div>R${parseFloat(e.preço.toString()).toFixed(2)}</div>
              <div>R${(e.qtd * parseFloat(e.preço.toString())).toFixed(2)}</div>
            </div>

            <div className='divbtns'>
              <Fab aria-label="delete" size="large"
               onClick={() => handleExcluir(e.id)}>
  <DeleteIcon fontSize="large" color="primary"/>
</Fab>

              {editandoId === e.id ? (
                <Fab size='large'  aria-label="save" onClick={() => handleSalvarEdicao(e.id)}>
  <EditIcon fontSize='large' color="primary"/>
</Fab>
              
              ) : (
                <Fab size='large'  aria-label="edit" onClick={() => handleEditar(e.id, e.name,e.preço,e.qtd)}>
  <EditIcon fontSize='large' color="primary"/>
</Fab>
               
              )}        
  <FormControlLabel
      label="Selecionar"
      key={e.id}
        control={
        <Checkbox checked={e.checked}
         onChange={() => handleChange2(e.id)}
      />}
    />
 
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
