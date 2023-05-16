
function Home(props){

    return (    
        <>
            <h1> funcionou {props.usuarioLogado.usuario} ({props.usuarioLogado.senha})  </h1>
            <button className="w-100 btn btn-lg btn-primary" onClick={()=> props.setUsuarioLogado()}>Sair</button> 
        </>
    )
}

export default Home;