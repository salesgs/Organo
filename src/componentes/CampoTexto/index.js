import './CampoTexto.css'
const CampoTexto  = (props)=> { //props => propriedades de um componente
  //  {props.label} =>variável JavaScript 
  
  const placeholderModificada =`${props.placeholder}`

    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value); //Hook que contém o estado do componente
    }

   return(
    <div className="campo-texto">
      <label>
          {props.label}
      </label> 
      <input value={props.valor} onChange={aoDigitado}  required={props.obrigatorio}  placeholder={placeholderModificada}/>
      </div>
    )
}

// exportando arrowFunction para usar no App.js => principal
export default CampoTexto;