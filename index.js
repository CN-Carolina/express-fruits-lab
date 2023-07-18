const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();




//routes
app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  //basic routes
  app.get('/greet/:name', (request, response)=> {
    console.log(`Getting a message with the name ${request.params.name}`)
    response.send({msg: `Why hello there, ${request.params.name}`})
  })

  
  app.get('/five', (req, res)=>{
    const arr=[1,2,3,4,5]
    res.send({arr});
  })

  //fruit routes
  
  app.get('/fruits', (req, res) => {
    let fruits=["Banana", "Apple", "Strawberry", "Orange", "Kiwi"];
    res.send({fruits});
  })


  /*
  app.get('/fruits/:name', (req, res) => {
    const name=req.params.name;
    console.log(`finding a supplied fruit name`)
    res.send({name:name});
  })
*/


  //testing sort (had to comment above for code to run)
  app.get('/fruits/sort', (req, res) => {
    let fruits=["Banana", "Apple", "Strawberry", "Orange", "Kiwi"];
    let sortedFruits=fruits.sort();
    res.send({sortedFruits})
  })
  


  
  
  //veggie routes

  app.get('/veggies', (req,res)=>{
    const veggies=["brussel sprouts", "cauliflower", "brocolli", "asparagus", "potatoes"];
    res.send({veggies});
  })

  app.get('/veggies/:name', (req, res)=>{
    const name=req.params.name;
    console.log(`finding a supplied veggie name`)
    res.send({name:name});
  })

  //listen port
  
  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
