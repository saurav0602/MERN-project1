import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LPage from './LPage'
import RPage from './RPage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' 
        element={<LPage/>}/>
        <Route path='/registration' 
        element={<RPage/>}/>
        


        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


