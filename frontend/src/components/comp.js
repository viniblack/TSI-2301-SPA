import Forms from "./forms";
import Home from "./home";


function Comp(props){

    if(!props.logado) { 
        return(<Forms setUsuario={props.setUsuario} setPassword={props.setPassword} verificar={props.verificar}/>)
    } else { 
        return(<Home nomeUser={props.logado.nome} setLogado={props.setLogado}/>)
    }
}
export default Comp;