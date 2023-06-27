import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateUser from './components/UpdateUser';
function App() {
  return (
    <Provider store={store}>
    <Router>
  <div className="App">
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/user/:id' element={<UpdateUser />} />
    </Routes>
  </div>
  </Router>
  </Provider>
  );
}

export default App;
