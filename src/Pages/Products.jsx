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
import useSWR, { mutate } from "swr";
import axios from "axios";


const Products = () => {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch();

  async function fetcher(url) {
    try {
      let { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  let allProductdata = useSWR("https://farming-website-backend.onrender.com/product", fetcher);

  useEffect(() => {
    setProducts(allProductdata?.data?.data);
  }, [allProductdata.data]);

  console.log(products)
  const increaseCount = (id) => {
    setProducts(
      products.map((item) => {
        return item._id === id
          ? { ...item, quantity: item.quantity + 1,price: item.price + (item.price / item.quantity)}
          : item;
      })
    );
  };

  const decreaseCount = (id) => {
    setProducts(
      products.map((item) => {
        return item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 ,price:item.price-(item.price/item.quantity)}
          : item;
      })
    );
  };
  async function handleaddProduct(item, e) {
   
       let token = JSON.parse(localStorage.getItem('token'));
     if (!token) {
    toast("You need to log in to add items to cart", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
    return;
  }
    try {
      const response = await axios.get("https://farming-website-backend.onrender.com/cart", { headers: { Authorization: `Bearer ${token}`, }, });
      console.log(response)
      const cartItems = response.data.data;

      if (!Array.isArray(cartItems)) {
        console.error("cartItems is not an array:", cartItems);
        return;
      }

      const existingProduct = cartItems.find(
        (product) => product.name === item.name
      );
      if (existingProduct) {
        await axios.put(
          `https://farming-website-backend.onrender.com/cart/${existingProduct._id}`,
          {
            quantity: item.quantity,
            price: item.price,
          },
          {headers: { Authorization: `Bearer ${token}`, },  }
        );
      mutate("https://farming-website-backend.onrender.com/cart"); 
    } else {
        await axios.post("https://farming-website-backend.onrender.com/cart", {
          name: item.name,
          quantity:item.quantity,
          icon: item.icon,
          price: item.price ,
        },
        {headers: { Authorization: `Bearer ${token}`, }, },);
      }

      dispatch(addSeed(item));
      toast(`${item.name} added to cart`, {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });

      mutate("https://farming-website-backend.onrender.com/cart");
    } catch (err) {
      console.log(err);
    }
  }

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
            {!products ? (
              <h3>Loading...</h3>
            ) : (
              products?.map((item) => (
                <div className="box" id={`box-${item._id}`} key={item._id}>
                  <div className="about_product">
                    <div className="iconcls">
                      <FontAwesomeIcon icon={iconLookup[item.icon]} />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="text_container">
                      <p>{item.description}</p>
                    </div>
                    <div className="price">
                      <div>
                        <button onClick={() => increaseCount(item._id)}>
                          +
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => decreaseCount(item._id)}>
                          -
                        </button>
                      </div>
                      <div>{item.price }$</div>
                    </div>
                  </div>
                  <div>
                    <button onClick={(e) => handleaddProduct(item, e)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
