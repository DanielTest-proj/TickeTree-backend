import express from 'express';

const express = require('express');
const app = express();
const PORT = 4000

app.get('/',(req,res) => {
    res.status(200).json('Hey there i am ready')
})