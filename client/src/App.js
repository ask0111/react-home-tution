import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Home from "./veiws/Home";
import PageOne from "./veiws/PageOne";

function App() {
  
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
    {/* // <Home /> */}
    {/* <PageOne /> */}
    
  </>

  );
}

export default App;
