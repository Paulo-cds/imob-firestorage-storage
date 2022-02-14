import DataTable from '../Components/TableGrid'
import {db} from '../firestore.js'
import {useEffect, useState} from 'react'

// component grid with firebase data
const Grid = () => {
const [proprietarios, setProprietarios] = useState([])
const [propId, setPropId] = useState([])

// disposição das colunas da grid
const columns = [
  { field: 'contrato', headerName: 'Contrato', width: 130 },
  { field: 'proprietario', headerName: 'Proprietário', width: 130 },
  { field: 'inquilino', headerName: 'Inquilino', width: 200 }, 
  { field: 'imovel', headerName: 'Imóvel', width: 130 },
  { field: 'endereco', headerName: 'Endereço', width: 400 }, 
];  

  useEffect(() => {
    async function fetchProprietarios() {
      const response = db.collection('proprietarios')
      const data = await response.get()
      data.docs.forEach(item =>{
        setProprietarios(prevState => [...prevState, item.data()])
        setPropId(prevState => [...prevState, item.id])
      })
    }
    fetchProprietarios()
  }, [])  

  return (
    <>
      <DataTable data={proprietarios} propId={propId} columns={columns}/>
    </>    
  )
}

export default Grid
