import PropTypes from "prop-types";
import { Header } from '../Header';
import { Footer } from "../Footer";

export const Layout = ({children}) => {
  return (
    <div className="w-full overflow-hidden" >
        <Header />
        <main style={{minHeight : "80vh"}}>{children}</main>
        <Footer />
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};  
