import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, ProductDetails, Shop } from "./router";
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
          <Route 
            path="/product-details/:productId"
            element = { 
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;