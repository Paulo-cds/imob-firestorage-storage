import { DataGrid } from '@mui/x-data-grid';
import Card from '../CardGrid'
import { useState } from 'react';
import './tableStyle.scss'



export default function DataTable({data,propId, columns}) {    
  const [cardComplet, setCardComplet] = useState(false)
  const [itemsCard, setItemsCard] = useState([])
  const [rowId, setRowId] = useState()

  const handleSetCard = e => {    
    if(e.row.id === itemsCard.id && cardComplet === true){
      setCardComplet(false)
    }else{
      setItemsCard(e.row)
      setRowId(propId[e.row.id])
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
              manutencao: proprietario.manutencao
            }
          })}        
        />
      </div>
      <div className='Card' style={{display : cardComplet ? 'flex' : 'none'}}>
        <div className='CardButton'>
          {setCardComplet && <Card
            contrato={itemsCard.contrato}
            proprietario={itemsCard.proprietario}
            inquilino={itemsCard.inquilino}
            imovel={itemsCard.imovel}
            endereco={itemsCard.endereco}
          // id={propId[itemsCard.id]}              
            manutencoes={itemsCard.manutencao}
            // key = {index}
          /> }
          <p className='Close' onClick={()=>setCardComplet(false)}>Fechar</p>
        </div>
      
      </div>

    </div>
  );
}
