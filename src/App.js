import { BrowserRouter, Router, Route } from "react-router-dom";
import Initial from "./components/Initial";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <Route path='/' element={<Initial/>}/>
        </Router>    
      </div>  
    </BrowserRouter>
  );
}

export default App;
