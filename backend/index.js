const express = require('express');
const cors=require("cors");
require('./db/config');
const User = require("./db/User");
const Book = require("./db/Book");
const Given = require("./db/Given");
const History = require("./db/History");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let user =new User(req.body);
    let result =await user.save();
    resp.send(result);
});

app.post("/login",async (req,resp)=>{
    if(req.body.email&&req.body.password){
        let user =await User.findOne(req.body).select("-password");
        if(user){
        resp.send(user);
        }else{
        resp.send({result:'No User Found'});
        }
    }else{
        resp.send({result:'No User Found'});
    }
    
});

app.post("/collect-info",async (req,resp)=>{
    if(req.body.roll&&req.body.session){
        let info = await Given.findOne(req.body).select();
        if(info){
            resp.send(info);
        }else{
            resp.send({result:'User not exist'});
        }
    }else{
        resp.send({result:'User not exist'});
    }
});

app.post("/history", async(req,resp)=>{
    let product = new History(req.body);
    let result =  product.save();
    resp.send(result); 
});

    app.post("/give", async(req,resp)=>{
        let product = new Given(req.body);
        let result =  product.save();
        resp.send(result); 
    });

    app.post("/add-book", async (req,resp)=>{
        let product = new Book(req.body);
        let result =  product.save();
        resp.send(result);
    });

    app.post("/find-book", async (req,resp)=>{
        if(req.body.bookType&&req.body.sem){
            let book = await Book.findOne(req.body);
            if(book){
                resp.send(book);
            }else{
                resp.send({result:'Book Not Found'});
            }
        }else{
            resp.send({result:"Book Not Found"});
        }
    });

    app.get("/currentstatus", async (req,resp)=> {
        try{
            const allData = await History.find({});
            resp.send({status : "OK", data:allData});
        }catch(error){
            console.log(error);
        }
    });

    app.get("/totalcurrent", async (req,resp)=> {
        try{
            const allData = await Given.find({});
            resp.send({Status:"OK",data:allData});
        }catch(error){
            console.log(error);
        }
    });

    app.get("/totalusers", async (req,resp)=> {
        try{
            const allData = await User.find({});
            resp.send({status : "OK", data:allData});
        }catch(error){
            console.log(error);
        }
    });

    app.post("/delete", async (req,resp)=>{
        try {
            const info = await Given.find(req.body);
            Given.updateOne({info},{$currentDate:{returned:true}});
            let result =await History.deleteOne(req.body);
            resp.send(result);
        } catch (error) {
            console.log(error);
        }
        
    });



app.listen(PORT, ()=>{
    console.log("server is listening at port : " + PORT);
});