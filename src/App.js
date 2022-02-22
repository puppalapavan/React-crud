import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edit from './Edit'
import Home from './Home'
const App = () => {
  return ( 
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/edit" element={<Edit/>}> </Route>
          </Routes>
        </Router>
    </div>
   );
}
 
export default App;