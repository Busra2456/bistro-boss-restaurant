import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectonTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
  //TODO: add publishable kay
      const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);  //TODO: add publishable kay
     
const Payment = () => {
    
      return (
            <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
               <div>
                  <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>

                  </Elements>
               </div>   
            </div>
      );
};

export default Payment;