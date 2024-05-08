import React from 'react'
import './styles.css';
// import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';

function Card() {


        const amount =  20000
        const currency = "INR"
        const receiptId = "qwsaq1";

    
    const handlePayment = async(e) => {
        const response = await fetch("http://localhost:5000/order", {
            method: "POST",
            body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId, 
        }),
        headers: {
            "Content-Type": "application/json",
        },
        })

        const order = await response.json();
        console.log(order);

        var options = {
            "key": "rzp_test_ZXq3eXNJF7W8TL", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "FlukeFinders", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                };

                const validateRes = await fetch("http://localhost:5000/order/validate", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const jsonRes = await validateRes.json();
                console.log(jsonRes);

            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Hetashri Kansariwala", //your customer's name
                "email": "hetashrikansariwala@gmail.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    };

    // }
  return (
    <>
         <div className="content">
            <header>
                <div className="container">
                    <nav className="nav">
                        <h1 className="logo">FlukeFinder</h1>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="text-container">
                The best on-call protection technology
            </div>

            <section className="services">
                <div className="servbox">
                    <div className="box" id="b1">
                        <h1>0$</h1>
                        <h2>Basic Support(FREE)</h2>
                        <p>
                            {/* <ol type='i'>

                            <li>Development of an ML model</li>
                            <li>Integrating NLP for real-time audio analysis</li>
                            </ol> */}

                            &#8226; Dedicated model to detect scam calls <br />
                            &#8226; Custom keyword list unique for users <br />
                        </p>
                        <div className="nav-link1 sides"> Free Access</div>
                    </div>
                    <div className="box" id="b2">
                        <h1>2$</h1>
                        <h2>Advanced Support</h2>
                        <p>
                        &#8226; Dedicated model to detect scam calls <br />
                        &#8226; Custom keyword list unique for users <br />
                        &#8226;Extended support for sms and emails <br />

                        </p>
                        <div className="nav-link1" onClick={handlePayment}>Buy Now</div>
                    </div>
                    <div className="box" id="b3">
                        <h1>5$</h1>
                        <h2>Premium Subscription</h2>
                        <p>
                        &#8226; Dedicated model to detect scam calls <br />
                        &#8226; Custom keyword list unique for users <br />
                        &#8226;Extended support for sms and emails <br />
                        &#8226; Advanced Deepfake audio detection <br />
                        </p>
                        <div className="nav-link1 sides">Coming Soon</div>
                    </div>
                </div>
            </section>
        </div>

        <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
            </div>
        </div>
    </>
  )
}

export default Card