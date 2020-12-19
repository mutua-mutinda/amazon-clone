const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_l0hehTQyQC6fZ4QG9tBXSo7d00GP0Xg1cL');


const app = express();

app.use(cors({origin: true}))
app.use(express.json())

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
   
    console.log("Payment >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
      });

    
      res.status(201).send(paymentIntent.client_secret)
        console.log("payment client secret>>>", paymentIntent.client_secret);
    
})




exports.api = functions.https.onRequest(app);