import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { deleteRecord } from '../actions/actions';
import { useNavigate } from 'react-router-dom';

function createData(id, name, email, city, zipcode) {
  return { id, name, email, city, zipcode };
}


export default function BasicTable({users}) {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rows = users.map((user) => {
        return createData(user.id,user.name, user.email, user.address.city, user.address.zipcode)
    })

    const handleDelete = (id) => {
        dispatch(deleteRecord(id));
    }

    const handleUpdate = (id) => {
        navigate(`/user/${id}`);
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Zipcode</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.zipcode}</TableCell>
              <TableCell align="right"><button onClick={() =>{handleDelete(row.id)}}>DELETE</button></TableCell>
              <TableCell align="right"><button onClick={() =>{handleUpdate(row.id)}}>EDIT</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}