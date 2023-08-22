import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js'
import Time from './componentes/Time/index.js';
function App() {
  const times =[
    {
      nome:'Porgramação',
      corPrimaria:' #57c278',
      corSecundaria:' #d9f7e9'
    },
    {
      nome:'Front-End ',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Data-Sience',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f8e2'
    },
    {
      nome:'Devops',
      corPrimaria:'#e06869',
      corSecundaria:'#fde7e8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#d86e8f',
      corSecundaria:'#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#ffba05',
      corSecundaria:'#fff5d9'
    },
    {
      nome:'Inovação e Gestaão',
      corPrimaria:'#ff8a29',
      corSecundaria:'#ffeefd'
    }
  ] 
  
  const [colaboradores, setColaboradores ] = useState([]);
  const aoNovocolaboradorAdicionado =(colaborador)=>{
   setColaboradores([...colaboradores,colaborador])
  }
  
  return (
    <div className="App">
      <Banner /> 
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovocolaboradorAdicionado(colaborador)}/>
       {times.map((time =>
       <Time key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />
   ))}
    </div>
  );
}

export default App; //Exportando index.js renderiza
