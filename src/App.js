import React from 'react'
import  {Route,Routes} from 'react-router-dom'
import login from './screens/login'
import Register from './screens/Register'

function App() {
  return (
    <Routes>
    <Route path='/'element={<login />}/>
    <Route path='/register'element={<Register/>}/>
    
    </Routes>
  );
}

export default App