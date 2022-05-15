import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./components/Initial";

import './components/CSS/Initial.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Initial/>}/>
        </Routes>    
      </div>  
    </BrowserRouter>
  );
}

export default App;
