import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

const STRIPE_API_KEY = process.env.REACT_APP_STRIPE_API_KEY;

const stripePromise = loadStripe(STRIPE_API_KEY);

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
