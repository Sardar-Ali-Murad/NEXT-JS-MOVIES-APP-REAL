import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div className="bg-[#dbc2c2] overflow-x-hidden">
      <Navbar /> 
      <div> {children} </div>
    </div>
  );
};

export default Layout;
