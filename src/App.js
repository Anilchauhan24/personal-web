import './App.css';

import { BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home}></Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
