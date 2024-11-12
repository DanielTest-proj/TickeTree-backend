import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import axios from 'axios';
import stripePackage from 'stripe';
import bodyParser from 'body-parser';
import path from 'path';
import nodemailer from 'nodemailer';



const express = require('express');
const app = express();
const PORT = 4000;
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);


app.get('/home', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
});
app.get('/', (req, res) => {
    res.status(200).json(stripe);
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;