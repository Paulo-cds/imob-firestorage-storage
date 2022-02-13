import { DataGrid } from '@mui/x-data-grid';
import Card from '../Card'
import { useState } from 'react';
import './tableStyle.scss'



export default function DataTable({data,columns}) {    
  const [cardComplet, setCardComplet] = useState(false)
  const [itemsCard, setItemsCard] = useState([])

  const handleSetCard = e => {
    if(e.row.id === itemsCard.id && cardComplet === true){
      setCardComplet(false)
    }else{
      setItemsCard(e.row)
      setCardComplet(true)
    }
    
  }

  return (
    <div className='containerTable'>
      <div style={{ height: 600, width: '90%' }}>
        <DataGrid
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onRowClick={(e)=>handleSetCard(e)}
          rows={data.map((proprietario, index) => {
            return {
              id: index,
              contrato: proprietario.contrato,
              proprietario: proprietario.proprietario,
              inquilino: proprietario.inquilino,
              imovel: proprietario.imovel,
              endereco: proprietario.endereco,
            }
          })}        
        />
      </div>
      <div className='Card' style={{display : cardComplet ? 'flex' : 'none'}}>
        <Card
          contrato={itemsCard.contrato}
          proprietario={itemsCard.proprietario}
          inquilino={itemsCard.inquilino}
          imovel={itemsCard.imovel}
          endereco={itemsCard.endereco}
          // id={propId[index]}              
          //handleDelete={handleDelete}
          // key = {index}
        /> 
        <p className='Close' onClick={()=>setCardComplet(false)}>Fechar</p>
      
      </div>

    </div>
  );
}
