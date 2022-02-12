import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {db} from '../../firestore.js'

const columns = [
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'telefone', headerName: 'Telefone', width: 130 },
  { field: 'endereco', headerName: 'Endereço', width: 250 },
];


export default function DataTable(data) {
  
  const [proprietarios, setProprietarios] = useState([])
  const [load, setLoad] = useState(false)

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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        rows={proprietarios.map((proprietario, index) => {
          return {
            id: index,
            nome: proprietario.nome,
            email: proprietario.email,
            telefone: proprietario.telefone,
            endereco: proprietario.endereco,
          }
        })}
      />
    </div>
  );
}
