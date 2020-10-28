import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51HMQW2CeaSGVLhh56cKOf66VR380wDCHM1yPj7K3TGRpnySCFEuWirSjJd3uWfBVj2A66XMhy1QGTNTLafVRjNX500XtqeTBY7"
);

export const Shop = () => (
  <div>
    <strong>ISSA Store</strong>
    <p>AYYYOOOO</p>
    <div className="product">
      <img
        src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
        alt="laptop"
        style={{ width: "100%", height: "auto" }}
      />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  </div>
);
