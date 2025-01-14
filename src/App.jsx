import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout } from "./router";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route 
        path='/'
        element = {
          <Layout>
            {/* <Navbar /> */}
            <Home />
            <Footer />
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;