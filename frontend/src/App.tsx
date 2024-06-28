import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import { Navigate } from 'react-router-dom';


const App = () => {

    return (
      <Router>
        <Routes>
          <Route path="/"
        element={<Layout></Layout>}>
            </Route>
          <Route path="/search" element={<>Search Page</>}></Route>  
          <Route path="*" element={<Navigate to="/" />}></Route>  
            
            
        </Routes>
        </Router>
      );};

export default App
