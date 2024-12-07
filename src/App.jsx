import {Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import Layout from "./Layout/Layout";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="*" element={<h1>Page not found - Error 404</h1>}/>  
          </Route>
        </Routes>
      </div>
  );
}

export default App;
