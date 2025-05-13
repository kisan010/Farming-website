import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faLeaf,
  faPepperHot,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { faLemon } from "@fortawesome/free-regular-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { addSeed } from "../../Redux/Productslice";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/Products.json");
        
      if (!response.ok) throw new Error("Failed to load products");

      const data = await response.json();
      setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Function to increase product count
  const increaseCount = (id) => {
     setProducts(products.map((item)=>{
          return item.id===id ? {...item,count:item.count+1}:item
     }))
  };

  // Function to decrease product count
  const decreaseCount = (id) => {
    setProducts(
      products.map((item) => {
        return item.id === id && item.count >1 ? { ...item, count: item.count-1 } : item;
      })
    );
  };
  function handleaddProduct(item, e) {
    toast(`${item.name} added to cart`,{
            autoClose: 3000,  
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
    })
    dispatch(addSeed(item));
    
  }

  // Map icon names to actual FontAwesome icons
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
      <Navbar />
      <main>
        <section className="productpage section">
          <h1>Product Section</h1>
          <div className="products_container">
            {products.map((item) => (
              <div className="box" id={`box-${item.id}`} key={item.id}>
                <div className="about_product">
                  <div className="iconcls">
                    <FontAwesomeIcon icon={iconLookup[item.icon]} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="text_container">
                    <p>{item.about}</p>
                  </div>
                  <div className="price">
                    <div>
                      <button onClick={() => increaseCount(item.id)}>+</button>
                      <span>{item.count}</span>
                      <button onClick={() => decreaseCount(item.id)}>-</button>
                    </div>
                    <div>{item.price * item.count}$</div>
                  </div>
                </div>
                <div>
                  <button onClick={(e) => handleaddProduct(item, e)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
