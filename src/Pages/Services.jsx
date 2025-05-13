import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Button, Card } from "react-bootstrap";
import {
  faSeedling,
  faShower,
  faSunPlantWilt,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const Services = () => {
    let navigate=useNavigate();
  const api = [
    {
      title: "Field Prepartion",
      text: "We offer comprehensive field preparation services to ensure optimal soil health and productivity",
      icon: "faTractor",
      id: 1,
    },
    {
      title: "Seeding",
      text: "Our seeding services ensure proper planting planting techniques and seed placement",
      icon: "faSeedling",
      id: 2,
    },
    {
      title: "Crop Protection",
      text: "We provide effective crop protection solutions to safeguard your crops from pests and diseases",
      icon: "faSunPlantWilt",
      id: 3,
    },
    {
      title: "Irrigation",
      text: "Our irrigation services offer efficient water management solutions for your farm",
      icon: "faShower",
      id: 4,
    },
  ];

  const icons = {
    faTractor: faTractor,
    faSeedling: faSeedling,
    faSunPlantWilt: faSunPlantWilt,
    faShower: faShower,
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="services_Page">
            <h3>Services</h3>
            <div className="servicesCards">
          {api.map((item, _) => {
            return(
                <Card style={{ width: "18rem",border:"2px solid white",paddingBlock:'1rem' }} key={item.id}>
              <Card>
                <FontAwesomeIcon icon={icons[item.icon]} style={{fontSize:'2rem'}} />
              </Card>
              <Card.Body>
                <Card.Title style={{fontWeight:'bolder',padding:'1.5rem',letterSpacing:"3px"}}>{item.title}</Card.Title>
                <Card.Text style={{padding:'1.5rem'}}>{item.text}</Card.Text>
                <Button  variant="primary" onClick={()=>navigate('/products')}>Check Our Products</Button>
              </Card.Body>
            </Card>
            )
            
          })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Services;
