export default function Search(){
    return(
        <div className="d-flex my-3">
            <input type="search" className="form-control me-2" placeholder="Digite o nome do video"/>
            <button type="button" className="btn btn-sm btn-outline-primary">Buscar</button>
        </div>
    )
}