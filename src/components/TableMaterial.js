import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'municipio_nome', label: 'Municipios', minWidth: 20 },
  //{ id: 'Confirmados', label: 'Confirmados', minWidth: 100 },
  {
    id: 'Recuperados',
    label: 'Recuperados',
    minWidth: 20,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Activos',
    label: 'Activos',
    minWidth: 20,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Mortos',
    label: 'Mortos',
    minWidth: 20,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(Municipio, Recuperados, Activos, Mortos) {
  return {Municipio, Recuperados, Activos, Mortos};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:'20%',
    textAlign:'center'
  },
  container: {
    maxHeight: 440, 
    textAlign:'center'

  },
});

   // setRows(rowsHook);
export default function TableMaterial({counties}) {
        let rowsToHook = []
 const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState(counties);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, key) => {
                  return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              )})}
            </TableRow>
          </TableHead>
          <TableBody>{
              
            counties.map((element,key) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={element.municipio_id}>      
                      <TableCell key={key}>
                        {element.municipio_nome}
                      </TableCell>
                      <TableCell key={key}>
                      {element.Recuperados == null ? 0 : element.Recuperados }
                      </TableCell>
                                          
                      <TableCell key={key}>
                      {element.Activos == null ? 0 : element.Activos }          
                      </TableCell>

                      
                      <TableCell key={key}>
                      {element.Mortes == null ? 0 : element.Mortes }
                      </TableCell>
                      
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
