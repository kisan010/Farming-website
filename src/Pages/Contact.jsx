import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact_main">
        <div className="contactPage">
          <div className="contact_Herosection">
            <h1>Get in Touch with Us!</h1>
            <p>
              Whether you’re interested in partnering with Bowles Farming
              Company or want to learn more about our sustainable practices,
              we’re eager to connect with you
            </p>
          </div>
          <div className="contact_form">
            <h3>Let's Talk</h3>
            <div className="contactfields">
               <input type="text" placeholder="FirstName" />
               <input type="text" placeholder="LastName" />
               <input type="text" placeholder="Company" />
               <input type="text" placeholder="Email" />
               <input type="text" placeholder="Phone"/>
               <input type="text" placeholder="Message"/>
               <button>Get In Touch</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
