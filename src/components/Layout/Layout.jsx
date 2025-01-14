import PropTypes from "prop-types";
import { Header } from '../Header';

export const Layout = ({children}) => {
  return (
    <div className="w-full overflow-hidden" >
        <Header />
        <main style={{minHeight : "80vh"}}>{children}</main>
        <h2>Footer main</h2>
        <h1>be cool</h1>
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};  
