import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, Shop } from "./router";
import { Navbar } from './components/Navbar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element = {
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route 
            path="/shop"
            element = { 
              <Layout>
                <Navbar />
                <Shop />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;