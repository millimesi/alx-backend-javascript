const express = require('express');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the payment system');
})

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        return res.status(404).send();
    }
    res.status(200)
    res.send(`Payment methods for cart ${id}`)
})

app.get('/available_payments', (req, res) => {
    res.status(200).json({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
})

app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (!userName) {
        return res.status(400).send();
    }
    res.status(200).send(`Welcome ${userName}`);
})

app.listen(7865, ()=> {
    console.log('API available on localhost port 7865')
})

module.exports = app;
