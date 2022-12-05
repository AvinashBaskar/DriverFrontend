import './App.css';
import UserActionApp from './UserCRUD/UserActions';
import Login from './UserCRUD/Login';
import {Routes,Route} from "react-router-dom";
// import Login from './UserCRUD/Login';
// import AddUser from './UserCRUD/AddUser';
// import GetUser from './UserCRUD/GetUser';
// import Navbar from './Navbar';
function App() {
  
  return (    
    <div className='App-header'>
     <Routes>
      <Route path='/Login' element={<UserActionApp />} />
      <Route path='/' element={<Login/>} />
      </Routes>
      </div>
     
  );
}
export default App;
