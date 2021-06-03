import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

const app = express();

const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:HeAwbm2rtSa6V3e1@cluster0.meofa.mongodb.net/matchupdb?retryWrites=true&w=majority';


app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})




app.get('/', (req, res) => {
    res.status(200).send("Working boys");
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (error, data) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/card', (req, res) => {

    Cards.find((error, data) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})