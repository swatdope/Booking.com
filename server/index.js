import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb+srv://tenzinngodupjs:Tashidelek@95@cluster0.euh61.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
.then( () => app.listen(PORT, () => console.log(`server is connected to ${PORT}`)))
.catch((error) => console.error(error.message))


// app.get('/', (req, res) => {
//     res.send("hello brothda")
// } )

