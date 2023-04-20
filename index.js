// const express = require('express')
// const app = express();
// const port = 5000;

// app.get('/',(req,res)=>req.send('hello World'))

// app.listen(port,()=>{
//     console.log(`newspaper running on ${port}`);
// })

const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('this is newspaper website... ')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})