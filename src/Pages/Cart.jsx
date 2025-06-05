import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { faLemon } from "@fortawesome/free-regular-svg-icons";
import { faApple, faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faCarrot,
  faLeaf,
  faPepperHot,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { removeSeed } from "../../Redux/Productslice";
import { toast } from "react-toastify";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";

const Cart = function () {
  let dispatch = useDispatch();
  let Product_selector = useSelector((state) => state.Products?.products);
  let [user,setuser]=useState("")
  
 
let navigate = useNavigate();
  async function handleRemove(item) {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      dispatch(removeSeed(item._id));
      toast.error(`${item.name} removed`, {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
      await axios.delete(`https://farming-website-backend.onrender.com/cart/${item._id}`, {
        headers: { Authorization: `Bearer ${token}`, },});
      mutate("https://farming-website-backend.onrender.com/cart");
    } catch (err) {
      console.log(err);
    }
  }
  const handleLogout = () => {
  localStorage.removeItem("token"); 
  localStorage.removeItem("user")
  toast.error("Logged out successfully", { autoClose: 3000 });
  navigate("/login");
};


  const fetcher = async (url) => {
    try {
       const token = JSON.parse(localStorage.getItem("token"));
          const user = JSON.parse(localStorage.getItem("user"));
          setuser(user);
                
      const { data } = await axios.get(url, {
     
        headers: { Authorization: `Bearer ${token}`, },
      });
        
      return data?.data || [];
    } catch (err) {
      if (err.response && err.response.status === 401) {
   
      const retry = await axios.get(url, {
       headers: { Authorization: `Bearer ${token}`, },
      });
      return retry.data?.data || [];
    }
    console.log(err);
    return [];
  
    }
  };

  const { data: products, error: usersError } = useSWR(
    "https://farming-website-backend.onrender.com/cart",
    fetcher
  );
  useEffect(() => {
  mutate("https://farming-website-backend.onrender.com/cart");
 
}, []);


  const iconLookup = {
    faPepperHot: faPepperHot,
    faSeedling: faSeedling,
    faLeaf: faLeaf,
    faCarrot: faCarrot,
    faLemon: faLemon,
    faApple: faApple,
  };

  return (
    <>
      <main className="mainCart">
        <span className="navigate_icon">
          <FontAwesomeIcon
            icon={faHouse}
            className="homeicon"
            onClick={() => navigate("/")}
          />
          <FontAwesomeIcon
            icon={faProductHunt}
            className="homeicon"
            onClick={() => navigate("/products")}
          />
          <Button
            variant="outline-danger"
            size="sm"
            style={{ marginLeft: "10px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </span>
        <p style={{color:"white"}}>user:{user}</p>
        <h1>
          Cart
          <span className="material-symbols-outlined">shopping_cart</span>
        </h1>
        <div className="cartContainer">
          <div
            className="product_parent"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {Array.isArray(products) && products.length < 1 ? (
              <div>No products Added</div>
            ) : Array.isArray(products) ? (
              products.map((item, _) => {
                return (
                  <Card
                    key={item._id}
                    style={{
                      width: "18rem",
                      border: "2px solid white",
                      padding: "4rem",
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={iconLookup[item.icon]}
                      className="cartProduct"
                    />
                    <Card.Body
                      style={{
                        display: "flex",
                        gap: "15px",
                        flexDirection: "column",
                      }}
                    >
                      <Card.Title>{item.name}</Card.Title>
                      <div className="product-details">
                        <Card.Text>
                          <span>{item.quantity} </span>
                          <span>${item.price}</span>
                        </Card.Text>
                      </div>
                      <Button
                        variant="danger"
                        onClick={(e) => handleRemove(item, e)}
                      >
                        Remove item
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h3>loading... </h3>
            )}
          </div>
          <div className="totalAmount">
            <h3>Total Amount:</h3>
            <p>Tax:$50</p>
            <p>
              Total: $
              {Array.isArray(products) && products.length
                ? products.reduce((acc, item) => item.price + acc, 50)
                : 50}
            </p>
            <button
              onClick={() => {
               Array.isArray(products) && products.length > 0 &&
                  toast.success("order placed", { autoClose: 3000 });
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Cart;
