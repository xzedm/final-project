import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {

    res.send(data.products);
});
app.get("/", (req, res) => { res.send("Server is running"); });

app.listen(5000, () => {console.log("Server started at http://192.168.0.15:5000")});
