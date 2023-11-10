import { useEffect, useState } from "react";
import "./favoritos.css"
import { Link, json } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos(){
    const [filmes, setFilmes] = useState([])
    
    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        } )

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("FILME REMOVIDO COM SUCESSO")
    }


    return(
        <div className="meus-filmes">
            <h1>Meus Fimes</h1>

                {filmes.length === 0 && <span>Você não Tem Nenhum Filme Salvo :( </span>}
            <u1>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id) } >Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </u1>
        </div>
    )
}

export default Favoritos;