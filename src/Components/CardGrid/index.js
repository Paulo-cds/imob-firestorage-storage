import './cardStyle.scss'
import DenseTable from '../SimpleTable'

const Card = (
    {
        contrato,
        proprietario,
        inquilino,
        imovel,
        endereco,
        //id,
        manutencoes,        
        handleDelete
    }
    
) => {        
    
    return(
        <div className='containerCard'>
            <h3>Locação</h3>   
            <hr width width={'70%'}/>
            <p>Contrato: {contrato}</p>
            <hr width width={'70%'}/>         
            <p>Proprietario: {proprietario}</p>
            <hr width width={'70%'}/>
            <p>Inquilino: {inquilino}</p> 
            <hr width width={'70%'}/>
            <p>Imóvel: {imovel}</p>
            <hr width width={'70%'}/>
            <p>Endereço: {endereco}</p>
            <hr width width={'70%'}/>
            {/* {manutencoes && manutencoes.map(manutencao=>(
                manutencao.mes.map(descricao=>(
                    <>
                    <p>Data {descricao.data}</p>
                    <p>descrição: {descricao.descricao}</p>
                    <p>Valor: {descricao.valor}</p>
                    <p>Responsavel: {descricao.responsavel}</p>
                    </>
                ))
            ))} */}
            {
                manutencoes && 
                <DenseTable manutencoes={manutencoes} />
            }
            <br/><br/>
            {/* <p>ID: {id}</p> */}
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    )
}

export default Card