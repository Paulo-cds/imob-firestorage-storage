import './cardStyle.scss'

const Card = (
    {
        nome, email, telefone, endereco, id, handleDelete
    }
) => {    
    return(
        <div className='containerCard'>
            <h3>Cliente</h3>
            <p>Nome: {nome}</p>
            <p>E-mail: {email}</p>
            <p>Telefone: {telefone}</p>
            <p>Endereço: {endereco}</p>
            <p>ID: {id}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Card