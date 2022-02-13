import { type } from '@testing-library/user-event/dist/type'
import {useState} from 'react'
import './formStyle.scss'


const Form = ({submit}) => {
    const [form, setForm] = useState({
        contrato: String,
        proprietario: String,
        inquilino: String, 
        imovel: String,
        endereco: String,
    })    

    const handleForm = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(form)
    }
    return(
        <form onSubmit={(e)=>handleSubmit(e)} className='form'>
          <input type='string' name='contrato' placeholder='Contrato:' onChange={handleForm}/>
          <input type='string' name='proprietario' placeholder='Proprietário:' onChange={handleForm}/>
          <input type='string' name='inquilino' placeholder='Inquilino:' onChange={handleForm}/>
          <input type='string' name='imovel' placeholder='Imóvel:' onChange={handleForm}/>
          <input type='string' name='endereco' placeholder='Endereço:' onChange={handleForm}/>
          <button>Cadastrar</button>
        </form>
    )
}

export default Form