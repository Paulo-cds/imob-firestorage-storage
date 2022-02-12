import './FirestoreStyle.scss';
import Card from '../Components/Card'
import Form from '../Components/Form'
import { useNavigate } from "react-router-dom"
//import { collection, doc, setDoc } from "firebase/firestore"
import React,{useEffect, useState} from 'react'
import {db} from '../firestore.js'
//import { getFirestore, collection, getDoc } from "registerFirestore"


//import * as firebase from "firebase/compat/app"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
//import 'firebase/compat/auth'
//import "firebase/compat/storage"




function AddFirestore() {
  const [proprietarios, setProprietarios] = useState([])
  const [propId, setPropId] = useState([])
  const [controlForm, setControlForm]= useState(false)
  let navigate = useNavigate()  
  require("firebase/firestore")


  /******Função que adiciona proprietário******/
  const addProp = async (form) => {
    
    await db.collection("proprietarios").doc().set(
      {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        endereco: form.endereco.value
      }
    ).then(() => {
      console.log("Incluido com sucesso")
      setControlForm(false)
    })
    .catch((err) => {console.log(err)})
  } 

  /******Função que faz o Get dos proprietários******/
  const fetchProprietarios = async () => {       
    const response = db.collection('proprietarios')
    const data = await response.get()    
    data.docs.forEach(item =>{
      setProprietarios(prevState => [...prevState, item.data()])      
      setPropId(prevState => [...prevState, item.id])
    })         
  }
  


  /******Função que faz o delete dos proprietários******/
  const handleDelete = (id) => {
    db.collection("proprietarios").doc(id).delete()
    .then(() => 
    {console.log("deletado com sucesso!")
      setProprietarios([])
      fetchProprietarios()
    })
    .catch((err) => console.log(err))
  }
  

  return (
    <div className="App">
      <div>
        <button onClick={() => navigate(`/`)}>Home</button>
        <button onClick={() => navigate(`/storage`)}>Storage</button>
        <button onClick={() => navigate(`/ListData`)}>Lista Completa</button>
      </div>
      <div className='Buttons'>
        <button onClick={() => fetchProprietarios()}>Listar Proprietários</button>
        <button onClick={()=>{setControlForm(true)}}>Adicionar Proprietário</button>
      </div>
      <div className='CardsClients'>
        {
          proprietarios &&
          proprietarios.map((proprietario, index) => (            
            <Card
              nome={proprietario.nome}
              email={proprietario.email}
              telefone={proprietario.telefone}
              endereco={proprietario.endereco}
              id={propId[index]}              
              handleDelete={handleDelete}
              key = {index}
            />            
          ))
        }
      </div>
      <div className='FormAdd'>
        {
          controlForm &&
          <Form submit={addProp}/>
        }
      </div>
    </div>
  );
}

export default AddFirestore;
