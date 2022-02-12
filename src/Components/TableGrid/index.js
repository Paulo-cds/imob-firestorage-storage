import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {db} from '../../firestore.js'


export default function DataTable({data,columns}) {    

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        rows={data.map((proprietario, index) => {
          return {
            id: index,
            proprietario: proprietario.proprietario,
            inquilino: proprietario.inquilino,
            imovel: proprietario.imovel,
            contrato: proprietario.contrato,
          }
        })}
      />
    </div>
  );
}
