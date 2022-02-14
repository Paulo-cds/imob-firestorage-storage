import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styleSimpleTable.scss'


export default function DenseTable({manutencoes}) {    
  return (
    <TableContainer className='SimpleTable' component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>            
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Responsavel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {manutencoes.map((manutencao) => (
                manutencao.mes.map((descricao, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {descricao.data}
                        </TableCell>
                        <TableCell align="center">{descricao.descricao}</TableCell>
                        <TableCell align="center">{descricao.valor}</TableCell>
                        <TableCell align="center">{descricao.responsavel}</TableCell>                        
                    </TableRow>
                ))
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
