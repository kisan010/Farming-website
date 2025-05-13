import { useNavigate } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
    let navigate=useNavigate();
  return (
    <>
      <Navbar />
      <main>
        <div className="aboutContainer">
          <div className="theme_of_aboutPage">
            <h1>We are on a bold mission to grow the best plants possible for the betterment of humanity. </h1>
            <p>Since 2004, we have been transforming agriculture with people and planet in mind.
                 As a Certified B Corporation, we use the latest breakthroughs in indoor vertical farming, 
                 artificial intelligence and plant biology to fix our broken food system and improve the way fresh produce is grown and distributed locally and globally. 
                 We have built a proprietary agriculture platform to grow a wide array of products, delivering superior flavor, better quality and improved nutrition with the most sophisticated levels of traceability and food safety in our industry
                 </p>
            <button onClick={()=>navigate('/products')} >Explore more Crops</button>
          </div>
          <div className="howWeGrowPlants">
             <div className="growingcleanSection">
                <h3>Growing Clean</h3>
                <p>It’s no secret–farming can be a little dirty. Like dirt under your nails, but also dirty like land use, water waste, pollution, and contaminants on your food. At Plenty®, we grow fresh, flavorful produce vertically indoors–so everything’s a little… cleaner. From a controlled, indoor environment to zero-pesticide greens on your table–it’s cleaner for the world and cleaner for you.</p>
             </div>
             <div className="descriptiongrowPlants">
                <img src="./images/HowWeGrowPlants.avif" loading="lazy" width={600} height={300}></img>
                <div className="aboutgrowCleanplant">
                    <h3>Growing clean</h3>
                    <p>Our planet is facing a changing climate and running out of farmable land just when we need it most. To feed a growing population, we need a whole new approach to farming. That’s where Plenty® comes in</p>
                    <ul>
                        <li>Has the potential to save millions of gallons of water per year</li>
                        <li>Can produce up to 350x more leafy greens per acre</li>
                        <li>Can grow an entire soccer field worth of produce in the size of a goal</li>
                    </ul>
                    <p>By growing vertically indoors, Plenty® is able to dramatically reduce the natural resources required to farm at a commercial scale while also making it possible to grow where we used to think it was impossible, like in the center of a city or the middle of the desert</p>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
