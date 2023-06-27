import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRecord } from '../actions/actions';

const UpdateUser = () => {

    const { records } = useSelector((state) => state.records);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    
    const [zipcode,setZipcode] = useState('');
    const [user,setUser] = useState({});
    useEffect(() => {
      const userdata = records.map((u) => {
        if(u.id == params.id){
            setUsername(u.name);
            setEmail(u.email);
            setCity(u.address.city);
            setZipcode(u.address.zipcode);
            setUser(u);
        }

      })
    }, [])
    
  
    const updateUserSubmitHandler = (e) => {
        e.preventDefault();
        let obj = {...user};
        obj.name = username;
        obj.email = email;
        obj.address.city = city;
        obj.address.zipcode = zipcode;
        dispatch(updateRecord(params.id,obj));
        navigate("/");
    };
   

    return (
        <div>
            <h3>User Data</h3>
            {user ? <form>
            <label>Name:</label>
            <input type='text' placeholder='name' value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
            <label>Email:</label>
            <input type='email' placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
            <label>City:</label>
            <input type='text' placeholder='city' value={city} onChange={(e) => {setCity(e.target.value)}}></input>
            <label>Zipcode:</label>
            <input type='text' placeholder='zipcode' value={zipcode} onChange={(e) => {setZipcode(e.target.value)}}></input>
            <button onClick={updateUserSubmitHandler}>UPDATE</button>
            </form>: <p></p>}
          
            
        </div>
    )
}

export default UpdateUser