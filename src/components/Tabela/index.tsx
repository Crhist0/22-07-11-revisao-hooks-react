import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import { memo } from 'react';

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
              key={pessoa.first_name}
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