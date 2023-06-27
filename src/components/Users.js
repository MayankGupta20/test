import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecords } from '../actions/actions';
import Table from "./Table";
const Users = () => {
    const {records} = useSelector((state) => state.records);
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(fetchRecords());
    
     
    },[])
    
  return (
    <div>

        <h3>USER DATA</h3>
        
        <Table users={records}/>
    </div>
  )
}

export default Users