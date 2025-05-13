import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Navbar = () => {

  // let prod = useSelector((state) => console.log(state?.products?.products))
  let Product= useSelector((state) => state.Products?.products)
  // state.Products here Products from store.js and then products which is array of products in Productslice.
     
  return (
    <>
      <div className="header">
        <div className="title">
          <picture>
            <img
              src="./images/farmvillagelogo.png"
              height="150px"
              width="150px"
            />
          </picture>
        </div>

        <nav>
          <ul className="navbar">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                {" "}
                About us
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/products"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                {" "}
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Cart"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                <span className="material-symbols-outlined">shopping_cart{Product.length}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
