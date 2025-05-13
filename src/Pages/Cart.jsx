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

const Cart = function () {
  let dispatch = useDispatch();
  let Product_selector = useSelector((state) => state.Products?.products);

  function handleRemove(item) {
    
    dispatch(removeSeed(item.id));
    toast.error(`${item.name} removed`,{
      autoClose: 3000,  
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  }
  let navigate = useNavigate();
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
        /></span>
        <h1>
          Cart
          <span className="material-symbols-outlined">shopping_cart</span>
        </h1>
        <div className="cartContainer"
          
        >
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
            {Product_selector.length < 1 ? (
              <div>No products Added</div>
            ) : (
              Product_selector.map((item, _) => {
                return (
                  <Card
                    key={item.id}
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
                          <span>{item.count} </span>
                          <span>${item.price * item.count}</span>
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
            )}
          </div>
          <div className="totalAmount">
            <h3>Total Amount:</h3>
            <p>Tax:$50</p>
            <p>
              Total: $
              {Product_selector.length ? Product_selector.reduce((acc, item) => {
                return item.price * item.count + acc;
              }, 50):0 }
            </p>
            <button onClick={()=>{Product_selector.length > 0  &&  toast.success("order placed",{ autoClose:3000})}  }>Place Order</button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Cart;
