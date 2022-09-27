const express = require("express");
require("./db/config");
const User = require("./db/User");
const Product = require('./db/Product')
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async(req, resp) => {
  if(req.body.password && req.body.email){
  let user = await User.findOne(req.body).select("-password");
  if (user) {
    resp.send(user);
  } else {
    resp.send({result:"User Not Found"});
  }
}else{
    resp.send({result:'please check your email and password'});
}

});

app.post('/add-product',async(req,resp)=>{
  let product = new Product(req.body)
  let result = await product.save()
  resp.send(result)
})

app.get('/products',async(_,resp)=>{
  let products =await Product.find();
  if(products.length>0){
    resp.send(products)
  }else{resp.send({products:'No Products Found'})}
})


app.delete('/product/:id',async(req,resp)=>{
  let result =await Product.deleteOne({_id:req.params.id})
  if(result.deletedCount>0){
    resp.send(result)
  }else{
    resp.send({result:"Object Not Found"})
  }
})

app.get("/product/:id",async(req,resp)=>{
  console.log(req.param);
  let result =await Product.findById({_id:req.params.id})
  console.log(result)
  if(result){
    resp.send(result)
  }else{
    resp.send({result:"No Record Found"})
  }

  
})

app.put("/product/:id",async(req,resp)=>{
  let result = await Product.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )
  resp.send(result)
})
// search 
app.get("/search/:key",async(req,resp)=>{
  let result =await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {company:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
    ]
  })
  console.log(result);
  resp.send(result)
})
app.listen(300);

