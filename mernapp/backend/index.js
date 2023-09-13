const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
app.use(cors());
const mongoDB = require("./db") 
mongoDB();

app.use(cors(
  {
    origin : ["https://food-ordering-application-tau.vercel.app"],
    methods : ["POST", "GET"],
    credentials : true
  }
));

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

