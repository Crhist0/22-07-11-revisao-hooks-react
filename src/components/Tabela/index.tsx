import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, styled } from '@mui/material';
import { memo, useEffect } from 'react';

type Pessoa = {
    first_name:string;
    last_name:string;
    gender:string
}

type TabelaProps = {
 pessoas: Array<Pessoa>   
}

const StyledTableCell = styled(TableCell)`
    background-color: black;
    color: white;
`;

function Tabela(props: TabelaProps) {

  // useEffect(()=>{
  //      alert('tabela montada')
  // },[])


  // useEffect(()=>{
  //      alert(`props alterdas
  //      primeira pessoa = ${props.pessoas[0].first_name}
  //      `)
  // },[props.pessoas[0]])

  useEffect(()=>{
    if (props.pessoas.length <1) {
      alert('nenhuma pessoa encontrada')
    }
  }, [props.pessoas])
  

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
      <Table stickyHeader size="small" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Nome</StyledTableCell>
            <StyledTableCell align="right">Sobre-Nome</StyledTableCell>
            <StyledTableCell align="right">Gênero</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.pessoas.map((pessoa) => (
            <TableRow
              key={pessoa.first_name + pessoa.last_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{pessoa.first_name}</TableCell>
              <TableCell align="right">{pessoa.last_name}</TableCell>
              <TableCell align="right">{pessoa.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabela