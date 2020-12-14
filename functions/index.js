const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_l0hehTQyQC6fZ4QG9tBXSo7d00GP0Xg1cL')


const app = express();

app.use(cors({ origin: true}))
app.use(express.json())

app.get('/', (req, res) => res.status(200).send("Express server is runnig"))

app.post('/payment/create', async (req, res) => {
    const total = req.query.total;

    console.log("Payment >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
        payment_method_types: ['card'],
      });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})




exports.api = functions.https.onRequest(app);