import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import useSWR from "swr";

const Navbar = () => {
  let [token,setToken]=useState("");

  let Product = useSelector((state) => state.Products?.products);

    useEffect(()=>{
 const token = JSON.parse(localStorage.getItem("token"));

setToken(token);
  },[])
  const fetcher = async (url) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      console.log(data)
      return data?.data || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };


  const { data: productsDb, error: usersError } = useSWR(
    token ? "https://farming-website-backend.onrender.com/cart" : null,
  fetcher
  );
  const productCount = Array.isArray(productsDb) ? productsDb.length : 0;
          console.log(productCount)
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
                to="/cart"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                <span className="material-symbols-outlined">
                  shopping_cart{productCount}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="auth_section">
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid white" : "",
              })}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid white" : "",
              })}
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
