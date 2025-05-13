import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Components/Navbar";
import { faCarrot, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Components/Footer";
import {  useNavigate } from "react-router";


const Home = () => {
  let navigate=useNavigate();
  return (
    <>
      <Navbar />
      <main>
        <section className="mainsection section">
          <h1>
            Bringing Fresh Harvests <br />
            to Your Table
          </h1>
          <small>LOCALLY GROWN | ORGANIC | SUSTAINABLE</small>
          <button onClick={()=> navigate('/products')}>Explore Our Crops</button>
        </section>

        <section className="aboutHomeSection section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cumque
            quo veniam rerum tempora nam iusto, aperiam vitae placeat,
            cupiditate voluptatum maiores illum eum nisi dolorem possimus
            suscipit quia neque totam dignissimos odio unde eos facilis. Nostrum
            voluptatibus, commodi ipsum provident, ad natus quis nesciunt illum
            vitae facere voluptatum adipisci? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sit distinctio quas voluptatibus
            voluptatem iure aliquam, impedit, quae corporis tempora, quasi
            tempore dignissimos rerum officia laborum esse quos eius. Ad,
            ab?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            nisi repudiandae hic veritatis, accusantium expedita explicabo unde!
            Dolor, dicta vero.
          </p>
          <div className="image_container">
            <div id="box1">
              <img
                src="/images/pexels-mongkon-duangkhiew-2290728-8703373.jpg"
                height="auto"
                width="300px"
                loading="lazy"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, laborum temporibus. Illo, ut nisi facilis officia
                doloremque tenetur repudiandae deserunt. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur quia odio neque
                tempore ullam quaerat. Voluptatibus obcaecati modi ullam aliquam
                quia, saepe ipsa ex nesciunt ad nemo minus, impedit fugit.
              </p>
            </div>
            <div id="box2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Consequuntur quidem iste nihil itaque aperiam corrupti
                labore modi quis aliquam cumque repellat sit neque distinctio
                eaque earum facilis, consequatur sunt magnam mollitia ea omnis
                quae. Veniam nihil doloribus fugit ea consequuntur?
              </p>
              <img
                src="/images/premium_photo.avif"
                height="300px"
                loading="lazy"
              ></img>
            </div>
            <div id="box3">
              <img
                src="/images/pexels-rohan-dewangan-2844320-9268302.jpg"
                height="300px"
                loading="lazy"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, laborum temporibus. Illo, ut nisi facilis officia
                doloremque tenetur repudiandae deserunt. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur quia odio neque
                tempore ullam quaerat. Voluptatibus obcaecati modi ullam aliquam
                quia, saepe ipsa ex nesciunt ad nemo minus, impedit fugit.
              </p>
            </div>
            <div className="aboutbtn">
            <button onClick={function(){return navigate('/about')}}>Know More</button>
            </div>
          </div>
        </section>

        <section className="productHomeSection section">
          <div className="products_showcase">
             <h2>Product/Crop Showcase</h2>
             <div className="products_card">
              <div id="card1" className="card">
                <FontAwesomeIcon icon={faApple} />
                <h3>Fresh Vegetables</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
              <div id="card2" className="card">
              <FontAwesomeIcon icon={faLeaf} />
                <h3>Organic Fruits</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
              <div id="card3" className="card">
              <FontAwesomeIcon icon={faCarrot} />
                <h3>Herbs & Greens</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
              <div id="card4" className="card">
                <FontAwesomeIcon icon={faApple} />
                <h3>Herbs & Greens</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
              <div id="card5" className="card">
              <FontAwesomeIcon icon={faLeaf} />
                <h3>Organic Fruits</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
              <div id="card6" className="card">
              <FontAwesomeIcon icon={faCarrot} />
                <h3>Fresh Vegetables</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in?</p>
              </div>
             </div>
             <div className="checkallProducts">
              <button onClick={()=>navigate('/products')}>
                More products
              </button>
             </div>
          </div>
        </section>
        <section className="contact_usSection section">
         <h2>Get in Touch</h2>
         <p>Feel free to react out to us for more information</p>
         <button onClick={()=>navigate('/contact')}>Contact us</button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
