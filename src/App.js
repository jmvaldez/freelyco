import React from "react";
import "./styles.css";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckOutForm";
import MainNavbar from "./components/navigation/MainNavbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Faqs} from './components/Faqs';
import {Shop} from './components/Shop';
import { Error } from './components/Error';


// const stripePromise = loadStripe("pk_test_51HMQW2CeaSGVLhh56cKOf66VR380wDCHM1yPj7K3TGRpnySCFEuWirSjJd3uWfBVj2A66XMhy1QGTNTLafVRjNX500XtqeTBY7");

const App = () => {
  return (
    <React.Fragment>
  <BrowserRouter>
  <MainNavbar/>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact-us" component={Contact} />
  <Route path="/faq" component={Faqs} />
  <Route path="/shop" component={Shop} />
  <Route component={Error} />
</Switch>
  </BrowserRouter>
</React.Fragment>
    // <div className="App">
    //   <MainNavbar/>
    //   <div className="product">
    //     <img
    //       src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
    //       alt="laptop"
    //       style={{ width: "100%", height: "auto" }}
    //     />
    //     <div>
    //       <Elements stripe={stripePromise}>
    //         <CheckoutForm />
    //       </Elements>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;