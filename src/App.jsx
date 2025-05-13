import { BrowserRouter,Routes,Route } from "react-router"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Products from "./Pages/Products.jsx"
import Services from "./Pages/Services.jsx"
import Contact from "./Pages/Contact.jsx"
import Cart from "./Pages/Cart.jsx"
import { store } from "../Redux/store.js"
import { Provider } from "react-redux"




function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
