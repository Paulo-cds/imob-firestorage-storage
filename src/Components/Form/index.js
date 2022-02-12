import { type } from '@testing-library/user-event/dist/type'
import {useState} from 'react'
import './formStyle.scss'


const Form = ({submit}) => {
    const [form, setForm] = useState({
        proprietario: String,
        inquilino: String,
        imovel: String,
        contrato: String
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
          <input type='string' name='proprietario' placeholder='Proprietario:' onChange={handleForm}/>
          <input type='string' name='inquilino' placeholder='Inquilino:' onChange={handleForm}/>
          <input type='string' name='imovel' placeholder='Imovel:' onChange={handleForm}/>
          <input type='string' name='contrato' placeholder='Contrato:' onChange={handleForm}/>
          <button>Cadastrar</button>
        </form>
    )
}

export default Form