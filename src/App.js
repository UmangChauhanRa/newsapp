import './App.css';
import Navbar from "./Component/Navbar"
import News from './Component/News';
import { BrowserRouter as 
         Router,
         Routes,
         Route 
} 
from 'react-router-dom'; 

function App() {
    
  return(
        <>
           <Router>
                 <Navbar/>
                 <Routes>
                      <Route path="/" element={ <News key="general" pageSize={4} country="in" category="general" Category="General" /> }/>    
                      <Route path="/business" element={ <News key="business" pageSize={4} country="in" category="business" Category="Business" /> } />
                      <Route path="/entertainment" element={ <News key="entertainment" pageSize={4} country="in" category="entertainment" Category="Entertainment" /> } />
                      <Route path="/health" element={ <News key="health" pageSize={4} country="in" category="health" Category="Health" /> } />
                      <Route path="/science" element={ <News key="science" pageSize={4} country="in" category="science" Category="Science" /> } />
                      <Route path="/sports" element={ <News key="sports" pageSize={4} country="in" category="sports" Category="Sports" /> } />
                      <Route path="/technology" element={ <News key="technology" pageSize={4} country="in" category="technology" Category="Technology" /> } />
                 </Routes> 
           </Router>
          
    
           
       </>
  )
}

export default App;

