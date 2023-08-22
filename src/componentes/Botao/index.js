import './Botao.css'

// recebendo propriedade filha externa 
const Botao = (props) => {
  return (
    <button className="botao">
        {props.children}
    </button>
  )
}
export default Botao;