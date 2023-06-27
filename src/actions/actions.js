import axios from 'axios';
import {
  FETCH_RECORDS,
  DELETE_RECORD,
  UPDATE_RECORD
} from './types';

export const fetchRecords = () =>async (dispatch) => {
const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonData = await data.json();
  dispatch({
    type:FETCH_RECORDS,
    payload : jsonData
  })
};


export const deleteRecord = id => dispatch => {
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_RECORD,
        payload: id
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateRecord = (id, record) => dispatch => {
  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, record)
    .then(response => {
      dispatch({
        type: UPDATE_RECORD,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};