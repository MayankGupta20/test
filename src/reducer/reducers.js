import {
    FETCH_RECORDS,
    DELETE_RECORD,
    UPDATE_RECORD
  } from '../actions/types';
  
  const initialState = {
    records: []
  };
  
  const recordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECORDS:
        return {
          ...state,
          records: action.payload
        };
      case DELETE_RECORD:
        return {
          ...state,
          records: state.records.filter(record => record.id !== action.payload)
        };
      case UPDATE_RECORD:
        const updatedRecords = state.records.map(record => {
          if (record.id === action.payload.id) {
            return action.payload;
          }
          return record;
        });
        return {
          ...state,
          records: updatedRecords
        };
      default:
        return state;
    }
  };
  
  export default recordReducer;