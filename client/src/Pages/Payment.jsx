import { Fragment, useContext } from "react";
import { AuthContext } from "../tokenStore/Auth";


const Payment = () => {
    const {token} = useContext(AuthContext)

    const buy = async (amount)=>{
        try{
            const razorpaydata = await fetch("http://localhost:3001/api/payment",{
                method : "POST",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body : JSON.stringify({
                    amount : amount,
                    currency : "INR",
                })
            })
            const res = await razorpaydata.json();
            // console.log(res)

            if (razorpaydata.status==200) {
                console.log(true)
                const options = {
                    key: "rzp_test_GhF20V2TsmWKlL",
                    amount: res.order.amount,
                    currency: res.order.currency,
                    name: "Priya karn",
                    description: "Product Description",
                    order_id: res.order.id,
                    callback_url : "http://localhost:3001/api/verifypayment",

                    prefill: {
                        name: "Customer Name",
                        email: "customer@example.com",
                    },
                    theme: {
                        color: "#F37254",
                    },
                };
                console.log(options)

                if (window && window.Razorpay) {
                    const rzp = new window.Razorpay(options);
                    rzp.open();
                }
            }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <Fragment>
    <button onClick={()=>buy(200)}>buy now</button>
    </Fragment>
  )
}

export default Payment;




























// import { useContext, useState } from "react";
// import { AuthContext } from "../tokenStore/Auth";

// const Payment = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { token } = useContext(AuthContext);

//   const handlePayment = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/payment`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             amount: 500,      // Amount should be sent here
//             currency: "INR",  // Currency
//             user_id: "user123", // User ID
//           }),
//       });

//       const data = await response.json();
//       console.log(data);

//       // If backend responds with order details
//       if (data.success) {
//         const options = {
//           key: "rzp_test_GhF20V2TsmWKlL",  // Razorpay public key (stored in .env)
//           amount: data.order.amount,  // Amount in paise (₹1 = 100 paise)
//           currency: data.order.currency,
//           name: "Your Website Name",
//           description: "Product Description",
//           order_id: data.order.id,  // Order ID from Razorpay

//           handler: async function(response) {
//             // Payment was successful
//             const paymentData = {
//               payment_id: response.razorpay_payment_id,
//               order_id: data.order.id,
//               signature: response.razorpay_signature,
//             };

//             // Send payment details to the backend for verification
//             const verifyResponse = await fetch('http://localhost:3001/api/verifypayment', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(paymentData),
//             });

//             const verifyData = await verifyResponse.json();
//             if (verifyData.success) {
//               alert("Payment Successful!");
//             } else {
//               alert("Payment Verification Failed");
//             }
//           },
//           prefill: {
//             name: "Customer Name",
//             email: "customer@example.com",
//           },
//           theme: {
//             color: "#F37254",
//           }
//         };

//         // Open the Razorpay checkout modal
//         if (window && window.Razorpay) {
//           const rzp = new window.Razorpay(options);
//           rzp.open();
//         } else {
//           setError('Razorpay is not available.');
//         }
//       } else {
//         setError('Order creation failed');
//         setLoading(false);
//       }
//     } catch (error) {
//       setError('Error creating order: ' + error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Page</h2>
//       <div>
//         <button onClick={handlePayment} disabled={loading}>
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Payment;


