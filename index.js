//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express  from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
 res.sendFile(__dirname+"/public/index.html");
});

var userIsAuthorised=false;

function passwordCheck(req,res,next){
    var password= req.body["password"];
    if(password==="ILoveProgramming")
    {
        userIsAuthorised=true;
    }
next();
};

app.use(passwordCheck);


app.post("/check",(req,res)=>{ 
 
   
    if(userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html");
        console.log("Your secret has been revealed");
    }
    else{
    res.sendFile(__dirname+"/public/index.html")
    }
});

app.get("/",(req,res)=>{

});




app.listen(port,()=>{console.log(`Server is running on port ${port}`)});