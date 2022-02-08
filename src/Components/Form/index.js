import { type } from '@testing-library/user-event/dist/type'
import {useState} from 'react'
import './formStyle.scss'


const Form = ({submit}) => {
    const [form, setForm] = useState({
        nome: String,
        endereco: String,
        telefone: Number,
        email: String
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
          <input type='string' name='nome' placeholder='Nome:' onChange={handleForm}/>
          <input type='string' name='endereco' placeholder='Endereço:' onChange={handleForm}/>
          <input type='number' name='telefone' placeholder='Telefone:' onChange={handleForm}/>
          <input type='string' name='email' placeholder='E-mail:' onChange={handleForm}/>
          <button>Cadastrar</button>
        </form>
    )
}

export default Form