import './cardStyle.scss'

const Card = (
    {
        proprietario, inquilino, imovel, contrato, id, handleDelete
    }
) => {    
    return(
        <div className='containerCard'>
            <h3>Locação</h3>   
            <hr width width={'70%'}/>         
            <p>Proprietario: {proprietario}</p>
            <hr width width={'70%'}/>
            <p>Inquilino: {inquilino}</p>
            <hr width width={'70%'}/>
            <p>Imovel: {imovel}</p>
            <hr width width={'70%'}/>
            <p>Contrato: {contrato}</p>
            <br/><br/>
            {/* <p>ID: {id}</p> */}
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Card