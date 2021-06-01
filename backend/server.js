import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:HeAwbm2rtSa6V3e1@cluster0.meofa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})




app.get('/', (req, res) => {
    res.status(200).send("Working boys");
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})