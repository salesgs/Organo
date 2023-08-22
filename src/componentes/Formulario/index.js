import {useState} from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa  from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props)=>{ //opções do select
 
  // Hooks
  const [nome,setNome] = useState(''); //por padrão o valor do campo de texto começa vazio
  const [cargo,setCargo] = useState('');
  const [imagem,setImagem] = useState('');
  const [time,setTime] = useState('');

  const aoSalvar = (evento) =>{ //botão de enviar 
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time

    });
    setNome('');//limpa os campos
    setCargo('');//limpa os campos
    setImagem('');//limpa os campos
    setTime(''); //limpa os campos
  }
  return(

    <section className="formulario">
        <form onSubmit={aoSalvar}>
         <h2>Prencha os dados para criar o card do colaborador</h2>
              <CampoTexto 
              obrigatorio={true} 
              label="Nome" 
              placeholder="Digite seu nome"
              valor={nome}
              aoAlterado={valor =>setNome(valor)}
              /> 
            
              <CampoTexto obrigatorio={true} 
              label="Cargo" 
              placeholder="Digite seu Cargo"
              valor={cargo}
              aoAlterado={valor=>setCargo(valor)}
              /> 
              <CampoTexto  obrigatorio={true} 
              label="Imagem" 
              placeholder="Digite o endereço da imagem"
              valor={imagem}
              aoAlterado={valor=>setImagem(valor)}
              /> 
              <ListaSuspensa 
                label="Time" 
                itens={props.times} 
                valor={time}
                aoAlterado={valor=> setTime(valor)}
              />
              <Botao>
                Criar Card
              </Botao>
        </form>
    </section>
  )
}

export default Formulario; //exportando para usar em outro local