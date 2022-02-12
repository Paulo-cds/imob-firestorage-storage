import DataTable from '../Components/TableGrid'
import {db} from '../firestore.js'
import {useEffect, useState} from 'react'

// component grid with firebase data
const Grid = () => {
const [proprietarios, setProprietarios] = useState([])

const columns = [
  { field: 'proprietario', headerName: 'Proprietario', width: 130 },
  { field: 'inquilino', headerName: 'Inquilino', width: 200 },
  { field: 'imovel', headerName: 'Imovel', width: 130 },
  { field: 'contrato', headerName: 'Contrato', width: 250 },
];  

  useEffect(() => {
    async function fetchProprietarios() {
      const response = db.collection('proprietarios')
      const data = await response.get()
      data.docs.forEach(item =>{
        setProprietarios(prevState => [...prevState, item.data()])
      })
    }
    fetchProprietarios()
  }, [])

  return (
    <>
      <DataTable data={proprietarios} columns={columns}/>
    </>    
  )
}

export default Grid
